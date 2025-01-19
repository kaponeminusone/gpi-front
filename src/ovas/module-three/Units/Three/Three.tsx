// Modulo tres - Unidad Uno: Innovación y Creatividad
import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
// Imagenes
import ICON1 from '../../../../assets/module-three/Three/ICON3-1.png'

import IMG1_1 from '../../../../assets/module-three/Three/IMG-3-1.png'
import IMG1_2 from '../../../../assets/module-three/Three/IMG-3-2.png'
import DIAG_1 from '../../../../assets/module-three/Three/DIAG-1.png'
// Componenetes
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'


function Three() {
  const sections = ['1. Evaluación de Ideas Innovadoras',
                    '2. Evaluación de ideas',
                    '2.1. Criterios para Evaluar Ideas',
                    '3. Selección de las Mejores Ideas para Implementación',
                  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Evaluación de Ideas Innovadoras'} 
          subtitle={'Unidad 3'} 
          chapter={'3'}
          prevRoute="/module-three/two"
          nextRoute="/module-three/four"
          />
      </div>
      <ScrollContent sections={sections}>
        
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Evaluación de ideas"
            subtitle='Evaluación de Ideas Innovadoras'
            className="top-[-150px] left-[0]"
          />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[300px] z-[-1] justify-center flex-center'}
          >
            <img src={ICON1} className='w-[200px]'/>

          </AnimatedElement>

        </div>
        

       {/* Importancia de la ética y la responsabilidad social en los negocios */}
       <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <CardNote
            title="Criterios para Evaluar Ideas"
            content={'Evaluar adecuadamente las ideas es fundamental para determinar cuáles pueden convertirse en soluciones viables.'}
            width='700px'
            height='150px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[300px] left-[900px] z-[-1] justify-center flex-center'}
          >
            <img src={IMG1_1} className='w-[350px]'/>
          </AnimatedElement>

    
        <AnimatedElement 
              type={'popup'}
              slideDirection={'bottom'}
              delay ={4}
              duration={2}
              className={'top-[400px] left-[700px] z-[13]'}
              >
            <CardSelection 
                question={'¿La viabilidad económica de una idea solo considera los costos iniciales de desarrollo?'}
                options={[
                    {
                        label: "Falso",
                        content: "Excelente! Has entendido correctamente. ",
                    },
                    {
                        label: "Verdadero",
                        content: "¡Buen intento! La viabilidad económica es un concepto más amplio.",
                    },
                ]}
                width={'350px'}
                height={'250px'}
                className='absolute left-[150px] top-[-360px]'
            />
        </AnimatedElement>

         <CardFoldChained 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">Criterios más comunes</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (
              <>
                <div className='flex flex-col h-full'>
                <h3 className="text-xl font-semibold mb-2">Viabilidad técnica:</h3>
                <p className="text-gray-700">
                Se refiere a la capacidad técnica de implementar la idea,
                evaluando si la tecnología o los recursos necesarios están disponibles
                y si se puede desarrollar con los conocimientos actuales.                    
                </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Viabilidad económica:</h3>
                  <p className="text-gray-700"> 
                    Examina si la idea es financieramente factible, incluyendo
                    los costos de desarrollo, producción y el posible retorno de inversión (ROI).
                    También se tiene en cuenta el tiempo necesario para recuperar la inversión
                    <br />(Cooper & Kleinschmidt, 1995).
                  </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Originalidad y diferenciación:</h3>
                  <p className="text-gray-700"> 
                  Evalúa si la idea es lo suficientemente novedosa
                  para destacarse en el mercado y si ofrece una ventaja competitiva clara
                  <br />(O’Connor & Ayers, 2005).
                  </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Sostenibilidad:</h3>
                  <p className="text-gray-700">
                    Evalúa el impacto ambiental y social de la idea, algo que ha
                    cobrado mayor importancia en la última década, dado el enfoque global hacia la
                    sostenibilidad empresarial
                    <br /> (Hart, 1995).
                  </p>
                </div>
              </>)}
            ]}
            width={'700px'}
            height={'150px'}
            className='absolute top-[20px] left-[-310px]'
            />

        </div>

        {/*TCriterios de evaluacion */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <AnimatedElement 
                type={'slide'}
                slideDirection={'bottom'}
                delay ={0}
                duration={1}
                className={'top-[80px] left-[50px] z-[-1] justify-center flex-center'}
            >
            <AnimatedText className={'text-sm text-center text-gray-700'} 
                text={'Ilustración 1 - Criterios para Evaluar Ideas'} 
                type={'topToBottom'}
                delay = {1.5}
                duration = {1}
            />            
                <img src={DIAG_1} className='w-[1200px]'/>
            </AnimatedElement>
        </div> 

        {/* Importancia de la Innovación en los Negocios */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[500px] top-[300px] z-[-1]'}
        > 
        <img src={IMG1_2} className='w-[500px]'/> 
        </AnimatedElement>     

        <CardNote
            title="Selección de las Mejores Ideas para Implementación"
            content={'La selección final de ideas para su implementación suele requerir un enfoque más' + 
                    'detallado, que puede incluir pruebas piloto, estudios de mercado o creación de prototipos.' +
                    'Uno de los enfoques más comunes es el Stage-Gate Process, propuesto por Robert G.' + 
                    'Cooper, que organiza el desarrollo de productos en etapas, permitiendo una evaluación' +
                    'continua antes de avanzar a la siguiente fase'}
            width='999px'
            height='230px'  
            author='Cooper, 2008'
           className='top-[40px] left-[150px] bg-[#d9d9d9a4]'
          />
        </div>
      </ScrollContent>
    </div>
  )
}

export default Three
