import path from 'path';

const __BuildHtmlFile__ = 'index.html'
const WebAppRenderServices = {
    homePage: function (req, res) {
        res.sendFile(path.join(__dirname, "../../", __BuildHtmlFile__));
    },
    fallbackUI: function (req, res) {
        res.redirect("/home")
    }
}

export default WebAppRenderServices;