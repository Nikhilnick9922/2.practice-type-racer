import Button from "./Reusables/Button/Button";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="btnGroup">
        <Button color="#00bcf5" title="Refresh  XX" classes={["btnNormal"]} />
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default App;
