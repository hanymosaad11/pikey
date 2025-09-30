// src/components/Products/Products.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./Products.css";
import Header from "../0-header/Header";
import FooterSection from "../5-FooterSection/FooterSection";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
/**
 * Products page
 * - Multi-select categories (checkboxes), colors (multi), sizes (multi)
 * - Search live
 * - Price From / To
 * - Load More -> show all filtered items
 * - List / Grid toggle
 * - Clicking a color in sidebar changes displayed images (global), clicking the mini color on a card changes image only for that card
 *
 * All classes prefixed with products- to avoid collisions.
 */

const INITIAL_ITEMS_TO_SHOW = 9; // initial visible items (3 cols x 3 rows)

const SAMPLE_PRODUCTS = [
  // NOTE: replace image paths with your actual public images
  {
    id: 1,
    title: "The Cloud Relaxed Cardigan",
    price: 200,
    category: "T-Shirts",
    sizes: ["XS", "S", "M", "L"],
    colors: {
      black: "/img/teshrt.png",
      red: "/img/teshrt.png",
      blue: "/img/teshrt.png",
    },
    stock: 12,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 2,
    title: "The Cloud Relaxed Cardigan",
    price: 200,
    category: "T-Shirts",
    sizes: ["S", "M"],
    colors: {
      black: "/img/teshrt.png",
      brown: "/img/teshrt.png",
    },
    stock: 0,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 3,
    title: "The Cloud Relaxed Cardigan",
    price: 200,
    category: "T-Shirts",
    sizes: ["XS", "S", "M"],
    colors: {
      black: "/img/teshrt.png",
      red: "/img/teshrt.png",
      tan: "/img/teshrt.png",
    },
    stock: 14,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 4,
    title: "Everyday Classic Tee",
    price: 180,
    category: "Shirts",
    sizes: ["S", "M", "L"],
    colors: {
      black: "/img/teshrt.png",
      white: "/img/teshrt.png",
      red: "/img/teshrt.png",
    },
    stock: 6,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 5,
    title: "Comfy Oversized Tee",
    price: 220,
    category: "T-Shirts",
    sizes: ["L", "XL"],
    colors: {
      black: "/img/teshrt.png",
      blue: "/img/teshrt.png",
    },
    stock: 18,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 6,
    title: "Lightweight Jacket",
    price: 450,
    category: "Jackets",
    sizes: ["M", "L", "XL"],
    colors: {
      brown: "/img/teshrt.png",
      black: "/img/teshrt.png",
    },
    stock: 4,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 7,
    title: "Urban Sport Tee",
    price: 210,
    category: "T-Shirts",
    sizes: ["S", "M", "L"],
    colors: {
      black: "/img/teshrt.png",
      green: "/img/teshrt.png",
    },
    stock: 9,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 8,
    title: "Slim Fit Shirt",
    price: 320,
    category: "Shirts",
    sizes: ["M", "L", "XL"],
    colors: {
      white: "/img/teshrt.png",
      blue: "/img/teshrt.png",
    },
    stock: 2,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 9,
    title: "Weekend Hoodie",
    price: 600,
    category: "Hoodies",
    sizes: ["M", "L", "XL"],
    colors: {
      black: "/img/teshrt.png",
      red: "/img/teshrt.png",
    },
    stock: 7,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 10,
    title: "Classic Polo",
    price: 250,
    category: "Shirts",
    sizes: ["S", "M", "L"],
    colors: {
      navy: "/img/teshrt.png",
      white: "/img/teshrt.png",
    },
    stock: 10,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 11,
    title: "Cargo Jacket",
    price: 900,
    category: "Jackets",
    sizes: ["M", "L", "XL"],
    colors: {
      olive: "/img/teshrt.png",
      brown: "/img/teshrt.png",
    },
    stock: 3,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
  {
    id: 12,
    title: "Essential Tee",
    price: 150,
    category: "T-Shirts",
    sizes: ["XS", "S", "M", "L"],
    colors: {
      black: "/img/teshrt.png",
      red: "/img/teshrt.png",
    },
    stock: 20,
    discountLabel: "20% OFF",
    icon: <IosShareOutlinedIcon className="products-share" />,
  },
];

export default function Products() {
  // Data
  const [allProducts] = useState(SAMPLE_PRODUCTS);

  // Filters
  const [search, setSearch] = useState("");
  const [filterCategories, setFilterCategories] = useState([]); // multi-select
  const [filterColors, setFilterColors] = useState([]); // multi-select
  const [filterSizes, setFilterSizes] = useState([]); // multi-select
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(1000);
  const [openSections, setOpenSections] = useState({
    category: true,
    color: true,
    size: true,
    price: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  // UI options
  const [itemsToShow, setItemsToShow] = useState(INITIAL_ITEMS_TO_SHOW);
  const [listMode, setListMode] = useState(false);

  // local per-card selections (size/color for ADD action)
  const [cardColorSelection, setCardColorSelection] = useState({}); // { productId: colorKey }
  const [cardSizeSelection, setCardSizeSelection] = useState({}); // { productId: size }

  // Cart simulation
  const [cart, setCart] = useState([]);

  // derived options
  const categories = useMemo(() => {
    const s = new Set(allProducts.map((p) => p.category));
    return Array.from(s);
  }, [allProducts]);

  const palette = useMemo(() => {
    const setColors = {};
    allProducts.forEach((p) => {
      Object.keys(p.colors).forEach((c) => (setColors[c] = true));
    });
    return Object.keys(setColors);
  }, [allProducts]);

  const sizesAvailable = useMemo(() => {
    const s = new Set();
    allProducts.forEach((p) => p.sizes.forEach((sz) => s.add(sz)));
    return Array.from(s);
  }, [allProducts]);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    let res = allProducts.filter((p) => {
      // search
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        if (
          !p.title.toLowerCase().includes(q) &&
          !p.category.toLowerCase().includes(q)
        )
          return false;
      }
      // category (multi)
      if (filterCategories.length > 0 && !filterCategories.includes(p.category))
        return false;
      // colors (multi) -> require product to have ANY of selected colors
      if (filterColors.length > 0) {
        const has = filterColors.some((c) =>
          Object.prototype.hasOwnProperty.call(p.colors, c)
        );
        if (!has) return false;
      }
      // sizes (multi) -> require product to have ANY selected size
      if (filterSizes.length > 0) {
        const hasSize = filterSizes.some((sz) => p.sizes.includes(sz));
        if (!hasSize) return false;
      }
      // price
      if (typeof priceFrom === "number" && p.price < priceFrom) return false;
      if (typeof priceTo === "number" && p.price > priceTo) return false;

      return true;
    });

    return res;
  }, [
    allProducts,
    search,
    filterCategories,
    filterColors,
    filterSizes,
    priceFrom,
    priceTo,
  ]);

  // visible (slice) update
  const [visibleProducts, setVisibleProducts] = useState(() =>
    filteredProducts.slice(0, itemsToShow)
  );

  useEffect(() => {
    setVisibleProducts(filteredProducts.slice(0, itemsToShow));
  }, [filteredProducts, itemsToShow]);

  // helpers to toggle multi-filter
  const toggleCategory = (cat) => {
    setItemsToShow(INITIAL_ITEMS_TO_SHOW); // reset view when filter changes
    setFilterCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };
  const toggleColor = (color) => {
    setItemsToShow(INITIAL_ITEMS_TO_SHOW);
    setFilterColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };
  const toggleSizeFilter = (sz) => {
    setItemsToShow(INITIAL_ITEMS_TO_SHOW);
    setFilterSizes((prev) =>
      prev.includes(sz) ? prev.filter((s) => s !== sz) : [...prev, sz]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setFilterCategories([]);
    setFilterColors([]);
    setFilterSizes([]);
    setPriceFrom(0);
    setPriceTo(1000);
    setItemsToShow(INITIAL_ITEMS_TO_SHOW);
  };

  // Load more shows ALL filtered products
  const handleLoadMore = () => {
    setItemsToShow(filteredProducts.length);
  };
  const handleShowLess = () => {
    setItemsToShow(INITIAL_ITEMS_TO_SHOW);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // pick image for product (priority: card-level selection > global selected colors (first) > default first)
  const getImageForProduct = (prod) => {
    const localColor = cardColorSelection[prod.id];
    if (localColor && prod.colors[localColor]) return prod.colors[localColor];

    // if sidebar filterColors selected, prefer first that product supports
    if (filterColors.length > 0) {
      const found = filterColors.find((c) => prod.colors[c]);
      if (found) return prod.colors[found];
    }

    // fallback first color
    return Object.values(prod.colors)[0];
  };

  // add to cart (requires size selection for that product, else ask)
  const handleAddToCart = (prod) => {
    if (prod.stock === 0) {
      alert("This product is out of stock.");
      return;
    }
    const chosenSize =
      cardSizeSelection[prod.id] || (prod.sizes.length ? prod.sizes[0] : null);
    if (!chosenSize) {
      alert("Please choose a size.");
      return;
    }
    const chosenColor =
      cardColorSelection[prod.id] || Object.keys(prod.colors)[0];

    const id = `${prod.id}-${chosenSize}-${chosenColor}`;
    setCart((prev) => {
      const ek = prev.find((it) => it.id === id);
      if (ek)
        return prev.map((it) =>
          it.id === id ? { ...it, qty: it.qty + 1 } : it
        );
      return [
        ...prev,
        {
          id,
          productId: prod.id,
          title: prod.title,
          price: prod.price,
          size: chosenSize,
          color: chosenColor,
          qty: 1,
          img: prod.colors[chosenColor],
        },
      ];
    });

    alert("Added to cart (simulation)");
  };
  const [showMore, setShowMore] = useState(false);
  const [showMoreColors, setShowMoreColors] = useState(false);

  // Cart helpers
  const removeFromCart = (id) => setCart((p) => p.filter((it) => it.id !== id));

  // UI: detect if all shown
  const allShown = visibleProducts.length >= filteredProducts.length;

  return (
    <div>
      <div className="products-page">
        {/* Title + search */}
        <div className="products-top">
          <div className="products-top-left">
            <div className="products-breadcrumb muted">
              HOME &gt; PRODUCTS &gt; JACKETS &amp; COATS
            </div>
          </div>

          <div className="products-top-right ">
            <h2 className="products-title">Our Collection Of Products</h2>
            <div className="products-search-wrap">
              <input
                className="products-search-input"
                placeholder="Search An Item"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setItemsToShow(INITIAL_ITEMS_TO_SHOW);
                }}
              />
              <SearchIcon className="products-search-icon" />
            </div>
          </div>
        </div>

        <div className="products-content">
          {/* Sidebar */}
          <aside className="products-sidebar">
            {/* Products count */}
            <div className="products-sidebar-block">
              <div
                className="products-sidebar-head"
                style={{
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "10px",
                }}
              >
                249 Products
              </div>
            </div>

            {/* Categories */}
            <div
              className="products-sidebar-block"
              style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}
            >
              <div
                className="products-sidebar-head-row"
                onClick={() => toggleSection("category")}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span className="products-sidebar-head">Category</span>
                <span
                  className={`products-head-arrow ${
                    openSections.category ? "open" : ""
                  }`}
                >
                  <KeyboardArrowUpIcon />
                </span>
              </div>

              {openSections.category && (
                <div className="products-cat-checkboxes">
                  {categories.slice(0, 3).map(
                    (
                      c // أول 5 بس
                    ) => (
                      <label key={c} className="products-checkbox-row">
                        <input
                          type="checkbox"
                          checked={filterCategories.includes(c)}
                          onChange={() => toggleCategory(c)}
                        />
                        <span>{c}</span>
                      </label>
                    )
                  )}

                  {/* باقي الكاتيجوريز يظهروا لو مستخدم ضغط "View More" */}
                  {showMore &&
                    categories.slice(3).map((c) => (
                      <label key={c} className="products-checkbox-row">
                        <input
                          type="checkbox"
                          checked={filterCategories.includes(c)}
                          onChange={() => toggleCategory(c)}
                        />
                        <span>{c}</span>
                      </label>
                    ))}

                  {/* زرار View More */}
                  <button
                    type="button"
                    className="view-more-btn"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "View Less -" : "View More +"}
                  </button>
                </div>
              )}
            </div>

            {/* Colors */}
            <div
              className="products-sidebar-block"
              style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px" }}
            >
              <div
                className="products-sidebar-head-row"
                onClick={() => toggleSection("color")}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span className="products-sidebar-head">Color</span>
                <span
                  className={`products-head-arrow ${
                    openSections.color ? "open" : ""
                  }`}
                >
                  <KeyboardArrowUpIcon />
                </span>
              </div>

              {openSections.color && (
                <>
                  <div className="products-colors">
                    {/* أول 6 ألوان */}
                    {palette.slice(0, 6).map((c) => (
                      <button
                        key={c}
                        className={`products-color-tile ${
                          filterColors.includes(c) ? "active" : ""
                        }`}
                        onClick={() => toggleColor(c)}
                        title={c}
                      >
                        <span
                          className={`products-color-dot products-color-${c}`}
                        />
                        <span className="products-color-name">{c}</span>
                      </button>
                    ))}

                    {/* باقي الألوان لو showMoreColors = true */}
                    {showMoreColors &&
                      palette.slice(6).map((c) => (
                        <button
                          key={c}
                          className={`products-color-tile ${
                            filterColors.includes(c) ? "active" : ""
                          }`}
                          onClick={() => toggleColor(c)}
                          title={c}
                        >
                          <span
                            className={`products-color-dot products-color-${c}`}
                          />
                          <span className="products-color-name">{c}</span>
                        </button>
                      ))}
                  </div>

                  {/* زرار View More / Less */}
                  {palette.length > 6 && (
                    <button
                      type="button"
                      className="view-more-btn"
                      onClick={() => setShowMoreColors(!showMoreColors)}
                    >
                      {showMoreColors ? "View Less -" : "View More +"}
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Size + Price (واحد سهم) */}
            <div className="products-sidebar-block">
              <div
                className="products-sidebar-head-row"
                onClick={() => toggleSection("sizePrice")}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <span className="products-sidebar-head">Size</span>
                <span
                  className={`products-head-arrow ${
                    openSections.sizePrice ? "open" : ""
                  }`}
                >
                  <KeyboardArrowUpIcon />
                </span>
              </div>

              {openSections.sizePrice && (
                <>
                  {/* Sizes */}
                  <div className="products-sizes-section">
                    <div>
                      <span className="products-size-label">Waist</span>
                      <div className="products-sizes">
                        {["36"].map((sz) => (
                          <button
                            key={sz}
                            className={`products-size ${
                              filterSizes.includes(sz) ? "active" : ""
                            }`}
                            onClick={() => toggleSizeFilter(sz)}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div style={{marginTop:"20px"}}>
                      <span className="products-size-label">Clothing</span>
                      <div className="products-sizes">
                        {sizesAvailable.map((sz) => (
                          <button
                            key={sz}
                            className={`products-size ${
                              filterSizes.includes(sz) ? "active" : ""
                            }`}
                            onClick={() => toggleSizeFilter(sz)}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="products-price-filter">
                    <span className="products-sidebar-head">Price</span>
                    <div className="products-price-inputs ">
                      <input
                        type="number"
                        placeholder="From"
                        min={0}
                        value={priceFrom}
                        onChange={(e) => {
                          const v = Number(e.target.value || 0);
                          setPriceFrom(v);
                          setItemsToShow(INITIAL_ITEMS_TO_SHOW);
                        }}
                      />
                      <input
                        type="number"
                        placeholder="To"
                        min={0}
                        value={priceTo}
                        onChange={(e) => {
                          const v = Number(e.target.value || 1000);
                          setPriceTo(v);
                          setItemsToShow(INITIAL_ITEMS_TO_SHOW);
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={1000}
                      value={priceTo}
                      onChange={(e) => {
                        setPriceTo(Number(e.target.value));
                        setItemsToShow(INITIAL_ITEMS_TO_SHOW);
                      }}
                      className="products-price-range"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="products-sidebar-block">
              <button className="products-clear-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Main */}
          <main
            className={`products-main ${listMode ? "products-list-mode" : ""}`}
          >
            <div className={`products-grid ${listMode ? "list" : "grid"}`}>
              {visibleProducts.length === 0 && (
                <div className="products-empty">
                  No products match your filters.
                </div>
              )}

              {visibleProducts.map((prod) => {
                const imgSrc = getImageForProduct(prod);
                const cardColor =
                  cardColorSelection[prod.id] || Object.keys(prod.colors)[0];
                const chosenSize = cardSizeSelection[prod.id] || null;

                return (
                  <article className="products-card" key={prod.id}>
                    <div className="products-card-media">
                      {prod.discountLabel && (
                        <>
                          <div className="products-badge">
                            {prod.discountLabel}
                          </div>
                          {/* <IosShareOutlinedIcon className="products-share" /> */}
                          {prod.icon}
                        </>
                      )}
                      <img
                        src={imgSrc}
                        alt={prod.title}
                        className="products-card-img"
                      />
                    </div>

                    <div className="products-card-body">
                      <div
                        className="flex "
                        style={{
                          justifyContent: "space-between",
                          marginTop: "10px",
                        }}
                      >
                        <h3 className="products-card-title">{prod.title}</h3>
                        <div className="products-price-top">
                          {prod.price} EGP
                        </div>
                      </div>

                      <div className="products-card-sub">
                        {/* اسم اللون المختار */}
                        <div className="products-selected-color">
                          {cardColorSelection[prod.id] ||
                            Object.keys(prod.colors)[0]}
                        </div>

                        {/* دواير الألوان */}
                        <div className="products-mini-colors">
                          {Object.keys(prod.colors).map((c) => (
                            <button
                              key={c}
                              className={`products-mini-color ${
                                (cardColorSelection[prod.id] ||
                                  Object.keys(prod.colors)[0]) === c
                                  ? "active"
                                  : ""
                              }`}
                              onClick={() =>
                                setCardColorSelection((p) => ({
                                  ...p,
                                  [prod.id]: c,
                                }))
                              }
                              title={c}
                            >
                              <span
                                className="products-color-dot"
                                style={{ backgroundColor: c }}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="products-card-actions">
                        <div
                          className="products-small-icons flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <button className="icon-btn" title="Compare">
                            <AutorenewOutlinedIcon />
                          </button>
                          <button
                            className={`products-add-btn ${
                              prod.stock === 0 ? "disabled" : ""
                            }`}
                            onClick={() => handleAddToCart(prod)}
                            disabled={prod.stock === 0}
                          >
                            {prod.stock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                          </button>
                          <button className="icon-btn" title="Wishlist">
                            <FavoriteBorderOutlinedIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="products-load-more-wrap">
              {!allShown ? (
                <button className="products-load-more" onClick={handleLoadMore}>
                  LOAD MORE
                </button>
              ) : (
                <button
                  className="products-load-more products-show-less"
                  onClick={handleShowLess}
                >
                  SHOW LESS
                </button>
              )}
            </div>
          </main>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
