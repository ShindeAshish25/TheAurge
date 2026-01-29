import { useState, useEffect } from "react";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (gallery) => {
    setImages(gallery);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImages([]);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const escHandler = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  const PORTFOLIO_DATA = {
    FILMS: [
      {
        img: "https://i.pinimg.com/736x/f6/f0/66/f6f066902d626c6891947a7a66416723.jpg",
        title: "lion king",
        year: "(2024-25)",
        gallery: [
          "https://images.unsplash.com/photo-1618641662184-bafefb91a542?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
          "https://i.pinimg.com/736x/8d/97/a4/8d97a44b7c0e8992cfd41f2542c21a2f.jpg",
          "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        ],
      },
      {
        img: "https://picsum.photos/200",
        title: "CHAPPAL",
        year: "(2025-26)",
        gallery: [
          "https://picsum.photos/803/1131",
          "https://picsum.photos/804/1131",
        ],
      },
    ],

    SOCIALMEDIA: [
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT",
        year: "(2024-25)",
        gallery: [
          "https://picsum.photos/805/1131",
          "https://picsum.photos/806/1131",
        ],
      },
    ],

    PHOTOGRAPHY: [
      {
        img: "https://picsum.photos/200",
        title: "PHOTOGRAPHY",
        year: "(2024-25)",
        gallery: [
          "https://picsum.photos/807/1131",
          "https://picsum.photos/808/1131",
        ],
      },
    ],

    DESIGN_BRANDING: [
      {
        img: "https://picsum.photos/200",
        title: "BRANDING",
        year: "(2024-25)",
        gallery: [
          "https://picsum.photos/809/1131",
          "https://picsum.photos/810/1131",
        ],
      },
    ],

    WEBSITE_DEVELOPMENT: [
      {
        img: "https://picsum.photos/200",
        title: "WEB PROJECT",
        year: "(2024-25)",
        gallery: [
          "https://picsum.photos/811/1131",
          "https://picsum.photos/812/1131",
        ],
      },
    ],
  };

  const tabs = [
    { id: "FILMS", label: "FILMS" },
    { id: "SOCIALMEDIA", label: "SOCIAL MEDIA" },
    { id: "PHOTOGRAPHY", label: "PHOTOGRAPHY" },
    { id: "DESIGN_BRANDING", label: "DESIGN & BRANDING" },
    { id: "WEBSITE_DEVELOPMENT", label: "WEBSITE DEVELOPMENT" },
  ];

  return (
    <section className="portfolio">
      {/* TABS */}
      <ul className="nav nav-pills mb-3 border-bottom">
        {tabs.map((tab, index) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${index === 0 ? "active" : ""}`}
              data-bs-toggle="pill"
              data-bs-target={`#${tab.id}`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* TAB CONTENT */}
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
          >
            <div className="d-flex flex-wrap gap-4">
              {PORTFOLIO_DATA[tab.id].map((item, i) => (
                <div
                  key={i}
                  className="project-card"
                  onClick={() => openModal(item.gallery)}
                >
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.year}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="modal-overlay">
          <button className="close-btn" onClick={closeModal}>✕</button>

          <button className="nav-btn left" onClick={prevImage}>‹</button>

          <div className="a4-container">
            <img src={images[currentIndex]} alt="A4 View" />
          </div>

          <button className="nav-btn right" onClick={nextImage}>›</button>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
