import axios from "axios";
import commonToasts from "../common/commonToast";
import React from "react";
import { useNavigate } from "react-router";

const Post = ({ id, title, content, handleDeletePost }) => {
  const navigate = useNavigate();
  const redirectToEditPost = (id) => navigate(`/posts/edit?id=${id}`);

  return (
    <React.Fragment>
      <div className="container mb-4 mt-2 d-flex justify-content-center">
        <div className="blog-card px-1 py-4">
          <section style={{ padding: "0 20px" }} key={id}>
            <div className="d-flex justify-content-between">
              <h4>{title}</h4>
              <div className="d-flex flex-row gap-2">
                <span
                  title="View Blog Details"
                  onClick={() => navigate(`/posts/?id=${id}`)}
                >
                  <i
                    className="fa fa-eye icon-style fa-lg text-success"
                    aria-hidden="true"
                  ></i>
                </span>
                <span title="Delete Blog" onClick={() => handleDeletePost(id)}>
                  <i
                    className="fa fa-trash-o icon-style fa-lg text-danger"
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
            <hr className="new1"></hr>
            <p className="multiline-ellipsis">{content}</p>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Post;
