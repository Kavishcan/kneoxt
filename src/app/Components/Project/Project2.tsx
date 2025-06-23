import Link from "next/link";
import React from "react";

const Project2 = () => {
  const chooseContent = [
    {
      img: "/assets/images/digital-agency/project/imagineSTEM.png",
      title: "imagineSTEM - A comprehensive STEM education platform",
      cat1: "Web Development",
      cat2: "Admin Dashboard",
      cat3: "UI/UX Design",
    },
    {
      img: "/assets/images/digital-agency/project/NatureTravel.png",
      title: "Heaven Nature Tours - A Travel Agency Website",
      cat1: "Web Development",
      cat2: "Landing Page",
      cat3: "UI/UX Design",
    },
    {
      img: "/assets/images/digital-agency/project/expendoraai.png",
      title: "ExpendoraAI - AI Powered Mobile App to handle Finances",
      cat1: "Mobile App",
      cat2: "AI",
      cat3: "UI/UX Design",
    },
    {
      img: "/assets/images/digital-agency/project/revisepluw.png",
      title: "RevisePlus - AI based Learning Platform",
      cat1: "Web Development",
      cat2: "AI",
      cat3: "UI/UX Design",
    },
  ];

  return (
    <section className="agk-project pt-130 pb-80" id="project">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title mb-60 pf_fadeup">
              <span className="sub-title">Our Work</span>
              <h2>Building Tomorrow Digital Experiences Today</h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="agk-button mb-60 float-lg-end pf_fadeup">
             
            </div>
          </div>
        </div>
        <div className="row">
          {chooseContent.map((item, i) => (
            <div key={i} className="col-lg-6">
              <div className="agenko-project-item style-one mb-45 pf_fadeup">
                <div className="thumbnail">
                  <img src={item.img} alt="Project Image" />
                  <div className="project-button">
                    <Link href="#">
                      <i className="bi bi-plus-lg"></i>
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="project-categories">
                    <a href="#">{item.cat1}</a>
                    <a href="#">{item.cat2}</a>
                    <a href="#">{item.cat3}</a>
                  </div>
                  <h4 className="title">
                    <p>{item.title}</p>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project2;
