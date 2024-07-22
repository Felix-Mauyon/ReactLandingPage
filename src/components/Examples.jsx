import TabButton from "./TabButton"
import { EXAMPLES } from "../data"
import { useState } from "react"
import Section from "./Section"
import Tabs from "./Tabs"

export default function Examples(){

    const [selected, setSelected] = useState()

    function handleClick(option){
      setSelected(option)
    }

    let tabContent = <p>Pls click a button</p>

    if (selected) { tabContent = <div id="tab-content"><h3>{EXAMPLES[selected].title}</h3>
      <p>{EXAMPLES[selected].description}</p>
      <pre>
      <code>
        {EXAMPLES[selected].code}
      </code>
      </pre>
      </div>}

    return(
        <Section title= "Examples" id='examples' >
            <Tabs ButtonsContainer='menu' button = {
                <>
                <TabButton click = {selected === 'components'} onClick={()=>handleClick("components")}>Components</TabButton>
                <TabButton click = {selected === 'jsx'} onClick={()=>handleClick("jsx")}>JSX</TabButton>
                <TabButton click = {selected === 'props'} onClick={()=>handleClick("props")}>Props</TabButton>
                <TabButton click = {selected === 'state'} onClick={()=>handleClick("state")}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    )
}