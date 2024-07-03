// Start http server
import app from "./server.js";
import {PORT} from "./utils/constants.js";

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})