import React from "react";
import SideNav from "./SideNav";
import CardOfWeb from "./CardOfWeb";
import UseHook from "./Components/UseHook";
import Todo from "./project/todo/Todo";
import Index from "./Index";

const App = () => {
  return (
    <React.StrictMode>
      <div className="d-felx">
        <SideNav />
        <CardOfWeb />
      </div>
      <UseHook />
      {/* <Todo /> */}
      {/* <Index /> */}
    </React.StrictMode>
  );
};

export default App;
