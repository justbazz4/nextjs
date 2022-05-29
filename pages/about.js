import styles from '../styles/About.module.css';
import { useRouter } from 'next/router';

const About = () => {
    const router = useRouter()



    return (
        <div>
            
        <h1 className={styles.h1}> About Page</h1>

        <button type='button' onClick={()=> router.push('/')}>Return to Home</button>
        </div>
    );
}

export default About;
