
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop/Shop';



function App() {
  return (
      <div className=''>
        <h4 className='text-center'>Lucky Shop Center</h4>
        <p className='text-center'>Chose Only 4 Product At a time</p>
        <Shop />
      </div>
  );
}

export default App;
