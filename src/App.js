
import './App.css';
import CollectionCard from './components/CollectionCard/CollectionCard';
import Header from './components/Header/Header';

import {useState , useEffect} from 'react';

import axios from 'axios';
import PunkList from './components/Punklist/PunkList';
import Main from './components/Main/Main';
function App() {
const[punklistdata , setpunklistdata] = useState([]);
const[selectedPunk,setselectedPunk] = useState(0);
useEffect(()=>{
const getMyNFTs = async () =>{
  const openSeadata = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x50F911a352CaC969E9771A7342e5C00BF8137099&order_direction=asc');

setpunklistdata(openSeadata.data.assets)
}

return getMyNFTs();

},[])


  return (
    <div className="app">
    <Header/>
    {punklistdata.length>0 &&(
      <>
      <Main punklistdata={punklistdata} selectedPunk={selectedPunk}/>
      <PunkList punklistdata={punklistdata} setselectedPunk={setselectedPunk}/>
      </>



    )}



    </div>
  );
}

export default App;
