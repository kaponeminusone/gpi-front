
import './App.css'
import MultipleSelectionQuestion from './components/Activities/MultipleSelectionQuestion'
import RelationalQuestion from './components/Activities/RelationalQuestion'
import TrueFalseQuestion from './components/Activities/TrueFalseQuestion'
import DecisionGame from './components/DecisionGame/DecisionGame'
import ScrollContent from './components/ScrollContent/ScrollContent'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import pdf from './assets/proof.pdf'
import { PDFViewer } from './components/PDFViewer/PDFViewer'
import HomeContent from './components/HomeContent/HomeConent'

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

  const sections = ['Sección 1', 'Sección 2', 'Sección 3']

  return (
    
    <>
      <HomeContent
        title="DESARROLLO DE HABILIDADES EMPRESARIALES"
        email="imonterrosa@hotmail.com"
        name="Iván Javier Monterrosa Castro"
        hours={0}
        activities={5}
      />
{/* 
    <div className='w-full h-screen flex flex-col'>
      <h1 className='center text-4xl'> Header Hello World!</h1>

      <ScrollContent sections={sections}>
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

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <DecisionGame></DecisionGame>

        </div>


      </ScrollContent>
    </div> */}
    </>
  )
}

export default App
