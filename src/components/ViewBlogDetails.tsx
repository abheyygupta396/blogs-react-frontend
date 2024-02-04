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
  title: yup
    .string()
    .required("Title is required")
    .min(1, "Title should be alteast 1 characters")
    .max(50, "Title should not be more than 50 characters"),
  content: yup
    .string()
    .required("Content is required")
    .min(1, "Title should be alteast 1 characters")
    .max(2000, "Title should not be more than 2000 characters"),
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

  return (
    <React.Fragment>
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4">
          <form autoComplete="off">
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
                  <span className="fs-4 card-title mb-4">{"Blog Details"}</span>
                </div>
                <span
                  title="edit post"
                  onClick={() => navigate(`/posts/edit?id=${postId}`)}
                >
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
                        disabled={true}
                        readOnly={true}
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
                        disabled={true}
                        readOnly={true}
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
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
