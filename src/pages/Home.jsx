import img from "../assets/img/img.jpg"

function Home() {
  return (
    <section className="baner p-5">
        <div className="yellow-spray" style={{
          "--size": "400px",
          "--top": "2%",
          "--right": "50%",
          "--bg": "radial-gradient(circle, rgba(255, 217, 0, 0.69) 0%, rgba(255, 217, 0, 0.1) 80%, transparent 100%)"
        }}></div>
      <div className="row" >
        {/* Column 1 */}
        <div className="col-4 animate__animated animate__bounceInLeft">
          <div className="row g-4">
            <div className="col-12">
              <div className="row">
                <div className="col-5 row-1-col-1">
                  <img className="" src={img} alt="" />
                </div>
                <div className="col-7 row-1-col-2">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-6 row-1-col-3">
                  <img src={img} alt="" />
                </div>
                <div className="col-6 row-1-col-4">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-4 animate__animated animate__bounceIn">
          <div className="row g-4">
            <div className="col-12">
              <div className="row">
                <div className="col-6 row-2-col-1">
                  <img src={img} alt="" />
                </div>
                <div className="col-6 row-2-col-2">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-12 row-2-col-3">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-4 animate__animated animate__bounceInRight">
          <div className="row g-4">
            <div className="col-12">
              <div className="row">
                <div className="col-5 row-1-col-1">
                  <img src={img} alt="" />
                </div>
                <div className="col-7 row-1-col-2">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-6 row-1-col-3">
                  <img src={img} alt="" />
                </div>
                <div className="col-6 row-1-col-4">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
         
      </div>
      <div className="yellow-spray" style={{
          "--size": "400px",
          "--bottom": "3%",
          "--left": "55%",
          "--bg": "radial-gradient(circle, rgba(255, 217, 0, 0.62) 0%, rgba(255, 217, 0, 0.1) 30%, transparent 100%)"
        }}></div>
    </section>
  );
}

export default Home;
