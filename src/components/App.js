import '../css/App.css';
import About from './Content/About';
import Projects from './Content/Projects/Projects';
import Skills from './Content/Skills';
// import '../css/reset.css';
import Header from './Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <main role="main">
        <About/>
        <Skills/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
