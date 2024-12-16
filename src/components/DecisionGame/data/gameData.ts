import { Question } from '../types/Game';

export const questions: Question[] = [
  {
    id: 'q1',
    text: '¿Qué tipo de indicadores utilizarías para evaluar el desempeño estratégico?',
    options: [
      { text: 'Indicadores Financieros', value: true, nextQuestionId: 'q2' },
      { text: 'Indicadores No Financieros', value: true, nextQuestionId: 'q3' },
    ],
  },
  {
    id: 'q2',
    text: 'Seleccionaste Indicadores Financieros. ¿Qué métrica usarías?',
    options: [
      { text: 'ROI (Retorno sobre la Inversión)', value: true, nextQuestionId: 'q4' },
      { text: 'Flujo de Caja', value: true, nextQuestionId: 'q4' },
    ],
  },
  {
    id: 'q3',
    text: 'Seleccionaste Indicadores No Financieros. ¿Qué aspecto medirías?',
    options: [
      { text: 'Satisfacción del Cliente', value: true, nextQuestionId: 'q4' },
      { text: 'Eficiencia Operativa', value: true, nextQuestionId: 'q4' },
    ],
  },
  {
    id: 'q4',
    text: '¿Cuál sería tu siguiente paso si los indicadores muestran desviaciones?',
    options: [
      { text: 'Realizar Ajustes Estratégicos', value: true, nextQuestionId: null },
      { text: 'Ignorar las desviaciones', value: false, nextQuestionId: null },
    ],
  },
];


export const truthTable: Record<string, { text: string; description: string }> = {
  'true,true,true,true': {
    text: 'Evaluación Completa y Correcta',
    description:
      'Has logrado identificar correctamente los indicadores clave, tanto financieros como no financieros, y has tomado medidas estratégicas adecuadas frente a las desviaciones.',
  },
  'true,true,true,false': {
    text: 'Falta de Ajustes',
    description: 'Aunque identificaste correctamente los indicadores clave, ignorar las desviaciones puede poner en riesgo la efectividad de la estrategia.',
  },
  'true,false,false,true': {
    text: 'Enfoque en Indicadores Financieros',
    description: 'Tu enfoque en indicadores financieros es sólido, pero deberías considerar los indicadores no financieros para una evaluación más integral.',
  },
  'false,true,false,true': {
    text: 'Enfoque en Indicadores No Financieros',
    description: 'Reconocer los aspectos cualitativos y operativos es un buen comienzo, pero sería beneficioso incluir también métricas financieras para una visión más completa.',
  },
  'false,false,false,false': {
    text: 'Sin Estrategia Clara',
    description: 'No lograste implementar indicadores clave ni tomar medidas estratégicas, lo que compromete la capacidad de la organización para alcanzar sus objetivos.',
  },
  // Claves adicionales con mensajes genéricos
  'true,true,false,false': {
    text: 'Evaluación Parcial',
    description: 'Identificaste algunos indicadores clave, pero ignoraste pasos importantes para asegurar la efectividad estratégica.',
  },
  'true,false,true,false': {
    text: 'Visión Sesgada',
    description: 'Consideraste aspectos relevantes, pero faltaron medidas clave para un análisis completo.',
  },
  'false,true,true,false': {
    text: 'Visión Parcial',
    description: 'Focalizaste correctamente en algunos indicadores, pero la falta de ajustes limita la efectividad.',
  },
  'false,false,true,true': {
    text: 'Medidas Tomadas Parcialmente',
    description: 'Tomaste acciones, pero faltaron indicadores clave para respaldarlas.',
  },
  'true,false,false,false': {
    text: 'Enfoque Limitado',
    description: 'Considerar solo indicadores financieros limita la perspectiva estratégica. Además, ignorar las desviaciones compromete la toma de decisiones.',
  },
  'false,true,true,true': {
    text: 'Visión Cualitativa Completa',
    description: 'Tu enfoque en indicadores no financieros y ajustes estratégicos refleja un buen análisis cualitativo.',
  },
  'true,false,true,true': {
    text: 'Enfoque Financiero con Medidas',
    description: 'Identificaste correctamente métricas financieras clave y actuaste frente a las desviaciones.',
  },
  'true,true,false,true': {
    text: 'Evaluación Balanceada',
    description: 'Lograste identificar indicadores relevantes y ajustar la estrategia, pero hay margen de mejora.',
  },
  'false,false,true,false': {
    text: 'Falta de Análisis',
    description: 'Identificaste parcialmente indicadores, pero no tomaste medidas completas para actuar.',
  },
};