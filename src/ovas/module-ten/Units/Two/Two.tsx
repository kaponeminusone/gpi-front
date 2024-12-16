// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'

import IMGTable2 from '../../../../assets/module-ten/two/table2.png'
import IMGTitle from '../../../../assets/module-ten/two/icon1-1.png'
import IMGint from '../../../../assets/module-ten/two/imagenprincipal.png'
import IMGDes from '../../../../assets/module-ten/two/etica.png'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'
import { VideoPlayer } from '../../../../components/VideoPlayer/VideoPlayer'

function Two() {
  const sections = [
    '2.1 Identificación de dilemas éticos',
    '2.1.1. Principios',
    '2.2 Estrategias para la toma de decisiones éticas',
    '2.2.1. La Guia moral de las empresas'
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Prácticas Comerciales Éticas'} 
          subtitle={'Unidad 2'} 
          chapter={'2'}
          prevRoute="/module-ten/one"
          nextRoute="/module-ten/three"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardTitle  
            title='Prácticas Comerciales Éticas'
            subtitle='Definición y principios.'
            className='top-[-200px] left-[0px]'
            />
            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0.5}
            duration={1}
            className={'left-[50% - 500px] top-[300px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGTitle} className=' w-[300px]'/>
          </AnimatedElement>
        </div>

        {/* Principios */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <CardNote
            title="Identificación de dilemas éticos"
            content={'Los dilemas éticos suelen surgir cuando las ' +
              'decisiones comerciales involucran conflictos ' +
              'entre el interés personal y el bienestar de otros.'}
            author='Trevino & Nelson, 2016.'
            width='400px'
            height='200px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0.5}
            duration={1}
            className= {'left-[75px] top-[280px] z-[-1]'}
          >
            <img src={IMGint} className=' w-[380px]'/>
          </AnimatedElement>

          <div className={'w-[100] h-[150]'} style={{position: 'absolute', left: '550px', top: '100px' }}>
            <VideoPlayer videoUrl={'https://youtu.be/v97WAu3ZW7Q'} />
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
            <img src={IMGDes} className=' w-[450px]'/>
          </AnimatedElement>

        <CardNote
            title="Estrategias para la toma de decisiones éticas"
            content={'Para abordar dilemas éticos, las empresas pueden utilizar varias estrategias, como:'}
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
                  <h3 className="text-2xl mb-2 text-center">Prueba del Publicitario</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Prueba del Publicitario</h3>
                  <p className="text-gray-700">
                  Evaluar cómo una decisión sería percibida por el público
                  y si se alinea con las normas sociales y culturales
                  
                  - Laczniak & Murphy, 2006
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
                  <h3 className="text-2xl mb-2 text-center">Modelo de los Cuatro Principios:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Modelo de los Cuatro Principios:</h3>
                  <p className="text-gray-700">
                  Este modelo incluye los principios de justicia, respeto a 
                  los derechos, beneficencia, y no maleficencia
                  - Beauchamp & Childress, 2001
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
        <img src={IMGTable2} className='w-[600px]'/> 
        <AnimatedText 
            className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 2 - Estrategias para la Toma de Decisiones Éticas'} 
            type={'topToBottom'}
            delay = {1.5}
            duration = {1}
            />
        </AnimatedElement>     

        <CardNote
            title="La brújula moral de las organizaciones: Un recorrido por el proceso de toma de decisiones éticas"
            content={'Este proceso, que puede parecer complejo, puede descomponerse ' +
              'en pasos claros y concisos. Desde la identificación de un dilema ' +
              'moral hasta la implementación y seguimiento de la decisión final para la toma ' +
              'de decisiones alineadas a los valores de la orgnización.'}
            width='999px'
            height='150px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />

        <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-2xl mb-2 text-center">Caso de estudio</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Escenario</h3>
                <p className="text-gray-700 text-sm">
                Una multinacional con sede en un país desarrollado está 
                experimentando dificultades financieras. Para reducir 
                costos y mantener la competitividad, la alta gerencia
                 evalúa la posibilidad de externalizar una parte significativa 
                 de sus operaciones a un país en desarrollo, donde los costos
                  laborales son mucho más bajos. Esta decisión implicaría el d
                  espido de un gran número de empleados en el país de origen.
                </p>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Dilema etico</h3>
                <p className="text-gray-700 text-sm">
                ¿Cuál es la decisión más ética: priorizar la supervivencia de la 
                empresa y la rentabilidad para los accionistas, lo que implica 
                despidos masivos, o proteger los empleos de los empleados actuales,
                 aunque esto pueda comprometer la viabilidad a largo plazo de la empresa?
                </p>
              </>)},
              {content: (<div>
                <h3 className="text-xl font-semibold mb-2">Analisis del caso</h3>
                <p className="text-gray-700 text-sm">
                Una empresa debe decidir entre la rentabilidad a corto plazo 
                (outsourcing y despidos) y la responsabilidad social (proteger los 
                empleos). Los stakeholders involucrados incluyen empleados, accionistas,
                 clientes y comunidades. 
                </p>
              </div>)},
              {content: (<div>
                <h3 className="text-xl font-semibold mb-2">Opciones</h3>
                <p className="text-gray-700 text-sm">
                Despidos masivos, Reducción gradual de personal, Restructuración interna
                 o negociación con sindicatos. 
                Cada opción implica un equilibrio entre intereses económicos y sociales. 
                </p>
              </div>)}
            ]}
            width={'250px'}
            height={'400px'}
            className='absolute top-[-10px] left-[150px] mt-[20px]' // Agregado: border-radius, background, shadow
          />   

        </div>


      </ScrollContent>
    </div>
  )
}

export default Two