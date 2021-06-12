import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchLoading() {
  const [loading, setLoadding] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoadding(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoadding(false);
        setPost();
        setError("Something went wrong try again..");
      });
  }, []);

  return (
    <div>
      {loading ? <h2>'loading...'</h2> : <h2>{post.title}</h2>} <br />
      {error ? error : null}
    </div>
  );
}

export default FetchLoading;
