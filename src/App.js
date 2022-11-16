import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./layout/header";
import { useState } from "react";
import Body from "./layout/body";
function App() {
  const [search, setSearch] = useState();

  const onSearchVauleChanged = (searchText) => {
    setSearch(searchText);
  };
  return (
    <div className="App">
      <Header onSearch={onSearchVauleChanged}></Header>
      <Body searchText={search}></Body>
    </div>
  );
}

export default App;
