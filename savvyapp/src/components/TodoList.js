import React from "react";
import './TodoListStyle.css';
import { Button, Container, FormControl, TextField } from "@mui/material";

const TodoList = () => {
  return (
    <div>
        <h3>My Todo List</h3>
      <Container maxWidth="sm">
        <FormControl fullWidth={true}>
          <TextField label="Create Activity" required={true} />
          <Button className="btnStyle" variant="contained" color="primary" type="submit" style={{marginTop:"10px"}}>
            ADD
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default TodoList;


////////////
// import React, { useState } from 'react'
// const TodoList = () => {
//   const [input,setInput]= useState("");
//   const [addData,setAddData]=useState([]);
//   // function changehandle(e){
//   //   setInput(e.target.value);
//   //   console.log(e.target.value)

//   // }
//   function addActivity(){
//     // setAddData([...addData,input]);
//     // console.log(addData);
//     setAddData((addData)=>{
//       const updatedList=[...addData,input]
//       console.log(updatedList);
//       setInput("");
//       return updatedList;
//     })
//   }
//   function removeData(i){
//     let newArr =addData.filter((ele,id)=>{
//       return(
//         i != id
//       )
//     })
//     setAddData(newArr);
//   }
  
//   return (
//     <div>
//       <input type='text' placeholder='create activity' value={input} onChange={(e)=>{
//         setInput(e.target.value);
//       }}/>
//       <button onClick={addActivity}>Add Data</button>
//       <div className='container'>
//         <h3> Here is your list</h3>
//         {addData.map((val,i)=>{
//           return(
//             <>
//             <ul key={i}>
//               <li>{val}
//               <button onClick={()=>removeData(i)}>Remove Data</button>
//               </li>
//             </ul>
//             </>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default TodoList

