import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [pages, setPages] = useState(9);
  useEffect(() => {
    fetchData();
  }, [pages]);
  const fetchData = async () => {
    const res1 = await fetch(
      `https://dev.to/api/articles/latest?per_page=${pages}`
    );
    const data1 = await res1.json();
    setBlogs(data1);
  };
  const handleNext = () => {
    setPages(pages + 3);
  };
  return (
    <div>
      <h1>all blog post</h1>
      <div className="grid grid-cols-3">
        {blogs.map((blog, i) => (
          <Link href={"/detail/" + blog.id}>
            <div className="border flex flex-col">
              <img src={blog.cover_image} className="" />
              <div>
                <span>{blog?.type_of}</span>
                <h1>{blog.title}</h1>
                <div>
                  <img
                    src={blog.user.profile_image}
                    className="w-[100px] h-[100px] rounded-full"
                  />

                  <p>{blog.user.name}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="bg-green-400 border-2 h-8 w-32 hover:bg-green-600 mx-auto flex justify-center "
      >
        Load More
      </button>
    </div>
  );
};
export default Blog;
// export async function getStaticProps() {
//   const res1 = await fetch(
//     `https://dev.to/api/articles/latest?per_page=${pages}`
//   );
//   const blogs = await res1.json();
//   return {
//     props: {
//       blogs,
//     },
//   };
// }
