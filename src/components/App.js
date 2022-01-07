import '../css/App.css';
// import '../css/reset.css';
import Header from './Header/Header';
import About from './Content/About';
import Skills from './Content/Skills';
import Projects from './Content/Projects/Projects';
import Resume from './Content/Resume';

function App() {
  return (
    <div>
      <Header/>
      <main role="main">
        <div id="about">
          <About/>
        </div>
        <div id="skills">
          <Skills/>
        </div>
        <div id="projects">
          <Projects/>
        </div>
        <div id="resume">
          <Resume/>
        </div>
      </main>
    </div>
  );
}

export default App;
