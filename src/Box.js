import React from 'react'

const Box = () => {

    const red="red";
    const green="green";
    let color;
   const redClickHandler=()=>{
        color="red";
    }

    const greenClickHandler=()=>{
        color="green";
    }

  return (
    <div style={{marginLeft:"200px","marginBottom":"-110px",backgroundColor:"blue",width:"100px",height:"200px"}}>
        

        <div style={{width:"100px",height:"200px"}}>
            <div style={{backgroundColor:red}} onClick={redClickHandler}>1</div>
            <div style={{backgroundColor:green}} onClick={greenClickHandler}>2</div>
        </div>
       
    </div>
  )
}

export default Box