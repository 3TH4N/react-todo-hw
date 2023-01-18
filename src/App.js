import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Editingtodo from './Components/Editingtodo'
import Todo from './Components/Todo'
import Todos from './Components/Todos'

function App() {
  return (
    <div className="App">
      <Editingtodo />
      <Todo />
      <Todos />
    </div>
  );
}

export default App;
