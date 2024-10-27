
import './App.css'
import MultipleSelectionQuestion from './components/Activities/MultipleSelectionQuestion'
import RelationalQuestion from './components/Activities/RelationalQuestion'
import TrueFalseQuestion from './components/Activities/TrueFalseQuestion'
import ScrollContent from './components/ScrollContent/ScrollContent'

const options=[{id:'1', text:"Respuesta incorrecta"},{id:'2', text: "Respuesta correcta"}, {id:'3', text:"Respuesta incorrecta"},{id:'4', text:"Respuesta incorrecta"}]

const handleMultipleSelectionAnswer = (selectedId: string, isCorrect: boolean) => {
  if(isCorrect){
    alert("Respuesta correcta")
  }else{
    alert("Respuesta incorrecta")
  }
}

const handleTrueFalseAnswer = (answer: boolean, isCorrect: boolean) => {
  if(isCorrect){
    alert("Respuesta correcta")
  }else{
    alert("Respuesta incorrecta")
  }
}

const handleRelationalAnswer = (relations: { leftId: string, rightId: string }[], isCorrect: boolean) => {
  if(isCorrect){
    alert("Respuesta correcta")
  }else{
    alert("Respuesta incorrecta")
  }
}

function App() {

  return (
    <>
    <div className='w-full h-screen flex flex-col'>
      <h1 className='center text-4xl'> Header Hello World!</h1>
      <ScrollContent>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <MultipleSelectionQuestion question='¿Cual Respuesta es correcta?' 
            correctAnswerId='2' 
            onAnswer={handleMultipleSelectionAnswer} 
            options={options}>
          </MultipleSelectionQuestion>

        </div>
        <div className="bg-secondary text-secondary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <TrueFalseQuestion 
            question="¿Esta pregunta es falsa?"
            correctAnswer={false}
            onAnswer={handleTrueFalseAnswer}>
          </TrueFalseQuestion>
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <RelationalQuestion
            question="Match the country with its capital"
            leftConcepts={[
              { id: '1', text: 'France' },
              { id: '2', text: 'Germany' },
              { id: '3', text: 'Spain' },
              { id: '4', text: 'Italy' },
            ]}
            rightConcepts={[
              { id: 'a', text: 'Berlin' },
              { id: 'b', text: 'Madrid' },
              { id: 'c', text: 'Paris' },
              { id: 'd', text: 'Rome' },
            ]}
            correctRelations={[
              { leftId: '1', rightId: 'c' },
              { leftId: '2', rightId: 'a' },
              { leftId: '3', rightId: 'b' },
              { leftId: '4', rightId: 'd' },
            ]}
            onAnswer={handleRelationalAnswer}>

            </RelationalQuestion>

        </div>
      </ScrollContent>
    </div>
    </>
  )
}

export default App
