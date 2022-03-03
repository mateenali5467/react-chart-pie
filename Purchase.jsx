import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@mui/material";

import Chart from "react-apexcharts";

import {
  useState
} from "react";



const Purchase = ()=>{

   const options = {
     labels : [
       "Laptop",
       "watch",
       "Book",
       "Mobile",
       "Desktop"
     ]
   };

   const [series,setSeries] = useState([
     58,
     150,
     10,
     100,
     113
    ]);

  const design = (
    <>
      <Grid item xs={12} sm={3}>
        <Card style={{height:"200px"}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Purchase
            </Typography>
          </CardContent>
               
               <Chart  
                options={options}
                series={series}
                type="pie"
          
               />

        </Card>
      </Grid>
    </>
  );
  return design;
}

export default Purchase;
