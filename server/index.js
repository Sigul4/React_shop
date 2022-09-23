import express from "express"

import {Db} from "./db.js";
import {routes} from "./routes.js";
import {itemsDbPath} from "./constants.js";
import { stringify } from "querystring";

const app = express();

const itemsDb = await new Db(itemsDbPath);

app.use(express.json())

app.get(routes.getItems, (req, res) => {
    res.send(JSON.stringify(itemsDb.value))
})

app.get(routes.getItem, function(req, res) {
    res.send(JSON.stringify(itemsDb.value.filter(elem => elem._id === req.params.id)));
});

const urlencodedParser = express.urlencoded({extended: false});

app.post(routes.createItem, urlencodedParser, (req, res) => {
    console.log('req.body => ',req.body)
    
    itemsDb.setData(`${JSON.stringify([...itemsDb.value,req.body.data])}`)
})
// [...itemsDb.value, req.body]
app.delete(routes.deleteItem, urlencodedParser, (req, res) => {
    console.log(req.body.data._id)
    let id = req.body.data._id
    itemsDb.setData(JSON.stringify(itemsDb.value.filter(el => {console.log(el._id !== id); return el._id !== id})))
    res.send(JSON.stringify(itemsDb.value))
})


app.listen(4000, () => {
    console.log("Server started on port: 4000")
})
