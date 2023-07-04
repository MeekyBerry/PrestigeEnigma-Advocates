import React from "react";
import { Link } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosCall } from "react-icons/io";
import Hammer from "../../assets/image/hammer.png";
import Scale from "../../assets/image/equity.png";
import home from "../../assets/image/mt-home.png";
import Law from "../../assets/image/interjurist.png";
import Patent from "../../assets/image/intellectual.jpg";
import FLSA from "../../assets/image/FLSA.jpg";
import CriminalLaw from "../../assets/image/criminal-law.jpg";
import { FaFlagCheckered, FaSuitcase } from "react-icons/fa";
import style from "./home.module.css";
import style2 from "../about/about.module.css";
import style3 from "../practice/practice.module.css";
import Nav from "../../layout/header/nav";
import Footer from "../../layout/footer/footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <section className={style.home}>
      <Helmet>
        <title>Joel Catty Legal | Home</title>
      </Helmet>
      <section className={style.wrapper}>
        <Nav />
        <div className={style.bg}>{""}</div>
        <section className={style.container}>
          <div className={style.head}>
            <span className={style.span}>{""}</span>
            <h1 className={style.header}>Peer Voted No. 1 Law Firm</h1>
          </div>
          <div className={style.content}>
            <h2 className={style.title}>
              Get in touch with us for your Legal Issues!
            </h2>
            <h3 className={style.subtitle}>We prepared to oppose for you!!</h3>
            <h3 className={style.subtitle}>
              Our fighting is for your justice!!!
            </h3>
          </div>
        </section>
        <section className={style.container2}>
          <div className={style.box}>
            <h2 className={style.box_title}>
              <TfiLocationPin className={style.box_icon} /> Our Location
            </h2>
            <p className={style.box_text}>WA 98504, United States</p>
          </div>
          <div className={style.box}>
            <h2 className={style.box_title}>
              <IoIosCall className={style.box_icon} /> Call Us
            </h2>
            <a href="tel: +1(512)333-4999" className={style.box_text}>
              +1(512)333-4999
            </a>
          </div>
        </section>
      </section>
      <section className={style2.container2}>
        <div className={style2.box}>
          <h2 className={style2.box_title}>
            Member of INTERNATIONAL ASSOCIATION OF LAW FIRMS
          </h2>
          <img src={Law} alt="Interjurist JoelCatty" />
        </div>
        <div className={style2.box}>
          <h2 className={style2.box_title_2}>
            <em>
              <strong className={style2.strong}>
                &quot;Ius civile vigilantibus scriptum est&quot;,
              </strong>
            </em>
            <span className={style2.span}>
              Roman Law Civil Law has been written for the watchful.
            </span>
          </h2>
          <img src={home} alt="Temple" />
        </div>
        <div className={style2.box}>
          <h2 className={style2.box_title}>28 Years of Experience</h2>
          <img src={Scale} alt="Balance Scale" />
        </div>
        <div className={style2.box}>
          <h2 className={style2.box_title}>LEGAL SERVICES</h2>
          <img src={Hammer} alt="Hammer Justice" />
        </div>
        <div className={style2.box}>
          <h2 className={`${style2.block} ${style2.box_title}`}>
            <strong className={style2.number}>45+</strong> Legal Associates
          </h2>
          <FaSuitcase className={style2.icon} />
        </div>
        <div className={style2.box}>
          <h2 className={style2.box_title}>Defining Success</h2>
          <FaFlagCheckered className={style2.icon} />
        </div>
      </section>
      <section className={style3.container}>
        <h2 className={style3.heading}>
          We are experts in a lot of legal areas
        </h2>
        <div className={style3.content}>
          <div className={style3.box}>
            <h2 className={style3.title}>Intellectual Law</h2>
            <p className={style3.text}>
              Just as the law protects ownership of personal property and real
              estate, so too does it protect the exclusive control of intangible
              assets. The purpose of these laws is to give an incentive for
              people to develop creative works that benefit society, by ensuring
              they can profit from their works without fear of misappropriation
              by others.
            </p>
          </div>
          <img src={Patent} alt="Patent" className={style3.img} />
        </div>
        <div className={style3.content}>
          <div className={style3.box}>
            <h2 className={style3.title}>Criminal Litigation</h2>
            <p className={style3.text}>
              The firm handles various cases in criminal litigation including
              prosecution of criminal cases or handling defense depending on the
              client’s needs.
            </p>
          </div>
          <img
            src={CriminalLaw}
            alt="Criminal Litigation"
            className={style3.img}
          />
        </div>
        <div className={style3.content}>
          <div className={style3.box}>
            <h2 className={style3.title}>FLSA Litigation</h2>
            <p className={style3.text}>
              Employers like retailers and restaurants can benefit from Joel
              Catty Legal Group as experienced employment attorneys defending
              business interests in Fair Labor Standards Act (FLSA) lawsuits.
            </p>
          </div>
          <img src={FLSA} alt="FLSA" className={style3.img} />
        </div>
        <button type="submit" className={style.cta}>
          <Link to="/practice" className={style.btn}>
            More Services
          </Link>
        </button>
      </section>
      <section className={style.contact}>
        <div className={style.contactBG}>{""}</div>
        <div className={style.contactHeader}>
          <h2 className={style.contactTitle}>
            Let's get Started!!! We are experts in a lot of legal areas.
          </h2>
          <button type="submit" className={style.cta}>
            <Link to="/contact" className={style.btn}>
              Contact Us
            </Link>
          </button>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
