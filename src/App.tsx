
import './App.css'
import { AnimatedElement } from './components/AnimatedElements/AnimatedElements'
import { AnimatedText } from './components/AnimatedText/AnimatedText'
import ScrollContent from './components/ScrollContent/ScrollContent'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'

function App() {

  return (
    <>
    <div className='w-full h-screen flex flex-col'>
      <h1 className='center text-4xl'> Header Hello World!</h1>
      <ScrollContent>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <AnimatedText
            text="Left to Right Animation"
            type="leftToRight"
            delay={0.2}
            duration={0.8}
            className="text-4xl font-bold"
          />

        {/* Element Animations Section */}
          <h2 className="text-3xl font-bold text-white mb-8">Element Animations</h2>
          
          {/* Custom Movement with Spring */}
          <AnimatedElement
            type="move"
            initialPosition={{ x: 0, y: 50 }}
            targetPosition={{ x: 0, y: 0 }}
            delay={1}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-800">Spring Movement</h3>
            <p className="text-gray-600">This element uses spring physics</p>
          </AnimatedElement>

        </div>
        <div className="bg-secondary text-secondary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Sección 2</h2>
          <p className="text-xl">Contenido de la segunda sección</p>
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Sección 3</h2>
          <p className="text-xl">Última sección del contenido</p>
        </div>
      </ScrollContent>
    </div>
    </>
  )
}

export default App
