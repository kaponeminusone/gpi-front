
import './App.css'
import { Header } from './components/AnimatedHeader/AnimatedHeader';
import { AnimatedText } from './components/AnimatedText/AnimatedText'
import { CardFoldHorizontal } from './components/Cards/CardFoldHorizontal';
import ScrollContent from './components/ScrollContent/ScrollContent'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'

function App() {

  const horizontalCardData = [
    {
      content: <div className="text-center font-semibold">Lore</div>,
    },
    {
      content: <div className="text-center font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, delectus nihil! Fugiat recusandae voluptatum dicta non maiores nobis exercitationem in facere veniam minus officiis, nostrum deserunt quibusdam illo deleniti libero.2</div>,
    },
    {
      content: <div className="text-center font-semibold">Card 3</div>,
    },
    {
      content: <div className="text-center font-semibold">Card 4</div>,
    },
  ];

  return (
    <>
    <div className='w-full h-screen flex flex-col'>
      <ScrollContent>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <CardFoldHorizontal 
            cards={horizontalCardData}
            width="300px"
            height="200px"
          />
        </div>
        <div className="bg-secondary text-secondary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Sección 2</h2>
          <AnimatedText
          text="Contenido sección 2"
          type="topToBottom"
          delay={0.2}
          duration={0.5}  
          className="text-4xl font-bold"
        />
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Sección 3</h2>
          <AnimatedText
          text="Contenido sección 3"
          type="bottomToTop"
          delay={0.2}
          duration={0.5}  
          className="text-4xl font-bold"
        />
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Sección 4</h2>
          <AnimatedText
          text="Contenido sección 4"
          type="lineByLine"
          delay={0.2}
          duration={0.5}  
          className="text-4xl font-bold"
        />
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Sección 5</h2>
          <AnimatedText
          text="Contenido sección 5"
          type="blur"
          delay={0.2}
          duration={0.5}  
          className="text-4xl font-bold"
        />
        </div>
      </ScrollContent>
    </div>
    </>
  )
}

export default App
