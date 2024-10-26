
import './App.css'
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
{/* 
    <div className='w-full h-screen flex flex-col'>
      <h1 className='center text-4xl'> Header Hello World!</h1>
      <ScrollContent>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-row">
        <VideoPlayer
          videoUrl="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
          title="Sample Video"
          poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1280"
        />
        <div className='pdf-container'>
          <PDFViewer pdfUrl={pdf} title={'Requerimientos'}></PDFViewer>
        </div>
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
    </div> */}
    </>
  )
}

export default App
