import AddIcon from "@mui/icons-material/Add";
import { Input, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import * as React from "react";
import { submit } from "../helpers/onSubmit";

export default function ProductAdd({ products, addProduct }) {
  const [data, setData] = React.useState({});
  const [visibility, setVisibility] = React.useState("hidden");

  return (
    <Card sx={{ width: "300px", height: "700px", margin: "20px" }}>
      <Card
        style={{
          visibility: `${visibility}`,
          zIndex: "5",
          position: "fixed",
          width: "500px",
          height: "500px",
          top: "50%",
          left: "50%",
          marginTop: "-250px",
          marginLeft: "-250px",
        }}
      >
        <form
          style={{ display: "block", height: "100%" }}
          onSubmit={(e) => submit(e, data, addProduct, setData)}
        >
          <Box>
            <Typography variant="h4">Title</Typography>
            <Input
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              type="text"
            ></Input>
          </Box>
          <Box style={{ margin: "20px" }}>
            <Typography variant="h4">Count</Typography>
            <Input
              value={data.count}
              onChange={(e) => setData({ ...data, count: e.target.value })}
              type="number"
            ></Input>
          </Box>
          <Box style={{ margin: "20px" }}>
            <Typography variant="h4">Price</Typography>
            <Input
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
              type="number"
            ></Input>
          </Box>
          <Box style={{ margin: "20px" }}>
            <Typography variant="h4">Weight</Typography>
            <Input
              value={data.weight}
              onChange={(e) => {
                console.log(data);
                setData({ ...data, weight: e.target.value });
              }}
              type="number"
            ></Input>
          </Box>
          <Button type="submit">
            <h1>SUBMIT</h1>
          </Button>
          |
          <Button onClick={() => setVisibility("hidden")}>
            <h1>HIDE</h1>
          </Button>
        </form>
      </Card>

      <Button
        style={{ width: "100%", height: "100%" }}
        onClick={() => {
          setVisibility("visible");
        }}
      >
        <AddIcon style={{ width: "100", height: "100" }} />
      </Button>
    </Card>
  );
}
