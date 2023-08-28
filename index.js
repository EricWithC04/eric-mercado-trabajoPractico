import app from "./app.js"
const port = process.env.PORT
import sequelize from "./relations.js"

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server listen on port ${port}`)
    })
})