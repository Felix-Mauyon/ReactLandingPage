import "./CoreConcept.css"


function CoreConcepts({concept}){
    const {title, image, description} = concept
  return(
    <li>
      <img src={image}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
  }

export default CoreConcepts