import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Work from './components/work';
import Project1 from './components/project1'
import Project2 from './components/project2'
import Project3 from './components/project3'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
