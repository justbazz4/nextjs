
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';
import Image from 'next/dist/client/image';


const Addblog = () => {
    const router = useRouter()
    return (
        <div className={styles.title}>
            ADDING BlOGS
        <br />
        <Image src="/lexus-ls-500.jpeg" alt="Image" width={300} height={300} />
        <br />
        <Image src="/bmw5.jpg" alt="Image" width={200} height={200} />
        <br />
        <Image src="/Mercedes_benz.jpg" alt="Image" width={300} height={300} />
        <br />
         <button type='button' onClick={()=> router.push('/')}>Return to Home</button>

         </div>
         
    );
}

export default Addblog;
