import {Outlet,Link } from "react-router-dom";
import Display from "./Display";
import Insert from "./Insert";
import Home from "./Home";
const Layout=()=>
{
  return(
    <>
    <Link to="/">Home</Link>
    <Link to="Insert">Sales entry</Link>
    <Link to="/Display">Manager Deatail</Link>
    <Outlet />

    </>
    );
}

export default Layout;