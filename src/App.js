import './App.css';
import TopContainer from './components/TopContainer/TopContainer';
import Header from './components/header/header';
import SkillContainer from './components/SkillContainer/skillContainer';
import ProjectContainer from './components/projectcontainer/projectContainer';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div>
     <Header />
     <TopContainer />
     <hr />
     <SkillContainer />
     <hr />
     <ProjectContainer />
     <hr />
     <Experience />
     <Contact />
   
    </div>
  );
}

export default App;
