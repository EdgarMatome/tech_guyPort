import React from "react";
import allBlogs from "../components/allBlogs";
import { Title } from "../components/Title";


export const BlogsPage = () => {
    return (
        <div>
            <div className="b-title">
                <Title title={"Blogs"} span={"Blogs"}/>
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                                    <div className="blog_content">
                                        <img src={blog.image} alt=""/>
                                    </div>
                                    <a href={blog.link} target="_blank" className="blog-link">
                                            {blog.title}
                                        </a>
                                        <div className="date-con">
                                            <p>{blog.date}</p>
                                        </div>
                                </div>
                    })
                }
            </div>
        </div>
    )
}

export default BlogsPage;
