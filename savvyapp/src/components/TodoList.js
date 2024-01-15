import React from "react";
import './TodoListStyle.css';
import { Button, Container, FormControl, TextField } from "@mui/material";

const TodoList = () => {
  return (
    <div>
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
