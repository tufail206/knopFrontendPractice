import { Route } from "react-router-dom";
import { AppPath } from '../utils/pathConstant'
import App from "../App";
export const appRoutes=(
    <Route path={AppPath.ROOT} element={<App/>}>
    <Route path={AppPath.HOME}  lazy={()=>import("../pages/Home")}/>
    <Route path={AppPath.LOGIN}  lazy={()=>import("../pages/Login")}/>
     
    </Route>
)