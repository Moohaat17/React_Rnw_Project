import AngularFramework from "./AngularFrameWork/AngularFramework";
import "../assets/CSS/FrameworkStyles.css";
import ReactFramework from "./ReactFramework/ReactFramework";
import VueFramework from "./VueFramework/VueFramework";
import NodeJs from "./NodeJs/NodeJs";
import ExpressJs from "./ExpressJs/ExpressJs";

const JSFrameworks = () => {
  return (
    <div className="container-fluid px-5">
      <h2 className="framework-title border p-3 rounded">JS Frameworks</h2>
          <AngularFramework />
          <ReactFramework />
          <VueFramework />
      <NodeJs />
      <ExpressJs/>
    </div>
  );
};

export default JSFrameworks;
