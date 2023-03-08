import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import {useState} from 'react';
import { levels, calculateImc, Level} from './helpers/imc';
import { GridItem } from './components/GridItem/index'
import leftArrowImage from './assets/leftarrow.png';

const App = ()=>{
  const [heightField, setHeightField] = useState<number>(0); //armazenará o input de altura
  const [weightField, setWeightField] = useState<number>(0) //armazenará o input do peso
  const [toShow, setToShow] = useState <Level | null>(null);//armazenará o level que será exibido no final, inicialmente é null
  
  const handleCalculateButton = ()=>{
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
    }else{
      alert("Digite todos os campos.")
    }
  }

  const handleBackButton = ()=>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
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
          {!toShow && //o grid só aparecerá quando não houver toShow (o imc ainda não foi calculado)
          <div className={styles.grid}>
            {levels.map((item,key)=>(
              <GridItem key={key} item={item}/>
            ))}

          </div>
          }
          {toShow && //div que mostra o level específico após o cálculo
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={leftArrowImage} width={25} alt="" />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default App;