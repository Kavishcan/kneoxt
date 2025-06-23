import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBanner2 = () => {
  return (
    <section className="agk-hero" id="home">
      <div className="hero-wrapper-two">
        <div className="shape shape-one">
          <span>
            <Image
              className="rotate360"
              src="/assets/images/digital-agency/hero/shape/shape1.png"
              alt="img"
              width={50}
              height={50}
            />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <Image
              className="animate-float-bob-y"
              src="/assets/images/digital-agency/hero/shape/shape2.png"
              alt="img"
              width={80}
              height={80}
            />
          </span>
        </div>
        <div className="shape circle-one">
          <span></span>
        </div>
        <div className="shape circle-two">
          <span></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <h1>
                  <span className="text-anm">Smart Solutions</span>
                  <span className="text-anm">for Future</span>
                </h1>
                <div className="text-box pf_fadeup">
                  <p>
                    A <span>Digital Modern Agency</span> specializing in
                    innovative web app design branding, and marketing solutions
                    to elevate your business.
                  </p>
                  <div className="hero-button">
                    <Link href="#about" className="theme-btn style-one hero-section">
                      <span className="text-flip">
                        <span className="text">Learn More</span>
                        <span className="text">Learn More</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner2;
