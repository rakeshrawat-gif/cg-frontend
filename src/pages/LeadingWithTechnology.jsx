import trainImg from "../components/assets/images/technologyR&D/train.png";
import machineImg from "../components/assets/images/technologyR&D/machine.png";
import InnovationGrid from "./InnovationGrid";
import bannerImg from "../components/assets/images/technologyR&D/R&D1.png";

const LeadingWithTechnology = () => {
  return (
    // 1st section
    <>
      <section className="inner-comoonbanner">
        <div className="comonban">
          <img src={bannerImg} alt="Leadership and Top Management" />
        </div>
      </section>
      <div className="tech-wrapper commonfrst-sec">
        <div className="breadcrumb">
          Home &nbsp;|&nbsp; About CG &nbsp;|&nbsp;{" "}
          <span>Technology + R&D</span>
        </div>

        <h1 className="tech-title">Leading with Technology</h1>

        <p className="tech-subtitle">
          At CG, innovation is not just a goal; it's a legacy. Our
          state-of-the-art R&D Centres are the innovation engines behind our
          Strategic Business Units, dedicated to New Product Development and
          cutting-edge technological advancements.
        </p>

        <div className="tech-row">
          <div className="tech-image">
            <img src={trainImg} alt="Train" />
          </div>
          <div className="tech-text">
            <p className="tech-text-title">
              Staffed with highly qualified experts and equipped with robust
              infrastructure, our R&D ecosystem is powered by strong processes
              that drive consistent technological breakthroughs and business
              growth.
            </p>
            <p>
              Our journey in technology began with Colonel R.E.B. Crompton, our
              visionary founder and a pioneer in electrical engineering in the
              late 19th and early 20th centuries. Under his leadership, CG
              became the first pioneers to introduce electric locomotives in
              India, setting the stage for decades of innovation.
            </p>
          </div>
        </div>

        <div className="tech-row reverse">
          <div className="tech-text">
            <p className="tech-text-title">
              The formal establishment of CG’s R&D division in 1977 marked a
              significant milestone — an embodiment of our founder’s pioneering
              spirit. Since then, we’ve delivered multiple industry firsts and
              continue to bridge early-stage innovation with market-ready
              solutions. By collaborating closely with our business divisions
              and external partners, CG R&D secures our competitive edge in a
              global marketplace.
            </p>
            <p>
              Today, CG’s technology portfolio spans Transformers, Switchgear,
              Motors, Drives, and Automation Products, enabling smarter, more
              efficient systems across industries
            </p>
          </div>
          <div className="tech-image">
            <img src={machineImg} alt="Machine" />
          </div>
        </div>
      </div>

      <InnovationGrid />
    </>
  );
};

export default LeadingWithTechnology;
