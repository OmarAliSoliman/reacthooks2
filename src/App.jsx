import axios from "axios";
import { useEffect, useState } from "react";
import MainCompnent from "./Component/MainCompnent";

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    // console.log("hi from parent")
    axios.get(`https://americanboard-us.com/api/Companies`).then((res)=>{
      setData(res.data)
    })
  }, [])
  return (
    <div className="App">
      {data.length == [] ? null : <MainCompnent data={data} /> }
    </div>
  );
}

export default App;
