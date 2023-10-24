import styles from './styles.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add, clear, calculate } from '../../store/calculatorReducer';

function App() {
  const expression = useSelector(state=>state.calculator.expression);
  const result = useSelector(state=>state.calculator.result);
  const dispatch = useDispatch();
  const handleClick = (event)=>{
    let value = event.target.innerHTML;
    value = value.replace(/\s*/g,"");
    
    switch(value){
      case 'AC':
        dispatch(clear());
        break;
      case 'X':
        dispatch(add('*'));
        break;
      case '=':
        dispatch(calculate());
        break;
      default:        
        dispatch(add(value));
        break;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.output}>
        <p className={`${styles.expression}`}>{expression}</p>
        <p className={`${styles.result}`}>{result}</p>
      </div>
      <div className={styles.input}>
        <div className={`${styles.btn} ${styles.btnAc} ${styles.row1}`} onClick={handleClick}>  AC  </div>
        <div className={`${styles.btn} ${styles.btnSign} ${styles.row1}`} onClick={handleClick}>/</div>
        <div className={`${styles.btn} ${styles.btnSign} ${styles.row1}`} onClick={handleClick}>X</div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row2}`} onClick={handleClick}> 7</div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row2}`} onClick={handleClick}>8</div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row2}`} onClick={handleClick}>9</div>
        <div className={`${styles.btn} ${styles.btnSign} ${styles.row2}`} onClick={handleClick}>-</div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row3}`} onClick={handleClick}> 4 </div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row3}`} onClick={handleClick}>5</div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row3}`} onClick={handleClick}>6</div>
        <div className={`${styles.btn} ${styles.btnSign} ${styles.row3}`} onClick={handleClick}>+</div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row4}`} onClick={handleClick}> 1 </div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row4}`} onClick={handleClick}>2</div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row4}`} onClick={handleClick}>3</div>
        <div className={`${styles.btn} ${styles.btnEqual}`} onClick={handleClick}>=</div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row5} ${styles.btnZero}`} onClick={handleClick}>0</div>
        <div className={`${styles.btn} ${styles.btnNumber} ${styles.row5}`} onClick={handleClick}>.</div>
      </div>
    </div>
  );
}

export default App;
