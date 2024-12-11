// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'

import IMGdruker from '../../../../assets/module-one/Drucker.png'
import IMGlider from '../../../../assets/module-two/leader_intersection.png'
import IMGTitle from '../../../../assets/module-two/title.png'
import IMGabilities from '../../../../assets/module-two/abilities.png'
import IMGCompetence from '../../../../assets/module-two/competence.png'
import IMGSteve from '../../../../assets/module-two/steve.png'
import IMGTransform1 from '../../../../assets/module-two/transform1.png'
import IMGTransform2 from '../../../../assets/module-two/transform2.png'
import IMGGestion from '../../../../assets/module-two/gestion.jpg'
import IMGMatrix from '../../../../assets/module-two/matrix.png'
import IMGProcrastination from '../../../../assets/module-two/procrastination.png'
import IMGProductivity from '../../../../assets/module-two/productivity.png'
import IMGExam from '../../../../assets/module-two/exam.png'
import IMGdirection from '../../../../assets/module-one/direction.png'
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'

import { Grid2X2, BookUser, Sparkle, MessageCircleHeart } from 'lucide-react';
import LeadershipActivity from './Activity'

function Two() {
  const sections = [
    '2.1 Técnicas de Liderazgo Efectivo',
    ' 2.1.1 Definición y características del liderazgo efectivos',
    ' 2.1.2 Modelos y Habilidades escenciales',
    ,
    ' 2.1.3 Liderazgo en la era digital y casos de estudio',
    ,
    ' 2.2 Estrategias para la Gestión Eficiente del Tiempo',
    ' 2.2.1  Principios fundamentales de la gestión del tiempo',
    ' 2.2.2  Herramientas, técnicas y eliminación de hábitos improductivos',
    ,
    ' 2.2.3  Entornos de alta presión, balance laboral y personal',
    ' Actividad de Liderazgo'
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Liderazgo y Gestión del Tiempo'} 
          subtitle={'Unidad 2'} 
          chapter={'2'}
          prevRoute="/module-one/one"
          nextRoute="/module-one/three"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardTitle  
            title='Técnicas de Liderazgo Efectivo'
            subtitle='Definición, características, modelos y casos.'
            className='top-[-200px] left-[0px]'
            />
            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0.5}
            duration={1}
            className={'left-[50% - 500px] top-[200px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGTitle} className='w-[500px]'/>
          </AnimatedElement>
        </div>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
            title='Definición y características del liderazgo efectivo'
              content={'El liderazgo efectivo es un proceso mediante el cual un individuo ' +
                        'influye en un grupo para lograr una meta común. El liderazgo es un'+
                        ' proceso mediante el cual un individuo influye en un grupo de individuos'+
                        ' para alcanzar un objetivo común. Los líderes efectivos poseen características'+
                        ' como la visión, la empatía, la integridad y la capacidad de inspirar a los demás.'}
              author='Northouse, 2020'
              width='400px'
              height='380px'  
            className='top-[40px] left-[100px] bg-[#d9d9d9a4]'
            />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'top'}
            delay ={0.5}
            duration={1}
            className={'left-[520px] top-[50px] z-[-1]'}
          >
            <img src={IMGlider} className='w-[700px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 1 - Intersecciones entre características clave del liderazgo efectivo'} 
            type={'topToBottom'}
            delay = {1.5}
            duration = {1}
            />
          </AnimatedElement>

        </div>
        <div className="bg-secondary text-secondary-foreground p-8 h-screen flex flex-col items-center">
         <div className='flex flex-row gap-[15px] pt-[2%] ml-[-100px]'>
          <CardSwap 
              frontContent={(
                <>
                <div className='flex flex-col h-full justify-between'>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Liderazgo Transformacional</h3>
                    <p className="text-gray-700">
                      Este modelo, popularizado por Bass & Riggio (2006), se centra en la capacidad
                      del líder para provocar un cambio positivo en los seguidores, inspirándolos
                      a alcanzar un rendimiento superior y ayudándolos a desarrollar su potencial.
                     
                    </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                      <MessageCircleHeart className="w-20 h-20 text-red-500 mb-[20px]" /> {/* Icono */}
                      <h4 className="text-xm text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                  </div>
                </>
              )} 
              backContent={(
                <>
                  <h3 className="text-xl font-semibold mb-2">Comparativa</h3>
                  <h4 className="text-xm font-semibold mb-4">Liderazgo Transformacional</h4>
                  <h4 className='font-semibold mb-2'>Características Distintivas</h4>
                  <p className='text-gray-700'>
                    Enfocado en la inspiración y motivación<br/>
                    Promueve una visión compartida<br/>
                    Desarrollo y empoderamiento personal.
                  </p>
                  <h4 className='font-semibold mb-2 mt-4'>Ventajas</h4>
                  <p className='text-gray-700'>
                  Fomenta el cambio positivo y la innovación<br/>
                  Motiva a los empleados para alcanzar su máximo potencial
                  </p>
                  <h4 className='font-semibold mb-2 mt-4'>Contextos Efectivos</h4>
                  <p className='text-gray-700'>
                  Organizaciones que buscan innovar<br/>
                  Empresas en proceso de transformación
                  </p>
                </>
              )}
              width='380px'
              height='520px'  
              className='absolute'
            />

          <CardSwap 
              frontContent={(
                <>
                <div className='flex flex-col h-full justify-between'>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Liderazgo Situacional</h3>
                    <p className="text-gray-700">
                    Según Hersey et al. (1996), el liderazgo situacional sugiere que no
                    existe un estilo de liderazgo único y que los líderes deben adaptar
                      su estilo en función de la situación y las necesidades del equipo.
                    
                    </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                      <Sparkle className="w-20 h-20 text-yellow-500 mb-[20px]" /> {/* Icono */}
                      <h4 className="text-xm text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                  </div>
                </>
              )} 
              backContent={(
                <>
                  <h3 className="text-xl font-semibold mb-2">Comparativa</h3>
                  <h4 className="text-xm font-semibold mb-4">Liderazgo Transformacional</h4>
                  <h4 className='font-semibold mb-2'>Características Distintivas</h4>
                  <p className='text-gray-700'>
                  Adaptabilidad según el contexto <br/>
                  Flexibilidad en el enfoque de liderazgo <br/>
                  Ajuste del estilo según las necesidades del equipo y la situación
                  book-user
                  </p>
                  <h4 className='font-semibold mb-2 mt-4'>Ventajas</h4>
                  <p className='text-gray-700'>
                  Permite una gestión efectiva en entornos cambiantes<br/>
                  Se adapta a diferentes situaciones y miembros del equipo
                  </p>
                  <h4 className='font-semibold mb-2 mt-4'>Contextos Efectivos</h4>
                  <p className='text-gray-700'>
                  Entornos dinámicos y diversos
                  Equipos donde las situaciones cambian frecuentemente
                  </p>
                </>
              )}
              width='380px'
              height='520px'  
              className='absolute'
            />

          <CardSwap 
              frontContent={(
                <>
                <div className='flex flex-col h-full justify-between'>
                  <div>
                      <h3 className="text-xl font-semibold mb-2">Liderazgo Ético</h3>
                      <p className="text-gray-700">
                      Brown & Treviño (2006) destacan que el liderazgo ético implica un 
                      comportamiento normativo y moralmente adecuado por parte del líder,
                      que actúa como un modelo a seguir para los seguidores.
                      </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                      <BookUser className="w-20 h-20 text-blue-500 mb-[20px]" /> {/* Icono */}
                      <h4 className="text-xm text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                </div>
                </>
              )} 
              backContent={(
                <>
                  <h3 className="text-xl font-semibold mb-2">Comparativa</h3>
                  <h4 className="text-xm font-semibold mb-4">Liderazgo Transformacional</h4>
                  <h4 className='font-semibold mb-2'>Características Distintivas</h4>
                  <p className='text-gray-700'>
                    Enfocado en la inspiración y motivación
                    Promueve una visión compartida
                    Desarrollo y empoderamiento personal.
                  </p>
                  <h4 className='font-semibold mb-2 mt-4'>Ventajas</h4>
                  <p className='text-gray-700'>
                    Enfocado en la inspiración y motivación
                    Promueve una visión compartida
                    Desarrollo y empoderamiento personal.
                  </p>
                  <h4 className='font-semibold mb-2 mt-4'>Contextos Efectivos</h4>
                  <p className='text-gray-700'>
                    Enfocado en la inspiración y motivación
                    Promueve una visión compartida
                    Desarrollo y empoderamiento personal.
                  </p>
                </>
              )}
              width='380px'
              height='520px'  
              className='absolute'
            />
         </div>
        </div>
         
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote
              content={'Las habilidades de un líder son esenciales para su éxito. Entre estas habilidades se incluyen:'}
              width='1000px'
              height='70px'  
              className='top-[20px] left-[180px] bg-[#d9d9d9a4]'
            />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={1}
            duration={0.5}
            className={'top-[100px] left-[100px] z-[-1]'}
          >
          <CardNote 
            title='Toma de decisiones'
            content={' La toma de decisiones efectiva'+
              ' implica un proceso racional y sistemático que permite a los líderes '+
              'seleccionar la mejor alternativa entre varias opciones.'}
            author='Eisenhardt & Zbaracki, 1992'
            width='500px'
            height='180px'  
           className='text-sm  rounded-lg p-6'
          />
          </AnimatedElement>

          <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={1.5}
            duration={0.5}
            className={'top-[280px] left-[100px] z-[-1]'}
          >
          <CardNote 
            title='Resolución de conflictos'
            content={' Fisher et al. (2011) sostienen que la capacidad de'+
              ' un líder para resolver conflictos es crucial para mantener'+
              ' la cohesión y la productividad del equipo.'}
            author=' '
            width='500px'
            height='180px'  
           className='text-sm  rounded-lg p-6 justify-start'
          /> 
          </AnimatedElement>
          
          <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={2}
            duration={0.5}
            className={'top-[480px] left-[100px] z-[-1]'}
          >
          <CardNote 
            title='Delegación'
            content={'Argumenta que la delegación efectiva permite a los líderes'+
              ' distribuir tareas de manera eficiente, promoviendo el empoderamiento'+
              ' y el desarrollo de habilidades en los miembros del equipo'}
            author='Yukl, 2008'
            width='500px'
            height='180px'  
           className='text-sm rounded-lg p-6 justify-start'
          /> 
          </AnimatedElement>
          
          <AnimatedElement 
            type={'slide'}
            slideDirection={'right'}
            delay ={2}
            duration={0.8}
            className={'left-[600px] top-[100px] z-[-1]'}
          >
            <img src={IMGabilities} className='w-[750px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 2 - Habilidades Esenciales de un Líder'} 
            type={'topToBottom'}
            delay = {4}
            duration = {0.8}
            />
          </AnimatedElement>

        </div>
        
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">

        <CardNote 
            title='Liderazgo en la era digital'
            content={'El liderazgo en la era digital presenta nuevos desafíos'+
              ' y oportunidades. Avolio et al. (2014) destacan que los líderes'+
              ' en entornos digitales deben desarrollar competencias como la gestión'+
              ' de la comunicación virtual y la capacidad para liderar equipos distribuidos globalmente.'}
            author=''
            width='1100px'
            height='140px'  
           className='left-[100px] top-[20px] rounded-lg p-6 justify-start pb-[30px] '
          /> 
        <CardNote 
            title='Caso de estudio'
            content={'Steve Jobs, cofundador de Apple Inc., es un ejemplo icónico de liderazgo transformacional.'+
              ' Según Isaacson (2011), Jobs utilizó su visión y carisma para inspirar a su equipo a crear'+
              ' productos innovadores que han cambiado la industria tecnológica.'}
            author=''
            width='1100px'
            height='140px'  
           className='left-[100px] top-[160px] rounded-lg p-6 justify-start pb-[30px] '
          /> 

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={0.8}
            className={'top-[350px] left-[30%] z-[-3]'}
          >
            <img src={IMGCompetence} className='w-[750px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'} 
            text={ 'Tabla2 - Habilidades tradicionales de liderazgo frente a las nuevas competencias'+
              ' necesarias en la era digital'} 
            type={'topToBottom'}
            delay = {1}
            duration = {0.8}
            />
          </AnimatedElement>

          <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0}
            duration={0.8}
            className={'top-[280px] left-[50px] z-[-2]'}
          >
            <img src={IMGSteve} className='w-[400px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'}
            type={'topToBottom'}
            delay={1}
            duration={0.8} 
            text={''}           
             />
          </AnimatedElement>           

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
     
            <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={0.8}
              className={'top-[100px] left-[0px] z-[-2]'}
            >
              <div className='w-full h-full flex flex-col gap-[20px]'>
                <div className='flex flex-row w-full h-full'>
                  <img src={IMGTransform1} className='w-[45%]'/>
                  <img src={IMGTransform2} className='w-[45%]'/>
                </div>
                <AnimatedText className={'text-sm text-center text-gray-700'}
                type={'topToBottom'}
                delay={1}
                duration={0.8}
                text={'Ilustración 4 - Aplicación de Liderazgo Transformacional por Steve Jobs en Apple'}           
                />
              </div>
            </AnimatedElement>    

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
              title='Estrategias para la Gestión Eficiente del Tiempo'
              subtitle='Principios, herramientas, tecnicas y balance.'
              className='top-[-200px] left-[0px]'
              />
              <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0.5}
              duration={0.5}
              className={'top-[250px] z-[-1] justify-center flex-center'}
            >
              <img src={IMGGestion} className='w-[500px]'/>
            </AnimatedElement>

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
 
            <CardNote 
              title='Principios fundamentales de la gestión del tiempo'
              content={'La gestión del tiempo es crucial para la eficiencia y la productividad. Según Covey & Fernández (2015), la planificación efectiva del tiempo requiere la habilidad de priorizar tareas basadas en su importancia y urgencia, utilizando herramientas como la matriz de Eisenhower.'}
              author=''
              width='450px'
              height='260px'  
            className='top-[100px] left-[100px]'
            />

        <AnimatedElement 
          type={'slide'}
          slideDirection={'bottom'}
          delay ={0.3}
          duration={1}
          className={'top-[400px] left-[100px]'}
        >
          <CardSwap 
              frontContent={(
                <>
                 <div className='flex flex-row justify-center items-center h-full'>
                  <div>
                  <h3 className="text-2xl mb-2 text-center">Como usar la Matriz de Eisenhower</h3>
                  <h4 className="text-sm text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                  <Grid2X2 className="w-12 h-12 text-blue-500 mb-4" /> {/* Icono */}
                </div>
                </>
              )} 
              backContent={(
                <>
                  <p className="text-gray-700">
                  <li>Prioriza las tareas en el Cuadrante 1.</li>
                  <li>Programa y planifica las tareas del Cuadrante 2.</li>
                  <li>Delega o minimiza las tareas del Cuadrante 3.</li>
                  <li>Elimina o evita las tareas del Cuadrante 4.</li>
                  </p>
                </>
              )}
              width='450px'
              height='150px'  
              className='absolute'
            />
        </AnimatedElement>

          <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0}
            duration={0.8}
            className={'top-[80px] left-[550px] z-[-2]'}
          >
            <img src={IMGMatrix} className='w-[800px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'}
            type={'topToBottom'}
            delay={1}
            duration={0.8} 
            text={'Ilustración 5 - Matriz de Eisenhower para la Priorización de Tareas'}           
             />
          </AnimatedElement>        
              
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
 
        <CardNote 
              content={'Existen diversas herramientas y técnicas para mejorar la gestión del tiempo:'}
              author=''
              width='1100px'
              height='70px'  
            className='top-[30px] left-[100px] bg-[#d9d9d9a4]'
            />

        <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-2xl mb-2 text-center">Descubre las Herramientas y Técnicas</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Matriz de Eisenhower</h3>
                <p className="text-gray-700 text-sm">
                Una herramienta que ayuda a los líderes a diferenciar entre
                tareas urgentes e importantes, promoviendo una mejor organización y eficiencia.
                </p>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Técnica Pomodoro</h3>
                <p className="text-gray-700 text-sm">
                Desarrollada por Cirillo (2018), esta técnica divide el trabajo
                en intervalos de 25 minutos, seguidos de breves descansos, lo que mejora la
                concentración y la productividad.
                </p>
              </>)},
              {content: (<div>
                <h3 className="text-xl font-semibold mb-2">Aplicaciones digitales</h3>
                <p className="text-gray-700 text-sm">
                Herramientas como Asana y Trello son útiles para la
                planificación de proyectos y la gestión de tareas.
                </p>
              </div>)}
            ]}
            width={'250px'}
            height={'250px'}
            className='absolute top-[-120px] left-[-10px]' // Agregado: border-radius, background, shadow
          />     

          <CardNote 
              title='Eliminación de hábitos improductivos'
              content={'La procrastinación es uno de los mayores enemigos de la productividad. Steel (2007) '+
                      'argumenta que la procrastinación es una forma de autorregulación fallida, y puede ser '+
                      'mitigada mediante el establecimiento de metas claras y la autogestión.'}
              author=' '
              width='1100px'
              height='150px'  
            className='top-[450px] left-[100px]'
            />  

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
        
        <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={0.8}
            className={'top-[0px] z-[-2]'}
          >
            <img src={IMGProcrastination} className='w-[800px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'}
            type={'topToBottom'}
            delay={1}
            duration={0.8} 
            text={'Ilustración 6- Causa-Efecto de la Procrastinación'}           
             />
          </AnimatedElement>   
                      
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
        
          <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0.5}
            duration={0.5}
            className={'top-[20px] left-[100px]'}
          >      
            <CardNote 
                title='Gestión del tiempo en entornos de alta presión'
                content={'La gestión del tiempo en situaciones de alta presión requiere resiliencia y la capacidad de '+
                          'manejar el estrés. McGonigal (2016) destaca la importancia de reencuadrar el estrés como'+
                          ' un desafío que puede mejorar el rendimiento.'}
                author=' '
                width='450px'
                height='250px'  
              className=''
              /> 
            </AnimatedElement>

            <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0.8}
            duration={0.5}
            className={'top-[300px] left-[100px]'}
          >  
              <CardNote 
                title='Balance entre vida laboral y personal'
                content={'Mantener un equilibrio entre la vida laboral y personal es esencial para el bienestar a largo '+
                        'plazo. Greenhaus & Beutell (1985) afirman que los conflictos entre el trabajo y la vida '+
                        'pueden generar tensiones que afectan negativamente tanto a los individuos como a las '+
                        'organizaciones. Estos conflictos surgen cuando las demandas del trabajo interfieren con las '+
                        'responsabilidades personales o viceversa, lo que puede conducir a estrés, agotamiento, y '+
                        'una reducción en la calidad de vida.'}
                author=' '
                width='450px'
                height='340px'  
              className=''
            />   
            </AnimatedElement>

        <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={0.8}
            className={'top-[20px] left-[530px] z-[-2]'}
          >
            <img src={IMGProductivity} className='w-[750px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'}
            type={'topToBottom'}
            delay={1}
            duration={0.8} 
            text={'Ilustración 7 - Resiliencia Transformando el Estrés en Productividad'}           
             />
          </AnimatedElement> 

        </div>


        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
            <div className='absolute top-[100px]'>
              <LeadershipActivity
                width='800px'
                height=''
              />
            </div>
            <img src={IMGExam} className='absolute z-[-1] top-[100px] left-[-70px] w-[800px]'/>
        </div>

      </ScrollContent>
    </div>
  )
}

export default Two