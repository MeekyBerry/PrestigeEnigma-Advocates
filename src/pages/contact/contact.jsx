import React from "react";
import { TiContacts } from "react-icons/ti";
import { TfiTime } from "react-icons/tfi";
import Nav from "../../layout/header/nav";
import Footer from "../../layout/footer/footer";
import topStyle from "../about/about.module.css";
import style from "./contact.module.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <section className={topStyle.top}>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Nav />
      <div className={topStyle.wrapper}>
        <div className={style.bg}>{""}</div>
        <div className={topStyle.header}>
          <h1 className={topStyle.header_title}>Contact Us</h1>
          <h2 className={topStyle.header_subtitle}>
            We put our clients first and achieve tremendous results!
          </h2>
        </div>
      </div>
      <section className={style.container}>
        <section className={style.content}>
          <section className={style.wrap}>
            <div className={style.details}>
              <h2 className={style.heading}>Get in Touch</h2>
              <div className={style.detail}>
                <TiContacts className={style.icon} />
                <div className={style.box}>
                  <h3 className={style.title}>Contact Information</h3>
                  <div className={style.wrapper}>
                    <p className={style.text}>
                      <b>Address:</b> 415 12th Ave SW, Olympia, WA 98504, USA
                    </p>
                    <p className={style.text}>
                      <b>Tel:</b>
                      <a href="tel: +1(512)333-4999">+1(512)333-4999</a>
                    </p>
                    <p className={style.text}>
                      <b>Email:</b>
                      <a href="mailto: Barristerjoelcatty@consultant.com">
                        {" "}
                        Barristerjoelcatty@consultant.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.detail}>
                <TfiTime className={style.icon} />
                <div className={style.box}>
                  <h3 className={style.title}>Working Hours</h3>
                  <div className={style.wrapper}>
                    <p className={style.text}>
                      <b>Mon - Fri: </b>08:00 - 17:00
                    </p>
                    <p className={style.text}>
                      <b>Sun & National Holidays: </b>
                      Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <section className={style.formContainer}>
              <h2 className={style.formTitle}>Send Us a Message</h2>
              <form method="#" className={style.form}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={style.input}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className={style.input}
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Contact Number"
                  required
                  className={style.input}
                />
                <textarea
                  name="message"
                  placeholder="Case Description"
                  required
                  className={style.textarea}
                ></textarea>
                <button type="submit" className={style.btn}>
                  Send Message
                </button>
              </form>
            </section>
          </section>
          <aside className={style.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.1759302367122!2d-122.90754622679164!3d47.03677849083015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549174fda0bd9f37%3A0x4f241b0624858452!2s415%2012th%20Ave%20SW%2C%20Olympia%2C%20WA%2098501%2C%20USA!5e0!3m2!1sen!2sng!4v1688433115853!5m2!1sen!2sng"
              title="Map"
              className={style.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </aside>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
