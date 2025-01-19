// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'

import IMGPri from '../../../../assets/module-ten/four/auxiliar.jpg'
import IMGint2 from '../../../../assets/module-four/Two/IMG1.png'
import ICON4_2 from '../../../../assets/module-four/Two/ICON5.png'
import ICON4_3 from '../../../../assets/module-four/Two/ICON1.png'
import ICON4_4 from '../../../../assets/module-four/Two/ICON2.png'
import ICON4_5 from '../../../../assets/module-four/Two/ICON3.png'
import ICON4_6 from '../../../../assets/module-four/Two/ICON4.png'
import IMG4_1 from '../../../../assets/module-four/Two/IMG2.png'

import DIAG_1 from '../../../../assets/module-four/Two/IMG3.png'

import { VideoPlayer } from '../../../../components/VideoPlayer/VideoPlayer'


function Two() {
  const sections = [
    '1. Presupuestos y Análisis Financiero',
    '1.1. Presupuesto',
    '1.2. Elaboración de Presupuestos',
    '1.3. Tipos de Presupuestos',
    '2. Técnicas de Análisis Financiero',
    '2.1. Análisis de razones financieras',
    '2.2. Análisis horizontal y vertical',
    '2.3. Análisis de flujo de caja',
    '2.4. Valor presente neto (VPN) y tasa interna de retorno (TIR)',
    '2.5. Proceso de Elaboración de Presupuestos y Técnicas de Análisis Financiero'
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Presupuestos y Análisis Financiero'} 
          subtitle={'Unidad 2'} 
          chapter={'2'}
          prevRoute="/module-four/one"
          nextRoute="/module-four/three"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <CardTitle  
            title="Presupuestos y Análisis Financiero"
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

       {/* Concepto de presupuesto */}
       <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <CardNote
            title="Presupuesto"
            content={'El presupuesto es una herramienta clave de la gestión financiera, utilizada para la' +
                      'planificación y el control de los recursos financieros de una empresa. Según Horngren et'+
                      'al., "un presupuesto es una declaración formal de los planes financieros de una entidad, que'+
                      'sirve como guía para las actividades futuras y como herramienta de control para medir el' +
                      'rendimiento".'}
            width='400px'
            height='300px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0.5}
            duration={1}
            className= {'left-[25px] top-[350px] z-[-1]'}
          >
            <img src={IMGint2} className=' w-[550px]'/>
          </AnimatedElement>

          <div className={'w-[100] h-[150]'} style={{position: 'absolute', left: '550px', top: '100px' }}>
            <VideoPlayer videoUrl={'https://youtu.be/1dwO6y1MbMQ'} />
          </div>
        </div>

        {/*Elaboración de presupuesto*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
              title='Elaboración de Presupuestos'
              content={'El proceso de elaboración de presupuestos típicamente sigue los siguientes pasos:'}
              width='950px'
              height='120px'  
            className='top-[10px] left-[200px] bg-[#d9d9d9a4]'
            />

          <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">Proceso de elaboración de presupuesto</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Planificación de ingresos:</h3>
                <p className="text-gray-700">
                  Se estiman los ingresos futuros de la empresa, basados
                  en datos históricos, proyecciones de mercado, análisis de tendencias y expectativas
                  de crecimiento económico.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Tayles & Drury, 2023'}</p  >
                  <p>
                  Para una empresa, esto puede implicar pronosticar las ventas de productos o servicios en diferentes mercados.
                  </p>
                </p>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Estimación de costos y gastos:</h3>
                <p className="text-gray-700">
                  Se evalúan los costos operativos, gastos de capital,
                  y otros desembolsos que la empresa espera incurrir. Esto incluye el costo de
                  producción, sueldos, alquileres, suministros y otros costos fijos y variables.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Shim & Siegel, 2015'}</p>
                </p>
              </>)},
              {content: (<div>
                <h3 className="text-xl font-semibold mb-2">Análisis de flujo de caja:</h3>
                <p className="text-gray-700">
                  Es crucial asegurarse de que la empresa tenga suficiente
                  liquidez para cumplir con sus obligaciones. El flujo de caja proyectado es parte
                  integral de un buen presupuesto, ya que asegura que no haya déficits imprevistos.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Horngren et al., 2021'}</p>
                </p>
              </div>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Revisión y ajuste:</h3>
                <p className="text-gray-700">
                Los presupuestos deben ser revisados periódicamente para
                reflejar cambios en el entorno económico, condiciones de mercado o nuevas
                estrategias empresariales. Este proceso de revisión permite mantener la flexibilidad
                financiera
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Shim & Siegel, 2015'}</p>
                </p>
              </>)},
              {content: (<div>
                <h3 className="text-xl font-semibold mb-2">Control y seguimiento:</h3>
                <p className="text-gray-700">
                  Una vez implementado, el presupuesto sirve como una
                  herramienta de control que permite a los gestores evaluar el rendimiento real frente
                  a las proyecciones iniciales, identificando áreas donde se desvían los resultados y se
                  necesita tomar acción correctiva.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Tayles & Drury, 2023'}</p>
                </p>
              </div>)}              
            ]}
            width={'280px'}
            height={'400px'}
            className='absolute top-[10px] left-[10px]' // Agregado: border-radius, background, shadow
          />             
        </div>

        {/*Tipos de presupuesto*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
              title='Tipos de Presupuestos'
              content={'Entre los conceptos más importantes se encuentran: '}
              width='950px'
              height='120px'  
            className='top-[10px] left-[200px] bg-[#d9d9d9a4]'
            /> 
          <div className="flex justify-center space-x-4 relative left-[-50px] top-[20px] ">
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON4_3} className="w-[100px]" />
                    <h3 className="text-2xl mb-2 text-center">Presupuesto Operativo</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Presupuesto Operativo</h3>
                  <p className="text-gray-700">
                  Proyecta los ingresos y gastos relacionados con las
                  operaciones diarias de la empresa.
                  </p>
                </>
              }
              width="250px"
              height="480px"
              className="relative"
            />
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON4_4} className="w-[100px]" />
                    <h3 className="text-2xl mb-2 text-center">Presupuesto de Capital</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Presupuesto de Capital</h3>
                  <p className="text-gray-700">
                    Involucra la planificación de inversiones en activos fijos,
                  como edificios, maquinaria o tecnologías.                 
                  </p>
                </>
              }
              width="250px"
              height="480px"
              className="relative"
            />
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON4_5} className="w-[100px]" />
                    <h3 className="text-2xl mb-2 text-center">Presupuesto Financiero</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Presupuesto Financiero</h3>
                  <p className="text-gray-700">Abarca la planificación de la estructura financiera de la
                  empresa, incluyendo el financiamiento de proyectos y el control de la deuda<br />(Horngren et al., 2013).
                  </p>
                </>
              }
              width="250px"
              height="480px"
              className="relative"
            />
          </div>                    
        </div>

        {/*Tecnicas de anlisis financiero*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center"> 

        <CardNote
            title="El analisis financiero"
            content={'Es un proceso que permite evaluar la situación financiera de una' + 
                      'empresa y su desempeño, mediante el uso de diferentes herramientas y técnicas. Según ' +
                      '(Fraser & Ormiston, 2014), el análisis financiero proporciona información vital para la toma'+ 
                      'de decisiones estratégicas y operativas.'}
            width='999px'
            height='150px'
           className='top-[40px] left-[150px] bg-[#d9d9d9a4]'
          />

       <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[450px] top-[150px] z-[-1]'}
        > 
        <img src={IMG4_1} className='w-[500px]'/> 
        </AnimatedElement>    
        </div>

        {/*Análisis de razones financieras:*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
              title='Análisis de razones financieras'
              content={'Es una técnica que utiliza datos contables para calcular una serie de indicadores clave. Estos indicadores se agrupan en categorías como:'}
              width='950px'
              height='130px'  
            className='top-[10px] left-[200px] bg-[#d9d9d9a4]'
            />

          <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">Análisis de razones financieras</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Razones de liquidez:</h3>
                <p className="text-gray-700">
                  Miden la capacidad de la empresa para cumplir con
                  sus obligaciones de corto plazo. Un ejemplo es la razón corriente, que
                  compara los activos corrientes con los pasivos corrientes
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Fraser & Ormiston, 2014'}</p  >
                </p>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Razones de rentabilidad:</h3>
                <p className="text-gray-700">
                  Evalúan la capacidad de la empresa para generar
                  utilidades. Un indicador común es el margen de utilidad neta, que mide la
                  ganancia neta como porcentaje de los ingresos totales
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Brigham & Houston, 2021'}</p>
                </p>
              </>)},
              {content: (<div>
                <h3 className="text-xl font-semibold mb-2">Razones de apalancamiento:</h3>
                <p className="text-gray-700">
                   Evalúan el grado en que una empresa utiliza
                  deuda para financiar sus operaciones, como la razón de deuda a capital,
                  que compara el total de deuda con el capital de los accionistas
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Tayles & Drury, 2023'}</p>
                </p>
              </div>)}
            ]}
            width={'250px'}
            height={'400px'}
            className='absolute top-[10px] left-[10px]' // Agregado: border-radius, background, shadow
          />             
        </div>

        {/*Análisis en ambas direcciones */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
              title='Análisis horizontal y vertical:s'
              content={'Son herramientas que se usan para analizar los estados financieros de una empresa'+
                        '. Se complementan para identificar áreas de mejora en el desempeño financiero. '
              }
              width='950px'
              height='130px'  
            className='top-[10px] left-[200px] bg-[#d9d9d9a4]'
            />

          <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">Análisis horizontal y vertical:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Analisis horizontal</h3>
                <p className="text-gray-700">
                  Compara los estados financieros de diferentes
                  períodos para identificar tendencias de crecimiento o disminución. Este
                  análisis ayuda a comprender el comportamiento a lo largo del tiempo y es
                  útil para detectar patrones de crecimiento o declive
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Brigham & Houston,2021'}</p  >
                </p>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Analisis vertical</h3>
                <p className="text-gray-700">
                    Examina cada partida de los estados financieros en
                    relación con un total, como las ventas netas en el estado de resultados o los
                    activos totales en el balance general. Este análisis ayuda a identificar la
                    proporción de cada componente dentro del total
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Fraser & Ormiston, 2014'}</p>
                </p>
              </>)}
            ]}
            width={'400px'}
            height={'400px'}
            className='absolute top-[10px] left-[10px]' // Agregado: border-radius, background, shadow
          />             
        </div>

        {/* Analisis de dlujo de caja */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={ICON4_6} className=' w-[100px]'/> 
                  <h3 className="text-2xl mb-2 text-center">Análisis de flujo de caja</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Definición</h3>
                  <p className="text-gray-700">
                  El flujo de caja es uno de los aspectos más críticos para
                  evaluar la salud financiera de una empresa. El análisis del estado de flujos de
                  efectivo permite a los gestores entender la liquidez real de la empresa y su
                  capacidad para generar dinero en efectivo a partir de sus operaciones<br /> (Shim &
                  Siegel, 2015).
                  </p>
              </>
            )}
            width='400px'
            height='350px' 
           className='absolute left-[300px] top-[-50px]'
          />
          <div className={'w-[100] h-[150]'} style={{position: 'absolute', left: '50px', top: '100px' }}>
            <VideoPlayer videoUrl={'https://youtu.be/eLWgTsYkXGg'} />
          </div>
          </div>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <CardSwap 
                frontContent={(
                  <>
                  <div className='flex flex-col justify-center items-center h-full'>
                      <img src={ICON4_2} className=' w-[100px]'/> 
                      <h3 className="text-2xl mb-2 text-center">Valor presente neto (VPN) y tasa interna de retorno (TIR)</h3>
                      <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                  </>
                )} 
                backContent={(
                  <>
                  <h3 className="text-xl font-semibold mb-2">Definición</h3>
                      <p className="text-gray-700">
                      Estas técnicas son
                      fundamentales para la evaluación de proyectos de inversión. El VPN permite
                      determinar el valor de una inversión en términos actuales, descontando los flujos
                      futuros de efectivo, mientras que la TIR mide la rentabilidad proyectada de una
                      inversión
                        <br />(Brigham & Houston, 2021).
                      </p>
                  </>
                )}
                width='400px'
                height='350px' 
              className='absolute left-[-450px] top-[-50px]'
              />
          <div className={'w-[100] h-[150]'} style={{position: 'absolute', left: '550px', top: '100px' }}>
            <VideoPlayer videoUrl={'https://youtu.be/C5SUOxpqHgM'} />
          </div>
            </div>
        {/*TCriterios de evaluacion */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <AnimatedElement 
                type={'slide'}
                slideDirection={'bottom'}
                delay ={0}
                duration={1}
                className={'top-[80px] left-[100px] z-[-1] justify-center flex-center'}
            >
            <AnimatedText className={'text-sm text-center text-gray-700'} 
                text={'Ilustración 2 - Proceso de Elaboración de Presupuestos y Técnicas de Análisis Financiero'} 
                type={'topToBottom'}
                delay = {1.5}
                duration = {1}
            />            
                <img src={DIAG_1} className='w-[1100px]'/>
            </AnimatedElement>
        </div> 

        </ScrollContent>
      </div>

  )
}

export default Two