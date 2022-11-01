import './App.css';
import reviews from './data'
import Reviews from './reviews'


function App() {
  return (
    <main>
      <section className='container'>
      <div className='title'>
        <h2>Our reviews</h2>
        <div className='underline'>
        </div>
        <Reviews info={reviews}/>
      </div>
    </section>
    </main>
  );
}

export default App;
