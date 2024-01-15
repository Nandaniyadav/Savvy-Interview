// import { useState } from 'react';
// import './App.css';
// import TodoDataList from './components/TodoDataList';
// import TodoHeader from './components/TodoHeader';
// import TodoList from './components/TodoList';

// function App() {
//   const[todos,setTodos]=useState([]);


//   // add a todo
//   function addtodo(activity){
//     console.log(activity)
//   }
//   return (
//     <div className="App">
//       <TodoHeader/>
//       <TodoList addtodo={addtodo}/>
//       <TodoDataList todos={todos}/>
//     </div>
//   );
// }

// export default App;

//////////////////////////

import { useState } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <TodoHeader/>
      <TodoList />
    </div>
  );
}

export default App;

