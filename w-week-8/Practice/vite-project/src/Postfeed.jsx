import PostsDynamic from "./components/PostsDynamic";

const Post = () => {
  return (
    <>
      <div>Post</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PostsDynamic />
      </div>
    </>
  );
};

export default Post;
