import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [gif, setGif] = useState('');
    // const [loading,setLoading] = useState('false');
    

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imagesource = data.data.images.downsized_large.url;
    //     setGif(imagesource);
    //     setLoading(false);

    // }

    // useEffect ( () => {
    //       fetchData();
    // }, [])
    const {gif,loading,fetchData} = useGif();
    
    function clickHandler(){
        fetchData();

    }

    return (
        <div className="bg-green-500 mt-10 w-1/2  rounded-md p-4 
        flex flex-col items-center border border-black gap-y-5">
           <h1 className="font-bold text-3xl underline">A RANDOM GIF</h1>
           {
            loading ? (<Spinner/>) : (<img src={gif} width="450" height="50" />) 
           }
           
           <button onClick={clickHandler}
           className="bg-white opacity-70 rounded-lg p-3 w-11/12 text-2xl font-bold mb-[20px]">
            Generate</button>
        </div>
    )
}

export default Random