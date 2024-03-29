import React from "react";
import { Container, PostForm } from "../Component";
import { useSelector } from "react-redux";

function AddPost() {
  const userData = useSelector((state) => state.auth.userData);
  if (userData == null) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1
                className="text-2xl
                          font-bold hover: text-gray-500"
              >
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
