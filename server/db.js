import fs from "fs"

export class Db {
    constructor(path) {
        this.path = path

        const jsonFile = fs.readFileSync(path)
        let jsonData;


        try {
            jsonData = JSON.parse(jsonFile)
        } catch (err) {
            console.error("error >> ", err)
        }

        this.value = jsonData;
    }

    async setData(newValue){
        this.value = newValue
        await fs.writeFileSync(this.path, this.value)
    }
}
