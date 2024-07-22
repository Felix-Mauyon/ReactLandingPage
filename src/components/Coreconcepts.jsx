import { CORE_CONCEPTS } from "../data"
import CoreConcepts from "./CoreConcepts/CoreConcept"
import Section from "./Section"

export default function Coreconcepts(){
    return(
        <Section title='Core Concepts' id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((concept, index)=>{ return <CoreConcepts key={index} concept = {concept}/>})}
        </ul>
      </Section>
    )
}