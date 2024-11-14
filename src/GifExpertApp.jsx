import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories]=useState([ ]);

  const onAddCategory=(newCategory)=> {

    if (categories.includes(newCategory)) {
      return;
    }


  setCategories([...categories,newCategory]);

    //categories.push('Valorant');


  }
  console.log (categories);
  return (
    <>

        
        <h1>GifExpertApp</h1>
        
        
          <AddCategory 
          onnewCategory={value=>onAddCategory(value)}

          />
        

              {
                categories.map((category)=>(
                  <GifGrid 
                  key= {category} 
                  category={category} 
                  />

                ))
              }

        

            {/* Gif Item */}
    </>
  )
}
