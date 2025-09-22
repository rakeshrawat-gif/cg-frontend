import React, { useState } from 'react';

import deskbaner from '../components/assets/images/driveandautom/deskbaner.jpg';
import mobbaner from '../components/assets/images/driveandautom/mobbaner.webp';
import wci1 from '../components/assets/images/driveandautom/wci1.png';
import wci2 from '../components/assets/images/driveandautom/wci2.png';
import wci3 from '../components/assets/images/driveandautom/wci3.png';

import varfrrqimg from '../components/assets/images/driveandautom/varfrrqimg.webp';
import varfreq1 from '../components/assets/images/driveandautom/varfreq1.svg';
import varfreq2 from '../components/assets/images/driveandautom/varfreq2.svg';
import varfreq3 from '../components/assets/images/driveandautom/varfreq3.svg';

import modular from '../components/assets/images/driveandautom/modular.webp';
import modul1 from '../components/assets/images/driveandautom/modul1.svg';
import modul2 from '../components/assets/images/driveandautom/modul2.svg';
import modul3 from '../components/assets/images/driveandautom/modul3.svg';

import softimg from '../components/assets/images/driveandautom/softimg.webp';
import soft1 from '../components/assets/images/driveandautom/soft1.svg';
import soft2 from '../components/assets/images/driveandautom/soft2.svg';
import soft3 from '../components/assets/images/driveandautom/soft3.svg';

import shaftimg from '../components/assets/images/driveandautom/shaft.webp';
import shaft1 from '../components/assets/images/driveandautom/shaft1.svg';
import shaft2 from '../components/assets/images/driveandautom/shaft2.svg';
import shaft3 from '../components/assets/images/driveandautom/shaft3.svg';

const DrivesAndAutomation = () => {

    return (
        <>
            <section className="inner-comoonbanner">
                <div className="comonban">
                    <picture>
                        <source media="(min-width:740px)" srcset={deskbaner} />
                        <img src={mobbaner} alt="" />  {/* Mobile*/}
                    </picture>
                </div>
            </section>

            <section className="commonfrst-sec subsidiaryMobbg">
                <div className="cust-container">
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item truncate"><a href="#">Business Solutions</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Drives and Automation</li>
                        </ol>
                    </div>

                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>Drives and Automation</h2>
                            <p>With over 40 years of experience in Drives & Automation Solutions, CG has been the force behind intelligent automation delivering reliable and energy-efficient solutions tailored to real-world needs. We bring together technical expertise and personal commitment to ensure every solution performs seamlessly in practice.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose-danda-sec driveauto-combg">
                <div className="cust-container">
                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>Why Choose Drives & Automation?</h2>
                        </div>
                    </div>
                    <div className="row whychssoe-auto-items tohidescrollbaronmobile">
                        <div className="col-md-4 col-sm-10 col-10">
                            <div className="esgSolution-sliditem">
                                <div className="soluitn-img esgSlide-img">
                                    <img src={wci1} alt="" />
                                </div>
                                <div className="whychssoe-auto-items-desc">
                                    <h4>Energy-efficient Solutions</h4>
                                    <p>Designed to optimise performance while reducing energy consumption and operating costs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-10 col-10">
                            <div className="esgSolution-sliditem">
                                <div className="soluitn-img esgSlide-img">
                                    <img src={wci2} alt="" />
                                </div>
                                <div className="whychssoe-auto-items-desc">
                                    <h4>Customer-Centric Approach</h4>
                                    <p>Tailored, smart solutions developed with a deep understanding of customer needs and industry demands.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-10 col-10">
                            <div className="esgSolution-sliditem">
                                <div className="soluitn-img esgSlide-img">
                                    <img src={wci3} alt="" />
                                </div>
                                <div className="whychssoe-auto-items-desc">
                                    <h4>Reliable & User-friendly Design</h4>
                                    <p>Robust, long-lasting products built for simplicity, efficiency, and worry-free operation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="varfrq-drivesec driveauto-combg">
                <div className="cust-container">
                    <div className="var-freq-inner">
                        <div className="var-freq-left">
                            <div className="common-heading-sec">
                                <div className="comon-head-inner">
                                    <h2>Variable Frequency Drives</h2>
                                    <p>CG’s Variable Frequency Drives optimise motor speed and torque, improving energy efficiency and reducing wear and tear for reliable and tailored performance across industrial applications.</p>
                                </div>
                            </div>

                            <div className="varfreq-items">
                                <div className="var-freq-item">
                                    <img src={varfreq1} alt="" />
                                    <p>Precision Motor<br/> Control</p>
                                </div>
                                <div className="var-freq-item">
                                    <img src={varfreq2} alt="" />
                                    <p>Advanced Modular<br/> Architecture</p>
                                </div>
                                <div className="var-freq-item">
                                    <img src={varfreq3} alt="" />
                                    <p>Robust<br/> Construction</p>
                                </div>
                            </div>
                        </div>
                        <div className="var-freq-right">
                            <div className="varfreq-img">
                                <img src={varfrrqimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="varfreq-cta">
                        <a href="#">Know more</a>
                    </div>
                </div>
            </section>

            <section className="varfrq-drivesec driveauto-combg">
                <div className="cust-container">
                    <div className="var-freq-inner">
                        <div className="var-freq-left">
                            <div className="common-heading-sec">
                                <div className="comon-head-inner">
                                    <h2>Modular Converters</h2>
                                    <p>CG’s Modular Converter Solutions offer flexible and reliable energy conversion across varied power levels, supporting storage, utilisation, and grid feedback with compact and efficient PEBBs.</p>
                                </div>
                            </div>

                            <div className="varfreq-items">
                                <div className="var-freq-item">
                                    <img src={modul1} alt="" />
                                    <p>Flexible Energy<br/> Management</p>
                                </div>
                                <div className="var-freq-item">
                                    <img src={modul2} alt="" />
                                    <p>Custom-Built for<br/> Your Needs</p>
                                </div>
                                <div className="var-freq-item">
                                    <img src={modul3} alt="" />
                                    <p>Compact &<br/> Efficient Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="var-freq-right">
                            <div className="varfreq-img">
                                <img src={modular} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="varfreq-cta">
                        <a href="#">Know more</a>
                    </div>
                </div>
            </section>

            <section className="varfrq-drivesec driveauto-combg">
                <div className="cust-container">
                    <div className="var-freq-inner">
                        <div className="var-freq-left">
                            <div className="common-heading-sec">
                                <div className="comon-head-inner">
                                    <h2>Soft Starters</h2>
                                    <p>CG’s Soft Starters regulate voltage at start-up, reducing mechanical stress and energy use while extending equipment life and ensuring smooth, efficient motor performance across industries.</p>
                                </div>
                            </div>

                            <div className="varfreq-items">
                                <div className="var-freq-item">
                                    <img src={soft1} alt="" />
                                    <p>Energy Efficiency &<br/> Cost Savings</p>
                                </div>
                                <div className="var-freq-item">
                                    <img src={soft2} alt="" />
                                    <p>Integrated Load<br/> Monitoring</p>
                                </div>
                                <div className="var-freq-item">
                                    <img src={soft3} alt="" />
                                    <p>Advanced Stop &<br/> Braking Control</p>
                                </div>
                            </div>
                        </div>
                        <div className="var-freq-right">
                            <div className="varfreq-img">
                                <img src={softimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="varfreq-cta">
                        <a href="#">Know more</a>
                    </div>
                </div>
            </section>

             <section className="varfrq-drivesec driveauto-combg">
                <div className="cust-container">
                    <div className="var-freq-inner">
                        <div className="var-freq-left">
                            <div className="common-heading-sec">
                                <div className="comon-head-inner">
                                    <h2>Shaft Power Monitors</h2>
                                    <p>CG’s Shaft Power Monitors are designed to detect underload conditions, providing an early warning system that supports proactive maintenance and helps prevent unexpected equipment failures</p>
                                </div>
                            </div>

                            <div className="varfreq-items">
                                <div className="var-freq-item">
                                    <img src={shaft1} alt="" />
                                    <p>Accurate Load<br/> Monitoring</p>
                                </div>
                                <div className="var-freq-item">
                                    <img src={shaft2} alt="" />
                                    <p>Optimised Pump<br/> Performance</p>
                                </div>
                                <div className="var-freq-item">
                                    <img src={shaft3} alt="" />
                                    <p>Simple, Targeted<br/> Protection</p>
                                </div>
                            </div>
                        </div>
                        <div className="var-freq-right">
                            <div className="varfreq-img">
                                <img src={shaftimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="varfreq-cta">
                        <a href="#">Know more</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DrivesAndAutomation;