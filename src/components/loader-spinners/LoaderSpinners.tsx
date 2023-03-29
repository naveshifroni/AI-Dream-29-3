import design from './Spinners.module.scss'
import {

  BallTriangle,
  Bars,
  InfinitySpin,
  Radio,
} from "react-loader-spinner";
// אם נותנים ערכי ברירת מחדל - אין צורך להגדיר טיפוסים
// הטיפוסים inffered

const LoaderSpinners = ({ width = "200", color = "#00BFFF" }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center py-5">
        <InfinitySpin width={width} color={color} />
        <Radio width={width} colors={["#51E5FF", "#7DE2D1", "#FF7E6B"]} />
        <div className={design.spinners}>
        <BallTriangle width={width} color={color} />
        <Bars width={width} color={color} />
        </div>
    
    </div>
  );
};

export default LoaderSpinners;
