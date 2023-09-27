import { Link } from "react-router-dom";
import "./App.css";
import { useGetBlogsQuery } from "./redux/features/api/baseApi";

function App() {
  const { status, data: posts } = useGetBlogsQuery();
  console.log({ status, posts });
  return (
    <div>
      <h2>Blogs</h2>
      {posts?.map((post) => (
        <>
          <Link to={`/blog/${post.id}`}>
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
              key={post.id}
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
          </Link>
        </>
      ))}
    </div>
  );
}

export default App;
