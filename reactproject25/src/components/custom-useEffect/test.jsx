import React from "react";
import useFetch from "./index";
export default function Test() {
  const { data, pending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  return (
    <div>
      {pending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
