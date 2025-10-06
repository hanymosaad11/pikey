import React, { useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const [showMore, setShowMore] = useState(false);

  const posts = [
    {
      id: 1,
      title: "10 Summer Outfit Ideas",
      excerpt: "Get inspired with these fresh summer looks.",
      image: "/img/img1.png",
      author: "Jane Doe",
      date: "July 12, 2025",
      category: "Fashion",
    },
    {
      id: 2,
      title: "5 Tips for Better Photography",
      excerpt: "Improve your skills with these pro tips.",
      image: "/img/img2.png",
      author: "John Smith",
      date: "July 10, 2025",
      category: "Photography",
    },
    {
      id: 3,
      title: "Travel Essentials Checklist",
      excerpt: "Don’t forget these must-have items.",
      image: "/img/img3.png",
      author: "Alex Brown",
      date: "July 9, 2025",
      category: "Travel",
    },
    // more posts...
  ];

  return (
    <section className="blog-section">
      {/* Hero */}
      <div className="blog-hero">
        <div className="overlay"></div>
        <div className="hero-inner">
          <div className="hero-breadcrumb">HOME / BLOG</div>
          <h1 className="hero-title">BLOG</h1>
        </div>
      </div>

      {/* Search */}
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="search" placeholder="Search..." aria-label="Search posts" />
      </div>

      <div className="blog-container">
        <div className="blog-content">
          {/* Featured Heading */}
          <h2 className="section-title">OUR FEATURED POSTS</h2>

          {/* Featured Post */}
          <div className="featured">
            <img src="/img/img4.png" alt="Featured" className="featured-img" />
            <div className="featured-content">
              <h3 className="featured-title">
                Discover the Art of Minimalist Living
              </h3>
              <p className="featured-excerpt">
                Simplify your life with these minimalist tips and lifestyle hacks.
              </p>
              <div className="post-meta">
                <img src="/img/author1.png" alt="Author avatar" className="avatar"/>
                <span>Sarah Lee</span> | <span>July 8, 2025</span>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="post-grid">
            {posts
              .slice(0, showMore ? posts.length : 6)
              .map((post) => (
                <Link to={`/post/${post.id}`} key={post.id} className="post-card">
                  <div className="post-image-wrap">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="post-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="badge">{post.category}</span>
                  </div>
                  <div className="post-body">
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <img src="/img/author1.png" alt="Author" className="avatar"/>
                      <span>{post.author}</span> | <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Load More */}
          <div className="load-more">
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? "LESS MORE" : "LOAD MORE"}
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="filter-box">
            <h3>Categories</h3>
            <ul>
              <li><button>Fashion (12)</button></li>
              <li><button>Photography (8)</button></li>
              <li><button>Travel (5)</button></li>
            </ul>
          </div>
          <div className="filter-box">
            <h3>Tags</h3>
            <div className="tags">
              <button>#summer</button>
              <button>#style</button>
              <button>#minimal</button>
              <button>#travel</button>
              <button>#lifestyle</button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Blog;
