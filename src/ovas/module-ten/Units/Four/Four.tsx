// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'

import IMGPri from '../../../../assets/module-ten/four/auxiliar.jpg'
import IMGint2 from '../../../../assets/module-ten/four/principal.jpg'
import IMGaux2 from '../../../../assets/module-ten/four/auxiliar2.jpg'
import IMGtabla4 from '../../../../assets/module-ten/four/tabla4.png'
import IMGtransmitir from '../../../../assets/module-one/four/transmitir.jpg'
import IMGpublic from '../../../../assets/module-one/four/publico.jpg'
import IMGTrur from '../../../../assets/module-one/four/truefalse.png'

import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import { VideoPlayer } from '../../../../components/VideoPlayer/VideoPlayer'


function Four() {
  const sections = [
    '4.1 Planificación y ejecución de programas de RSC',
    '4.1.1 Concepto y principios clave',
    '4.2 Programas',
    '4.2.1 Medición y comunicación de resultados'
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Planificación y ejecución de programas de RSC'} 
          subtitle={'Unidad 4'} 
          chapter={'4'}
          prevRoute="/module-ten/three"
          nextRoute="/module-ten/five"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <CardTitle  
            title="Planificación y ejecución de programas de RSC"
            subtitle='Conceptos y principios clave'
            className="top-[-200px] left-[0]"
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'left-[50% - 500px] top-[250px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGPri} className='w-[500px]'/>

          </AnimatedElement>
        </div>

       {/* Principios */}
       <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <CardNote
            title="Identificación de dilemas éticos"
            content={'El éxito de un programa de RSC se fundamenta en una ' +
              'sólida evaluación previa. Al identificar las áreas clave donde la empresa puede marcar una diferencia significativa, ' +
              'entre el interés personal y el bienestar de otros.' +
            'tanto social como ambientalmente, se garantiza que las iniciativas emprendidas sean relevantes y generen un impacto positivo tangible.'}
            width='400px'
            height='300px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0.5}
            duration={1}
            className= {'left-[150px] top-[350px] z-[-1]'}
          >
            <img src={IMGint2} className=' w-[300px]'/>
          </AnimatedElement>

          <div className={'w-[100] h-[150]'} style={{position: 'absolute', left: '550px', top: '100px' }}>
            <VideoPlayer videoUrl={'https://youtu.be/L7SDdGAImsA'} />
          </div>


        </div>
        {/* Estrategias */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
        <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0.5}
            duration={1}
            className={'left-[150px] top-[200px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGaux2} className=' w-[600px]'/>
          </AnimatedElement>

        <CardNote
            title="Planificación y ejecución de programas de RSC"
            content={'La planificación y ejecución de programas de RSC puede ser desglosada en:'}
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
                  <h3 className="text-2xl mb-2 text-center">Evaluación de Impacto Social y Ambiental:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Evaluación de Impacto Social y Ambiental:</h3>
                  <p className="text-gray-700">
                  Identificar áreas clave para la
                  intervención (Jeurissen & Elkington, 2000).
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
                  <h3 className="text-2xl mb-2 text-center">Diseño de Estrategias:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Diseño de Estrategias:</h3>
                  <p className="text-gray-700">
                  Crear planes de acción específicos y medibles (Porter &
                    Kramer, 2006).
                  </p>
              </>
            )}
            width='400px'
            height='250px'  
           className='absolute left-[300px] top-[-350px]'
          />
        </div>

        {/*La grafica*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[30px] top-[200px] z-[-1]'}
        > 
        <img src={IMGtabla4} className='w-[600px]'/> 
        <AnimatedText 
            className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 4 - Planificación y Ejecución de Programas de RSC'} 
            type={'topToBottom'}
            delay = {1.5}
            duration = {1}
            />
        </AnimatedElement>     

        <CardNote
            title="Para medir y comunicar los resultados de la RSC:"
            content={'Para medir y comunicar los resultados de la RSC: '}
            width='500px'
            height='150px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />

        <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-2xl mb-2 text-center">Planificación y Ejecución de Programas de RSC</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Indicadores de Desempeño:</h3>
                <p className="text-gray-700 text-sm">Usar KPIs específicos como la reducción de
                emisiones o el aumento en la inversión comunitaria (Eccles et al., 2014).
                </p>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Informes de Sostenibilidad:</h3>
                <p className="text-gray-700 text-sm">
                Publicar informes periódicos que detallen el progreso
                y las áreas de mejora (Pizzi et al., 2023).
              </p>
              </>)}
            ]}
            width={'250px'}
            height={'350px'}
            className='absolute top-[-10px] left-[200px]' // Agregado: border-radius, background, shadow
          />   
        </div>

      </ScrollContent>
    </div>
  )
}

export default Four