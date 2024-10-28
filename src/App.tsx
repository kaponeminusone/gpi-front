
import './App.css'

import { Header } from './components/AnimatedHeader/AnimatedHeader';
import { AnimatedText } from './components/AnimatedText/AnimatedText'
import { CardFoldHorizontal } from './components/Cards/CardFoldHorizontal';

import MultipleSelectionQuestion from './components/Activities/MultipleSelectionQuestion'
import RelationalQuestion from './components/Activities/RelationalQuestion'
import TrueFalseQuestion from './components/Activities/TrueFalseQuestion'
import DecisionGame from './components/DecisionGame/DecisionGame'

import ScrollContent from './components/ScrollContent/ScrollContent'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import pdf from './assets/proof.pdf'
import { PDFViewer } from './components/PDFViewer/PDFViewer'
import HomeContent from './components/HomeContent/HomeConent'

function App() {

  return (
    
    <>
      <HomeContent
        title="DESARROLLO DE HABILIDADES EMPRESARIALES"
        email="imonterrosa@hotmail.com"
        name="Iván Javier Monterrosa Castro"
        hours={0}
        activities={5}
      />
    </>
  )
}

export default App
