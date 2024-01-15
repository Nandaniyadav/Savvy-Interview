import './App.css';
import TodoDataList from './components/TodoDataList';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoHeader/>
      <TodoList/>
      <TodoDataList/>
    </div>
  );
}

export default App;
