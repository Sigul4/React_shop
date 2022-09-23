import { Box, Button, Input } from "@mui/material";
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
const [fetchData, setFetchData] = React.useState([])

const submit = (e, fetchData,  setData) => {
    e.preventDefault()
    console.log(fetchData)
    fetch('/edit-comment', {
        method: 'POST',
        body: JSON.stringify({ fetchData }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        })
        .then(res => res.json())
        .then(json => setData(json.detchData))
    }



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

        <form style={{display: "block", height:"100%", }} onSubmit={(e) => submit(e, fetchData, setFetchData)}>
            <Box>
                <Typography variant="h4">Title</Typography>
                <Input 
                value={fetchData.title}
                onChange={e => setFetchData({ ...fetchData,id: _id, title: e.target.value })}
                type='text'>
                </Input>
            </Box>

            <Button type='submit'><h1>SUBMIT</h1></Button>|
        </form>

        <CardActions style={{display:"block"}}>
            {data?.comments
            ?data.comments.map((comment)=>{
                return(<Card style={{margin:10}}>
                            <p>{comment?.description}</p>
                            <p>{comment?.date}</p>
                        </Card>)
            })
            :""}
        </CardActions>
        </>
    ) : (
        ""
    )}
    </Card>
);
}
