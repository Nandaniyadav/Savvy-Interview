import {  CardContent, Card, Container, Typography, IconButton } from "@mui/material";
import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
                {/* check icon button */}
                <IconButton style={{float:"left"}}>
               <CheckIcon style={{ color:"green"}}/>
               </IconButton>
               <IconButton style={{float:"right"}}>
               <DeleteForeverIcon style={{color:"red"}}/>
               </IconButton>
                
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
