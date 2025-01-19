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

import IMGPri from '../../../../assets/module-four/One/IMG1.png'
import IMG4_1 from '../../../../assets/module-four/One/IMG2.png'
// import IMG4_2 from '../../../../assets/module-ten/four/auxiliar2.jpg'
// import IMG4_3 from '../../../../assets/module-ten/four/tabla4.png'

import ICON4_1 from '../../../../assets/module-four/One/ICON1.png'
import ICON4_2 from '../../../../assets/module-four/One/ICON2.png'
import ICON4_3 from '../../../../assets/module-four/One/ICON3.png'
import ICON4_4 from '../../../../assets/module-four/One/ICON4.png'
import ICON4_5 from '../../../../assets/module-four/One/ICON5.png'
import DIAG1 from '../../../../assets/module-four/One/DIAG1.png'
import { VideoPlayer } from '../../../../components/VideoPlayer/VideoPlayer'


function One() {
  const sections = [
    '1. Introducción a la Gestión Financiera',
    '1.1. La gestion financiera',
    '1.2. Conceptos y Definiciones',
    '1.3. Importancia de la Gestión Financiera en los Negocios',
    '1.4. Elementos de la Gestión Financiera'
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Introducción a la Gestión Financiera'} 
          subtitle={'Unidad 1'} 
          chapter={'1'}
          prevRoute="/module-three/five"
          nextRoute="/module-four/two"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <CardTitle  
            title="Introducción a la Gestión Financiera"
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

        {/*Conceptos basico*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center"> 

        <CardNote
            title="La gestión financiera"
            content={'La gestión financiera es el conjunto de actividades que una organización realiza para' +
                        'administrar de manera eficiente sus recursos financieros, con el objetivo de maximizar el' +
                        'valor de la empresa.'}
            width='999px'
            height='130px' 
           className='top-[40px] left-[150px] bg-[#d9d9d9a4]'
          />

        <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={ICON4_1} className=' w-[100px]'/> 
                  <h3 className="text-2xl mb-2 text-center">Diseño de Estrategias:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Definición</h3>
                  <p className="text-gray-700">
                    La gestión financiera "implica la
                    planificación, dirección, monitoreo, organización y control de los recursos financieros de
                    una entidad para alcanzar sus metas estratégicas". Esta definición abarca una variedad de
                    decisiones relacionadas con las inversiones, la financiación y la distribución de las
                    ganancias generadas.
                    <br />(Gitman & Zutter, 2014).
                  </p>
              </>
            )}
            width='400px'
            height='350px' 
           className='absolute left-[300px] top-[10px]'
          />

        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[150px] top-[150px] z-[-1]'}
        > 
        <img src={IMG4_1} className='w-[700px]'/> 
        </AnimatedElement>    
        </div>

        {/* Conceptos y Definiciones*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
              title='Conceptos y Definiciones'
              content={'Entre los conceptos más importantes de la gestión financiera se encuentran: '}
              width='950px'
              height='120px'  
            className='top-[10px] left-[200px] bg-[#d9d9d9a4]'
            /> 
          <div className="flex justify-center space-x-4 relative left-[-50px] top-[20px] ">
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON4_2} className="w-[100px]" />
                    <h3 className="text-2xl mb-2 text-center">Inversión</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Inversión</h3>
                  <p className="text-gray-700">
                  Se refiere a la asignación de recursos a proyectos o activos con el fin de
                    generar ingresos futuros. Las decisiones de inversión requieren una evaluación
                    cuidadosa del riesgo y el rendimiento esperado<br /> (Brealey et al., 2013).
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
                    <h3 className="text-2xl mb-2 text-center">Financiación</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Financiación</h3>
                  <p className="text-gray-700">
                    Implica la obtención de fondos que la empresa utilizará para llevar a
                    cabo sus operaciones e inversiones. Las fuentes pueden incluir el financiamiento
                    interno, préstamos bancarios, emisión de bonos o acciones<br />(Ross et al., 2021).                    
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
                    <img src={ICON4_3} className="w-[100px]" />
                    <h3 className="text-2xl mb-2 text-center">Rentabilidad</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Rentabilidad</h3>
                  <p className="text-gray-700">
                    La capacidad de la empresa para generar beneficios a partir de sus
                    operaciones. Este concepto es crucial para evaluar la sostenibilidad de una empresa
                    a largo plazo<br />(Van Horne & Wachowicz Jr, 2005).                    
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
                    <h3 className="text-2xl mb-2 text-center">Liquidez</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Liquidez</h3>
                  <p className="text-gray-700">
                    Hace referencia a la capacidad de la empresa para cumplir con sus
                    obligaciones de corto plazo, lo que es vital para garantizar el funcionamiento
                    continuo de las operaciones<br />(Fabozzi & Peterson, 2008).
                  </p>
                </>
              }
              width="250px"
              height="480px"
              className="relative"
            />
          </div>                    
        </div>
        {/*Importancia de la Gestión Financiera en los Negocios*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
              title='Importancia de la Gestión Financiera en los Negocios'
              content={'La gestión financiera es esencial en cualquier negocio, ya que tiene un impacto directo en' +
                'la toma de decisiones estratégicas y operativas. Su importancia radica en varios aspectos clave:'}
              width='950px'
              height='120px'  
            className='top-[10px] left-[200px] bg-[#d9d9d9a4]'
            />

          <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">La gestión financiera</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Maximización del valor</h3>
                <p className="text-gray-700">
                La gestión financiera está orientada a maximizar el valor
                de la empresa para sus accionistas. Esto implica la adecuada administración de los
                activos, la gestión del riesgo, y la selección de proyectos con un retorno positivo
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Ross et al., 2021'}</p  >
                </p>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Toma de decisiones informadas</h3>
                <p className="text-gray-700">
                Los directivos de las empresas dependen de una
                gestión financiera adecuada para tomar decisiones basadas en datos, lo que mejora
                la capacidad de predecir el rendimiento futuro y gestionar los riesgos asociados
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Brealey et al., 2020'}</p>
                </p>
              </>)},
              {content: (<div>
                <h3 className="text-xl font-semibold mb-2">Optimización de recursos:</h3>
                <p className="text-gray-700">
                A través de la planificación financiera, se garantiza el
                uso eficiente de los recursos disponibles, evitando la sobreinversión o subinversión,
                lo que puede comprometer la estabilidad financiera de la organización
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Gitman & Zutter, 2014'}</p>
                </p>
              </div>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Acceso al financiamiento</h3>
                <p className="text-gray-700">
                Los directivos de las empresas dependen de una
                gestión financiera adecuada para tomar decisiones basadas en datos, lo que mejora
                la capacidad de predecir el rendimiento futuro y gestionar los riesgos asociados
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Van Horne & Wachowicz Jr,2005'}</p>
                </p>
              </>)},
              {content: (<div>
                <h3 className="text-xl font-semibold mb-2">Gestión del riesgo</h3>
                <p className="text-gray-700">
                La identificación y evaluación de los riesgos financieros son
                fundamentales para garantizar la sostenibilidad de la empresa en el largo plazo. La
                gestión financiera permite implementar estrategias que minimicen las pérdidas y
                optimicen los beneficios en condiciones de incertidumbre
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Fabozzi & Peterson, 2008'}</p>
                </p>
              </div>)}              
            ]}
            width={'250px'}
            height={'400px'}
            className='absolute top-[10px] left-[10px]' // Agregado: border-radius, background, shadow
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
                text={'Ilustración 1 - Elementos de la Gestión Financiera'} 
                type={'topToBottom'}
                delay = {1.5}
                duration = {1}
            />            
                <img src={DIAG1} className='w-[1200px]'/>
            </AnimatedElement>
        </div> 

      </ScrollContent>
    </div>
  )
}

export default One