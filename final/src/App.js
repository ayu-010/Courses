

import Nav from "./Component/Nav";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import { apiUrl,filterData } from './data';
import { useEffect, useState } from 'react';
import Spinner from './Component/Spinner';

import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';





function App() {
  
  // to take data through api call
const[courses,setcourses]=useState(null);
const[loading,setloader]=useState(true);
const[category,setcategory]=useState(filterData[0].title);


  async function fetchdata()

  {   
    setloader(true);
    try{
      let response= await fetch(apiUrl);
      let output= await response.json();
      console.log(output);
  
      setcourses(output.data);
      }

    catch(error)
    {
      // toast lagana h yehA
      console.log("ERROR OCCURED");
    }

    setloader(false);
   
  }

  useEffect( () => 
  {
    fetchdata();
  },[])

  return (
    <div className=" min-h-screen flex flex-col 
       bg-gray-300 ">

      <div>
        <Nav> </Nav>
      </div>
   
   <div className=" bg-gray-300">
          
   <div>
        <Filter  filterData={filterData}
        category={category}
        setcategory={setcategory}></Filter>
      </div>



      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          loading ? (<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
        }
      </div>

   </div>

     

<ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
