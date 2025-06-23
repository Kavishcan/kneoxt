import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="agenko-footer gray-dark pt-50 primary-black-bg">
      <div className="shape shape-blur_one">
        <span></span>
      </div>
      <div className="shape shape-blur_two">
        <span></span>
      </div>

      <div className="footer-widget-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer-about-widget mb-40 pf_fadeup">
                <div className="footer-content">
                  <div className="footer-logo">
                    <a href="#">
                      {" "}
                      <Image
                        src="/assets/images/FullLogoDarkBG.svg"
                        alt="img"
                        width={151}
                        height={40}
                      />
                    </a>
                  </div>
                  <p>
                    Kneoxt creative digital agency delivering innovate web
                    Development marketing.
                  </p>
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                      <label>
                        <i className="far fa-envelope"></i>
                      </label>
                      <button className="theme-btn style-two">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-contact-info-widget mb-40 pf_fadeup">
                <div className="footer-content mb-25">
                  <h4 className="widget-title">Main Address</h4>
                  <p>11 Samagi Mawatha, Moratuwa</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-md-5">
                  <div className="footer-widget footer-nav-widget mb-40 pf_fadeup">
                    <div className="footer-content mb-35">
                      <h4 className="widget-title">Our Link</h4>
                      <ul className="footer-nav">
                        <li>
                          <Link href="#about">About us</Link>
                        </li>
                        <li>
                          <Link href="#services">Services</Link>
                        </li>
                        <li>
                          <Link href="#project">Our Project</Link>
                        </li>
                        <li>
                          <Link href="#process">Process</Link>
                        </li>
                        <li>
                          <Link href="#faq">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="footer-widget footer-contact-widget mb-40 pf_fadeup">
                    <div className="footer-content">
                      <h4 className="widget-title">Contact</h4>
                      <div className="agenko-iconic-box style-three mb-30">
                        <div className="icon">
                          <i className="bi bi-envelope"></i>
                        </div>
                        <div className="content">
                          <h6>Email</h6>
                          <p>
                            <a href="mailto:kneoxt@gmail.com">
                              kneoxt@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="agenko-iconic-box style-three">
                        <div className="icon">
                          <i className="bi bi-telephone"></i>
                        </div>
                        <div className="content">
                          <h6>Phone</h6>
                          <p>
                            <a href="tel:+94-784672933">+94-784672933</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="copyright-text">
            <p>
              &copy; 2025 <span>Kneoxt</span> - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
