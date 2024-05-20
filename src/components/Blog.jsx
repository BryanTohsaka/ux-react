
import React, { useState, useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://gql.hashnode.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query Publication {
                publication(host: "bryan-tohsaka.hashnode.dev") {
                  isTeam
                  title
                  posts(first: 10) {
                    edges {
                      node {
                        title
                        brief
                        url
                        coverImage {
                          url
                        }
                      }
                    }
                  }
                }
              }
            `,
          }),
        });
        const result = await response.json();
        setPosts(result.data.publication.posts.edges.map((edge) => edge.node));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="w-full h-fit mb-36 px-10 lg:px-28">
      <h2 className="uppercase text-[4em] lg:text-[10em] font-bold text-neutral-200 dark:text-white/10 text-left " data-aos="zoom-out-up" data-aos-duration="800" data-aos-offset="200">
          Blog
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <div key={index} className="post-card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.coverImage.url} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.brief}</p>
              <a href={post.url} className="text-blue-500 hover:underline">
                Leer más
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
