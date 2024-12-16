// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
//import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElements/AnimatedElements'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
//import FocusComponent from '../../../../components/FocusComponent/FocusComponent'
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'

import IMGcases from '../../../../assets/module-ten/five/inicial.avif'
import IMGAux from '../../../../assets/module-ten/five/aux1.jpg'
import IMGTable5 from '../../../../assets/module-ten/five/tabla5.png'


function Five() {
  const sections = [
    '5.1 Análisis de Ejemplos Reales',
    '5.2 Implementación de Soluciones exitosas',
    '5.2.1 Definicion, procesos de Innovación y Estrategias',
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Casos de Estudio y Mejores Prácticasa'} 
          subtitle={'Unidad 5'} 
          chapter={'5'}
          prevRoute="/module-ten/four"
          nextRoute="/module-ten"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <CardTitle  
            title="Casos de Estudio y Mejores Prácticas"
            subtitle='Importancia y Ejemplos'
            className="top-[20px] left-[0]"
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[350px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGcases} className='w-[250px]'/>

          </AnimatedElement>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
        <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0.5}
            duration={1}
            className={'left-[-50px] top-[450px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGAux} className=' w-[450px]'/>
          </AnimatedElement>

        <CardNote
            title="Análisis de ejemplos reales"
            content={'Ejemplos de empresas que han destacado en la implementación de RSC incluyen a:'}
            // author='Beauchamp & Childress, 2001.'
            width='500px'
            height='150px'  
           className='top-[40px] left-[50px] bg-[#d9d9d9a4]'
          />

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  {/* <img src={ICON2} className=' w-[70px]'/>  */}
                  <h3 className="text-2xl mb-2 text-center">Patagonia:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Patagonia:</h3>
                  <p className="text-gray-700">
                  Con su enfoque en la sostenibilidad y la protección ambiental
(Chouinard & Stanley, 2012).
                  </p>
              </>
            )}
            width='400px'
            height='250px'  
           className='absolute left-[-300px] top-[10px]'
          />

        <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  {/* <img src={ICON2} className=' w-[70px]'/>  */}
                  <h3 className="text-2xl mb-2 text-center">Unilever:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Unilever:</h3>
                  <p className="text-gray-700">
                  Su Plan de Vida Sostenible ha establecido objetivos ambiciosos para
mejorar la salud y el bienestar (Unilever, 2024).
                  </p>
              </>
            )}
            width='400px'
            height='250px'  
           className='absolute left-[250px] top-[-210px]'
          />
        </div>


       <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
       <CardFoldHorizontal
            cards={[
              {
                content: (
                  <>
                    <div className="flex flex-col justify-center items-center h-full">
                      <h3 className="text-2xl font-semibold mb-2 text-center">Implementación de estrategias exitosas</h3>
                      <p className="text-gray-700 text-xm text-center">
                      Las estrategias exitosas para la implementación de RSC suelen involucrar:
                      </p>
                      <h4 className="text-xm text-gray-600 text-center mt-4">( Tap )</h4>
                    </div>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Integración en la Estrategia Corporativa:</h3>
                    <p className="text-gray-700 text-xm">
                    Alinear las prácticas de RSC con la
visión y misión de la empresa (Porter & Kramer, 2006).
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Participación Activa de los Empleados:</h3>
                    <p className="text-gray-700 text-xm">Involucrar a los empleados en iniciativas
                    para fomentar una cultura de responsabilidad (Brammer et al., 2007).
                    </p>
                  </>
                ),
              }
            ]}
            width="300px"
            height="350px"
            className="top-[-30px] left-[250px]"
          />

        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'absolute left-[60px] top-[150px] z-[-1]'}
        > 
        <img src={IMGTable5} className='w-[500px]'/> 
        <AnimatedText 
            className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 5 - Implementación de Estrategias Exitosas de RSC'} 
            type={'topToBottom'}
            delay = {1.5}
            duration = {1}
            />
        </AnimatedElement>
        </div>

      </ScrollContent>
    </div>
  )
}

export default Five