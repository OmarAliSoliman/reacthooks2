import axios from "axios";
import { useEffect, useState } from "react";
import MainCompnent from "./Component/MainCompnent";

function App() {
  const [data, setData] = useState([]);

  // for make use effect run first time after render
  useEffect(() => {
    axios.get(`https://americanboard-us.com/api/Companies`).then((res)=>{
      setData(res.data)
    })
      // console.log("hi from parent");
  }, []);
  

  // for make use effect run first time and after update
  // useEffect(() => {
  //   // axios.get(`https://americanboard-us.com/api/Companies`).then((res)=>{
  //   //   setData(res.data)
  //   // })
  //     console.log("hi from parent");
  // }, [data]);

  // for make use effect run after update
  // useEffect(() => {
  //   if (data) {
  //     console.log("hi from parent");
  //   }
  //   // axios.get(`https://americanboard-us.com/api/Companies`).then((res)=>{
  //   //   setData(res.data)
  //   // })
  // }, [data]);

  // // for make use effect run after render after re-render for any thing
  // useEffect(() => {
  //   console.log("hi from parent");
  //   // axios.get(`https://americanboard-us.com/api/Companies`).then((res)=>{
  //   //   setData(res.data)
  //   // })
  // });

  // // for make use effect run after render and update (clean Up)
  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     console.log("hi from parent");
  //   }, 2000);
  //   return () =>{
  //     clearTimeout(timeOut)
  //   }
  // });

  const updateData = () => {
    setData("ali");
  };

  return (
    <div className="App">
      {data.map((item)=>(
        <span>{item.id}</span>
      ))}
      <div>
        <button onClick={updateData}>Change</button>
      </div>
      {/* {data.length == [] ? null : <MainCompnent data={data} /> } */}
    </div>
  );
}

export default App;

// Class Component

// Mounting (Constructor -> Render -> React Update Dom -> ComponentDidMount)
// Updating (Constructor -> Render -> React Update Dom -> ComponentDidUpdate)
// UnMounting (ComponentWillUnMount)

// use Effect
// without depances = componentDidMount  use effect is run after first render
// with depances = ComponentDidUpdate

//  useEffect(() => {
// Your Code
// }, [depances])
