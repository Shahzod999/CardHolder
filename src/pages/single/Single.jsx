import "./single.scss";
import SideBar from "../../components/sideBar/SideBar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="title">Information</div>
            <div className="item">
              <img src="./1.png" alt="" className="itemImg" />
            </div>
            <div className="details"></div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
