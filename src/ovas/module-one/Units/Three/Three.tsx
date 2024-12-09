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

import IMGdruker from '../../../../assets/module-one/Drucker.png'


import { Grid2X2, BookUser, Sparkle, MessageCircleHeart } from 'lucide-react';

function Three() {
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
          title={'Resolución de Problemas'} 
          subtitle={'Unidad 3'} 
          chapter={'3'}/>
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <p>Jola</p>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

        </div>

      </ScrollContent>
    </div>
  )
}

export default Three