import React, { useState } from "react";
import "./TodoListStyle.css";
import {
  Button,
  Card,
  Container,
  FormControl,
  TextField,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [addActivity, setAddActivity] = useState([]);
  const [updateDataList, setUpdateDataList] = useState(true);

  //   Add data in todo List code
  const addData = () => {
    if (!activity) {
      alert("please filled something into input box");
    } else {
      setAddActivity((addActivity) => {
        const updatedList = [...addActivity, activity];
        console.log(updatedList);
        setActivity("");
        return updatedList;
      });
    }
  };

  //Delete data Todo List code

  const removeActivity = (i) => {
    const newArr = addActivity.filter((ele, id) => {
      return id != i;
    });
    setAddActivity(newArr);
  };

  // Edit data List code
  const editItem = (i) => {
    let newEditUtem = addActivity.find((task) => {
      return task.i == i;
      setActivity(updateDataList.activity);
    });
    console.log(newEditUtem);
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
                label="What is the task today"
                required={true}
                value={activity}
                onChange={(e) => {
                  setActivity(e.target.value);
                }}
              />
              <div className="btnContainer">
                {updateDataList }
                <Button
                  className="btnStyle"
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{
                    marginTop: "10px",
                    width: "50%",
                    background: "#f3d052",
                    color: "#393c3d",
                  }}
                  onClick={addData}
                >
                  ADD DATA
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
                          <IconButton style={{ float: "right" }}>
                            <BorderColorIcon
                              style={{ color: "red" }}
                              onClick={() => editItem(i)}
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
