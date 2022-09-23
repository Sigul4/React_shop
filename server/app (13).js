const express require "express"

import {Db} from "./db.js";
import {routes} from "./routes.js";
import {itemsDbPath} from "./constants.js";

const app = express();
const itemsDb = new Db(itemsDbPath);

console.log(itemsDb)

app.get(routes.getItems, () => {
    res.send(itemsDb.value)
})

app.get(routes.getItem, () => {
    res.send(itemsDb.value)
})

app.post(routes.createItem, () => {
    itemsDb.setData([...itemsDb.value, newItem])
})

app.delete(routes.deleteItem, () => {
    itemsDb.setData(itemsDb.value.filter(el => el.id !== id))
})

app.put(routes.editItem, () => {

})


app.listen(4000, () => {
    console.log("Server started on port: 4000")
})
