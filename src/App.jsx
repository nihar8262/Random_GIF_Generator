import Tag from "./components/Tag";
import Random from "./components/Random";

export default function App() {
  return (
  
    <div className="w-full h-screen flex flex-col background relative items-center">
       <h1 className="bg-white rounded-lg text-center w-11/12 text-4xl
       p-4 mt-[40px]  font-bold ">RANDOM GIFS</h1>
       <div className="flex flex-col w-full items-center">
       <Random />
       <Tag/>
       </div>
    </div>
  );
}
