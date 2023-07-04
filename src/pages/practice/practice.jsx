import React from "react";
import Employment from "../../assets/image/employment-law.jpg";
import Corporate from "../../assets/image/corporate-and-commercial-law.jpg";
import FLSA from "../../assets/image/FLSA.jpg";
import CriminalLaw from "../../assets/image/criminal-law.jpg";
import Patent from "../../assets/image/intellectual.jpg";
import Civil from "../../assets/image/civil.jpeg";
import Tax from "../../assets/image/tax.png";
import Invest from "../../assets/image/invest.jpeg";
import Dispute from "../../assets/image/disputes.jpg";
import International from "../../assets/image/international.jpeg";
import Counsel from "../../assets/image/counsel.jpg";
import Nav from "../../layout/header/nav";
import Footer from "../../layout/footer/footer";
import topStyle from "../about/about.module.css";
import style from "./practice.module.css";
import { Helmet } from "react-helmet-async";

const PracticeArea = () => {
  return (
    <section className={topStyle.top}>
      <Helmet>
        <title>Practice Area</title>
      </Helmet>
      <Nav />
      <div className={topStyle.wrapper}>
        <div className={style.bg}>{""}</div>
        <div className={topStyle.header}>
          <h1 className={topStyle.header_title}>Legal Services</h1>
          <h2 className={topStyle.header_subtitle}>
            We help people in solving legal issues!
          </h2>
        </div>
      </div>
      <section className={topStyle.container}>
        <div className={style.container}>
          <h2 className={style.heading}>
            We are experts in a lot of legal areas
          </h2>
          <p className={style.para}>
            Joel Catty legal is a law firm that offers a wide range of legal
            services to its clients. Our primary purpose is to provide
            exceptional legal services at a fair rate to ensure client
            happiness. Because of the firm’s size, Our attorneys are able to be
            responsive, committed, and successful.
          </p>
        </div>
        <section className={style.container}>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Intellectual Law</h2>
              <p className={style.text}>
                Just as the law protects ownership of personal property and real
                estate, so too does it protect the exclusive control of
                intangible assets. The purpose of these laws is to give an
                incentive for people to develop creative works that benefit
                society, by ensuring they can profit from their works without
                fear of misappropriation by others.
              </p>
            </div>
            <img src={Patent} alt="Patent" className={style.img} />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Criminal Litigation</h2>
              <p className={style.text}>
                The firm handles various cases in criminal litigation including
                prosecution of criminal cases or handling defense depending on
                the client’s needs.
              </p>
            </div>
            <img
              src={CriminalLaw}
              alt="Criminal Litigation"
              className={style.img}
            />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>FLSA Litigation</h2>
              <p className={style.text}>
                Employers like retailers and restaurants can benefit from Joel
                Catty Legal Group as experienced employment attorneys defending
                business interests in Fair Labor Standards Act (FLSA) lawsuits.
              </p>
            </div>
            <img src={FLSA} alt="FLSA" className={style.img} />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Employment Law</h2>
              <p className={style.text}>
                Employers like retailers and restaurants can benefit from Joel
                Catty Legal Group as experienced employment attorneys defending
                business interests in Fair Labor Standards Act (FLSA) lawsuits.
              </p>
            </div>
            <img src={Employment} alt="Employment" className={style.img} />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Corporate & Commercial Law</h2>
              <p className={style.text}>
                From formation and operation to reorganization and dissolution,
                the guidance of an experienced attorney will ensure that both
                you and your business are protected.
              </p>
            </div>
            <img src={Corporate} alt="Corporate" className={style.img} />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>International Law</h2>
              <p className={style.text}>
                International law is the set of rules generally regarded and
                accepted as binding in relations between states and between
                nations. It serves as a framework for the practice of stable and
                organized international relations.
              </p>
            </div>
            <img
              src={International}
              alt="International Law"
              className={style.img}
            />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Civil Litigation</h2>
              <p className={style.text}>
                Civil law matters including cases for collection of sum of
                money, ejectment, contracts and enforcement, damages, land
                registration, and corrections of birth certificates to name a
                few.
              </p>
            </div>
            <img src={Civil} alt="International Law" className={style.img} />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>Taxation</h2>
              <p className={style.text}>
                The firm handles matters with regard to taxation including
                compliance with the National Internal Revenue Code (national
                taxation)
              </p>
            </div>
            <img src={Tax} alt="International Law" className={style.img} />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>INVESTMENTS</h2>
              <p className={style.text}>
                Are you going to invest? Our legal team in co-operation with
                market experts, will help you find the best legal solutions
                (real estate, business plans, incorporating etc) and fulfill
                your plans in the most prosperous way. Take advantage of the
                current opportunities and choose with our legal help the best
                solutions for you and your company.
              </p>
            </div>
            <img src={Invest} alt="International Law" className={style.img} />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>CONTRACTS</h2>
              <p className={style.text}>
                The area of drafting and concluding contracts is a sector that
                our Law Office specializes in. A team of experienced legal
                experts are ready to talk with you, minimizing all the risks of
                your business plans, securing legally your position in the
                market. Drafting and concluding all sort of contracts inc. MOUs,
                NDAs, STAs etc. are an everyday practice for us.
              </p>
            </div>
            <img src={Dispute} alt="International Law" className={style.img} />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2 className={style.title}>General Counsel</h2>
              <p className={style.text}>
                Our firm provides Strategic Entity Formation, Non-Profit
                Formations, and Compliance, Entity Conversions, Dissolutions and
                Winding Up, Equity Incentive Plans, Terms of Use and Privacy
                Policies ,Purchase and Sale of a Businesses, Drafting and
                Negotiating Contracts, Buy-Sell Agreements, Registered Agent
                Services,Business Disputes and more...
              </p>
            </div>
            <img src={Counsel} alt="International Law" className={style.img} />
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default PracticeArea;
