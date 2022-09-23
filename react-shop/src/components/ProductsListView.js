import { Card, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";


const ProductsListView = () =>{
    const [rangeValue, setRangeValue] = useState([0, 100]);
    const [sortValue,   setSortValue] = useState(10);
    const [list,        setList] = useState([])
    const [products, setProducts] =useState([])
    // let products
    
    useEffect(()=>{
        fetch('/get-items')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setProducts(data)
        })
    },[])


    useEffect(()=>{
        setList(products)
    },[products])
    
    
    const onSort = (e) => {
        const value = e.target.value
        setSortValue(value)

        if(value === 10){
            products.sort(function (a, b) {
                if (a.title > b.title) {
                return 1;
                }
                if (a.title < b.title) {
                return -1;
                }
                return 0;
            })
        }
        if(value === 20){
            products.sort(function (a, b) {
                if (a.title > b.title) {
                return -1;
                }
                if (a.title < b.title) {
                return 1;
                }
                return 0;
            })
        }
        if(value === 30){
            products.sort(function (a, b) {
                if (a.price > b.price) {
                return 1;
                }
                if (a.price < b.price) {
                return -1;
                }
                return 0;
            })
        }
        if(value === 40){
            products.sort(function (a, b) {
                if (a.price > b.price) {
                return -1;
                }
                if (a.price < b.price) {
                return 1;
                }
                return 0;
            })
        }
    }
    

    const MenuProps = {
        PaperProps: {
            style: {
            maxHeight: 200,
            width: 50,
            },
        },
    };    

    function valuetext(value) {
        return `${value}°C`;
    }
    
    return(
        <Box sx={{width:"100%",height:"100%", display: 'flex', alignItems:"center", justifyContent: 'center',}}>
            <Box style={{
                width:"100%",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems:"center",
                padding: "40px",
                maxWidth:'1200px',
                flexWrap: "wrap"
            }}>
                <Card style={{display:"flex", margin:"0, auto", justifyContent:"space-evenly", alignItems:"center", width:"100%", height: "100px"}}>
                    
                    <Select
                    defaultValue={158}
                    value={sortValue}
                    onChange={(e) => onSort(e)}
                    MenuProps={MenuProps}
                    style={{height:"50px", width:"200px"}}
                    >
                        <MenuItem value={10}>от А до Я           </MenuItem>
                        <MenuItem value={20}>от Я до А           </MenuItem>
                        <MenuItem value={30}>от дешёвых к дорогим</MenuItem>
                        <MenuItem value={40}>от дорогим к дешёвым</MenuItem>
                    </Select>
                </Card>
                <ProductsList products={products} />
            </Box>
        </Box>
    )
}   

export { ProductsListView };

