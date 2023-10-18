import Card from "@/components/Card";
import { useState, useEffect } from "react";
import Cards from "@/components/Card/Cards";

export default function Home({ blogs, recentblogs }) {
  const [pages, setPages] = useState(9);
  const router = useRouter();
  const myRef = useRef(null);

  const [blogList, setBlogList] = useState(blogs);
  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  });
  const searchBlog = (searchTitle) => {
    const findBlog = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setBlogList(findBlog);
  };

  console.log(recentblogs);
  const handleNext = () => {
    console.log("daraagiin huudas darlaa");
    // setPages(pages + 3);
  };
  return (
    <Layout setSearchTitle={searchBlog}>
      <main className={`flex min-h-screen flex-col items-center mx-auto p-24`}>
        <section ref={myRef}>
          {
            <>
              <h1>Recent Blogs</h1>
              <h2 className=" text-[#181A2A] font-semibold text-[24px] ">
                Blog posts
              </h2>
              <div className="grid grid-cols-3 gap-3 ">
                {blogList.map((blog, i) => (
                  <Card key={i} blog={blog} />
                ))}
                List
              </div>
              <div className="flex justify-center my-4">
                <button
                  onClick={() => {
                    console.log("Clicked");
                    const pg = Number(page) + 3;
                    router.replace("?page=" + pg);
                  }}
                  className="border px-5 py-3 rounded-[6px] hover:bg-green-600 hover:text-white active:bg-green-900 active:text-white"
                >
                  Load More ...
                </button>
              </div>
            </>
          }
        </section>
      </main>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://dev.to/api/articles?per_page=9`);
//   const blogs = await res.json();
//   const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
//   const recentblogs = await res1.json();
//   return {
//     props: {
//       blogs,
//       recentblogs,
//     },
//     revalidate: 10, //second
//   };
// }

// export async function getStaticProps() {
//   const res = await fetch(`https://dev.to/api/articles?per_page=9`);
//   const blogs = await res.json();
//   const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
//   const recentblogs = await res1.json();
//   return {
//     props: {
//       blogs,
//       recentblogs,
//     },
//     revalidate: 10, //second
//   };
// }

export async function getServerSideProps(context) {
  let { page } = context.query;
  page = page || 3;
  const res = await fetch(`https://dev.to/api/articles?per_page=${page}`);
  const blogs = await res.json();
  console.log("Server Side Work");

  return {
    props: {
      blogs,
      page,
    },
  };
}
