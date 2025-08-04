
import banner from "../components/assets/images/about-ourpurposeandval/ourvalbaner.jpg";
import ovic1 from "../components/assets/images/about-ourpurposeandval/ovic1.svg";
import ovic2 from "../components/assets/images/about-ourpurposeandval/ovic2.svg";
import ovic3 from "../components/assets/images/about-ourpurposeandval/ovic3.svg";
import ovic4 from "../components/assets/images/about-ourpurposeandval/ovic4.svg";
import owic1 from "../components/assets/images/about-ourpurposeandval/owic1.svg";
import owic2 from "../components/assets/images/about-ourpurposeandval/owic2.svg";
import owic3 from "../components/assets/images/about-ourpurposeandval/owic3.svg";
import edgelogo from "../components/assets/images/about-ourpurposeandval/edgelogo.png";


const AboutOurPurposeAndValue = () => {

    const valuesSecData = [
        {img:ovic1, title: 'Care with Respect', desc:'We foster a culture of empathy, inclusivity, and trust where every individual feels valued.'},
        {img:ovic2, title: 'Ownership Mindset', desc:'We take full accountability for our actions, results, and the impact we create.'},
        {img:ovic3, title: 'Humility', desc:'We remain open-minded, continuously learn, and value diverse perspectives and contributions.'},
        {img:ovic4, title: 'Integrity', desc:'We do the right thing, always honestly, ethically, and transparently.'},
        {img:ovic4, title: 'Customer Centricity', desc:'We put customers at the heart of everything we do, creating value through innovation and collaboration.'}
    ];

    const workingedgedata = [
        {img:owic1, title:'Engage', desc:'Align people and goals with shared business priorities.'},
        {img:owic2, title:'Deliver', desc:'Drive execution through structured reviews, daily management, and KPI- driven actions.'},
        {img:owic3, title:'Grow', desc:'Build capabilities and foster innovation to fuel long-term growth.'},
        {img:owic3, title:'Excel', desc:'Embed a culture of high performance through regular reviews and measurable outcomes.'}
    ]

    return(
    <>

     <section className="inner-comoonbanner">
        <div className="comonban">
            <img src={banner} alt=""/>
        </div>
    </section>

    <section className="commonfrst-sec">
        <div className="cust-container">
            <div className="breadcr-inner">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">About CG</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Our Purpose and Values</li>
                </ol>
            </div>

            <h2 className="outline-heading">our purpose</h2>

            <div className="common-heading-sec">
                <div className="comon-head-inner">
                    <h2>Transforming your needs into smart solutions for an enhanced quality of life.</h2>
                    <p>At CG, our purpose is to transform your needs into smart solutions that enhance everyday life. Guided by our EDGE operating rhythm and core values, we drive performance, foster innovation, and build a culture rooted in respect, ownership, and customer centricity.</p>
                </div>
            </div>

            

        </div>
    </section>

    <section className="ourvalues-sec">
      <div className="cust-container">
            <h2 className="outline-heading">our values</h2>
            <div className="common-heading-sec">
                <div className="comon-head-inner">
                    <p>Values form the foundation of any sustainable organization and serve as a guiding force for individuals at every level. At CG, our business philosophy is in the following values.</p>
                </div>
            </div>


            <div className="values-section">
              <div className="values-grid">
                {valuesSecData.map((item, id) =>(
                    <div className="value-card" key={id} >
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
              </div>
            </div>
      </div>
    </section>

     <section className="ourvalues-sec comntbmargn">
      <div className="cust-container">
            <h2 className="outline-heading">our way of working</h2>
            <div className="common-heading-sec">
                <div className="comon-head-inner">
                    <p><strong>EDGE</strong> is now embedded across all levels—from leadership to the shop floor—serving as the backbone of our daily operations. More than just a framework, it defines how we work to drive sustainable results and continuous improvement.</p>
                </div>
            </div>
            

            <div className="edgelogosec">
              <img src={edgelogo} alt="" />
            </div>

            <div className="values-section valuesectionredu-card">
              <div className="values-grid">
                {workingedgedata.map((item, id) =>(
                    <div className="value-card" key={id} >
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
                {/* <div className="value-card">
                  <img src={owic1} alt="Care with Respect" />
                  <h3>Engage</h3>
                  <p>Align people and goals with shared business priorities.</p>
                </div>
                <div className="value-card">
                  <img src={owic2} alt="Ownership Mindset" />
                  <h3>Deliver</h3>
                  <p>Drive execution through structured reviews, daily management, and KPI- driven actions.</p>
                </div>
                <div className="value-card">
                  <img src={owic3} alt="Humility" />
                  <h3>Grow</h3>
                  <p>Build capabilities and foster innovation to fuel long-term growth.</p>
                </div>
                <div className="value-card">
                  <img src={owic3} alt="Integrity" />
                  <h3>Excel</h3>
                  <p>Embed a culture of high performance through regular reviews and measurable outcomes.</p>
                </div> */}
              </div>
            </div>
      </div>
    </section>
    </>
    );
}

export default AboutOurPurposeAndValue;