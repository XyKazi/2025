import { 
    type RouteConfig,
    route,
    layout,
    index,
    prefix,
    } from "@react-router/dev/routes";
import { redirect } from "react-router";

export default [
    
    index("routes/home.tsx"),
    route('/home', "redirect.tsx"),
    layout("projects/layout.tsx", [
        route("/projects/2024site", "projects/2024site.tsx"),
    ])


] satisfies RouteConfig;
