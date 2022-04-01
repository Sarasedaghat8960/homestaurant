import styles from './SearchBar.module.scss'
import React, { useState } from 'react'

export default function SearchBar({setSearch,setIsFoodSearched,setIsIngredientSearched,setIngredient1}) {
 const [input,setInput]=useState("");
 const [ingInput,setIngInput]=useState("");
 const [emptyInput,setEmptyInput]=useState(false);
 const [emptyIngInput,setEmptyIngInput]=useState(false);

  const getInputValue=()=>{
    console.log("input:",input);
    if(input){
      setSearch(input);
    setIsFoodSearched(true);
    }else{
       setEmptyInput(true)
       

    }
  }
  console.log("input",input);
  const getIngredientValue=()=>{
    console.log("IngInput:",ingInput);
    if(ingInput){
    setIngredient1(ingInput);
    setIsIngredientSearched(true)
    }else{
       setEmptyIngInput(true)

    }
  }

  return (
    <>
    <div className={styles.searchForm1}  > 
    <input type="text" placeholder='Type food name' className={styles.searchReceipt1}  onChange={(event)=> setInput(event.target.value)} />
      <button type="submit"  className={styles.searchReceiptButton}  onClick={getInputValue}>Search Receipt with food name</button>
      {/* {(emptyInput==true)?
      
     <p className={styles.alert}>Search box is EMPTY</p> 
     
    :<p></p>
    } */}
   
     </div> 
    <div className={styles.searchForm2}>
  
     {/* <form className={styles.search-form}>  */}
     <input type="text" placeholder='Type ingredient' className={styles.searchReceipt2}  onChange={(event)=> setIngInput(event.target.value)}/>
      <button type="submit"  className={styles.searchReceiptButton} onClick={getIngredientValue}>Search Receipt with ingredient</button>
      {/* {(emptyIngInput==true)?
      
     <p className={styles.alert}>Search box is EMPTY</p>
       
    :<p></p>
    } */}
    {/* </form> */}
    </div>
    </>
  )
}
