import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/about";
import Models from "./components/Models";
import Model1 from "./components/models/model1";
import Models2 from "./components/models2";
import Models3 from "./components/models3";
import Models4 from "./components/models4";
import Models5 from "./components/models5";
import Model3 from "./components/models/model3"
import Model2 from "./components/models/model2";
import './components/css/analytics.css'
import Roofing from "./components/model1/roofing";
import Painting from "./components/model1/painting";
import Structural from "./components/model1/structural";
import Cabinet from "./components/model1/cabinet";
import Plumbing from "./components/model1/plumbing";
import Plumbing2 from "./components/model2/plumbing2";
import Structural2 from "./components/model2/structural2";
import Cabinet2 from "./components/model2/cabinet2";
import Roofing2 from "./components/model2/roofing2";
import Painting2 from "./components/model2/painting2";
import Model4 from "./components/models/model4";
import Model5 from "./components/models/model5";
import Model6 from "./components/models/model6";
import Models6 from "./components/models6";
import Cabinet3 from "./components/model3/cabinet3";
import Painting3 from "./components/model3/painting3";
import Plumbing3 from "./components/model3/plumbing3";
import Roofing3 from "./components/model3/roofing3";
import Structural3 from "./components/model3/structural3";
import Cabinet4 from "./components/model4/cabinet4";
import Painting4 from "./components/model4/painting4";
import Plumbing4 from "./components/model4/plumbing4";
import Roofing4 from "./components/model4/roofing4";
import Structural4 from "./components/model4/structural4";
import Cabinet5 from "./components/model5/cabinet5";
import Painting5 from "./components/model5/painting5";
import Plumbing5 from "./components/model5/plumbing5";
import Roofing5 from "./components/model5/roofing5";
import Structural5 from "./components/model5/structural5";
import Cabinet6 from "./components/model6/cabinet6";
import Painting6 from "./components/model6/painting6";
import Plumbing6 from "./components/model6/plumbing6";
import Roofing6 from "./components/model6/roofing6";
import Structural6 from "./components/model6/structural6";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/models" element={<Models/>}/>
        <Route path="/model1" element={<Model1/>}/>
        <Route path="/models2" element={<Models2/>}/>
        <Route path="/models3" element={<Models3/>}/>
        <Route path="/models4" element={<Models4/>}/>
        <Route path="/models5" element={<Models5/>}/>
        <Route path="/model3" element={<Model3/>}/>
        <Route path="/model2" element={<Model2/>}/>
        <Route path="/roofing" element={<Roofing/>}/>
        <Route path="/painting" element={<Painting/>}/>
        <Route path="/structural" element={<Structural/>}/>
        <Route path="/cabinet" element={<Cabinet/>}/>
        <Route path="/plumbing" element={<Plumbing/>}/>
        <Route path="/plumbing2" element={<Plumbing2/>}/>
        <Route path="/cabinet2" element={<Cabinet2/>}/>
        <Route path="/structural2" element={<Structural2/>}/>
        <Route path="/painting2" element={<Painting2/>}/>
        <Route path="/roofing2" element={<Roofing2/>}/>
        <Route path="/model4" element={<Model4/>}/>
        <Route path="/model5" element={<Model5/>}/>
        <Route path="/model6" element={<Model6/>}/>
        <Route path="/models6" element={<Models6/>}/>
        <Route path="/cabinet3" element={<Cabinet3/>}/>
        <Route path="/painting3" element={<Painting3/>}/>
        <Route path="/plumbing3" element={<Plumbing3/>}/>
        <Route path="/roofing3" element={<Roofing3/>}/>
        <Route path="/structural3" element={<Structural3/>}/>
        <Route path="/cabinet4" element={<Cabinet4/>}/>
        <Route path="/painting4" element={<Painting4/>}/>
        <Route path="/plumbing4" element={<Plumbing4/>}/>
        <Route path="/roofing4" element={<Roofing4/>}/>
        <Route path="/structural4" element={<Structural4/>}/>
        <Route path="/cabinet5" element={<Cabinet5/>}/>
        <Route path="/painting5" element={<Painting5/>}/>
        <Route path="/plumbing5" element={<Plumbing5/>}/>
        <Route path="/roofing5" element={<Roofing5/>}/>
        <Route path="/structural5" element={<Structural5/>}/>
        <Route path="/cabinet6" element={<Cabinet6/>}/>
        <Route path="/painting6" element={<Painting6/>}/>
        <Route path="/plumbing6" element={<Plumbing6/>}/>
        <Route path="/roofing6" element={<Roofing6/>}/>
        <Route path="/structural6" element={<Structural6/>}/>


       
      </Routes>
    </Router>
  );
}
 
export default App;
