import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import "./new.scss";
import { useState } from "react";
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  console.log(file);
  return (
    <div className="new">
      <SideBar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "../../../public/noImage.png"} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadRoundedIcon className="icon" />
                </label>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} id="file" style={{ display: "none" }} />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
