
import Link from 'next/link';
import Styles from './../styles/Home.module.css'
const index = () => {
  return ( 
     <div >
         <h1 className={Styles.title}>Index Page </h1>
         <p className={Styles.text}>lorem ipsum Nostrud Lorem amet irure qui sint eu do adipisicing laborum duis
           culpa pariatur sunt qui. Commodo ipsum aliquip aliqua incididunt labore amet pariatur 
           nostrud elit dolore do aliquip Lorem veniam. Est tempor deserunt amet sint. Lorem Lorem 
           irure minim sit cillum amet dolore voluptate aliqua nostrud nostrud consectetur est. Quis 
           ut reprehenderit est ut. Et veniam veniam exercitation irure cillum in ullamco enim cupidatat.</p>
           <Link href='/ninja'>
              <a className={Styles.btn}>Listing ninja</a>
           </Link>
     
     </div>
   
   );
}
 
export default index;
