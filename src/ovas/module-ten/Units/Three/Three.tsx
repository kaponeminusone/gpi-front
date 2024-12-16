// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'
import IMGLaw from '../../../../assets/module-ten/three/law.jpg'
import IMGTable3 from '../../../../assets/module-ten/three/table3.png'
import IMGNorma from '../../../../assets/module-ten/three/principal.jpg'

function Three() {
  const sections = [
    '3.1 Legislación y regulaciones aplicables',
    '3.1.1. legislación aplicable',
    '3.2 Herramientas para el cumplimiento normativo',
    '3.2.1. cumplimiento normativo'
  ];
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Cumplimiento Normativo'} 
          subtitle={'Unidad 3'} 
          chapter={'3'}
          prevRoute="/module-ten/two"
          nextRoute="/module-ten/four"
          />
          
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Cumplimiento Normativo"
            subtitle='Definición y herramientas'
            className="top-[-200px] "
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'left-[50% - 500px] top-[250px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGNorma} className='w-[400px]'/>

          </AnimatedElement>

        </div>
        {/* definiciones */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
        <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0.5}
            duration={1}
            className={'left-[150px] top-[200px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGLaw} className=' w-[450px]'/>
          </AnimatedElement>

        <CardNote
            title="Legislación y regulaciones aplicables"
            content={'Las empresas deben adherirse a una variedad de regulaciones que incluyen:'}
            // author='Beauchamp & Childress, 2001.'
            width='500px'
            height='150px'  
           className='top-[40px] left-[150px] bg-[#d9d9d9a4]'
          />

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  {/* <img src={ICON2} className=' w-[70px]'/>  */}
                  <h3 className="text-2xl mb-2 text-center">Regulaciones Ambientales:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Regulaciones Ambientales:</h3>
                  <p className="text-gray-700">
                  Normas sobre la reducción de emisiones, gestión de residuos, y uso de recursos sostenibles
                  - Jasch, 2003
                  </p>
              </>
            )}
            width='400px'
            height='250px'  
           className='absolute left-[300px] top-[200px]'
          />

        <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  {/* <img src={ICON2} className=' w-[70px]'/>  */}
                  <h3 className="text-2xl mb-2 text-center">Regulaciones Laborales:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Regulaciones Laborales:</h3>
                  <p className="text-gray-700">
                  Incluyen leyes sobre igualdad de oportunidades, salud y
                  seguridad en el trabajo, y derechos de los empleados 
                  - Sparrow et al., 2016
                  </p>
              </>
            )}
            width='400px'
            height='250px'  
           className='absolute left-[300px] top-[-350px]'
          />
        </div>

        {/* herramientas */}

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-row items-center justify-center">

          <CardFoldHorizontal
            cards={[
              {
                content: (
                  <>
                    <div className="flex flex-col justify-center items-center h-full">
                      <h3 className="text-2xl font-semibold mb-2 text-center">Herramientas para el cumplimiento normativo</h3>
                      <p className="text-gray-700 text-xm text-center">
                      Las herramientas para asegurar el cumplimiento incluyen:
                      </p>
                      <h4 className="text-xm text-gray-600 text-center mt-4">( Tap )</h4>
                    </div>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Sistemas de Gestión de Cumplimiento</h3>
                    <p className="text-gray-700 text-xm">
                    Plataformas integradas que ayudan a las
                    empresas a gestionar sus obligaciones regulatorias
                    (Mcnulty & Bies, 2013).
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Auditorías y Evaluaciones de Cumplimiento:</h3>
                    <p className="text-gray-700 text-xm">Evaluaciones periódicas para
                    identificar y corregir áreas de incumplimiento (Kpmg, 2016).
                    </p>
                  </>
                ),
              }
            ]}
            width="300px"
            height="350px"
            className="top-[-100px] left-[0px]"
          />
      </div>
       {/* Conceptos claves */}
       <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[500px] top-[70px] z-[-1]'}
        > 
        <img src={IMGTable3} className='w-[600px]'/> 
        <AnimatedText 
            className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 3 - Herramientas para el Cumplimiento Normativo'} 
            type={'topToBottom'}
            delay = {1.5}
            duration = {1}
            />
        </AnimatedElement>

                    
        <CardNote 
            title='Conceptos Clave en Ética Empresarial y Responsabilidad Social'
            content={'Cada decisión empresarial tiene un impacto. ' +
              'Esta imagen ilustra cómo la ética guía a las organizaciones  ' +
              'hacia un enfoque más responsable y sostenible ' }
            width='400px'
            height='200px'  
           className='top-[60px] left-[80px] bg-[#d9d9d9a4]'
          />

        <AnimatedElement 
              type={'popup'}
              slideDirection={'bottom'}
              delay ={4}
              duration={2}
              className={'top-[40px] left-[770px] z-[13]'}
              >
              <CardSelection
                question=" Las auditorías internas son una herramienta opcional para garantizar el cumplimiento normativo"
                options={[
                  {
                    label: "Falso",
                    content: "¡Muy bien por intentar responder! Las auditorías internas son fundamentales para asegurar que se cumplan todas las normas y regulaciones.",
                  },
                  {
                    label: "Verdadero",
                    content: "Te invitamos a explorar más sobre el tema y puedas expandir tus conocimientos.",
                  },
                ]}
                width={'400px'}
                height={'250px'}
                className='absolute top-[300px] left-[-690px]'
              />
            </AnimatedElement>
        </div>

      </ScrollContent>
    </div>
  )
}

export default Three