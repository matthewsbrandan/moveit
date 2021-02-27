import { useRouter } from "next/router";
import { useState } from "react";
import Cookies from 'js-cookie';
import styles from "../styles/pages/Login.module.css";

export default function Login() {
  const router = useRouter();
  const [username,setUsername] = useState('');
  
  function routeToHome(){
    Cookies.set('username',username);
    router.push('/home');
  }
  
  return (
    <div className={styles.container}>
      <section className={styles.backgroundContainer}>
      </section>
      <section className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.logoContainer}>
            <img src="/logo-full-light.svg" alt="Logo"/>
          </div>
          <div>
            <h2>Bem-vindo</h2>
            <div className={styles.githubContainer}>
              <img src="/icons/github.svg" alt="Github"/>
              <span>Faça login com seu Github<br/>para começar</span>
            </div>
            <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="username" 
                  id="username"
                  value={username}
                  onChange={event => setUsername(event.target.value)}
                  placeholder="Digite seu username"/>
                {username.length==0?(
                  <button type="button" disabled>
                    <img src="/icons/arrow-right.svg" alt="->"/>
                  </button>
                ):(
                  <button type="button" onClick={routeToHome}>
                    <img src="/icons/arrow-right.svg" alt="->"/>
                  </button>
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}