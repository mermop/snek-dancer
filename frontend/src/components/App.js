import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Snek from "./Snek";
import Farm from "./Farm";
const App = () => (
  <DataProvider endpoint="api/farm"
                render={data => <div>
                	<Farm farm={data[0]}/>
                	<Table data={data} />
            	</div>} />
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
