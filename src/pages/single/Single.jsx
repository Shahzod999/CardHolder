import "./single.scss";
import SideBar from "../../components/sideBar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">Information</div>
            <div className="item">
              <img src="../../../public/user.jpg" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Girl</h1>
                <div className="deteilItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sibragimov@gmail.com</span>
                </div>
                <div className="deteilItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+123456789</span>
                </div>
                <div className="deteilItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Tashkent Sergeli tumani</span>
                </div>
                <div className="deteilItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
