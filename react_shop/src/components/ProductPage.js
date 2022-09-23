import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import SwipeableTextMobileStepper from "./Carusel";


export function ProductPage({
match: {
    params: { _id },
},
Post,
}) {
const [data, setData] = React.useState([])

React.useEffect(() => {
    fetch(`/get-item${_id}`)
    .then((res) => res.json())
    .then((data) => {
        setData(data[0]);
    });
}, []);

console.log("data", data);

return (
    <Card
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        margin: "20px",
    }}
    >
    {data ? (
        <>
        {data?.images ? (
            <SwipeableTextMobileStepper images={data.images} />
        ) : (
            <CardMedia
            component="img"
            alt="green iguana"
            height="350"
            image={`https://brilliant24.ru/files/cat/template_01.png`}
            />
        )}
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {data.title}
            </Typography>
            <h3>{data?.price ? data?.price + "$" : ""}</h3>
        </CardContent>
        <CardActions>
        </CardActions>
        </>
    ) : (
        ""
    )}
    </Card>
);
}
