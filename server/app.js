import express from "express";
import routes from './routes';
import path from 'path';

const DEFAULT_APP_PORT = 2091,
    APP_PROPS = {
        PORT: "port"
    };


console.info("Initializing express.");
const app = express();
console.info("Express intialized.");

app.set(APP_PROPS.PORT, DEFAULT_APP_PORT);

console.info("Registering routes.....");
routes(app);
console.info("Route registration complete..");

app.use(express.static(path.join(__dirname, "../")));
console.info("Express Static middleware registered.");


export default app;
