import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { TiContacts } from "react-icons/ti";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMailOpen, HiOutlineLink } from "react-icons/hi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Logo from "../../assets/image/Logo-Lawyer.png";
import footerStyle from "../header/nav.module.css";
import style from "./footer.module.css";
import { CustomNavLink } from "../header/nav";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={style.container}>
        <div className={`${style.large} ${style.top}`}>
          <figure className={footerStyle.figure}>
            <img src={Logo} alt="Logo" className={footerStyle.img} />
            <figcaption className={footerStyle.caption}>
              <h1 className={footerStyle.title}>PrestigeEnigma</h1>
              <p className={footerStyle.subtitle}>
                Advocates & Legal Consultants
              </p>
            </figcaption>
          </figure>
          <p className={style.para}>
            PrestigeEnigma was built on the idea that sophisticated legal
            services should be convenient, modern and affordable.
            State-of-the-art practice technology allows us to serve our clients
            efficiently. We put our clients first and achieve tremendous
            results. Experience how law can be done better.
          </p>
        </div>
        <section className={style.section}>
        <div className={`${style.large} ${style.wrapper}`}>
          <h2 className={style.head}>
            <TiContacts className={style.headIcon} />
            Contact Details
          </h2>
          <div className={style.content}>
          <div className={style.contact}>
            <TfiLocationPin className={style.contactIcon} />
            <div className={style.box}>
              <h2 className={style.boxTitle}>Our Office</h2>
              <p className={style.boxPara}>Asaba, Delta State, NG</p>
            </div>
          </div>
          <div className={style.contact}>
            <HiOutlineMailOpen className={style.contactIcon} />
            <div className={style.box}>
              <h2 className={style.boxTitle}>Email Us</h2>
              <p className={style.boxPara}>
                <a href="mailto: prestigeenigma@gmail.com">
                  prestigeenigma@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className={style.contact}>
            <IoIosCall className={style.contactIcon} />
            <div className={style.box}>
              <h2 className={style.boxTitle}>Call Us</h2>
              <p className={style.boxPara}>
                <a href="tel: +2348030849685">+234 803 0849 685</a>
              </p>
            </div>
          </div>
          </div>
        </div>
        <div className={`${style.large} ${style.wrapper}`}>
          <div className={style.header}>
            <h2 className={style.head}>
              <HiOutlineLink className={style.headIcon} /> <span>SITEMAP</span>
            </h2>
          </div>
          <ul className={style.list}>
            <li className={style.item}>
              <LiaGreaterThanSolid className={style.listIcon} />
              <CustomNavLink to="/">Home</CustomNavLink>
            </li>
            <li className={style.item}>
              <LiaGreaterThanSolid className={style.listIcon} />
              <CustomNavLink to="/about">About</CustomNavLink>
            </li>
            <li className={style.item}>
              <LiaGreaterThanSolid className={style.listIcon} />
              <CustomNavLink to="/practice">Practice Areas</CustomNavLink>
            </li>
            <li className={style.item}>
              <LiaGreaterThanSolid className={style.listIcon} />
              <CustomNavLink to="/contact">Contact Us</CustomNavLink>
            </li>
          </ul>
        </div>
        </section>
      </section>
      <p className={style.copyright}>
        <span>© 2021 PrestigeEnigma. All Rights Reserved.</span>
        <span>Powered by PrestigeEnigma.</span>
      </p>
    </footer>
  );
};

export default Footer;
