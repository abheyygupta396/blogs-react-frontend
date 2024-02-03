import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import DisplayAllPosts from "./components/DisplayAllPosts";
import AddEditBlogsAndPost from "./components/AddEditBlog";
import ViewBlogDetails from "./components/ViewBlogDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DisplayAllPosts />} />
      <Route path="/posts" element={<ViewBlogDetails />} />
      <Route path="/new-post" element={<AddEditBlogsAndPost />} />
      <Route path="/posts/edit" element={<AddEditBlogsAndPost />} />
      <Route path="*" element={<></>} />
    </Routes>
  );
};

export default App;
