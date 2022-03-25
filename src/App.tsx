import { useState } from 'react'
/* Components */
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {

  const [ name, setName ] = useState('Tayse Rosa')
  const [ age, setAge ] = useState(90)
  const [ bg, setBg ] = useState('#ff0000')

  const [ list, setList ] = useState([
    'O rato roeu a roupa do rei de Roma',
    'Aqui vai uma frase poética',
    'A inspiração desse dev é pouca'
  ])


  function handle20(){
    setAge(20)
    setBg('yellow')
  }

  function handle90(){
    setAge(90)
    setBg('green')
  }

  return(
    <div style={{backgroundColor: bg}}>
      <Header nameApp={name} ageApp={age} />
      { age ===90 && 
        <button onClick={ handle20 } > Tenho 20 anos </button>
      }

      { age === 20 &&
        <button onClick={ handle90 } > Tenho 90 anos </button>
      }

      <hr />

      <ul>
        { list.map( (frase, index)=>(
          <li key={index}> { frase } </li>
        ) ) }
      </ul>

      <Footer />
    </div>
  );
}

export default App;