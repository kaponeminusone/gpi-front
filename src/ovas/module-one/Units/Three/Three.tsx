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

import IMGtabla3 from '../../../../assets/module-one/three/tabla3.png'
import IMGQuiz from '../../../../assets/module-one/three/quiz.png'
import IMGMethods from '../../../../assets/module-one/three/methods.png'


import { Grid2X2, TreeDeciduous, DollarSign } from 'lucide-react';
import MultipleChoiceQuiz from './ActivityProblem'

function Three() {
  const sections = [
    '3.1 Métodos de Identificación y Análisis de Problemas',
    '3.1.1 Definición y proceso de identificación de problemas',
    '3.1.2 Métodos de Análisis de Problemas',
    '3.2 Herramientas y Técnicas para la Toma de Decisiones',
    'Actividad de Resolución de Problemas'
  ];
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Resolución de Problemas'} 
          subtitle={'Unidad 3'} 
          chapter={'3'}
          prevRoute="/module-one/two"
          nextRoute="/module-one/four"
          />
          
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Métodos de Identificación y Análisis de Problemas"
            subtitle='Definición, análisis, procesos y herramientas'
            className="top-[-200px] "
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'left-[50% - 500px] top-[250px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGMethods} className='w-[500px]'/>

          </AnimatedElement>

        </div>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardNote
            title="Definición y proceso de identificación de problemas"
            content={
              'Identificar un problema es el primer paso crítico en el proceso de resolución de problemas. ' +
              'Según Kepner & Tregoe (1997), la identificación de un problema implica reconocer que ' +
              'existe una discrepancia entre el estado actual y el deseado, y que se necesita una ' +
              'intervención para resolverla. Este proceso incluye la recopilación de datos relevantes, la ' +
              'observación y la consulta con las partes interesadas.'
            }
            author="Kepner & Tregoe, 1997"
            width="400px"
            height="450px"
            className="top-[40px] left-[100px] bg-[#d9d9d9a4]"
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'right'}
            delay ={0}
            duration={0.8}
            className={'left-[530px] top-[50px] z-[-1]'}
          >
            <img src={IMGtabla3} className='w-[700px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 2 - Habilidades Esenciales de un Líder'} 
            type={'topToBottom'}
            delay = {2}
            duration = {0.8}
            />
          </AnimatedElement>

          
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-row items-center justify-center">

          <CardFoldHorizontal
            cards={[
              {
                content: (
                  <>
                    <div className="flex flex-col justify-center items-center h-full">
                      <h3 className="text-2xl font-semibold mb-2 text-center">Métodos de análisis de problemas</h3>
                      <p className="text-gray-700 text-xm text-center">
                        El análisis de problemas es un paso esencial que permite descomponer un problema en sus
                        componentes básicos para entenderlo mejor.
                      </p>
                      <h4 className="text-xm text-gray-600 text-center mt-4">( Tap )</h4>
                    </div>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Análisis de Causa y Efecto (Diagrama de Ishikawa)</h3>
                    <p className="text-gray-700 text-xm">
                      Este método, desarrollado por Kaoru Ishikawa, es útil para identificar las causas raíz de un problema. El
                      diagrama de espina de pescado ayuda a desglosar el problema en categorías como personas, métodos, materiales,
                      y maquinaria (Ishikawa, 1986).
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Análisis FODA (SWOT)</h3>
                    <p className="text-gray-700 text-xm">
                      Según Puyt et al. (2023), el análisis FODA es una herramienta estratégica que evalúa las fortalezas,
                      debilidades, oportunidades y amenazas asociadas con una situación o problema específico.
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Análisis de Pareto</h3>
                    <p className="text-gray-700 text-xm">
                      Este principio, basado en la regla del 80/20, sugiere que el 80% de los problemas se derivan del 20% de las
                      causas. Identificar estas causas clave es crucial para una solución efectiva (Juran & Gryna, 1988).
                    </p>
                  </>
                ),
              },
            ]}
            width="300px"
            height="350px"
            className="top-[-100px] left-[0px]"
          />


        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardNote
            title="Herramientas y técnicas para la toma de decisiones"
            content={
              'Existen varias herramientas y técnicas que pueden facilitar la toma de decisiones:'
            }
            width="1100px"
            height="120px"
            className="top-[40px] left-[100px] bg-[#d9d9d9a4]"
          />

          <div className='flex flex-row gap-[20px] mr-[50px] relative w-full h-full'>

            <AnimatedElement
              type="slide"
              slideDirection="bottom"
              delay={0.5}
              duration={0.8}
              className="top-[200px] left-[100px]"
            >
              <CardSwap
                frontContent={
                  <>
                    <div className="flex flex-col h-full justify-between items-center">
                      <h3 className="text-xl font-semibold mb-2 text-center">Matriz de Decisión</h3>
                      <p className="text-sm text-gray-700 text-center">
                        Esta herramienta permite comparar varias alternativas en función de criterios específicos,
                        asignando una puntuación a cada opción. Es útil para decisiones complejas con múltiples factores a considerar
                        (Kepner & Tregoe, 1997).
                      </p>
                      <div className="flex flex-col justify-center items-center mt-4">
                        <Grid2X2 className="w-12 h-12 text-blue-500 mb-2" /> {/* Icono de lucide-react */}
                        <h4 className="text-sm text-gray-600 text-center">( Tap )</h4>
                      </div>
                    </div>
                  </>
                }
                backContent={
                  <>
                    <h3 className="text-xl font-semibold mb-2">Matriz de Decisión</h3>
                    <p className="text-gray-700 text-sm">
                      Utiliza una tabla para comparar opciones según criterios clave, asignando puntuaciones para
                      determinar la mejor alternativa.
                    </p>
                  </>
                }
                width="350px"
                height="350px"
                className="top-[0] left-[0]"
              />
            </AnimatedElement>

            <AnimatedElement
              type="slide"
              slideDirection="bottom"
              delay={1}
              duration={0.8}
              className="top-[200px] left-[480px]"
            >
              <CardSwap
                frontContent={
                  <>
                    <div className="flex flex-col h-full justify-between items-center">
                      <h3 className="text-xl font-semibold mb-2 text-center">Árbol de Decisión</h3>
                      <p className="text-sm text-gray-700 text-center">
                        Según Raiffa (1969), un árbol de decisión es un diagrama que representa las decisiones y
                        sus posibles consecuencias, incluidas las probabilidades de ocurrencia. Es especialmente útil
                        en situaciones de incertidumbre.
                      </p>
                      <div className="flex flex-col justify-center items-center mt-4">
                        <TreeDeciduous className="w-12 h-12 text-green-500 mb-2" /> {/* Icono de lucide-react */}
                        <h4 className="text-sm text-gray-600 text-center">( Tap )</h4>
                      </div>
                    </div>
                  </>
                }
                backContent={
                  <>
                    <h3 className="text-xl font-semibold mb-2">Árbol de Decisión</h3>
                    <p className="text-gray-700 text-sm">
                      Representa visualmente las decisiones, posibles resultados, y sus probabilidades, facilitando
                      un análisis sistemático en condiciones de incertidumbre.
                    </p>
                  </>
                }
                width="350px"
                height="350px"
                className=""
              />
            </AnimatedElement>

            <AnimatedElement
              type="slide"
              slideDirection="bottom"
              delay={1.5}
              duration={0.8}
              className="top-[200px] left-[860px]"
            >
              <CardSwap
                frontContent={
                  <>
                    <div className="flex flex-col h-full justify-between items-center">
                      <h3 className="text-xl font-semibold mb-2 text-center">Análisis de Costo-Beneficio</h3>
                      <p className="text-sm text-gray-700 text-center">
                        Este método implica evaluar los costos y beneficios asociados con cada opción para
                        determinar la viabilidad económica de las alternativas (Boardman et al., 2017).
                      </p>
                      <div className="flex flex-col justify-center items-center mt-4">
                        <DollarSign className="w-12 h-12 text-yellow-500 mb-2" /> {/* Icono de lucide-react */}
                        <h4 className="text-sm text-gray-600 text-center">( Tap )</h4>
                      </div>
                    </div>
                  </>
                }
                backContent={
                  <>
                    <h3 className="text-xl font-semibold mb-2">Análisis de Costo-Beneficio</h3>
                    <p className="text-gray-700 text-sm">
                      Evalúa la viabilidad económica comparando los costos y beneficios asociados con
                      las diferentes alternativas.
                    </p>
                  </>
                }
                width="350px"
                height="350px"
                className=""
              />
            </AnimatedElement>

          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <div className='mb-[150px]'>
              <MultipleChoiceQuiz/>
          </div>

          <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0}
            duration={0.3}
            className={'left-[-125px] bottom-[-50px] z-[-1]'}
          >
            <img src={IMGQuiz} className='w-[700px]'/>

          </AnimatedElement>

        </div>

      </ScrollContent>
    </div>
  )
}

export default Three