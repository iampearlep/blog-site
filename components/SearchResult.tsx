"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Posts } from "@/interface";
import { client } from "@/app/lib/sanity.client";
import Card from "./Card";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const posts =
          await client.fetch(`*[_type == "post" && title match "*${query}*"]{
                _id, 
                title,
                excerpt,
                description,
                date,
                "slug": slug.current,
                "category": category -> name,
                "coverImage": coverImage.asset -> url,
            }`);
       // console.log(posts);
          setPosts(posts);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchPosts();
    }
  }, [query]);

  return (
    <div className="px-6 py-5">
      {isLoading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>Error fetching posts: {error.message}</p>
      ) : posts.length === 0 ? (
        <p>No posts found for your search.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
           {posts.map((post) => {
            return(
                <Card key={post._id} data={post} />
            )
           })}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
