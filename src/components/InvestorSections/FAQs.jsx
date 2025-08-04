import React, { useEffect, useRef, useState } from "react";
import closeIcn from "../assets/images/Investors/close.png";
import openIcn from "../assets/images/Investors/plus.png";
import leftArrow from "../assets/images/Investors/leftarrow.png";
import rightArrow from "../assets/images/Investors/rightarrow.png";

const faqData = {
  "Change of Address": {
    highlight: {},
    faqs: [
      {
        q: "What is the procedure to change my address in the Company’s records?",
        a: (
          <>
            "Kindly send a request letter signed by the shareholders (including
            all joint-holders in the same order in which names appear on the
            share certificate) giving the new address along with the Pin code.
            Shareholders are also requested to quote their folio number and
            furnish their PAN card along with identity proof such as
            self-attested copies of Ration card / Passport / Latest Electricity
            or Telephone Bill / Bank Statement / Voter’s Identity card.{" "}
            <a href="#">
              Click here to download a format of the Request Letter.
            </a>
            <br />
            <br />
            You will receive a confirmation from our R & T Agent of the change
            of address within 15 days of the receipt of your request letter. In
            case you do not receive the same, please feel free to contact our
            Investor Services Department for verifying the status. If shares are
            held in dematerialised form, information about change of address
            needs to be sent to the Depository Participant concerned. Your
            Depository Participant will pass on this information to the Company
            every Friday on the basis of which we will process corporate actions
            such as dispatch of Annual Report or payment of dividend.",
          </>
        ),
      },
      {
        q: "Do joint-holders need to sign the request for a change of address?",
        a: "Yes, all joint-holders must sign in the same order as registered with the company.",
      },
      {
        q: "Can there be multiple addresses for a single folio?",
        a: "No, only one address can be registered for each folio.",
      },
      {
        q: "How do I confirm that my address change has been effected?",
        a: "You will receive confirmation within 15 days or can contact our Investor Services team.",
      },
    ],
  },
  "Dematerialization of Share": {
    highlight: {},
    faqs: [
      {
        q: "Which DP should I choose?",
        a: "You can choose any SEBI-registered DP such as NSDL or CDSL affiliated brokers.",
      },
      {
        q: "How long does the demat process take?",
        a: "Usually completed within 15 days after verification.",
      },
    ],
  },
  Dividend: {
    highlight: {},
    faqs: [
      {
        q: "What if I haven’t received my dividend?",
        a: "Contact our Investor Services with your folio details or DP ID.",
      },
      {
        q: "How is dividend paid?",
        a: "Via ECS/direct credit or dividend warrant sent to your registered address.",
      },
    ],
  },
  "Loss of Share Certificates": {
    highlight: {},
    faqs: [
      {
        q: "Will I get a duplicate certificate?",
        a: "Yes, after verification and submission of required documents.",
      },
    ],
  },
  Miscellaneous: {
    highlight: {},
    faqs: [
      {
        q: "Can I update email or bank details online?",
        a: "Yes, through your Depository Participant or by sending a request to our R&T Agent.",
      },
    ],
  },
  Transposition: {
    highlight: {},
    faqs: [
      {
        q: "How do I request for transposition?",
        a: "Fill out the Transposition Request Form and submit it with the original share certificate.",
      },
    ],
  },
};

const FAQs = () => {
  const tabs = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const tabRef = useRef();

  // Update on resize to check mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTabs = (direction) => {
    const scrollAmount = 150;
    if (tabRef.current) {
      tabRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const current = faqData[activeTab];

  return (
    <div className="faq-container">
      {/* <div className="faq-tab-wrapper">
        <button className="scroll-btn left" onClick={() => scrollTabs("left")}>
          <img src={leftArrow} alt="Left" />
        </button>
        <div className="faq-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`faq-tab ${tab === activeTab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          className="scroll-btn right"
          onClick={() => scrollTabs("right")}
        >
          <img src={rightArrow} alt="Right" />
        </button>
      </div> */}
      <div className="faq-tab-wrapper">
        {/*  Hide arrows on mobile */}
        {!isMobile && (
          <button
            className="scroll-btn left"
            onClick={() => scrollTabs("left")}
          >
            <img src={leftArrow} alt="Left" />
          </button>
        )}

        <div className="faq-tabs" ref={tabRef}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`faq-tab ${tab === activeTab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {!isMobile && (
          <button
            className="scroll-btn right"
            onClick={() => scrollTabs("right")}
          >
            <img src={rightArrow} alt="Right" />
          </button>
        )}
      </div>

      <div className="faq-accordion">
        {current.faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openIndex === i ? "highlighted" : ""}`}
          >
            <div
              className={`faq-question ${openIndex === i ? "open" : ""}`}
              onClick={() => handleAccordion(i)}
            >
              {item.q}
              <span className="accordion-icon">
                {/* {openIndex === i ? "−" : "+"} */}
                <img
                  src={openIndex === i ? closeIcn : openIcn}
                  alt={openIndex === i ? "Close" : "Open"}
                  className="accordion-icon-img"
                />
              </span>
            </div>

            {openIndex === i && (
              <>
                <div className="faq-highlight-box">
                  <h4>{current.highlight.question}</h4>
                  <div className="faq-highlight-answer">
                    {current.highlight.answer}
                  </div>
                </div>
                <div className="faq-answer">{item.a}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
