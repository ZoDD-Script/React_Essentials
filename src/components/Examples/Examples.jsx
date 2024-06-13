import { useState } from "react";
import TabButton from "../TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section";
import './Examples.css'
import Tab from '../Tabs'

export default function Examples() {
  const [ selectedTopic, setSelectedTopic ] = useState()
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedButton)
  }

  let tabContent = <p>Please select a topic.</p>

  if(selectedTopic) {
    tabContent = <div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }

  return(
    <>
      <Section title='Examples' id="examples">
        <Tab 
        // ButtonContainer='menu' 
        button={
          <>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
          </>
        }>
          {tabContent}
        </Tab>
        {/* // method 3 */}

        {/* // method 1 */}
        {/* {!selectedTopic && <p>Please select a topic.</p>}
        {selectedTopic && <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>} */}

        {/* // method  */}
        {/* {!selectedTopic ? <p>Please select a topic.</p> : <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>}       */}
      </Section>
    </>
  )
}