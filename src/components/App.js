import '../css/App.css';
import About from './Content/About';
// import '../css/reset.css';
import Header from './Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <main role="main">
        <About/>
      </main>
    </div>
  );
}

export default App;
