import React from "react";
import { Link } from "react-router-dom";
import "./BlogSingle.css";

/*
  BlogSingle.jsx
  -------------------
  - Blog details page
  - Float-based layout
  - Breadcrumb > Title > Image > Content
  - Share section + Author box
  - Related Blogs grid (3 posts)
*/

const relatedPosts = [
  {
    id: 1,
    title: "FASHION TRENDS",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima ex tenetur libero.",
    image: "/img/img3.png",
    author: "Oliver Bennett",
    date: "8 Jun 2022",
    avatar: "/img/avatar1.png",
    slug: "fashion-trends",
  },
  {
    id: 2,
    title: "FASHION TRENDS",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima ex tenetur libero.",
    image: "/img/img3.png",
    author: "Oliver Bennett",
    date: "8 Jun 2022",
    avatar: "/img/avatar1.png",
    slug: "fashion-trends-2",
  },
  {
    id: 3,
    title: "FASHION TRENDS",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima ex tenetur libero.",
    image: "/img/img3.png",
    author: "Oliver Bennett",
    date: "8 Jun 2022",
    avatar: "/img/avatar1.png",
    slug: "fashion-trends-3",
  },
];

export default function BlogSingle() {
  return (
    <section className="blog-single-section">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/" className="bc-link">
          HOME
        </Link>
        <span className="sep">›</span>
        <Link to="/blog" className="bc-link">
          BLOG
        </Link>
        <span className="sep">›</span>
        <span className="current">FASHION TRENDS</span>
      </nav>

      {/* Title */}
      <h1 className="single-title">FASHION TRENDS</h1>

      {/* Featured image */}
      <div className="single-image">
        <img src="/img/img3.png" alt="Fashion Trends" loading="lazy" />
      </div>

      {/* Content */}
      <div className="single-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non
          placeat sit. Elitism non tellus sem. Aenean pretium convallis lorem,
          aliquam dapibus placerat...
        </p>

        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text...
        </p>

        <ul>
          <li>Many desktop publishing packages</li>
          <li>Web page editors now use Lorem Ipsum</li>
          <li>Lorem Ipsum has been the industry's standard dummy text</li>
        </ul>

        <p>
          Aenean lorem diam, venenatis nec venenatis id, adipiscing a massa.
          Etiam sed velit justo...
        </p>
      </div>

      {/* Share */}
      <div className="share-post">
        <h4>SHARE THIS POST</h4>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>

      {/* Author */}
      <div className="author-box">
        <img src="/img/avatar1.png" alt="Ahmed" className="author-avatar" />
        <div className="author-info">
          <h5 className="author-name">AHMED</h5>
          <p className="author-bio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero
            nesciunt error, provident exercitationem mollitia...
          </p>
        </div>
      </div>

      {/* Related Blogs */}
      <div className="related-blogs">
        <h3 className="related-heading">RELATED BLOGS</h3>
        <div className="related-grid clearfix">
          {relatedPosts.map((p) => (
            <article className="related-card" key={p.id}>
              <Link to={`/post/${p.slug}`} className="related-link">
                <div className="thumb">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="badge">{p.category || "Fashion"}</span>
                </div>
                <div className="info">
                  <div className="meta-row">
                    <img src={p.avatar} alt={p.author} className="avatar-sm" />
                    <span className="meta">
                      {p.author} • {p.date}
                    </span>
                  </div>
                  <h4 className="card-title">{p.title}</h4>
                  <p className="excerpt">{p.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
