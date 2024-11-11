import React from "react";
import "./Blog.css";
import blogpost1 from "../images/blogpost1.svg";
import { MdArrowOutward } from "react-icons/md";

const Blog = () => {
  return (
    <div className="section-blog">
      <div className="blog-1--div">
        <div className="blog-item-top">
          <p>Our blog</p>
          <button>View all post</button>
        </div>
        <h2>Lastest blog posts</h2>
        <p>
          Tool and strategies modern teams need to help their companies grow.
        </p>
      </div>

      <div className="section-blog-post--container">
        <div className="blog-post-1--div">
          <figure>
            <img src={blogpost1} alt="blog post 1" />
          </figure>
          <p>Design</p>
          <div className="heading-uparrow--container">
            <h3>UX review presentations</h3>
            <MdArrowOutward size={20} />
          </div>
          <p>
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>

        <div className="blog-post-1--div">
          <figure>
            <img src={blogpost1} alt="blog post 1" />
          </figure>
          <p>Design</p>
          <div className="heading-uparrow--container">
            <h3>UX review presentations</h3>
            <MdArrowOutward size={20} />
          </div>
          <p>
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>

        <div className="blog-post-1--div">
          <figure>
            <img src={blogpost1} alt="blog post 1" />
          </figure>
          <p>Design</p>
          <div className="heading-uparrow--container">
            <h3>UX review presentations</h3>
            <MdArrowOutward size={20} />
          </div>
          <p>
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
