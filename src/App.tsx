
import './App.css'
import ScrollContent from './components/ScrollContent/ScrollContent'

function App() {

  return (
    <>
    <div className='w-full h-screen flex flex-col'>
      <h1 className='center text-4xl'> Header Hello World!</h1>
      <ScrollContent>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Sección 1</h2>
          <p className="text-xl">Desplázate hacia abajo o haz clic en la flecha para continuar</p>
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
