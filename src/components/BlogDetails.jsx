import { useParams } from "react-router-dom";
import { useGetBlogsByIdQuery } from "../redux/features/api/baseApi";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetBlogsByIdQuery(id);
  console.log({ post });
  if (isLoading) {
    return (
      <div>
        <h2
          style={{
            color: "white",
          }}
        >
          loading...
        </h2>
      </div>
    );
  }
  return (
    <div>
      <h1
        style={{
          color: "white",
        }}
      >
        Blog Details
      </h1>
      {post && (
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#6063",
            padding: "20px 10px",
            marginBottom: "20px",
            borderRadius: "30px",
            textAlign: "left",
            paddingLeft: "50px",
            boxShadow: "1px 1px 5px 3px #edfc",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              fontWeight: "500",
            }}
          >
            {post.id}
          </p>
          <div
            style={{
              marginTop: "-20px",
              width: "15px",
              height: "5px",
              backgroundColor: "#896399",
            }}
          ></div>
          <h2
            style={{
              textTransform: "capitalize",
            }}
          >
            {post.title}
          </h2>
          <p>{post.body}</p>
          <hr />
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
