export const getStaticPaths= async ()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const ninjas=await res.json()
    const paths=ninjas.map((ninja)=>{
        return {
            params:{
                id:ninja.id.toString()
            }
        }
    })
    return{ 

        paths,
        fallback:false
    }

}

export const getStaticProps = async (context)=>{
    const id=context.params.id
    const res  =await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const ninja=await res.json()


    return{

        props :{
            ninja:ninja
        }
    }

}



const Details = (props) => {
    return ( 
        <div>
             <h4>Details ninja users {props.ninja.id}</h4>
             <h4>{props.ninja.name}</h4>
             <h4>{props.ninja.email}</h4>
             <h4>{props.ninja.website}</h4>
             <h4>{props.ninja.city}</h4>
        </div>
     );
}
 
export default Details;