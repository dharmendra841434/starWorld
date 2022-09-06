import { useRouter } from "next/router";
import React, { useState } from "react";
import { blogData } from "../../usefullData/blogData";

const Dynamic = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const singleBlog = blogData.filter((item) => item.id == slug);
  console.log(singleBlog, "blog");
  return (
    <>
      <div>
        <div className=" mt-20 lg:mx-44 mx-2 ">
          <h3 className=" py-5 text-4xl text-gray-800 font-bold">
            {singleBlog[0].title}
          </h3>
          <img
            src={singleBlog[0].image}
            className=" lg:max-w-xl lg:max-h-fit lg:object-cover "
            alt="single-blog"
          />
          {/* <div className=" py-4 flex items-center">
            <h2 className=" text-gray-800 text-2xl uppercase">
              <ReactMarkdown children="">
                {singleBlog.description.slice(0, 1)}
              </ReactMarkdown>
            </h2>
            <h2 className="  tracking-wider">
              <ReactMarkdown children="sd">
                {singleBlog.description.slice(1)}
              </ReactMarkdown>
            </h2>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Dynamic;

/* export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/blogs`);
  const posts = await res.data.data;
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}
export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/blogs/${params.slug}`
  );
  const data = await res.data;
  return {
    props: { data },
  };
} */
