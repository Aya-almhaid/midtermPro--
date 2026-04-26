import Nav from "../Nav";
import Foot from "../Foot";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <Nav />
            <div style={{ minHeight: "80vh" }}>
                <Outlet />
            </div>
            <Foot />
        </>
    );
}