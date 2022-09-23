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

app.post(routes.editComment,urlencodedParser, (req, res) => {
    console.log('req.body',req.body.fetchData)
    const ourGood = itemsDb.value.filter(elem => elem._id === req.body.fetchData.id)
    const ourGoods = itemsDb.value.filter(elem => elem._id !== req.body.fetchData.id)
    console.log('ourGood',ourGood,ourGoods)
    console.log(ourGood[0].comments = [...ourGood[0]?.comments, {id: new Date().valueOf(),description:req.body.fetchData.title}])
    console.log(`${JSON.stringify([...ourGoods,ourGood])}`)
    itemsDb.setData(`${JSON.stringify([...ourGoods,ourGood])}`)
})

app.delete(routes.deleteItem, urlencodedParser, (req, res) => {
    console.log(req.body.data._id)
    let id = req.body.data._id
    itemsDb.setData(JSON.stringify(itemsDb.value.filter(el => {console.log(el._id !== id); return el._id !== id})))
    res.send(JSON.stringify(itemsDb.value))
})


app.listen(4000, () => {
    console.log("Server started on port: 4000")
})
