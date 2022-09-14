import axios from "axios";
import React, { useState } from "react";
import { formateDate } from "../../utils/helper";

const Dynamic = (props) => {
  return (
    <>
      <div>
        <div className=" mt-10 mx-3  lg:mx-20 ">
          <h3 className=" py-2 text-3xl lg:text-4xl text-gray-800 font-bold">
            {props.data.title}
          </h3>
          <div className=" flex flex-row">
            <span className=" bg-blue-200  w-fit rounded-md text-[12px] px-2 py-1 text-appBlue font-semibold">
              {props.data.category}
            </span>
            <h4 className=" text-sm text-lightGray ml-4">
              {formateDate(props.data.createdAt)}
            </h4>
          </div>
          <img
            src={props.data.images.url}
            className=" w-full h-96 rounded-md mt-3"
            alt="single-blog"
          />
          <div className=" flex flex-row mt-10">
            <p className="  text-2xl mb-3 lg:ml-2 font-semibold">
              {props.data.description.charAt(0)}
            </p>
            <p className="  tracking-wider mt-1.5 text-justify">
              {props.data.description.slice(1)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dynamic;

export async function getStaticPaths() {
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
}
