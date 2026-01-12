function Portfolio() {

  const PORTFOLIO_DATA = {
    FILMS: [
      {
        img: "https://picsum.photos/200",
        title: "PAGES OF DECEPTION",
        year: "(2024-25)",
        // description:
          // "A STRUGGLING WRITER MURDERS HIS SUCCESSFUL FRIEND TO STEAL AN UNFINISHED MANUSCRIPT, ONLY TO SPIRAL INTO A CHILLING BLUR WHERE FICTION AND REALITY DANGEROUSLY COLLIDE.",
      },
      {
        img: "https://picsum.photos/200",
        title: "CHAPPAL",
        year: "(2025-26)",
        // description:
          // "A STRUGGLING WRITER MURDERS HIS SUCCESSFUL FRIEND TO STEAL AN UNFINISHED MANUSCRIPT, ONLY TO SPIRAL INTO A CHILLING BLUR WHERE FICTION AND REALITY DANGEROUSLY COLLIDE.",
      },
      {
        img: "https://picsum.photos/200",
        title: "RAJWANSH",
        year: "(2026)",
        // description:
          // "A STRUGGLING WRITER MURDERS HIS SUCCESSFUL FRIEND TO STEAL AN UNFINISHED MANUSCRIPT, ONLY TO SPIRAL INTO A CHILLING BLUR WHERE FICTION AND REALITY DANGEROUSLY COLLIDE.",
      },
      {
        img: "https://picsum.photos/200",
        title: "RAJWANSH",
        year: "(2026)",
        // description:
          // "A STRUGGLING WRITER MURDERS HIS SUCCESSFUL FRIEND TO STEAL AN UNFINISHED MANUSCRIPT, ONLY TO SPIRAL INTO A CHILLING BLUR WHERE FICTION AND REALITY DANGEROUSLY COLLIDE.",
      },
    ],

    SOCIALMEDIA: [
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT 1",
        year: "(2024-25)",
        // description:
          // "Sample description for social media project.",
      },
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT 1",
        year: "(2024-25)",
        // description:
          // "Sample description for social media project.",
      },
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT 1",
        year: "(2024-25)",
        // description:
          // "Sample description for social media project.",
      },
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT 1",
        year: "(2024-25)",
        // description:
          // "Sample description for social media project.",
      },
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT 1",
        year: "(2024-25)",
        // description:
          // "Sample description for social media project.",
      },
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT 1",
        year: "(2024-25)",
        // description:
          // "Sample description for social media project.",
      },
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT 1",
        year: "(2024-25)",
        // description:
          // "Sample description for social media project.",
      },
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT 1",
        year: "(2024-25)",
        // description:
          // "Sample description for social media project.",
      },
      {
        img: "https://picsum.photos/200",
        title: "SOCIAL PROJECT 1",
        year: "(2024-25)",
        // description:
          // "Sample description for social media project.",
      },
    ],

    PHOTOGRAPHY: [
      {
        img: "https://picsum.photos/200",
        title: "PHOTOGRAPHY PROJECT",
        year: "(2024-25)",
        // description:
          // "A sample photography project description.",
      },
      {
        img: "https://picsum.photos/200",
        title: "PHOTOGRAPHY PROJECT",
        year: "(2024-25)",
        // description:
          // "A sample photography project description.",
      },
      {
        img: "https://picsum.photos/200",
        title: "PHOTOGRAPHY PROJECT",
        year: "(2024-25)",
        // description:
          // "A sample photography project description.",
      },
      {
        img: "https://picsum.photos/200",
        title: "PHOTOGRAPHY PROJECT",
        year: "(2024-25)",
        // description:
          // "A sample photography project description.",
      },
    ],

    DESIGN_BRANDING: [
      {
        img: "https://picsum.photos/200",
        title: "BRANDING PROJECT",
        year: "(2024-25)",
        // description: "Branding project description here.",
      },
      {
        img: "https://picsum.photos/200",
        title: "BRANDING PROJECT",
        year: "(2024-25)",
        // description: "Branding project description here.",
      },
      {
        img: "https://picsum.photos/200",
        title: "BRANDING PROJECT",
        year: "(2024-25)",
        // description: "Branding project description here.",
      },
      {
        img: "https://picsum.photos/200",
        title: "BRANDING PROJECT",
        year: "(2024-25)",
        // description: "Branding project description here.",
      },
    ],

    WEBSITE_DEVELOPMENT: [
      {
        img: "https://picsum.photos/200",
        title: "WEB PROJECT",
        year: "(2024-25)",
        // description: "Website development project description.",
      },
      {
        img: "https://picsum.photos/200",
        title: "WEB PROJECT",
        year: "(2024-25)",
        // description: "Website development project description.",
      },
      {
        img: "https://picsum.photos/200",
        title: "WEB PROJECT",
        year: "(2024-25)",
        // description: "Website development project description.",
      },
      {
        img: "https://picsum.photos/200",
        title: "WEB PROJECT",
        year: "(2024-25)",
        // description: "Website development project description.",
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
      <ul className="nav nav-pills mb-3 main-tab border-bottom" id="pills-tab" role="tablist">
        {tabs.map((tab, index) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${index === 0 ? "active" : ""}`}
              id={`tab-${tab.id}`}
              data-bs-toggle="pill"
              data-bs-target={`#content-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={index === 0}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
            id={`content-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
          >
            <div className="d-flex justify-content-between flex-wrap gap-3">
              {PORTFOLIO_DATA[tab.id].map((item, i) => (
                <div className="project-card" style={{ width: "25rem" }} key={i}>
                  <div className="project-image">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-year">{item.year}</p>
                  <p className="project-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="yellow-spray"
        style={{
          "--size": "400px",
          "--bottom": "2%",
          "--right": "40%",
          "--bg": "radial-gradient(circle, rgba(255,217,0,0.52) 0%, rgba(255,217,0,0.1) 50%, transparent 100%)",
        }}
      ></div>
    </section>
  );
}

export default Portfolio;
