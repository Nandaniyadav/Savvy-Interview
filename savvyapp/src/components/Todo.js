import {  CardContent, Card, Container, Typography, IconButton } from "@mui/material";
import React from "react";
import CheckIcon from '@mui/icons-material/Check';

const Todo = () => {
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ marginTop: "35px", background: "lightgray" }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
                <IconButton>
               <CheckIcon style={{ color:"green"}}></CheckIcon> 
                </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
