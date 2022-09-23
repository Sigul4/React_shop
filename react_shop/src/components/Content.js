import { Redirect, Route, Switch } from "react-router-dom";
import {ProductPage} from "./ProductPage";
import { ProductsListView } from "./ProductsListView";

export const Content = () =>{
        return(
            <Switch className='Content' style={{paddingTop: "63px"}} >
                <Route  key={"list"}     path="/list"          component={ProductsListView}  /> 
                <Route  key={"product"}  path="/product/:_id"  component={ProductPage}/> 
                {/* <Redirect push to="/list"  /> */}
            </Switch>)}


