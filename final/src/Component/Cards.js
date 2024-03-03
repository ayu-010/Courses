import React from "react"; 
import Card   from "./Card";
import { useState } from "react";

function Cards(props)

 {
    let courses=props.courses;
    let category=props.category

    const[likedcourses,setlikedcourses]=useState([]);
     
    function getcourses()
    {

      if(category === "All")
      {
         let allcourses=[];

         Object.values(courses).forEach( array => {
       
             array.forEach(coursedata => 
               {
                  allcourses.push(coursedata);
               })
            })
               return allcourses;
      }

      else{
// specific category ka arra
            return courses[category]; 
      }
   
   }
   
          
   return  (
            <div className=" flex  flex-wrap justify-center gap-7 mb-10 mt-4 ">

               {
   
           getcourses().map( (course) =>
           (  
                  <Card  course={course} key={course.id} 
                  likedcourses={likedcourses} setlikedcourses={setlikedcourses}> </Card>
           ))
               
     }
            </div>
   )

}

export default Cards;