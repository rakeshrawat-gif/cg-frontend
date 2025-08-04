import banner from "../components/assets/images/cgnews/cgnewsbaner.jpg";
import cgit1 from "../components/assets/images/cgnews/cgit1.jpg";
import cgit2 from "../components/assets/images/cgnews/cgit2.jpg";
import whtdigarw from "../components/assets/images/home/whtdigarw.png";

const CgInTheNews = () => {
const newsdataArr = [
    {newscat:'News', img:cgit1, newsdate:'22 January 2025', newsttile:'CG Drives & Automation expanding in France', newsdesc:'We are thrilled to announce that CG Drives & Automation is expanding in France as a part', newslink:''},
    {newscat:'News', img:cgit2, newsdate:'22 January 2025', newsttile:`CG Arm wins Rs 600 cr 'KAVACH' order from Indian Railways`, newsdesc:'Shares of CG Power and Industrial Solutions surged up to 2.63 per cent at Rs 754.80 per', newslink:''},
    {newscat:'News', img:cgit1, newsdate:'27 November 2024', newsttile:`CG Drives & Automation expanding in France`, newsdesc:'We are thrilled to announce that CG Drives & Automation is expanding in France as a part', newslink:''},
    {newscat:'News', img:cgit1, newsdate:'22 January 2025', newsttile:'CG Drives & Automation expanding in France', newsdesc:'We are thrilled to announce that CG Drives & Automation is expanding in France as a part', newslink:''},
    {newscat:'News', img:cgit2, newsdate:'22 January 2025', newsttile:`CG Arm wins Rs 600 cr 'KAVACH' order from Indian Railways`, newsdesc:'Shares of CG Power and Industrial Solutions surged up to 2.63 per cent at Rs 754.80 per', newslink:''},
    {newscat:'News', img:cgit1, newsdate:'27 November 2024', newsttile:`CG Drives & Automation expanding in France`, newsdesc:'We are thrilled to announce that CG Drives & Automation is expanding in France as a part', newslink:''}    
]

    return(
        <>
        <section className="inner-comoonbanner">
            <div className="comonban">
                <img src={banner} alt="" />
            </div>
        </section>
        <section className="commonfrst-sec">
            <div className="cust-container">
                <div className="breadcr-inner">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">CG in the News</li>
                    </ol>
                </div>

                <div className="common-heading-sec">
                    <div className="comon-head-inner">
                        <h2>CG in the News</h2>
                    </div>
                </div>


            <div className="news-section cg-inthe-news-sec">
                {newsdataArr.map((item, id) => (
                    <div className="news-card" key={id}>
                        <div className="news-image" style={{backgroundImage: `url(${item.img})`}}>
                            <span className="news-badge">{item.newscat}</span>
                            <div className="news-icon"><a href={item.newslink}><img src={whtdigarw} alt=""/></a></div>
                        </div>
                        <div className="news-content">
                            <div className="news-date">{item.newsdate}</div>
                            <div className="news-title">
                                <h4><a href={item.newslink}>{item.newsttile}</a></h4>
                                <p>{item.newsdesc}</p>
                            </div>
                            {/* <!-- <div className="news-desc"></div> --> */}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
        </>
    )
}

export default CgInTheNews;