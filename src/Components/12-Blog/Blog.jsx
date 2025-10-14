// Blog.jsx
import React, { useState, useMemo, useRef } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FooterSection from "./../5-FooterSection/FooterSection";
import { Sliders } from "react-feather"; // Filter icon

// Posts Data
const posts = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: "Fashion Trends",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean...",
  image: "/img/img2.png",
  author:
    i % 3 === 0 ? "Oliver Bennett" : i % 3 === 1 ? "John Smith" : "Alex Brown",
  date:
    i % 3 === 0 ? "18Jan2025" : i % 3 === 1 ? "July 10, 2025" : "July 9, 2025",
  category1: "18",
  category2: "APR",
  category: i % 2 === 0 ? "FASHION" : "MEN", // لكل بوست كاتيجوري للتجربة
}));

// Categories & Tags
const categories = [
  "FASHION",
  "MEN",
  "TRENDS",
  "ACCWSSORISE",
  "Cable Ready",
  "Available now",
  "College",
  "Corporate",
  "Elevator",
  "Extra Storage",
  "High speed internet",
  "Garage",
  "Pet allowed",
];
const tags = [...categories];

const Blog = () => {
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const inputRef = useRef(null);
  // فلترة البوستات حسب البحث أو الفلتر
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter = activeFilter
        ? post.category.toLowerCase() === activeFilter.toLowerCase()
        : true;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <section className="blog-section">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="overlay"></div>

        {/* Breadcrumb */}
        <nav className="hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="bc-home">
            HOME
          </Link>
          <span className="bc-sep">
            <ArrowForwardIosIcon fontSize="12px" />
          </span>
          <span className="bc-current">BLOGS</span>
        </nav>

        {/* Hero Title */}
        <div className="hero-inner">
          <h1 className="hero-title">BLOGS</h1>
        </div>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <span
          className="search-icon"
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          <SearchIcon fontSize="small" />
        </span>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search..."
          aria-label="Search posts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <span className="search-icon2" onClick={() => setSearchQuery("")}>
          <CloseIcon fontSize="small" />
        </span>
      </div>

      {/* Main Container */}
      <div className="blog-container">
        {/* Blog Content */}
        <div className="blog-content">
          {/* Section Heading */}
          <h2 className="section-title">Our Featured Posts</h2>

          {/* Featured Post */}
          <div className="featured">
            <img src="/img/img1.png" alt="Featured" className="featured-img" />
            <div className="featured-content">
              <h3 className="featured-title">
                Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog
              </h3>
              <p className="featured-excerpt">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam.
              </p>
              <div className="post-meta">
                <img
                  src="/img/img3.jpg"
                  alt="Author avatar"
                  className="avatar"
                />
                <span>Oliver Bennett</span>•<span>18 Jan 2022</span>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="main-content ">
            <div className="post-grid">
              {filteredPosts.length > 0 ? (
                filteredPosts
                  .slice(0, showMore ? filteredPosts.length : 12)
                  .map((post) => (
                    <Link
                      to={`/post/${post.id}`}
                      key={post.id}
                      className="post-card"
                    >
                      <div className="post-image-wrap">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="post-image"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="badge">
                          {post.category1}
                          <br />
                          {post.category2}
                        </span>
                      </div>

                      <div className="post-body">
                        <div className="post-meta card">
                          <img
                            src="/img/img3.jpg"
                            alt="Author"
                            className="avatar-sm"
                          />
                          <span>{post.author}</span>

                          <span>{post.date}</span>
                        </div>
                        <h4>{post.title}</h4>
                        <p>{post.excerpt}</p>
                      </div>
                    </Link>
                  ))
              ) : (
                <p>No posts found.</p>
              )}
            </div>
            {/* Sidebar */}
            <aside className="sidebar">
              {/* Filter Header */}
              <div className="filter-header">
                <h4 className="filter-title">FILTER</h4>
                <Sliders className="filter-icon" size={16} />
              </div>
              <div className="filter-container">
                {/* Category Section */}
                <div className="filter-section">
                  <h5 className="filter-label">CATEGORY</h5>
                  <div className="filter-options">
                    {categories.map((item, index) => (
                      <span
                        key={index}
                        className={`filter-badge ${
                          activeFilter === item ? "active" : ""
                        }`}
                        onClick={() =>
                          setActiveFilter(activeFilter === item ? "" : item)
                        }
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tag Section */}
                <div className="filter-section">
                  <h5 className="filter-label">TAG</h5>
                  <div className="filter-options">
                    {tags.map((item, index) => (
                      <span
                        key={index}
                        className={`filter-badge ${
                          activeFilter === item ? "active" : ""
                        }`}
                        onClick={() =>
                          setActiveFilter(activeFilter === item ? "" : item)
                        }
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
          {/* Load More Button */}
          {filteredPosts.length > 12 && (
            <div className="load-more">
              <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "LESS MORE" : "LOAD MORE"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </section>
  );
};

export default Blog;
