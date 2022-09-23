import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SwipeableTextMobileStepper from './Carusel';
import { deletePost } from '../helpers/onDelete';



export default function ProductCard({product, onDelete}) {
    const data = product.product
    
    return (
        <Card sx={{ width: "300px", height: "700px" ,margin:"20px" }}>
            <a href={`/product/${data._id}`}>
                {data?.images 
                ?<SwipeableTextMobileStepper images={data?.images}/>
                :<CardMedia
                    component="img"
                    alt="green iguana"
                    height="350"
                    image={`https://brilliant24.ru/files/cat/template_01.png`}
                />}
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    {data?.title.slice(0, 15)}{data?.title.length > 15 ? "..." : ''}
                    </Typography>
                    <h3>{data?.price ? data?.price + "$": ''}</h3>
                    <Typography variant="body2" color="text.secondary">
                    {data?.parent}
                    </Typography>
                </CardContent>
            </a>
                <CardActions>
                    <Button onClick={(e) => deletePost(e,onDelete,data)} >DELETE</Button>
                </CardActions>
                
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
        </Card>
    );
}
