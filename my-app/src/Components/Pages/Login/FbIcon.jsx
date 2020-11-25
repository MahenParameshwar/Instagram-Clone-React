import React from "react"

export const FbIcon = ({src,color = "white",textColor}) => {
    
    return(
        <>
        <div style = {{display:"flex",alignItems:"center",justifyContent:"center",margin:"10px",backgroundColor: color,borderRadius:"3px"}}>
         <img src = {src} width="30px" style = {{padding:"5px"}} alt=""/>
         <div style = {{color:textColor}}>Login with facebook</div>
            
        </div>
        

        </>
    )
}





