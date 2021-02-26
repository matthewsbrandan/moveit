import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ModalLevelUp.module.css';

export default function ModalLevelUp(){
    const { level,modalOpen,setModalOpen } = useContext(ChallengesContext);
    return(
        <>
        { modalOpen && (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalBody}>
                        <div className={styles.containerBtnCloseModal}>
                            <span className={styles.btnCloseModal} onClick={() => setModalOpen(false)}>x</span>
                        </div>
                        <div className={styles.congratulationContainer}>
                            <img src="/icons/levelUp.svg"/>
                            <h1>{level}</h1>
                        </div>
                        <strong>Parabéns</strong>
                        <p>Você alcançou um novo level</p>
                        <button>Compartilhar no twitter <img src="/icons/twitter.svg"/></button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}