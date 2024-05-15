import "./sidebar.scss";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import SwitchAccountRoundedIcon from "@mui/icons-material/SwitchAccountRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { Link } from "react-router-dom";
import { darkMode } from "../../state/darkModeSlice";
import { useDispatch } from "react-redux";
import { logout } from "../../state/authSlice";

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <div className="logo">Shahzod</div>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p>Main</p>
          <li>
            <SpaceDashboardIcon className="icons" />
            <span>Dashboard</span>
          </li>
          <p>Lists</p>
          <Link to="/users">
            <li>
              <SupervisorAccountRoundedIcon className="icons" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <Inventory2RoundedIcon className="icons" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ListAltOutlinedIcon className="icons" />
            <span>Orders</span>
          </li>
          <li>
            <AirportShuttleOutlinedIcon className="icons" />
            <span>Delivery</span>
          </li>
          <p>Useful</p>
          <li>
            <QueryStatsOutlinedIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icons" />
            <span>Notifications</span>
          </li>
          <p>Service</p>
          <li>
            <MonitorHeartOutlinedIcon className="icons" />
            <span>Sistem Health</span>
          </li>
          <li>
            <AndroidOutlinedIcon className="icons" />
            <span>Logos</span>
          </li>
          <li>
            <EngineeringRoundedIcon className="icons" />
            <span>Settings</span>
          </li>
          <p>User</p>
          <li>
            <SwitchAccountRoundedIcon className="icons" />
            <span>Profile</span>
          </li>
          <li onClick={()=>dispatch(logout())}>
            <MeetingRoomRoundedIcon className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch(darkMode())}></div>
        <div className="colorOption" onClick={() => dispatch(darkMode())}></div>
      </div>
    </div>
  );
};

export default SideBar;
