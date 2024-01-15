import React, { useState } from "react";
import "./TodoListStyle.css";
import {Button,Card,Container,FormControl,TextField,IconButton, CardContent,Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [addActivity, setAddActivity] = useState([]);
  const [editDataList, setEditDataList] = useState(null);

//   Add data in todo List code
  const addData = () => {
    // setAddActivity([...addActivity,activity])
    // console.log(addActivity);
    setAddActivity((addActivity) => {
      const updatedList = [...addActivity, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  };

  //Delete data Todo List code

  const removeActivity = (i) => {
    const newArr = addActivity.filter((ele, id) => {
      return i != id;
    });
    setAddActivity(newArr);
  };

  // Edit data List code
  const updateData = (i) => {
    setActivity(addActivity[i]);
    setEditDataList(i);
  };
  return (
    <>
      <div>
        {/* Todo Heading */}
        <h3 className="todoHeading">My Todo List</h3>
        <Container maxWidth="sm">
          <form>
            <FormControl fullWidth={true}>
              <TextField
                label="Create Activity"
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
                  type="submit"
                  style={{ marginTop: "10px", width: "50%" }}
                  onClick={addData}
                >
                  ADD DATA
                </Button>
                <Button
                  className="btnStyle"
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ marginTop: "10px", width: "50%" }}
                  onClick={updateData}
                >
                  EDIT DATA
                </Button>
              </div>
            </FormControl>
          </form>
        </Container>
      </div>
      <div>
        <h3 style={{ marginTop: "30px" }}>Here is my Todo List</h3>
        {addActivity.map((val, i) => {
          return (
            <>
              <ul key={i}>
                <li>
                  <Container>
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
                          <IconButton style={{ float: "right" }}>
                            <DeleteForeverIcon
                              style={{ color: "red" }}
                              onClick={() => removeActivity(i)}
                            />
                          </IconButton>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
