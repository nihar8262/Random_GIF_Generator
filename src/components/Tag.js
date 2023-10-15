import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    // const [gif, setGif] = useState('');
    const [tag,setTag] = useState('');
    // const [loading,setLoading] = useState('false');
    

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imagesource = data.data.images.downsized_large.url;
    //     setGif(imagesource);
    //     setLoading(false);

    // }

    // useEffect ( () => {
    //       fetchData();
    // }, [])
    const {gif,loading,fetchData} = useGif(tag);

    function clickHandler(){
        fetchData(tag);

    }

    function changeHandler(event){
        setTag( event.target.value);
    }

    return (
        <div className="bg-blue-400 mt-10 w-1/2  rounded-md p-4 
        flex flex-col items-center border border-black gap-y-5">
           <h1 className="font-bold text-3xl underline">RANDOM {tag} GIF</h1>
           {
            loading ? (<Spinner/>) : (<img src={gif} width="450" height="50" />) 
           }

           <input className="bg-white  rounded-lg p-3 w-11/12 text-2xl  mb-[20px] text-center"
           value={tag}
           onChange={changeHandler}

           />
           
           <button onClick={clickHandler}
           className="bg-white opacity-70 rounded-lg p-3 w-11/12 text-2xl font-bold mb-[20px]">
            Generate</button>
        </div>
    )
}

export default Tag