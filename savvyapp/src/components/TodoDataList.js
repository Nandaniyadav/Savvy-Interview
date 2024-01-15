////////////////////////////////
import React, { useState } from "react";
const TodoDataList = () => {
  const [input, setInput] = useState("");
  const [addData, setAddData] = useState([]);
  // function changehandle(e){
  //   setInput(e.target.value);
  //   console.log(e.target.value)

  // }
  function addActivity() {
    // setAddData([...addData,input]);
    // console.log(addData);
    setAddData((addData) => {
      const updatedList = [...addData, input];
      console.log(updatedList);
      setInput("");
      return updatedList;
    });
  }
  function removeData(i) {
    let newArr = addData.filter((ele, id) => {
      return i != id;
    });
    setAddData(newArr);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="create activity"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addActivity}>Add Data</button>
      <div className="container">
        <h3> Here is your list</h3>
        {addData.map((val, i) => {
          return (
            <>
              <ul key={i}>
                <li>
                  {val}
                  <button onClick={() => removeData(i)}>Remove Data</button>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TodoDataList;
