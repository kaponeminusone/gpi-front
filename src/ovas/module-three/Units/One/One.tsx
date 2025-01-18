// Modulo tres - Unidad Uno: Innovación y Creatividad
import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'

// Imagenes
import ICON1 from '../../../../assets/module-three/icons-1.png'
import IMG1_1 from '../../../../assets/module-three/IMG1-1.png'
// Componenetes
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import { CardSwap } from '../../../../components/Cards/CardSwap'
import { CardTitle } from '../../../../components/Cards/CardTitle'


function One() {
  const sections = ['1. Conceptos y definiciones',
                    '1.1. Conceptos y definiciones',
                    '1.2. Importancia de la Innovación en los Negocios',
                  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Introducción a la Innovación y Creatividad'} 
          subtitle={'Unidad 1'} 
          chapter={'1'}
          prevRoute="/module-three"
          nextRoute="/module-three/two"
          />
      </div>
      <ScrollContent sections={sections}>
        
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Conceptos y definiciones"
            subtitle='Innovación Empresarial'
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
            title="Ética y RSE: La clave para un negocio rentable y sostenible."
            content={'La creatividad y la innovación son interdependientes, ya que la creatividad' +
                     'es el motor que alimenta la innovación. Sin una base creativa, las ' +
                     'innovaciones carecerían de originalidad. Además, la innovación tiene un ' +
                     'enfoque más orientado a la acción, mientras que la creatividad es más ' +
                     'un proceso de generación de ideas.'}
            author='Sternberg & Lubart, 1998'
            width='700px'
            height='220px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[250px] left-[45px] z-[-1] justify-center flex-center'}
          >
            <img src={IMG1_1} className='w-[450px]'/>
          </AnimatedElement>

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={ICON1} className=' w-[70px]'/> 
                  <h3 className="text-2xl mb-2 text-center">Innovación</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
                  <p className="text-gray-700">
                  la aplicación exitosa de nuevas ideas, productos,
                  servicios o procesos dentro de un contexto organizacional o social. Esta noción implica no
                  solo la generación de ideas originales, sino su implementación efectiva para obtener valor
                  económico o social 
                  </p>
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Schumpeter & Backhaus, 1934'}</p>
              </>
            )}
            width='400px'
            height='250px'  
           className='absolute left-[280px] top-[-90px]'
          />

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={ICON1} className=' w-[70px] '/> 
                  <h3 className="text-2xl mb-2 text-center">Creatividad</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Creatividad</h3>
                  <p className="text-gray-700">
                  las prácticas éticas y de RSE están positivamente
                  relacionadas con el desempeño financiero de las empresas, 
                  la satisfacción de los empleados y la lealtad de los clientes.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Aguinis & Glavas, 2012'}</p>
                  </p>
              </>
            )}
            width='400px'
            height='250px'  
           className='absolute left-[280px] top-[-30px]'
          />
        </div>
      </ScrollContent>
    </div>
  )
}

export default One
