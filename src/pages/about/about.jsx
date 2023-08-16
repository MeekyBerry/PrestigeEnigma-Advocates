import React from "react";
import Hammer from "../../assets/image/hammer.png";
import Scale from "../../assets/image/equity.png";
import Home from "../../assets/image/mt-home.png";
import Law from "../../assets/image/interjurist.png";
import { FaFlagCheckered, FaSuitcase } from "react-icons/fa";
import Nav from "../../layout/header/nav";
import Footer from "../../layout/footer/footer";
import style from "./about.module.css";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main className={style.top}>
      <Helmet>
        <title>PrestigeEnigma | About</title>
        <meta
          name="description"
          content="PrestigeEnigma, was established in 1995 by Barrister Joel Catty to provide unparalleled legal services to individuals and businesses alike."
        />
      </Helmet>
      <Nav />
      <header className={style.wrapper}>
        <div className={style.bg}>{""}</div>
        <div className={style.header}>
          <h1 className={style.header_title}>ABOUT OUR FIRM</h1>
          <h2 className={style.header_subtitle}>
            We Provide Reliable And Effective Legal Services
          </h2>
        </div>
      </header>
      <section className={style.container}>
        <div className={style.content}>
          <p className={style.text}>
            PrestigeEnigma, which is located in Asaba, Delta State, Nigeria, was established in 1995 by PrestigeEnigma to provide
            unparalleled legal services to individuals and businesses alike. We
            are a full service law firm, providing a full range of legal
            services in all fields of the legal practice, inc. corporate -
            business law, contracts, debt collection, tax law, intellectual
            property, real estate, public - administrative law and litigation.
            Our approach to delivering law services is different. We are
            laser-focused on meeting your need to get results while managing
            your bottom line. Our modern, streamlined, and tech enabled
            structure is client-focused. The firm maintains its commitment to
            provide the best legal advice and representation for its clients,
            utilizing nearly 3 decades of legal expertise and experience to
            offer the most efficient solutions to legal and bureaucratic
            obstacles to foreign investors and local businesses alike.
          </p>
        </div>
        <section className={style.container2}>
          <div className={style.box}>
            <h2 className={style.box_title}>
              Member of INTERNATIONAL ASSOCIATION OF LAW FIRMS
            </h2>
            <img src={Law} alt="Interjurist JoelCatty" className={style.img} />
          </div>
          <div className={style.box}>
            <h2 className={style.box_title_2}>
              <em>
                <strong className={style.strong}>
                  &quot;Ius civile vigilantibus scriptum est&quot;,
                </strong>
              </em>
              <span className={style.span}>
                Roman Law Civil Law has been written for the watchful.
              </span>
            </h2>
            <img src={Home} alt="Temple" className={style.img} />
          </div>
          <div className={style.box}>
            <h2 className={style.box_title}>28 Years of Experience</h2>
            <img src={Scale} alt="Balance Scale" className={style.img} />
          </div>
          <div className={style.box}>
            <h2 className={style.box_title}>LEGAL SERVICES</h2>
            <img src={Hammer} alt="Hammer Justice" className={style.img} />
          </div>
          <div className={style.box}>
            <h2 className={`${style.block} ${style.box_title}`}>
              <strong className={style.number}>45+</strong> Legal Associates
            </h2>
            <FaSuitcase className={style.icon} />
          </div>
          <div className={style.box}>
            <h2 className={style.box_title}>Defining Success</h2>
            <FaFlagCheckered className={style.icon} />
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default About;
