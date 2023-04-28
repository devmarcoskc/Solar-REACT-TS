import { useRoutes } from "react-router";
import App from "../App";
import OsdaPanel from "../PagesAreas/OSDAPanel";
import DeyePanel from "../PagesAreas/DEYEPanel";
import GrowattPanel from "../PagesAreas/GrowattPanel";
import Login from "../PagesAreas/Login";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <App/>},
        {path:'/osdapanel', element: <OsdaPanel/>},
        {path: '/deyeOnPanel', element: <DeyePanel/>},
        {path: '/growattNSpanel', element: <GrowattPanel/>},
        {path: '/Login', element: <Login/>}
    ])
}