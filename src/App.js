import "./styles/style.css";
import AboutPerson from "./components/AboutPerson";
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <div className="App">
        <AboutPerson />
        <Skills />
      </div>


      <div className="secondApp">
        <Circle color="blue" />
        <Circle color="red" />
        <Circle color="yellow" />
        <Circle color="blue" />
        <Circle color="red" />
        <Circle color="yellow" />
      </div>
    </div>
  );
}

const Circle = (props) => {
  return (
    <div className="circle" style={{ backgroundColor: props.color }}></div>
  );
};

export default App;
