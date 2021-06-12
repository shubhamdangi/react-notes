import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

//useEffect practice

function Comp2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idb, setIdbb] = useState(1);

  function handleclick() {
    setIdbb(id);
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idb}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idb]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handleclick}>search</button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Comp2;
