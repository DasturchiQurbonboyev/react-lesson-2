import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='container'>
          <Navbar />
        </nav>
      </header>
      <main>
        <section className='container'>
          <Hero />
        </section>
      </main>
    </div>
  );
}

export default App;
