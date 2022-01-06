import '../css/App.css';
import About from './Content/About';
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
      </main>
    </div>
  );
}

export default App;
