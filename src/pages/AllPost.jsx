import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../Component";
import appwriteSevice from "../appwrite/config";
import { useSelector } from "react-redux";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteSevice.getPosts([]).then((post) => {
      if (post) setPosts(post.documents);
    });
  }, []);

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
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              {console.log(post)}
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
