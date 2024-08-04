
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Post from './components/Post/Post';
import Exercise from './components/Exercise/Exercise';
import Editor from './components/Editor/Editor';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Hero/>
        <Post/>
        <Exercise/>
        <Editor/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
