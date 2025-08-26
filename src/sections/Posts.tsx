"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "./posts.css";
import PostItemOne from "@/components/PostItemOne";

const Posts = () => {
  //const router = useRouter();

  const [items, setItems] = useState<any | []>([]);

  const getItemsData = async () => {
    fetch(`/api/postitems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getItemsData();
  }, []);

  return (
    <section id="posts" className="posts">
      <div className="container" data-aos="fade-up">
        {items &&
          items.length > 0 &&
          items.map(
            (item: {
              item: {
                _id: string;
                img: string;
                category: string;
                date: string;
                title: string;
                brief: string;
                avatar: string;
                author: string;
              };
            }) => <PostItemOne key={item._id} large={false} item={item} />
          )}
      </div>
    </section>
  );
};

export default Posts;
