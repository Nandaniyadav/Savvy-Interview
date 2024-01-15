import React, { useState } from "react";
import "./TodoListStyle.css";
import {Button,Card,Container,FormControl,TextField,IconButton,CardContent,Typography,} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [addActivity, setAddActivity] = useState([]);
  const [updateDataList, setUpdateDataList] = useState(null);

 
  const addData = () => {
    if (!activity) {
      alert("Please fill in something into the input box");
    } else {
      if (updateDataList !== null) {
        const updatedList = addActivity.map((item, index) =>
          index === updateDataList ? activity : item
        );
        setAddActivity(updatedList);
        setActivity("");
        setUpdateDataList(null);
      } else {
        setAddActivity([...addActivity, activity]);
        setActivity("");
      }
    }
  };

  // Delete data Todo List code
  const removeActivity = (index) => {
    const newArr = addActivity.filter(( id) => index !== id);
    setAddActivity(newArr);
  };

  // Edit data List code
  const editItem = (index) => {
    setUpdateDataList(index);
    setActivity(addActivity[index]);
  };

  return (
    <>
      <div>
        <h3 className="todoHeading">My Todo List</h3>
        <Container maxWidth="sm">
          <form>
            <FormControl fullWidth={true}>
              <TextField
                label="What is the task today"
                required={true}
                value={activity}
                onChange={(e) => {
                  setActivity(e.target.value);
                }}
              />
              <div className="btnContainer">
                <Button
                  className="btnStyle"
                  variant="contained"
                  color="primary"
                  type="button"
                  style={{
                    marginTop: "10px",
                    width: "50%",
                    background: "#f3d052",
                    color: "#393c3d",
                  }}
                  onClick={addData}
                >
                  {updateDataList !== null ? "Update" : "ADD DATA"}
                </Button>
                {setAddActivity !== null && (
                  <Button
                    className="btnStyle"
                    variant="contained"
                    color="primary"
                    type="button"
                    style={{
                      marginTop: "10px",
                      width: "50%"
                    }}
                    onClick={() => {
                      setActivity("");
                      setUpdateDataList(null);
                    }}
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </FormControl>
          </form>
        </Container>
      </div>
      <div>
        <h3 style={{ marginTop: "30px" }}>Here is my Todo List</h3>
        {addActivity.map((val, i) => {
          return (
            <Container key={i}>
              <Card
                variant="outlined"
                style={{ marginTop: "35px", background: "lightgray" }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {/* check icon button */}
                    <IconButton style={{ float: "left" }}>
                      <CheckIcon style={{ color: "green" }} />
                    </IconButton>
                    {val}
                    <IconButton
                      style={{ float: "right", marginRight: "10px" }}
                      onClick={() => editItem(i)}
                    >
                      <BorderColorIcon style={{ color: "blue" }} />
                    </IconButton>
                    <IconButton
                      style={{ float: "right" }}
                      onClick={() => removeActivity(i)}
                    >
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </IconButton>
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;

