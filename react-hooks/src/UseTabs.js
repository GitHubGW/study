import { useState, useEffect } from "react";

const sections = [
  {
    tab: "Section1",
    title: "This is Section1",
  },
  {
    tab: "Section2",
    title: "This is Section2",
  },
  {
    tab: "Section3",
    title: "This is Section3",
  },
];

const useTabs = (initialIndex, sections) => {
  console.log("useTabs");

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!sections || !Array.isArray(sections)) {
    return;
  }

  return { currentIndex: sections[currentIndex], setCurrentIndex };
};

function UseTabs() {
  // console.log(sections);

  // sections.map((section, index) => {
  //   console.log(index);
  //   console.log(section);
  // });

  const { currentIndex, setCurrentIndex } = useTabs(0, sections);

  return (
    <div>
      <h1>useTabs</h1>
      {sections.map((section, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
            }}
          >
            {section.tab}
          </button>
        );
      })}
      <h3>{currentIndex.title}</h3>
    </div>
  );
}

export default UseTabs;
