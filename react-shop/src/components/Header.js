import { AppBar, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"

const Header = () =>{



    return(
        <>
            <Box sx={{ flexGrow: 1,  }}>
                <AppBar position="static" style={{background:'rgba(255, 99, 71, 0)', boxShadow: '0,white'}}>
                    <Toolbar
                        style={{
                            display:'flex',
                            justifyContent:"center",
                            alignItems:'center',
                            padding:"20px"
                        }}
                    >
                        <Box style={{display:"flex", width:'100%', maxWidth:"900px",alignItems:'center',justifyContent:"space-between"}}>
                            <Typography  variant="h4">
                                <a href="http://localhost:3000/list" style={{color:"white"}} to={"/list"}><strong>SHOP</strong></a>
                            </Typography>
                        </Box>

                        
                        
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}   

export { Header }

