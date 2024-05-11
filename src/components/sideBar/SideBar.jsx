import "./sidebar.scss";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">Shahzod</div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <SpaceDashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <SupervisorAccountRoundedIcon/>
            <span>Users</span>
          </li>
          <li>
            <Inventory2RoundedIcon/>
            <span>Products</span>
          </li>
          <li>
            <ListAltOutlinedIcon/>
            <span>Orders</span>
          </li>
          <li>
            <AirportShuttleOutlinedIcon/>
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsOutlinedIcon/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon/>
            <span>Notifications</span>
          </li>
          <li>
            <MonitorHeartOutlinedIcon/>
            <span>Sistem Health</span>
          </li>
          <li>
            <AndroidOutlinedIcon/>
            <span>Logos</span>
          </li>
          <li>
            <EngineeringRoundedIcon/>
            <span>Settings</span>
          </li>
          <li>
            <SwitchAccountRoundedIcon/>
            <span>Profile</span>
          </li>
          <li>
            <MeetingRoomRoundedIcon/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default SideBar;
