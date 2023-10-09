import Card from "@/components/Card";
import { useState, useEffect } from "react";
import Cards from "@/components/Card/Cards";

export default function Home({ blogs }) {
  const [pages, setPages] = useState(9);

  // const fetchData = async () => {
  //   const res = await fetch(`https://dev.to/api/articles?per_page=${pages}`);
  //   const data = await res.json();
  //   setBlogs(data);

  // };

  // const fetchRecentData = async () => {
  //   const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
  //   const data1 = await res1.json();
  //   setRecentBlogs(data1);
  // };
  console.log(recentblogs);
  const handleNext = () => {
    console.log("daraagiin huudas darlaa");
    // setPages(pages + 3);
  };
  return (
    <main className={`flex min-h-screen flex-col items-center mx-auto p-24`}>
      <Cards
        midCard={recentblogs[0]}
        bigCard={recentblogs[1]}
        smallCards={[recentblogs[2], recentblogs[3]]}
      />
      <div>
        <h1 className="text-2xl my-[10px]">All Blog Post</h1>
        <div className="grid grid-cols-3">
          {blogs.map((blog, i) => (
            <Card key={i} blog={blog} />
          ))}
        </div>
        <div className="justify-center flex">
          <button
            onClick={handleNext}
            className="bg-green-400 border-2 h-8 w-32 hover:bg-green-600 "
          >
            Load More
          </button>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://dev.to/api/articles?per_page=9`);
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}