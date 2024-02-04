import React, { useState, useRef, useEffect } from "react";
import Post from "./PostCard";
import { useNavigate } from "react-router";
import axios from "axios";
import commonToasts from "../common/commonToast";
import ShimmerLoaderCard from "../common/commonShimmerLoader";
import DataNotFound from "./NotFound";

const DisplayAllPosts = () => {
  const navigate = useNavigate();
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let mount = true;
    if (mount) {
      getListOfPosts();
    }
    return () => {
      mount = false;
    };
  }, []);

  //!  get list of all blogs:
  const getListOfPosts = async () => {
    try {
      setLoading(true);
      const parameters = {
        url: "https://blogs-fastapi-backend.onrender.com/posts",
        method: "GET",
      };
      const res: any = await axios(parameters);
      if (res?.data?.response_code === 200) {
        setAllPosts(res?.data?.response_data);
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

  //! handle Delete post
  const handleDeletePost = async (id) => {
    if (!id) {
      commonToasts.errorToast("Id is not present");
      return;
    }
    try {
      const postParameters = {
        url: `https://blogs-fastapi-backend.onrender.com/posts/${id}`,
        method: "DELETE",
      };
      const res: any = await axios(postParameters);
      if (res?.data?.response_code === 200) {
        commonToasts.successToast(res?.data?.response_message);
      } else {
        commonToasts.errorToast(res?.data?.response_message);
      }
      getListOfPosts();
    } catch (error) {
      console.error("Error fetching data:", error);
      commonToasts.errorToast("Something went wrong");
      return;
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex flex-row justify-content-between px-4 py-5">
        <span className="fs-2 text-light">Globally Trending Blogs ...</span>
        <button
          type="button"
          className="btn btn-outline-light create-post"
          onClick={() => navigate("/new-post")}
        >
          Create New Blog
        </button>
      </div>
      <div className="posts-container">
        {isLoading
          ? Array.from({ length: 6 })?.map((_, index) => (
              <ShimmerLoaderCard key={index} />
            ))
          : allPosts &&
            allPosts?.length > 0 &&
            allPosts?.map((eachPost, idx) => {
              return (
                <Post
                  id={eachPost.id}
                  key={eachPost.id + idx}
                  title={eachPost.title}
                  content={eachPost.body}
                  handleDeletePost={handleDeletePost}
                />
              );
            })}
      </div>
      {Boolean(!isLoading && allPosts?.length === 0) && (
        <div className="d-flex justify-content-center align-items-center vh-90">
          <DataNotFound />
        </div>
      )}
    </React.Fragment>
  );
};
export default DisplayAllPosts;
