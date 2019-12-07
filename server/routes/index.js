import WebAppRenderRoutes from './web_app_render_routes';
import LoanRoutes from './loan_routes';

const routes = function (app) {
    console.info("LOAN routes registering...");
    LoanRoutes(app);
    console.info("LOAN routes registered");

    console.info("WEB APP RENDER routes registering...");
    WebAppRenderRoutes(app);
    console.info("WEB APP RENDER routes registered");

}

export default routes;