import reactLogo from "../../assets/react-core-concepts.png"
import "./Header.css"

function Header() {
    const words = ["Fundamental", "Crucial", "Core"]
    let randWord = Math.floor(Math.random()*words.length)
    return (
      <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {words[randWord]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    )
  }

  export default Header
