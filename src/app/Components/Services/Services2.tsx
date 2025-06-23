import Link from 'next/link';
import React from 'react';

const iconClasses = [
    'bi bi-browser-edge',
    'bi bi-code-square',
    'bi bi-lightbulb',
    'bi bi-megaphone',
];

const iconPositions = [
    { top: '15%', right: '23%' },
    { top: '35%', left: '20%' },
    { bottom: '40%', right: '26%' },
    { bottom: '25%', left: '20%' },
];

const Services2 = () => {
    return (
        <section className="agk-services gray-dark pt-130 pb-100" style={{ position: 'relative', overflow: 'hidden' }}>
            <div
                className="d-none d-md-block"
                style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
            >
                {iconClasses.map((icon, idx) => (
                    <i
                        key={icon}
                        className={icon}
                        style={{
                            position: 'absolute',
                            fontSize: '5rem',
                            color: 'rgba(255,255,255,0.07)',
                            ...iconPositions[idx],
                        }}
                        aria-hidden="true"
                    />
                ))}
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title mb-65 pf_fadeup">
                            <span className="sub-title">Our Services</span>
                            <h2>
                                Building Tomorrow Digital <br />
                                Experiences Today
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-box mb-60 pf_fadeup">
                            <p>
                                Creating cutting-edge digital experiences that blend innovation and functionality to meet the evolving needs of tomorrow’s businesses and users
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">01</div>
                                <h3 className="title">Website Development</h3>
                            </div>
                            <div className="content">
                                <p>
                                    Business and corporate <span>web dashboard</span> focuses on creating intuitive, data-driven interfaces that enhance decision-making, streamline processes.
                                </p>
                            </div>
                            {/* <div className="card-button">
                                <Link href="/service/service-details" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
                                    </span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="offset-lg-4 col-lg-8">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">02</div>
                                <h3 className="title">E-commerce Solutions</h3>
                            </div>
                            <div className="content">
                                <p>
                                    Comprehensive <span>e-commerce solutions</span> designed to optimize user experience, boost conversions, and streamline online transactions. Our tailored.
                                </p>
                            </div>
                            {/* <div className="card-button">
                                <Link href="/service/service-details" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
                                    </span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">03</div>
                                <h3 className="title">Branding & Identity Design</h3>
                            </div>
                            <div className="content">
                                <p>
                                    Crafting <span>unique branding</span> and identity designs that reflect your brand’s values, build recognition, and create a lasting impression on audiences
                                </p>
                            </div>
                            {/* <div className="card-button">
                                <Link href="/service/service-details" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
                                    </span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="offset-lg-4 col-lg-8">
                        <div className="agenko-card-item style-one mb-30 pf_fadeup">
                            <div className="card-title">
                                <div className="sn-number">04</div>
                                <h3 className="title">Digital Marketing Solution</h3>
                            </div>
                            <div className="content">
                                <p>
                                    End-to-end <span>digital marketing solutions</span> to boost your online presence, engage your audience, and drive measurable growth through SEO, social media, and targeted campaigns.
                                </p>
                            </div>
                            {/* <div className="card-button">
                                <Link href="/service/service-details" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
                                    </span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services2;