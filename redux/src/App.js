
import './css/main.css';
import Listetask from './component/Listetask';
import Addtask from './component/Addtask';




function App() {
  return (
    <div className="App">
      <h1>task manager</h1>
      <Addtask/>
     <Listetask/>
   
    </div>
  );
}

export default App;
