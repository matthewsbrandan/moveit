import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {username, level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src={`https://github.com/${username}.png`} alt="Mateus Brandão"/>
            <div>
                <strong>{username}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}