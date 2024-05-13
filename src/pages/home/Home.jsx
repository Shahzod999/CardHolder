import SideBar from "../../components/sideBar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
const Home = () => {
  
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title="Last 6 Months (Revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactons</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
