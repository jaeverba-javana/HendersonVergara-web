// Start http server
import app from "./server.js";
import {PORT} from "./utils/constants.js";
// import gl from "greenlock-express";
// import {dirname} from "node:path";
// import {fileURLToPath} from "node:url";

/*const greenlock = gl.init({
    packageRoot: dirname(fileURLToPath(import.meta.url)),
    configDir: "./greenlock.d",
    maintainerEmail: "jaeverba@gmail.com",
    cluster: false
})
    .serve(app)*/

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
