import styles from '../styles/components/ButtonGradient.module.css';

interface ButtonGradientProps{
    callback: ()=> void;
}
export default function ButtonGradient(props: ButtonGradientProps){
    return(
        <button className={styles.buttonGradient} style={{ height: '3rem'}} onClick={props.callback}>Próximo Nível</button>
    );
};