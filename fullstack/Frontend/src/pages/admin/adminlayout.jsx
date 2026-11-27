import { Link, Outlet } from "react-router-dom";

function Adminlayout() {
    return (
        <div>
            <h1>Admin Panel</h1>

            <nav>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/userdetails">User Details</Link>
                <Link to="/admin/adminsettings">Settings</Link>
            </nav>

            <Outlet />
        </div>
    );
}

export default Adminlayout;
