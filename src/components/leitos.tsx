import Coluna from './coluna';
import styles from '../styles/page.module.css'


export default function Leitos(){
    const colunaLeitos1 = [
        {
          status: styles.green
        },
        {
          status: styles.green
        },
        {
          status: styles.green
        },
        {
          status: styles.green
        },
        {
          status: styles.green
        }
      ]
       
      const colunaLeitos2 = [
        {
          status: styles.yellow
        },
        {
          status: styles.yellow
        },
        {
          status: styles.red
        },
        {
          status: styles.yellow
        },
        {
          status: styles.yellow
        }
      ]
    
      const colunaLeitos3 = [
        {
          status: styles.red
        },
        {
          status: styles.green
        },
        {
          status: styles.yellow
        },
        {
          status: styles.yellow
        },
        {
          status: styles.yellow
        }
      ]
    
      const colunaLeitos4 = [
        {
          status: styles.red
        },
        {
          status: styles.yellow
        },
        {
          status: styles.green
        },
        {
          status: styles.yellow
        },
        {
          status: styles.yellow
        }
      ]
    
      const colunaLeitos5 = [
        {
          status: styles.yellow
        },
        {
          status: styles.green
        },
        {
          status: styles.green
        },
        {
          status: styles.green
        },
        {
          status: styles.green
        }
      ]
    return(
        <div className={styles.content}>
            <Coluna props={colunaLeitos1}/>
            <Coluna props={colunaLeitos2}/>
            <Coluna props={colunaLeitos3}/>
            <Coluna props={colunaLeitos4}/>
            <Coluna props={colunaLeitos5}/>
            
            
            
        </div>
    )
}