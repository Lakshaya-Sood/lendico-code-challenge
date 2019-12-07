import WebAppRenderServices from '../services/web_app_render_services';

const WebAppRenderRoute = function (app) {
    app.route('/home').get(WebAppRenderServices.homePage);
    app.route('/').get(WebAppRenderServices.fallbackUI);
}

export default WebAppRenderRoute;