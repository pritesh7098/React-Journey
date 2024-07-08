import React from "react";
import { container, PostForm } from "../components";
import Container from "./../components/containers/Container";
function AddPost() {
  return (
    <div className="py-8">
      <container>
        <PostForm />
      </container>
    </div>
  );
}

export default AddPost;
