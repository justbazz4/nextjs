import { useState } from "react";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

const Contact = () => {
    
  const router = useRouter()

        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

        const [likes, setLikes] = useState(0)
        const [dislikes, setDislikes] = useState('')

        function handleClick() {
          setLikes(likes + 1)
        }
    
        function handleClickReset() {
            setDislikes(likes =0)
        }
    return (
        <div>
           <h1 className={styles.title}>Contact Page</h1> 

           <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <button class onClick={handleClick}>Like ({likes})</button>
            <button onClick={handleClickReset}>Reset ({dislikes})</button>
            <br />
            <br />
            <div>
            <button type='button' onClick={()=> router.push('/')}>Return to Home</button>
            </div>
        </div>
    );
}

export default Contact;
