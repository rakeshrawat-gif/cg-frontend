import React, { useState } from "react";
import Netherlands from "../components/assets/images/technologyR&D/Netherlands.jpg";
import trinidad from "../components/assets/images/technologyR&D/Trinidad.jpg";
import USA from "../components/assets/images/technologyR&D/USA.jpg";
import Germany from "../components/assets/images/technologyR&D/germany.jpg";
import Italy from "../components/assets/images/technologyR&D/Italy.jpg";
import Oman from "../components/assets/images/technologyR&D/omen.jpg";
import arrow from "../components/assets/images/technologyR&D/Icon.png";
import LocationIcn from "../components/assets/images/technologyR&D/Address.png";

const projectData = [
  {
    title: "Netherlands",
    image: Netherlands,
    description:
      "CG Emotron-powered 24-ton lifting winch for windmill installations at sea",
  },
  {
    title: "Trinidad and Tobago, West Indies",
    image: trinidad,
    description:
      "CG Emotron-powered 24-ton lifting winch for windmill installations at sea",
  },
  {
    title: "Utah, USA",
    image: USA,
    description:
      "CG Emotron-powered 24-ton lifting winch for windmill installations at sea",
  },
  {
    title: "Germany",
    image: Germany,
    description:
      "CG Emotron-powered 24-ton lifting winch for windmill installations at sea",
  },
  {
    title: "Marzanello, Italy",
    image: Italy,
    description:
      "CG Emotron-powered 24-ton lifting winch for windmill installations at sea",
  },
  {
    title: "Oman",
    image: Oman,
    description:
      "CG Emotron-powered 24-ton lifting winch for windmill installations at sea",
  },
];

const InnovationGrid = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (item) => setSelectedCard(item);
  const closeModal = () => setSelectedCard(null);
  return (
    <section className="innovation-section">
      <div className="innovation-header">
        <h2>Innovation in Focus</h2>
        <a href="#" className="view-all-link">
          View All{" "}
          <span className="arrow">
            <img src={arrow} alt="arrow" />
          </span>
        </a>
      </div>
      <p className="subtitle">
        At CG, we transform problems into opportunities, developing future-ready
        solutions that drive meaningful impact in the real world.
      </p>

      <div className="grid">
        {projectData.map((item, index) => (
          <div className="card" key={index} onClick={() => openModal(item)}>
            <img src={item.image} alt={item.title} />
            <div className="card-overlay">
              <img src={LocationIcn} alt="location" className="location-icon" />
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <img src={selectedCard.image} alt={selectedCard.title} />
            <div className="modal-description">
              <img src={LocationIcn} alt="location" className="location-icon" />
              <span className="title">{selectedCard.title}</span>
              <span className="separator">|</span>
              <span>{selectedCard.description}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InnovationGrid;
