import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "../assets/custom.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import commonToasts from "../common/commonToast";

export const AddEditBlogsSchema = yup.object().shape({
  id: yup.string(),
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
});

export default function ViewBlogDetails() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(AddEditBlogsSchema),
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("id");
  const [isLoading, setLoading] = useState(false);
  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    let mount = true;
    if (mount && postId) {
      getPostsDetailsById();
    }
    return () => {
      mount = false;
    };
  }, []);

  const getPostsDetailsById = async () => {
    if (!postId) {
      commonToasts.errorToast("Id not found");
      return;
    }
    try {
      setLoading(true);
      const parameters = {
        url: `https://blogs-fastapi-backend.onrender.com/posts/${postId}`,
        method: "GET",
      };

      const res: any = await axios(parameters);
      if (res?.data?.response_code === 200) {
        reset({
          ...res?.data?.response_data[0],
          content: res?.data?.response_data[0]?.body,
        });
      } else {
        commonToasts.errorToast(res?.data?.response_message);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      commonToasts.errorToast("Something went wrong");
      return;
    }
  };

  const onSubmit = (data) => handleEdit(data);

  const handleEdit = async (dt) => {
    if (!postId) {
      return;
    }
    try {
      const reqBody = {
        title: dt?.title,
        body: dt?.content,
      };
      const putParameters = {
        url: `https://blogs-fastapi-backend.onrender.com/posts/${postId}`,
        method: "PUT",
        data: reqBody,
      };
      const res: any = await axios(putParameters);
      if (res?.data?.response_code === 200) {
        commonToasts.successToast(res?.data?.response_message);
      } else {
        commonToasts.errorToast(res?.data?.response_message);
      }
      navigate(-1);
    } catch (error) {
      console.error("Error fetching data:", error);
      commonToasts.errorToast("Something went wrong");
      return;
    }
  };

  return (
    <React.Fragment>
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4">
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
              <div className="d-flex justify-content-between flex-row">
                <div className="d-flex flex-row gap-3">
                  <span
                    className="mt-6"
                    title="Back"
                    onClick={() => navigate("/")}
                  >
                    <i
                      className="fa fa-angle-double-left icon-style fa-lg"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span className="fs-4 card-title mb-4">{isEdit ? 'Edit Blog Details' : "Blog Details"}</span>
                </div>
                <span title="edit post" onClick={() => setEdit(!isEdit)}>
                  <i
                    className="fa fa-pencil-square-o icon-style fa-lg text-info"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        disabled={isEdit ? false : true}
                        readOnly={isEdit ? false : true}
                        id="title"
                        name="title"
                        placeholder="Enter your blog title"
                        type="text"
                        className={`form-control ${
                          errors?.title && "border border-danger"
                        }`}
                        {...register("title")}
                      />
                    </div>
                    {errors?.title && (
                      <span className="text-danger">
                        {(errors?.title as any)?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <div className="input-group">
                      <textarea
                        id="content"
                        disabled={isEdit ? false : true}
                        readOnly={isEdit ? false : true}
                        name="content"
                        placeholder="Write your content ..."
                        rows={16}
                        cols={35}
                        className={`form-control ${
                          errors?.content && "border border-danger"
                        }`}
                        {...register("content")}
                      />
                    </div>
                    {errors?.content && (
                      <span className="text-danger">
                        {(errors?.content as any)?.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {isEdit && (
                <div className="d-flex justify-content-center pt-20">
                  <button
                    type={"submit"}
                    className="btn btn-outline-info btn-width "
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
