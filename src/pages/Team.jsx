import team1 from "../assets/img/img1.png"
import 'animate.css';


function Team() {

    const teamMembers = [
        { name: "KAUSTUBH BHOSALE", img: team1, annimation: "animate__jackInTheBox" },
        { name: "KAUSTUBH BHOSALE", img: team1, annimation: "animate__jackInTheBox" },
        { name: "KAUSTUBH BHOSALE", img: team1, annimation: "animate__jackInTheBox" },
        { name: "KAUSTUBH BHOSALE", img: team1, annimation: "animate__jackInTheBox" },
    ];
    return (
        <>
            {/* <section className="Team">
                <div className="row g-5 ">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 h-100">
                        <div className="row teamRow">
                            <div className="col-6 box-left h-100">
                                <h1 className="section-title">
                                    THE FACES BEHIND
                                    <br />
                                    THE WORK
                                </h1>
                                <p className="description">
                                    A struggling writer murders his successful friend to steal an
                                    unfinished manuscript, only to spiral into a chilling blur
                                    where fiction and reality dangerously collide. A struggling
                                    writer murders his successful friend to steal an unfinished
                                    manuscript, only to spiral into a chilling blur where fiction
                                    and reality dangerously collide.
                                </p>
                            </div>
                            <div className="col-6 box-right h-100 text-end">
                                <div className="text-end">
                                    <h1 className="section-subtitle">THE VISION</h1>
                                    <p className="description ">
                                        A struggling writer murders his successful friend to steal an
                                        unfinished manuscript, only to spiral into a chilling blur
                                        where fiction and reality dangerously collide. A struggling
                                        writer murders his successful friend to steal an unfinished
                                        manuscript, only to spiral into a chilling blur where fiction
                                        and reality dangerously collide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="row g-5">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                                >
                                    <div className="team">
                                        <div className="imgbox">
                                            <img
                                                src={member.img}
                                                className="mt-3"
                                                alt={member.name}
                                            />
                                        </div>
                                        <p className="member-name">{member.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="Team">

                <div className="row">
                    <div  >
                        <div className="yellow-spray" style={{
                            "--size": "500px",
                            "--bottom": "2%",
                            "--left": "-12%",
                            "--bg": "radial-gradient(circle, rgba(255, 217, 0, 0.52) 0%, rgba(255, 217, 0, 0.1) 70%, transparent 100%)"
                        }}></div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-3 col-md-6 col-sm-12 box-left animate__animated animate__fadeInUpBig">

                        <h1 className="section-title">
                            THE FACES BEHIND
                            <br />
                            THE WORK
                        </h1>
                        <p className="description">
                            A struggling writer murders his successful friend to steal an
                            unfinished manuscript, only to spiral into a chilling blur
                            where fiction and reality dangerously collide. A struggling
                            writer murders his successful friend to steal an unfinished
                            manuscript, only to spiral into a chilling blur where fiction
                            and reality dangerously collide.
                        </p>

                    </div>

                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 team-col box-right text-end animate__animated animate__fadeInDownBig pe-5">
                        <div className="">
                            <h1 className="section-subtitle">THE VISION</h1>
                            <div className="description end-text">
                                A struggling writer murders his successful friend to steal an
                                unfinished manuscript, only to spiral into a chilling blur
                                where fiction and reality dangerously collide. A struggling
                                writer murders his successful friend to steal an unfinished
                                manuscript, only to spiral into a chilling blur where fiction
                                and reality dangerously collide.
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-5 col-lg-6 col-md-12 col-sm-12 ">
                        <div className="row g-5">

                            {teamMembers.map((member, index) => (
                                <>

                                    <div
                                        key={index}
                                        className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                                    >
                                        <div className="yellow-spray" style={{
                                            "--size": "500px",
                                            "--top": "2%",
                                            "--right": "-12%",
                                            "--bg": "radial-gradient(circle, rgba(255, 217, 0, 0.52) 0%, rgba(255, 217, 0, 0.1) 7%, transparent 100%)"
                                        }}></div>

                                        <div className="team d-flex justify-containt-center flex-column align-items-center">
                                            <div className="imgbox">

                                                <img
                                                    src={member.img}
                                                    className={`${member.annimation} mt-3 animate__animated`}
                                                    alt={member.name}
                                                />
                                            </div>
                                            <p className="member-name">{member.name}</p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
