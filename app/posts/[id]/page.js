import { use } from "react";

async function getPosts(id) {
  let post = await fetch(`https://dummyjson.com/posts/${id}`);

  return post.json();
}

export default function Page({ params }) {
  console.log(params)
  let id = params.id;
  let post = use(getPosts(id));
  console.log(post)

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
