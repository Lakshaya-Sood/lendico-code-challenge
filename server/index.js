import app from "./app";

app.listen(app.get("port"), () => {
    console.info(`Server started listening on port ${app.get("port")}.`);
    global.serviceReady = true;
});

process.on("SIGaINT", function () {
    console.info(`Gracefully shutting down from SIGINT (Ctrl-C)`);
    process.exit(1);
});
