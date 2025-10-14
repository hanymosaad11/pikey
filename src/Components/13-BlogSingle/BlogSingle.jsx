import React from "react";
import { Link } from "react-router-dom";
import "./BlogSingle.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import FooterSection from "./../5-FooterSection/FooterSection";
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
    image: "/img/img2.png",
    author: "Oliver Bennett",
    date: "8 Jun 2022",
    avatar: "/img/img3.jpg",
    slug: "fashion-trends",
    category1: "18",
    category2: "APR",
  },
  {
    id: 2,
    title: "FASHION TRENDS",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima ex tenetur libero.",
    image: "/img/img2.png",
    author: "Oliver Bennett",
    date: "8 Jun 2022",
    avatar: "/img/img3.jpg",
    slug: "fashion-trends-2",
    category1: "18",
    category2: "APR",
  },
  {
    id: 3,
    title: "FASHION TRENDS",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima ex tenetur libero.",
    image: "/img/img2.png",
    author: "Oliver Bennett",
    date: "8 Jun 2022",
    avatar: "/img/img3.jpg",
    slug: "fashion-trends-3",
    category1: "18",
    category2: "APR",
  },
];

export default function BlogSingle() {
  return (
    <div>
      <section className="blog-single-section ">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="bc-link">
            HOME
          </Link>
          <span className="sep">
            {" "}
            <ArrowForwardIosIcon fontSize="6px" />
          </span>
          <Link to="/blog" className="bc-link">
            BLOG
          </Link>
          <span className="sep">
            <ArrowForwardIosIcon fontSize="6px" />
          </span>
          <span className="current">FASHION TRENDS</span>
        </nav>
        <div className="container">
          {/* Title */}
          <h1 className="single-title">FASHION TRENDS</h1>

          {/* Featured image */}
          <div className="single-image">
            <img src="/img/img2.png" alt="Fashion Trends" loading="lazy" />
          </div>

          {/* Content */}
          <div className="single-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
              placerat mi. Etiam non tellus sem. Aenean pretium convallis lorem,
              sitamet dapibus ante mollis a. Integer bibendum interdum sem, eget
              volutpat purus pulvinar in. Sed tristique augue vitae sagittis
              porta. Phasellus ullamcorper, dolor suscipit mattis viverra,
              sapien elit condimentum odio, ut imperdiet nisi risus sit amet
              ante. Sed sem lorem, laoreet et facilisis quis, tincidunt non
              lorem. Etiam tempus, dolor in sollicitudin faucibus, sem massa
              accumsan erat.
            </p>

            <p>
              “ Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model search for evolved over
              sometimes by accident, sometimes on purpose ”
            </p>

            <p className="disabold">
              Aenean lorem diam, venenatis nec venenatis id, adipiscing ac
              massa. Nam vel dui eget justo dictum pretium a rhoncus ipsum.
              Donec venenatis erat tincidunt nunc suscipit, sit amet bibendum
              lacus posuere. Sed scelerisque, dolor a pharetra sodales, mi augue
              consequat sapien, et interdum tellus leo et nunc. Nunc imperdiet
              eu libero ut imperdiet.
            </p>
          </div>

          {/* Share */}
          <div className="share-post">
            <h4 className="flex" style={{ gap: "10px" }}>
              {" "}
              <img src="/img/Symbol.svg" />
              SHARE THIS POST
            </h4>
            <div className="social-icons">
              <a href="#">
                <img src="/img/Link1.svg" alt="" />
              </a>
              <a href="#">
                <img src="/img/Link4.svg" alt="" />
              </a>
              <a href="#">
                <img src="/img/Link2.svg" alt="" />
              </a>
              <a href="#">
                <img src="/img/Link3.svg" alt="" />
              </a>
            </div>
          </div>

          {/* Author */}
          <div>
            <h3 className="head-author">
              <PersonIcon style={{ color: "#9F1915" }} />
              author
            </h3>

            <div className="author-box">
              <img src="/img/img3.jpg" alt="Ahmed" className="author-avatar" />
              <div className="author-info">
                <h5 className="author-name">AHMED</h5>
                <p className="author-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  vero nesciunt error, provident exercitationem mollitia...
                </p>
              </div>
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
                      <span className="badge">
                        {p.category1}
                        <br />
                        {p.category2}
                      </span>
                    </div>
                    <div className="info">
                      <div className="meta-row">
                        <img
                          src={p.avatar}
                          alt={p.author}
                          className="avatar-sm"
                        />
                        <span className="meta">
                          {p.author} {p.date}
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
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
