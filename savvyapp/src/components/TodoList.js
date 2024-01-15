// import React, { useState } from "react";
// import './TodoListStyle.css';
// import { Button, Container, FormControl, TextField } from "@mui/material";

// const TodoList = ({addtodo}) => {
//     const[activity,setActivity]=useState("");

//     const handleSubmit= (e)=>{
//         e.preventDefault();
//         addtodo(activity);
//     }
//   return (
//     <div>
//         <h3>My Todo List</h3>
//       <Container maxWidth="sm">
//         <form onSubmit={handleSubmit}>
//         <FormControl fullWidth={true}>
//           <TextField label="Create Activity" required={true} value={activity} onChange={(e)=>{
//             setActivity(e.target.value)
//           }}/>
//           <div className="btnContainer">
//           <Button className="btnStyle" variant="contained" color="primary" type="submit" style={{marginTop:"10px",width:"50%"}}>
//             ADD
//           </Button>
//           <Button className="btnStyle" variant="contained" color="primary" type="submit" style={{marginTop:"10px",width:"50%"}}>
//             Update
//           </Button>
//           </div>
//         </FormControl>
//         </form>
//       </Container>
//     </div>
//   );
// };

// export default TodoList;

//////////////////////////////////////////////////////
import React, { useState } from "react";
import './TodoListStyle.css';
import { Button, Container, FormControl, TextField } from "@mui/material";

const TodoList = ({addtodo}) => {
    const[activity,setActivity]=useState("");
    const [addActivity,setAddActivity]=useState([])

    const addData =()=>{
        // setAddActivity([...addActivity,activity])
        // console.log(addActivity);
        setAddActivity((addActivity)=>{
            const updatedList=[...addActivity,activity]
            console.log(updatedList);
            setActivity("");
            return updatedList;
        })
    }
  return (
    <div>
        <h3>My Todo List</h3>
      <Container maxWidth="sm">
        <form >
        <FormControl fullWidth={true}>
          <TextField label="Create Activity" required={true} value={activity} onChange={(e)=>{
            setActivity(e.target.value)
          }}/>
          <div className="btnContainer">
          <Button className="btnStyle" variant="contained" color="primary" type="submit" style={{marginTop:"10px",width:"50%"}} onClick={addData}>
            ADD
          </Button>
          <Button className="btnStyle" variant="contained" color="primary" type="submit" style={{marginTop:"10px",width:"50%"}}>
            Update
          </Button>
          </div>
        </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default TodoList;














//////////////////////////////////
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

