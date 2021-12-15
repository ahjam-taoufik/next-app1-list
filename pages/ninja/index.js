
import Head from "next/head";
import Link from "next/link";

import Styles from './../../styles/Ninja.module.css'

const index = ({users}) => {
    return ( 
        <div>
            <Head>
                <title>this is page of ninja</title>
            </Head>
            Page index of ninja <br></br>

            <div>
                {users.map((user)=>{
                    return(
                        <Link href={'/ninja/' + user.id} key={user.id}>
                          <a className={Styles.single}><h4>{user.name}</h4></a>  
                        </Link>
                    )
                })}
            </div>
        
        </div>
     );
}
export default index;


export const getStaticProps= async ()=>{
      
      const res= await fetch('https://jsonplaceholder.typicode.com/users')
      const data= await res.json() 
       // console.log(data);
    return{

        props:{
            users: data 
           
        }
    }
}