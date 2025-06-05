import "./App.css";
import ListItems from "./Reusables/ListItems/ListItems";

const App = () => {
  return (
    <div className="container">
      <ListItems items={["one", "two", "three", "four"]} />
    </div>
  );
};

export default App;
