import React from "react"

export const FbIcon = ({src,color = "white",textColor}) => {
<<<<<<< HEAD
    
=======
    console.log(color)
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
    return(
        <>
        <div style = {{display:"flex",alignItems:"center",justifyContent:"center",margin:"10px",backgroundColor: color,borderRadius:"3px"}}>
         <img src = {src} width="30px" style = {{padding:"5px"}} alt=""/>
         <div style = {{color:textColor}}>Login with facebook</div>
            
        </div>
        

        </>
    )
}





