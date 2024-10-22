import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState(null)
  const API_KEY = 'f7e2bd77e3623095181ecc8d44f8107edc03db42b30d763907dc35ec586d38cd';
  
  useEffect(()=>{
    const fetchAllCoinData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" + API_KEY
      );
      const json = await response.json();
      setList(json);
    };
    fetchAllCoinData().catch(console.error);
  },[]);
  
  return (
    <div className = "whole-page">
      <h1> My Crypto List</h1>
        <ul>
          {list && Object.entries(list.Data).map(([coin]) =>
            list.Data[coin].PlatformType === "blockchain" ? (
              <li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
            ) : null
          )}
        </ul>
    </div>
  );

}

export default App;
