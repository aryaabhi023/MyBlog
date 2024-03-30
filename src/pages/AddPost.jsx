import React from "react";
import { Container, PostForm } from "../Component";
import { useSelector } from "react-redux";

function AddPost() {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
