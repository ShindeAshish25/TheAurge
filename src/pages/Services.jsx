import React from "react";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <section className="service">

      <main className="sectors-container">
        <div className="yellow-spray" style={{
          "--size": "500px",
          "--top": "-20%",
          "--right": "-12%",
          "--bg": "radial-gradient(circle, rgba(255, 217, 0, 0.52) 0%, rgba(255, 217, 0, 0.1) 40%, transparent 100%)"
        }}></div>

        <div className="row g-5">
          {/* Main Sector */}
          <div className="col-4 animate__animated animate__swing">
            <section className="main-sector">
              <h2 className="sector-title">Main Sector</h2>
              <div className="service-box main-film-box">
                <div className="service-header d-flex align-items-center">
                  <span class="icon-before"></span>
                  <h3 className="services-title">FILMS</h3>
                </div>
                <div className="ms-5">
                  <p>
                    From script to screen, we bring stories to life with
                    cinematic storytelling.
                  </p>
                  <ul className="service-list">
                    <li>- Short Films</li>
                    <li>- Commercial Ads</li>
                    <li>- Corporate Videos</li>
                    <li>- Documentaries</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Other Sectors */}
          <div className="col-8 animate__animated animate__swing">
            <section className="other-sectors">
              <h2 className="sector-title">Other Sectors</h2>
              <div className="sectors-grid service-box">
                {/* SOCIAL MEDIA MARKETING */}
                <div className="service-box1">
                  <div className="service-header">
                    <span class="icon-before"></span>
                    <h3 className="services-title">SOCIAL MEDIA MARKETING</h3>
                  </div>
                  <p>
                    We craft visuals that define your brand's personality and
                    make it unforgettable.
                  </p>
                  <ul className="service-list">
                    <li>- Instagram Growth & Strategy</li>
                    <li>- LinkedIn Marketing</li>
                    <li>- YouTube Management</li>
                    <li>- Content Creation & Ads</li>
                  </ul>
                </div>

                {/* DESIGN & BRANDING */}
                <div className="service-box1">
                  <div className="service-header">
                    <span class="icon-before"></span>
                    <h3 className="services-title">DESIGN & BRANDING</h3>
                  </div>
                  <p>
                    We craft visuals that define your brand's personality and
                    make it unforgettable.
                  </p>
                  <ul className="service-list">
                    <li>- Logo Design</li>
                    <li>- Brand Identity Design</li>
                    <li>- Graphic Design (Print & Digital)</li>
                  </ul>
                </div>

                {/* PHOTOGRAPHY */}
                <div className="service-box1">
                  <div className="service-header">
                    <span class="icon-before"></span>
                    <h3 className="services-title">PHOTOGRAPHY</h3>
                  </div>
                  <p>Capturing moments, emotions, and stories through our lens.</p>
                  <ul className="service-list">
                    <li>- Product Photography</li>
                    <li>- Fashion Photography</li>
                    <li>- Architectural Photography</li>
                  </ul>
                </div>

                {/* WEBSITE DEVELOPMENT */}
                <div className="service-box1">
                  <div className="service-header">
                    <span class="icon-before"></span>
                    <h3 className="services-title">WEBSITE DEVELOPMENT</h3>
                  </div>
                  <p>
                    We craft visuals that define your brand's personality and
                    make it unforgettable.
                  </p>
                  <ul className="service-list">
                    <li>- WordPress Development</li>
                    <li>- Custom Websites (Coding-based)</li>
                    <li>- UI/UX Design</li>
                    <li>- Website Maintenance</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

        </div>
      </main>
      <div className="yellow-spray" style={{
        "--size": "500px",
        "--bottom": "5%",
        "--left": "-14%",
        "--bg": "radial-gradient(circle, rgba(255, 217, 0, 0.52) 0%, rgba(255, 217, 0, 0.1) 40%, transparent 100%)"
      }}></div>
      <Footer />
    </section>


  );
};

export default Services;
