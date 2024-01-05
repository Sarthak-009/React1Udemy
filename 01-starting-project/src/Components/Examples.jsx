import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  // const [selectedTopic, setSelectedTopic] = useState("Components");
  const [selectedTopic, setSelectedTopic] = useState();

  // let tabContent='please click a button';
  function handleSelect(selectedButton) {
    console.log(selectedTopic);
    setSelectedTopic(selectedButton);
    // tabContent = selectedButton;
  }
  //  1st approach to write code for dynamic condition*********************************************
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="EXAMPLES" id="examples">
      <Tabs
        //ButtonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "Components"}
              onClick={() => handleSelect("Components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "JSX"}
              onClick={() => handleSelect("JSX")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "Props"}
              onClick={() => handleSelect("Props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "State"}
              onClick={() => handleSelect("State")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      {/* 2nd approach to write code for dynamic condition*********************************************
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="table-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
      {/* 3rd approach to write code for dynamic condition*********************************************
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="table-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
    </Section>
  );
}
