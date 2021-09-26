import React, { useState } from "react";

const sectionArray = [
  {
    tab: "Section1",
    content: "This is Section1",
    rating: 3.5,
  },
  {
    tab: "Section2",
    content: "This is Section2",
    rating: 1.2,
  },
  {
    tab: "Section3",
    content: "This is Section3",
    rating: 2.7,
  },
];

const UseTabs = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleButton = (index) => {
    setCurrentSection(index);
  };

  return (
    <>
      <h1>UseTabs</h1>
      {sectionArray.map((section, index) => {
        return (
          <button key={index} onClick={() => handleButton(index)}>
            {section.tab}
          </button>
        );
      })}
      <p>{sectionArray[currentSection].content}</p>
      <p>{sectionArray[currentSection].rating}</p>
    </>
  );
};

export default UseTabs;
