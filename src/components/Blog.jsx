import React, { useState, useEffect } from "react";
import {ChevronRight} from "lucide-react";

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
                  posts(first: 3) {
                    edges {
                      node {
                        title
                        brief
                        url
                        tags {
                            name
                          }
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 " data-aos="fade-right" data-aos-duration="800" data-aos-offset="200">
                {posts.map((post, index) => (
                    <div key={index} className="post-card border-2 border-neutral-300 dark:border-neutral-700 shadow-lg rounded-lg overflow-hidden ">
                        <img src={post.coverImage.url} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 dark:text-lime-200 text-neutral-600">{post.title}</h3>
                            <div className="mb-4">
                                {post.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="inline-block border-[1px] dark:border-lime-200 border-lime-700 dark:text-lime-100 text-lime-600 rounded-full px-3 py-1 text-[.7em] font-semibold mr-2">
                                        #{tag.name}
                                    </span>
                                ))}
                            </div>
                            <p className="mb-8 dark:text-neutral-300 text-neutral-500 text-sm">{post.brief}</p>
                            
                            <a href={post.url} className="hover:bg-lime-400 hover:text-neutral-900 font-medium hover:px-8 rounded-md dark:border-[1px] border-[1.5px] border-neutral-800 dark:border-neutral-200 hover:border-transparent transition-all ease-in-out duration-300 dark:text-lime-400 text-lime-700 p-2 flex items-center w-fit group" target="_blank">
                                Leer más <ChevronRight  className=" ml-2 hidden group-hover:inline-flex " />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
