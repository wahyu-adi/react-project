import "./App.css";
import Navbari from "./component/navbar";
import Intro from "./component/intro";
import Hiro from "./component/hiro";
import Content from "./component/content";
import Contact from "./component/contact";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div clasName="App">
        <Navbari />
        <Intro />
      </div>
      <div id="Main" className="d-none">
        <Hiro />
        <Content />
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

// const Main = document.getElementById("Main");
// document.getElementById("Home").onclick = function () {
//   Home()
// };
// function Home() {
//   Main.classList.toggle("d-none");
// }

export default App;
