import logo from './logo.svg';
import './App.css';
import CustomerRoutes  from './routes/CustomerRoutes';
import BartenderRouts  from './routes/BartenderRouts';



function App() {
  return (
    <div className="App">
      <header className="App-header">

      <CustomerRoutes/>
      <BartenderRouts/>

      </header>
    </div>
  );
}

export default App;
