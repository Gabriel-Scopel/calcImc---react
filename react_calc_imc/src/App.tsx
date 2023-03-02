import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import {useState} from 'react';
import { levels, calculateImc } from './helpers/imc';

const App = ()=>{
  const [heightField, setHeightField] = useState<number>(0); //armazenará o input de altura
  const [weightField, setWeightField] = useState<number>(0) //armazenará o input do peso

  const handleCalculateButton = ()=>{
    if(heightField && weightField){

    }else{
      alert("Digite todos os campos.")
    }
  }
  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigle para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa</p>
          <input type="number" placeholder='Digite sua altura, ex: 1.7 (em metro)' value={heightField>0 ? heightField : ''} onChange={e=> setHeightField(parseFloat(e.target.value))} />
          <input type="number" placeholder='Digite seu peso, ex: 65.5 (em kg)' value={weightField>0 ?  weightField : ''} onChange={e=> setWeightField(parseFloat(e.target.value))} />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>

      </div>
    </div>
  );
}

export default App;