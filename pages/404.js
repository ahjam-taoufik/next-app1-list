import { useRouter } from "next/router";
import { useEffect } from "react";


const errorPage = () => {
      const route=useRouter()

    useEffect(()=>{

         setTimeout(()=>{
              //route.back()
                route.push('/')
               

         },1000)

        

    },[] )
     
    return ( 
          <div className="not-found">
            <h1>Ooooops.....</h1>
             <h2>that page cannot be found</h2>
             
         </div>
      

     );
}
 
export default errorPage;

       
