import Image from "next/image";
import Link from "next/link";
import React from "react";

const About1 = () => {
  return (
    <section className="agk-about pt-130 pb-80" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="agk-content-box style-one mb-50 pf_fadeup">
              <div className="section-title mb-20">
                <span className="sub-title">About us</span>
                <h2>Building what&apos;s next together with Kneoxt</h2>
              </div>
              <p>
                Kneoxt helps startups and growing businesses get off the ground
                with powerful websites, apps, and custom software. We work
                closely with you to turn ideas into real, working products — and
                support you every step of the way with smart design, clear
                strategy, and hands-on marketing help.
              </p>
              <p>
                From day one to launch and beyond, we&apos;re here to build and
                grow together. Whatever stage you&apos;re at, Kneoxt helps you
                move forward with confidence.
              </p>
              <ul>
                <li>
                  <div className="agenko-counter-box style-one">
                    <div className="content">
                      <h2 className="mb-10">
                        <span className="count">23</span>+
                      </h2>
                      <p>Projects Completed</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="agenko-counter-box style-one">
                    <div className="content">
                      <h2 className="mb-10">
                        <span className="count">20</span>+
                      </h2>
                      <p>Happy Customers</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="agk-image-box style-one mb-50 pf_fadeup">
              <div className="agk-image">
                <Image
                  src="/assets/images/digital-agency/about/about.jpg"
                  alt="img"
                  width={440}
                  height={532}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
