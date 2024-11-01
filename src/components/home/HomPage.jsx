import React from "react";
// import styles from "./style/HomePage.css";
import HeroSection from "./HeroSection";
// import CountDownCard from "./CountDownCard";
// import HomeBlogCard from "./HomeBlogCard";
// import HomeChargingCard from "./HomeChargingCard";
// import InvestCard from "./InvestCard";
// import ConvenientCharging from "./ConvenientCharging";
// import LogoCard from "./LogoCard";
// import poweringImage from './assets/goec-powering.jpg';
// import HowToChargeCard from "./HowToChargeCard";
// import BlogsCardPage from "./BlogsCardPage";

const HomePage = () => {
  return (
    <div className="w-screen">
      <HeroSection />
      {/* <CountDownCard />
      <div className={styles.blogCharge}>
        <HomeBlogCard
          img={poweringImage}
          text="Powering Future "
          subText="starts today"
          description1={
            <Fragment>
              GO EC is transforming the future of electric automobiles by
              building a strategic and collective network of Electric Vehicle
              (EV) charging stations across India.
            </Fragment>
          }
          description2={
            <Fragment>
              We envision a greener, more sustainable world and hope to achieve
              it through innovative and transparent operations by collaborating
              with organizations, individual landowners, malls and hotels,
              hospitals, restaurants, and so on
            </Fragment>
          }
        />

        <HomeChargingCard />
      </div>
      <InvestCard />
      <ConvenientCharging />
      <div className={styles.warper}>
        <div className=" container_wrapper">
          <p className={styles.Hading}>
            How to charge your EV with GO EC App
            <span className={styles.dot}></span>
          </p>
          <HowToChargeCard />
          <div className="flex justify-center">
            <Button text="Read more" link="/about" />
          </div>
        </div>
      </div>
      <LogoCard/>
      <BlogsCardPage />
      <Testimonials />
      <ContactUs /> */}
    </div>
  );
};

export default HomePage;
