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

export default function AddEditBlogsAndPost() {
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
  const [isLoading, setLoading] = useState(false);

  const onSubmit = (data) => handleSave(data);

  const handleSave = async (dt) => {
    try {
      const postData = { title: dt?.title, body: dt?.content };
      const postParameters = {
        url: "https://blogs-fastapi-backend.onrender.com/posts",
        method: "POST",
        data: postData,
      };
      const res: any = await axios(postParameters);
      if (res?.data?.response_code === 200) {
        commonToasts.successToast(res?.data?.response_message);
        reset();
      } else {
        commonToasts.errorToast(res?.data?.response_message);
      }
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
                <span className="fs-4 card-title mb-4">
                  {"Create New Blog ..."}
                </span>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input
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
                        name="content"
                        placeholder="Write your content ..."
                        rows={10}
                        cols={30}
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
              <div className="d-flex justify-content-center pt-20">
                <button
                  type={"submit"}
                  className="btn btn-outline-info btn-width "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
