import './App.css';
import Search from './Search';
import Footer from "./Footer";

export default function App() {
  let time = new Date();
  let hour = time.getHours();

  return (
    <div className={hour >7 && hour <16 ? 'morning' : hour < 20 ? 'evening' : 'night'}>
      <div className="App">
      <Search defaultCity="Amsterdam" />
      <Footer />
      </div>
    </div>
  );
}
