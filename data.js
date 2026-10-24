// Base de datos completa de Psicoanálisis II (Melanie Klein & Donald Winnicott)
// Contenidos rigurosos basados en la cátedra de Melanie Leyton Blanche - Solemne II

const MODULES_DATA = [
  {
    id: "mod1",
    title: "Módulo 1: Melanie Klein — Edipo Temprano y Dinámica Pulsional",
    shortTitle: "Klein: Edipo Temprano",
    icon: "🎀",
    description: "Discordancias con Freud, posición depresiva, destete, envidia vs celos, pulsión epistemofílica y objeto combinado.",
    color: "from-pink-400 to-rose-400"
  },
  {
    id: "mod2",
    title: "Módulo 2: Melanie Klein — Superyó Temprano y Diferenciación Sexual",
    shortTitle: "Klein: Superyó y Sexualidad",
    icon: "🌸",
    description: "Origen oral-sádico del superyó, cultivo de pulsión de muerte, severidad endógena y complejos masculino y femenino.",
    color: "from-rose-400 to-fuchsia-400"
  },
  {
    id: "mod3",
    title: "Módulo 3: Donald Winnicott — Maduración, el Yo y Objeto Transicional",
    shortTitle: "Winnicott: Yo y Objeto Transicional",
    icon: "🧸",
    description: "Rechazo de pulsión de muerte, funciones maternas (Holding/Handling), no-integración vs desintegración y zona intermedia.",
    color: "from-pink-400 to-purple-400"
  },
  {
    id: "mod4",
    title: "Módulo 4: Donald Winnicott — Falso Self, Creatividad y Capacidad de Estar Solo",
    shortTitle: "Winnicott: Falso Self y Soledad",
    icon: "✨",
    description: "Gesto espontáneo, etiología y paradoja del suicidio en el falso self, ser vs hacer y soledad en presencia de la madre.",
    color: "from-purple-400 to-pink-400"
  }
];

// 36 PREGUNTAS DE SELECCIÓN MÚLTIPLE REORDENADAS CON DISTRACTORES ELABORADOS Y MÁS LARGOS QUE LAS CORRECTAS
const QUESTIONS_DATA = [
  // --- MÓDULO 1: KLEIN EDIPO TEMPRANO (10 preguntas) ---
  {
    id: "q1",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Discordancias temporales con Freud",
    question: "¿En qué período del desarrollo infantil sitúa Melanie Klein el origen de los estadios tempranos del Complejo de Edipo?",
    options: [
      "A partir del segundo año de vida, cuando el niño adquiere la competencia lingüística necesaria para introyectar los mandatos normativos y la prohibición explícita de la ley paterna en el marco de la cultura.",
      "Durante la fase de latencia escolar, como una resignificación diferida ('a posteriori') de la escena primaria coital que solo adquiere eficacia patógena tras el despertar puberal.",
      "Entre los 6 meses y los 3 años de vida.",
      "Entre los 3 y los 5 años, como resultado del sepultamiento definitivo de las pulsiones pregenitales por efecto de la amenaza de castración anatómica clásica."
    ],
    correctAnswer: 2,
    explanation: "Klein postula que los estadios tempranos del Edipo y la formación temprana del Superyó se originan entre los 6 meses y los 3 años, distanciándose del marco freudiano clásico que lo ubica entre los 3 y 5 años en la fase fálica.",
    distractorExplanations: [
      "Para Klein el Edipo temprano no espera al segundo año ni a la ley verbal paterna; surge en la oralidad con el objeto total.",
      "La latencia es un período posterior (6 a 11 años) donde el Edipo entra en declive, no donde se origina.",
      "Los 3 a 5 años corresponden a la teoría freudiana clásica, no a la innovación cronológica de Klein."
    ]
  },
  {
    id: "q2",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Emergencia y Posición Depresiva",
    question: "¿Qué transformación en la relación con el objeto posibilita la emergencia del Complejo de Edipo temprano en Klein?",
    options: [
      "La integración de la madre como un objeto total y separado.",
      "La instauración irreversible de la primacía fálica en la niña generada por el traumatismo del descubrimiento visual de la diferencia anatómica de los sexos y la consiguiente envidia del pene.",
      "La escisión defensiva tajante y polarizada entre un pecho idealizado eternamente gratificante y un pecho hostil persecutorio que anula todo sentimiento de ambivalencia o culpa en el Yo.",
      "La declinación definitiva de la posición esquizoparanoide mediante la supresión constitucional de los impulsos sádicos y la victoria absoluta de los instintos de autoconservación biológica."
    ],
    correctAnswer: 0,
    explanation: "El Edipo temprano surge en la posición depresiva: el bebé integra a la madre como objeto total separado e independiente, reconoce que sus ataques destructivos pueden dañarla, experimenta culpa y advierte la relación de pareja entre los padres.",
    distractorExplanations: [
      "Klein rechaza la idea freudiana de una primacía fálica inicial obligatoria fundada en el complejo de castración clásico.",
      "La escisión tajante de objetos parciales pertenece a la posición esquizoparanoide previa, que impide percibir al objeto total.",
      "La agresión no se suprime totalmente; se modula por la ambivalencia y la culpa reparatoria, pero sigue operando."
    ]
  },
  {
    id: "q3",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Fase Femenina",
    question: "¿Cómo conceptualiza Melanie Klein la denominada 'Fase Femenina' en la prehistoria del Complejo de Edipo?",
    options: [
      "Como una fijación patológica arcaica y regresiva de aquellos niños varones que fracasan en consolidar la represión primaria y rechazan la posterior identificación secundaria con la figura de autoridad paterna.",
      "Como la organización psicosexual terminal exclusiva de la mujer tras haber superado las reivindicaciones masculinas y asumir la pasividad erógena frente a la maternidad biológica socialmente reglada.",
      "Como el estadio genital maduro en el cual la erogeneidad clitoridiana queda completamente desinvestida y subordinada a la primacía receptiva exclusiva de la cavidad vaginal interna.",
      "Como un período transversal en niños y niñas con fines receptivos e identificación con la madre."
    ],
    correctAnswer: 3,
    explanation: "Para Klein, la fase femenina es un momento transversal a ambos sexos anterior a la consolidación del psiquismo de género, caracterizado por fines receptivos/incorporativos orales y una identificación primaria con el objeto materno.",
    distractorExplanations: [
      "No es una desviación ni patología en varones, sino un momento constitutivo y universal del psiquismo infantil.",
      "No es exclusiva de niñas ni representa la resolución edípica final de resignación adulta.",
      "Klein sostiene que en la niña el clítoris y la vagina coexisten, no que uno elimine al otro de forma simple."
    ]
  },
  {
    id: "q4",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Relevancia del Destete",
    question: "Según Melanie Klein, ¿cuál es el factor primordial que desencadena que el lactante se aleje de la madre y vire hacia el padre?",
    options: [
      "La intervención de la ley simbólica del padre que impone la prohibición universal del incesto y la amenaza de castración real frente a los deseos edípicos hacia el cuerpo materno.",
      "Las frustraciones orales y el odio del destete.",
      "La súbita envidia del pene que experimenta la niña al constatar su falta anatómica frente al varón, lo cual despierta un resentimiento hostil e irreversible hacia la madre por haberla engendrado incompleta.",
      "El apaciguamiento espontáneo de las mociones sádicas alcanzado gracias a la satisfacción nutricia ininterrumpida y perfecta provista por el pecho materno durante los primeros meses."
    ],
    correctAnswer: 1,
    explanation: "El destete rompe la fusión primaria con la madre. Las frustraciones orales y el odio reactivo despiertan sadismo y ansiedades persecutorias que impulsan al infante a buscar un objeto alternativo compensatorio en el padre.",
    distractorExplanations: [
      "La amenaza de castración paterna es la tesis freudiana clásica, no el motor oral primario postulado por Klein.",
      "Klein refuta que el viraje hacia el padre en la niña sea producto inicial de la envidia anatómica del pene.",
      "La satisfacción nutricia sin frustración mantendría la fusión con el pecho, en vez de obligar al alejamiento hacia un tercero."
    ]
  },
  {
    id: "q5",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Cambio de Objeto",
    question: "¿Qué estatuto adquiere el pene paterno en el proceso de cambio de objeto analizado por Melanie Klein?",
    options: [
      "Un objeto fálico de sumisión masoquista derivado del terror insuperable a la ley de castración punitiva que el padre impone sobre las pulsiones incestuosas del niño.",
      "Un símbolo cultural abstracto desprovisto de cualquier catexis corporal o pulsional hasta que el sujeto ingresa formalmente a las vicisitudes del orden genital puberal.",
      "Un objeto de deseo oral alternativo para aliviar y equilibrar angustias.",
      "Una formación reactiva del Superyó maduro estructurada exclusivamente para contrarrestar la identificación primaria con la madre en el período de latencia tardío."
    ],
    correctAnswer: 2,
    explanation: "El cambio de objeto no es motivado por envidia del pene, sino por la necesidad de equilibrar las angustias persecutorias y depresivas tras el destete, convirtiendo al pene del padre en un objeto de deseo oral alternativo.",
    distractorExplanations: [
      "No es una sumisión masoquista fálica a la castración freudiana, sino un relevo libidinal en el registro oral.",
      "No carece de catexis corporal; está intensamente investido de fantasías orales de incorporación en el primer año.",
      "No está desligado de las pulsiones arcaicas; surge precisamente en el seno de la fase oral-sádica."
    ]
  },
  {
    id: "q6",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Diferencia entre Celos y Envidia",
    question: "¿Qué diferencia estructural y clínica establece Melanie Klein entre los Celos y la Envidia?",
    options: [
      "Los celos son una vivencia diádica arcaica dirigida hacia objetos parciales escindidos, mientras que la envidia requiere obligatoriamente una configuración triangular edípica consolidada entre tres personas diferenciadas.",
      "Los celos temen perder el amor del objeto total ante un rival; la envidia ataca lo bueno que la madre contiene.",
      "Los celos buscan exclusivamente vaciar, envenenar y desgarrar los contenidos del cuerpo materno, en tanto que la envidia procura reparar y proteger la integridad del objeto bueno mediante mecanismos maníacos.",
      "Los celos derivan enteramente de la fijación en las mociones expulsivas de la fase anal sádica, mientras que la envidia nace con la entrada al principio de realidad compartido en la latencia."
    ],
    correctAnswer: 1,
    explanation: "Los celos son triangulares y conciernen a objetos totales (miedo de perder el amor ante un rival y quedar en desamparo); la envidia es más arcaica, diádica, y nace de la frustración por la privación de lo bueno que la madre contiene.",
    distractorExplanations: [
      "Es una inversión teórica: la envidia es diádica y arcaica, mientras que los celos exigen tres objetos totales.",
      "La envidia nunca repara ni protege; por definición ataca y despoja lo bueno del objeto primario.",
      "Ambos afectos tienen raíces tempranas, pero la envidia se asienta primordialmente en la fase oral-sádica inicial."
    ]
  },
  {
    id: "q7",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Pulsión Epistemofílica y Agresión",
    question: "¿Cómo fundamenta Klein la conexión originaria entre la pulsión epistemofílica y el sadismo infantil?",
    options: [
      "El deseo de saber proviene de la fantasía sádica de abrirse paso en el cuerpo materno y despojar sus contenidos.",
      "El apetito de conocimiento es el resultado exclusivo de la sublimación secundaria desexualizada que opera cuando el Yo ha sofocado totalmente sus impulsos destructivos y se orienta a la autoconservación biológica.",
      "La curiosidad intelectual surge de la identificación pacífica y desprovista de conflicto con los ideales pedagógicos y morales que la institución familiar transmite durante el aprendizaje del lenguaje.",
      "El investigar constituye una defensa puramente maníaca y obsesiva estructurada para negar la existencia de la pulsión de muerte y neutralizar la angustia de castración anatómica en el estadio genital."
    ],
    correctAnswer: 0,
    explanation: "Klein afirma que estudiar y conocer conllevan descomponer, cortar y desarmar, articulándose con la fantasía sádica inconsciente de forzar la entrada al cuerpo de la madre para descubrir y apropiarse de sus contenidos retenidos.",
    distractorExplanations: [
      "No es una función neutra y desexualizada del Yo secundario adaptativo, sino una moción ligada a pulsiones arcaicas.",
      "El origen es inconsciente y corporal arcaico, mucho anterior a la escolarización y normas pedagógicas.",
      "Aunque puede vincularse a defensas, su raíz estructural primaria es la agresión investigativa sádico-oral y sádico-anal."
    ]
  },
  {
    id: "q8",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Inhibición del Aprendizaje",
    question: "¿Por qué un despliegue incontrolado de la agresividad hacia la madre puede provocar inhibiciones intelectuales?",
    options: [
      "Porque el Superyó maduro ocasiona un deterioro orgánico en los procesos neurológicos de la memoria de trabajo que impide consolidar los engramas de la memoria a largo plazo.",
      "Porque el niño opta conscientemente por renunciar al pensamiento abstracto para regresar al estado de narcisismo primario absoluto donde no existe ningún objeto ni demanda exterior.",
      "Porque la libido queda fijada irreversiblemente en las descargas musculares motrices gruesas, impidiendo que la energía psíquica se distribuya hacia los centros asociativos superiores del cerebro.",
      "Porque investigar se fantasea como un ataque sádico peligroso, inhibiéndose el saber como defensa."
    ],
    correctAnswer: 3,
    explanation: "Si el deseo de conocer está fuertemente anudado a la destrucción del vientre materno, el acto de aprender despierta un terror persecutorio y culpa intolerable; en consecuencia, el Yo inhibe el aprendizaje como autodefensa frente al peligro de saber.",
    distractorExplanations: [
      "La causa no es un deterioro neuropsicológico de la memoria, sino una dinámica afectiva de terror a la propia destructividad.",
      "Klein no postula un regreso a un narcisismo anobjetal; el conflicto siempre concierne a objetos y fantasías activas.",
      "No es un fenómeno puramente muscular motor; se trata de una parálisis inhibitoria de la pulsión epistemofílica."
    ]
  },
  {
    id: "q9",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Objeto Combinado y Escena Primaria",
    question: "¿Qué describe Melanie Klein bajo la figura del 'Objeto Combinado' en las fantasías del Edipo temprano?",
    options: [
      "La síntesis armoniosa y protectora entre las funciones de sostén nutricio materno y la autoridad pacificadora del padre que facilita el ingreso pacífico al orden social de la cultura.",
      "La representación terrorífica de los padres unidos en un coito sádico continuo formando una madre fálica.",
      "Un objeto transicional altamente catectizado que fusiona los olores corporales de la madre con el sonido de la voz paterna para garantizar el paso hacia la tercera zona de experiencia.",
      "La alianza afectiva defensiva que el infante establece con sus hermanos mayores para resistir la intrusión traumática de los cuidadores sustitutos durante la fase de dependencia relativa."
    ],
    correctAnswer: 1,
    explanation: "El objeto combinado resulta de proyectar la agresividad infantil sobre la pareja parental: al no estar diferenciados, el pene del padre parece incorporado en la madre (madre fálica) en un coito infinito, sádico y persecutorio.",
    distractorExplanations: [
      "No es una internalización armónica ni benéfica; es una fantasía sumamente terrorífica y persecutoria.",
      "El objeto transicional es una noción de Donald Winnicott, ajena al objeto combinado kleiniano.",
      "No concierne a los hermanos, sino a la escena primaria parental de la cual el niño se siente celosamente excluido."
    ]
  },
  {
    id: "q10",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Fantasías de Robo y Vientre Materno",
    question: "¿Cuáles son los contenidos que el lactante fantasea robar del vientre materno mediante ataques sádicos?",
    options: [
      "Únicamente las reservas líquidas de leche nutricia que le fueron retiradas arbitrariamente al momento de producirse la privación del amamantamiento materno durante el período del destete.",
      "Los preceptos éticos y las representaciones simbólicas que los progenitores ocultan celosamente en la intimidad conyugal para ejercer el dominio disciplinario sobre la descendencia.",
      "Pechos, bebés y penes que la madre idealizada retiene.",
      "La estructura formal del pensamiento reflexivo que el padre real le arrebató al infante mediante amenazas directas de mutilación corporal en las primeras semanas de vida extrauterina."
    ],
    correctAnswer: 2,
    explanation: "Bajo la envidia arcaica, la madre es idealizada como un continente omnipotente que alberga todo lo deseable y valioso: los pechos nutricios, los penes paternos y futuros bebés, los cuales el infante desea despojar.",
    distractorExplanations: [
      "La fantasía no se reduce a la leche líquida; incluye bebés no nacidos y penes acumulados dentro del cuerpo materno.",
      "Las normas culturales son construcciones simbólicas tardías ajenas a los contenidos corporales fantaseados.",
      "No se fantasea el robo de la coherencia cognitiva, sino de objetos concretos y biológicos de goce y fertilidad."
    ]
  },

  // --- MÓDULO 2: KLEIN SUPERYÓ Y SEXUALIDAD (8 preguntas) ---
  {
    id: "q11",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Génesis del Superyó Temprano",
    question: "¿En qué difiere radicalmente la concepción kleiniana del Superyó con respecto al modelo propuesto por Freud?",
    options: [
      "Para Klein surge en la fase oral-sádica (1er año), siendo anterior e independiente del Edipo freudiano.",
      "Para Klein el Superyó solo comienza a estructurarse durante la pubertad como una defensa maníaca contra el despertar de la sexualidad reproductiva genital biológica.",
      "Para Klein el Superyó es una estructura originariamente benevolente y pacífica que carece por completo de cualquier vestigio de agresión o destructividad pulsional en sus comienzos.",
      "Para Klein el Superyó es un patrimonio exclusivo de la psicología femenina ocasionado por la herida narcisista insuperable de haber nacido privada de un genital externo visible."
    ],
    correctAnswer: 0,
    explanation: "Freud concebía al Superyó como el heredero tardío del Complejo de Edipo (hacia los 5 años); Klein demuestra que surge mucho antes, en la fase oral-sádica (primer año), siendo independiente y anterior a la resolución edípica.",
    distractorExplanations: [
      "Klein no ubica el superyó en la pubertad; lo ubica en el lactante, invirtiendo la cronología clásica freudiana.",
      "Klein sostiene todo lo opuesto: el superyó temprano es sumamente sádico, cruel y teñido de pulsión de muerte.",
      "El superyó temprano surge exactamente en ambos sexos a partir de las introyecciones tempranas de objetos buenos y malos."
    ]
  },
  {
    id: "q12",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Etiología de la Severidad del Superyó",
    question: "¿Cuál es el origen de la severidad aterradora que caracteriza al Superyó temprano en la clínica de Klein?",
    options: [
      "El rigor disciplinario, la violencia real y el autoritarismo severo ejercido de forma cotidiana por el padre biológico en el entorno familiar del hogar infantil.",
      "Las normas jurídicas y mandatos prohibitivos de la cultura que son transmitidos pasivamente al aparato psíquico del infante a través de las primeras interacciones lingüísticas.",
      "Las proyecciones de las propias pulsiones destructivas del infante sobre los objetos.",
      "Una falla neurológica constitucional en la integración sensorio-motriz que impide al lactante reconocer las señales de afecto y ternura dispensadas por sus cuidadores primarios."
    ],
    correctAnswer: 2,
    explanation: "Klein afirma enfáticamente que la severidad del Superyó no es copia del padre real, sino el producto de proyectar las propias pulsiones destructivas infantiles sobre los objetos que luego son introyectados como castigadores.",
    distractorExplanations: [
      "Padres sumamente bondadosos y tolerantes pueden tener hijos con superyós aterradores, demostrando su raíz endógena.",
      "El lenguaje cultural patriarcal es una mediación secundaria tardía, mientras que el superyó temprano opera en lo arcaico.",
      "No es un déficit orgánico madurativo, sino una dinámica metapsicológica universal de proyección e introyección pulsional."
    ]
  },
  {
    id: "q13",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Estructura del Núcleo del Superyó",
    question: "¿Cómo se compone el núcleo del temprano Superyó según los desarrollos teóricos de Melanie Klein?",
    options: [
      "Exclusivamente por las imágenes persecutorias y castigadoras de los objetos malos que fueron proyectados y luego expulsados al exterior del aparato anímico para salvaguardar el narcisismo.",
      "Por una instancia neutra y racional de evaluación cognitiva que opera de modo desapasionado sin verse afectada por las pulsiones libidinales o agresivas arcaicas del sujeto.",
      "Por los ideales de perfección estética y moral adquiridos por el niño al contemplar su imagen especular unificada en el espejo durante el primer año y medio de vida.",
      "Por la incorporación dual de objetos malos vengativos y objetos buenos protectores."
    ],
    correctAnswer: 3,
    explanation: "El núcleo del superyó temprano alberga tanto objetos malos sádicos (teñidos de mociones mortíferas proyectadas) como el objeto bueno introyectado protector; la primacía de lo bueno sobre lo malo determinará su carácter final.",
    distractorExplanations: [
      "El superyó no solo tiene objetos malos; también contiene el objeto bueno introyectado que brinda amparo y amor.",
      "El superyó kleiniano no es una instancia neutra o cognitiva; es un territorio intensamente pulsional y afectivo.",
      "El estadio del espejo es una categoría de Jacques Lacan, no el eje de la estructuración del superyó en Klein."
    ]
  },
  {
    id: "q14",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Edipo Masculino y Envidia de la Gestación",
    question: "En el Edipo masculino temprano, ¿qué envidia el niño en la madre y qué mecanismo defensivo edifica?",
    options: [
      "Envidia la capacidad reproductiva del vientre materno; se defiende sobrevalorando el pene e intelectualizando.",
      "Envidia la mayor estatura y fuerza muscular que posee la madre; se defiende mediante un repliegue autista radical donde rechaza cualquier tipo de interacción o contacto con la realidad exterior.",
      "Envidia la supuesta ausencia de exigencias pulsionales en el cuerpo de la mujer; se defiende sometiéndose masoquistamente a las órdenes disciplinarias de la pareja parental para no sufrir castigos.",
      "Envidia la cercanía afectiva que la madre mantiene con el padre; se defiende intentando mutilar sus propios genitales para suprimir todo deseo y evitar la cólera castradora paterna."
    ],
    correctAnswer: 0,
    explanation: "El niño envidia la maternidad, el vientre gestante, los bebés y la leche; para compensar su imposibilidad biológica de concebir, recurre a la pulsión epistemofílica intelectual y a la sobrevaloración narcisista del pene.",
    distractorExplanations: [
      "No es la fuerza motriz lo que despierta su envidia central, sino el poder creador de gestar y dar pecho.",
      "La sumisión ocurre en otras defensas, pero no explica la arrogancia fálica compensatoria del varón frente a la mujer.",
      "El varón no busca automutilarse, sino ensalzar defensivamente su falo para negar su carencia uterina."
    ]
  },
  {
    id: "q15",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Edipo Femenino y Refutación a Freud",
    question: "¿Qué postula Melanie Klein contra la tesis freudiana de una 'masculinidad primaria' en el desarrollo de la niña?",
    options: [
      "Que la niña carece en absoluto de toda moción erógena o interés pulsional hasta que los cambios hormonales de la pubertad despiertan los fines reproductivos maduros en el cuerpo.",
      "Que la niña experimenta una aversión instintiva insuperable hacia el pene paterno, permaneciendo fijada de por vida en una alianza nutricia exclusiva e ininterrumpida con el pecho materno.",
      "Que no hay masculinidad primaria: existe una fase femenina previa con conocimiento inconsciente de la vagina.",
      "Que la niña asume su condición femenina únicamente cuando sus progenitores le enseñan de forma explícita el rol reproductivo y social que la cultura de la época le tiene destinado."
    ],
    correctAnswer: 2,
    explanation: "Klein refuta el postulado freudiano de que la niña empieza siendo un 'pequeño varón': demuestra la existencia de una fase femenina transversal originaria y un saber corporal inconsciente temprano de la vagina receptiva.",
    distractorExplanations: [
      "Klein jamás afirmó que la sexualidad infantil estuviera ausente; sostiene una vida genital activa desde el primer año.",
      "La niña sí vuelca su interés hacia el padre y su pene, impulsada por la privación oral y el destete materno.",
      "Los celos y fantasías tempranas no dependen de explicaciones verbales adultas; se fundan en la vida fantasmática inconsciente."
    ]
  },
  {
    id: "q16",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Dificultad Genital Específica de la Niña",
    question: "¿Cuál es el obstáculo particular del desarrollo psicosexual femenino que Klein describe en relación con sus genitales?",
    options: [
      "La insensibilidad sensorial absoluta de los órganos genitales durante los primeros cuatro años de vida infantil que obliga al psiquismo a tramitar toda la libido por la vía oral.",
      "Tener dos zonas erógenas de igual valencia (clítoris y vagina), dificultando la primacía receptiva vaginal.",
      "La imposibilidad de introyectar la imagen del pene paterno debido al terror pánico que le suscita la representación alucinatoria de un objeto transicional hostil que amenaza con devorarla.",
      "Una fijación regresiva compulsiva en la retención fecal expulsiva que anula cualquier tipo de curiosidad o acercamiento afectivo hacia la pareja parental en el marco del Edipo."
    ],
    correctAnswer: 1,
    explanation: "Una dificultad anatómica y libidinal de la niña es contar simultáneamente con el clítoris (activo/fálico) y la vagina (receptiva), complicando la delimitación y consolidación del fin receptivo vaginal hacia el padre.",
    distractorExplanations: [
      "La niña posee una riquísima erogeneidad genital desde muy pequeña, desmintiendo la apatía o insensibilidad.",
      "El objeto transicional es una categoría de Winnicott, ajena al debate anatómico de Klein sobre las dos zonas erógenas.",
      "Las fijaciones anales existen en ambos sexos, pero no constituyen la encrucijada genital específica clítoris/vagina."
    ]
  },
  {
    id: "q17",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Inhibición del Deseo de Maternidad",
    question: "¿A qué atribuye Melanie Klein el posterior debilitamiento o rechazo del deseo de maternidad en una mujer?",
    options: [
      "A la culminación exitosa de los impulsos agresivos que neutraliza toda catexis libidinal sobre los órganos internos del cuerpo propio orientándola exclusivamente hacia el quehacer laboral.",
      "Al advenimiento incontestado de una estructura de falso self patológico que anula la creatividad espontánea del sujeto y le impone acatar rígidamente los mandatos de la productividad social.",
      "A la introyección exclusiva del padre idealizado concebido como un objeto omnipotente y pacífico que vuelve innecesaria la gestación de nuevos objetos en la realidad compartida.",
      "A la culpa y miedo a la retaliación materna por haber fantaseado vaciar su vientre."
    ],
    correctAnswer: 3,
    explanation: "Habiendo fantaseado vaciar y destruir el vientre materno, la niña teme la venganza ('retaliación') de la madre perseguidora, alucinando que dañó sus órganos reproductores internos, lo que debilita el deseo de concebir.",
    distractorExplanations: [
      "La resolución armónica promovería una maternidad reparatoria y plena, en lugar de inhibirla o debilitarla.",
      "El 'falso self' es un concepto de Donald Winnicott; la explicación kleiniana descansa en la culpa y la retaliación fantasmática.",
      "La introyección del padre bueno disminuye el terror persecutorio, no produce la inhibición del deseo de maternidad."
    ]
  },
  {
    id: "q18",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Origen de la Culpa Primitiva",
    question: "¿De qué doloroso reconocimiento psíquico nace la culpa primitiva en la posición depresiva según Klein?",
    options: [
      "Del llamado de atención verbal formulado por el padre real en el momento en que constata que el niño ha violado los códigos de disciplina higiénica establecidos en el hogar.",
      "Constatar que el objeto atacado con sadismo es el mismo objeto amado y vital que se teme perder.",
      "Del descubrimiento empírico de que los miembros de la pareja conyugal mantienen encuentros corporales secretos de los cuales el infante se encuentra rigurosamente despojado y excluido por mandato biológico.",
      "De la advertencia intelectual de que la agresividad instintiva contradice el principio de autoconservación y pone en riesgo la inserción del individuo dentro de las normas colectivas de la sociedad."
    ],
    correctAnswer: 1,
    explanation: "La culpa depresiva nace al unificarse el objeto total: el infante comprueba que el pecho y la madre atacados con furia destructiva son idénticos a la fuente nutricia amada, emergiendo el dolor psíquico y el anhelo de reparación.",
    distractorExplanations: [
      "No depende del reproche verbal de los padres reales; surge del conflicto afectivo inconsciente intrapsíquico.",
      "La escena primaria suscita exclusión y rabia, pero la culpa surge de la agresión contra el objeto total amado.",
      "No es un cálculo racional civilizado secundario; se trata de una angustia desgarradora primaria de desamparo."
    ]
  },

  // --- MÓDULO 3: WINNICOTT YO Y OBJETO TRANSICIONAL (10 preguntas) ---
  {
    id: "q19",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Rechazo de la Pulsión de Muerte",
    question: "¿Cuál es la posición de Donald Winnicott frente a la hipótesis freudo-kleiniana de la Pulsión de Muerte?",
    options: [
      "La adopta como el axioma clínico fundamental sin el cual resulta imposible explicar la génesis metapsicológica de los cuadros psicóticos graves y las defensas esquizoides tempranas del infante.",
      "La rechaza: la agresión temprana es un gesto espontáneo y vital, sin intención de dañar.",
      "La acepta condicionalmente restringiéndola de manera exclusiva a las últimas etapas de la vida senil, cuando las defensas psicosomáticas decaen frente a la inminencia del retorno a lo inanimado.",
      "La reelabora planteando que la pulsión de muerte es inoculada en el psiquismo del bebé por fallas tóxicas en la composición química de la leche materna durante el puerperio patológico."
    ],
    correctAnswer: 1,
    explanation: "Winnicott no cree en una fuerza endógena que empuje a lo inanimado; afirma que la agresividad inicial del bebé es motilidad pura, expresión vital y gesto espontáneo sin intencionalidad de dañar ni maldad congénita.",
    distractorExplanations: [
      "Winnicott se opone tajantemente a Klein en este postulado metapsicológico esencial.",
      "No la restringe a la vejez; simplemente prescinde del constructo teórico de pulsión de muerte en su modelo.",
      "Tampoco la acepta en la vida intrauterina; subraya la tendencia innata y positiva hacia el desarrollo madurativo."
    ]
  },
  {
    id: "q20",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Preocupación Maternal Primaria",
    question: "¿Cómo describe Winnicott el estado psíquico conocido como 'Preocupación Maternal Primaria'?",
    options: [
      "Un cuadro depresivo puerperal mayor caracterizado por el desinterés afectivo y la desconexión motriz de la madre frente a las demandas biológicas y relacionales de su recién nacido.",
      "Una organización narcisista de carácter perverso mediante la cual la mujer utiliza al bebé como un apéndice de su propia omnipotencia para evitar confrontar el principio de realidad.",
      "Una 'locura normal y necesaria' de entrega y adaptación casi perfecta como Yo auxiliar.",
      "Un programa de estimulación temprana intensiva diseñado por los progenitores para apresurar el desarrollo cognitivo del infante y asegurar una adaptación sumisa a las normas culturales."
    ],
    correctAnswer: 2,
    explanation: "Winnicott define este estado transitorio como una 'locura normal y necesaria' en la que la madre se entrega abnegadamente al cuidado, sintiendo al bebé como parte de sí misma y actuando como su Yo auxiliar protector.",
    distractorExplanations: [
      "No es una depresión puerperal patológica; es un estado fisiológico y psíquico sano indispensable para el inicio de la vida.",
      "No es un narcisismo perverso o patológico, sino una condición temporaria de devoción facilitadora.",
      "No impone disciplinas tempranas aceleradas; al contrario, amortigua el impacto del mundo externo."
    ]
  },
  {
    id: "q21",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Tríada de Funciones Maternas",
    question: "¿Qué logro evolutivo del infante facilita respectivamente cada una de las tres funciones maternas winnicottianas?",
    options: [
      "Sostén (Holding) ➔ Integración; Manipulación (Handling) ➔ Personalización; Presentación ➔ Relaciones objetales.",
      "El Sostén permite la instauración del Superyó represor; la Manipulación consolida la escisión defensiva del Ello; y la Presentación del objeto posibilita el sepultamiento del Edipo arcaico.",
      "El Sostén engendra el lenguaje verbal formal; la Manipulación promueve la dominancia motriz hemisférica; y la Presentación del objeto garantiza la adquisición del pensamiento lógico matemático en la escolaridad.",
      "El Sostén estructura la sumisión complaciente del falso self; la Manipulación reprime las pulsiones orales sádicas; y la Presentación del objeto impone el principio del deber sobre el placer."
    ],
    correctAnswer: 0,
    explanation: "El Holding (sostén) permite la integración del Yo en el tiempo y espacio; el Handling (manipulación corporal) promueve la personalización (habitar el psicosoma); el Object presenting inaugura las relaciones con los objetos.",
    distractorExplanations: [
      "Esos son conceptos del psicoanálisis clásico que no corresponden a la tríada metapsicológica de Winnicott.",
      "Aunque el lenguaje se desarrolle luego, los logros nucleares primarios descritos por Winnicott son corporales y psicosomáticos.",
      "El falso self no nace del sostén adecuado, sino de las fallas e intrusiones ambientales traumáticas."
    ]
  },
  {
    id: "q22",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "El Yo al Comienzo",
    question: "Frente a la interrogante sobre la existencia del Yo en los albores de la vida, ¿qué postula Donald Winnicott?",
    options: [
      "El Yo se encuentra plenamente constituido desde el nacimiento con mecanismos defensivos altamente organizados de proyección, escisión e introyección para defenderse de la pulsión de muerte endógena.",
      "El principio es cuando empieza el Yo; al inicio hay no-integración y la madre oficia de Yo auxiliar.",
      "El Yo es una ilusión semántica inexistente en la estructura del psiquismo humano, existiendo únicamente las descargas automáticas del Ello frente a las imposiciones biológicas del medio circundante.",
      "El Yo se constituye de manera instantánea y definitiva únicamente al momento del corte del cordón umbilical gracias a la descarga neurofisiológica refleja del primer llanto neonatal en el parto."
    ],
    correctAnswer: 1,
    explanation: "Winnicott objeta dar por sentado un Yo integrado al nacer. Sostiene que 'el principio está en el momento en que empieza el Yo'; en los comienzos reina la No-integración, y el bebé solo existe en unidad con la madre (Yo auxiliar).",
    distractorExplanations: [
      "Esa es la postura de Melanie Klein (un Yo temprano activo desde el nacimiento), criticada por Winnicott.",
      "Winnicott sí teoriza la constitución del Yo; no lo considera una ilusión inexistente en la salud.",
      "La integración yoica no ocurre en un instante quirúrgico; se va gestando día a día desde las primeras semanas con el holding."
    ]
  },
  {
    id: "q23",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Angustias Inconcebibles",
    question: "¿Cuáles son las cuatro vivencias nucleares que constituyen la llamada 'Angustia Inconcebible o Impensable'?",
    options: [
      "Remordimiento moral por pensamientos pecaminosos, temor al reproche social paterno, fobia al desprecio de los pares y miedo a recibir sanciones legales en la vida adulta.",
      "Rivalidad hostil hacia los hermanos menores, envidia por los bienes de los progenitores, pánico a la ruina económica familiar y angustia de castración genital de tipo freudiano.",
      "Fragmentarse, caer interminablemente, no tener relación con el cuerpo y perder toda orientación.",
      "Fobia a los microbios contaminantes, compulsión de lavado de manos ritual, necesidad obsesiva de verificar cerrojos y terror claustrofóbico ante el encierro en habitaciones desprovistas de ventilación."
    ],
    correctAnswer: 2,
    explanation: "Si el sostén falla, el infante se asoma a las agonías impensables (materia prima de las psicosis): fragmentación, caída infinita en el abismo, despersonalización corporal y desorientación total en el espacio.",
    distractorExplanations: [
      "Esas son ansiedades morales o neuróticas secundarias, no agonías primitivas de disolución existencial.",
      "Los celos y la envidia son vicisitudes de las relaciones objetales, no catástrofes basales del ser.",
      "Esos son síntomas neuróticos obsesivos o fóbicos estructurados en personalidades con Yo ya constituido."
    ]
  },
  {
    id: "q24",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "No-integración vs Desintegración",
    question: "¿Cuál es la diferencia capital que establece Winnicott entre el estado de 'No-integración' y la 'Desintegración'?",
    options: [
      "La no-integración es una disolución psicótica irreversible; la desintegración es el reposo saludable que permite al bebé relajarse plácidamente en brazos de su madre sin experimentar la menor zozobra.",
      "Ambos términos constituyen denominaciones sinónimas y equivalentes que aluden exactamente a la misma afección psicosomática del desarrollo yoico sin que exista ninguna divergencia clínica entre ellas.",
      "La no-integración ocurre tras el destete alimentario; la desintegración es un trastorno digestivo transitorio motivado por la intolerancia a los nutrientes sólidos en los primeros meses de lactancia.",
      "No-integración es el reposo natural sostenido; desintegración es la defensa activa caótica ante el trauma."
    ],
    correctAnswer: 3,
    explanation: "La no-integración es un estado relajado y pacífico posible gracias al sostén materno; la desintegración es una defensa reactiva donde el infante produce activamente caos para evitar la agonía impensable (el caos es suyo y dentro de su omnipotencia).",
    distractorExplanations: [
      "Invierte los términos: la no-integración es sana y tranquila; la desintegración es una respuesta patológica ante la intrusión.",
      "Winnicott marca una diferencia clínica categórica entre ambas nociones; no son sinónimos.",
      "No guardan relación con la digestión orgánica, sino con la cualidad facilitadora del ambiente ambiental."
    ]
  },
  {
    id: "q25",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Ilusión y Desilusión Gradual",
    question: "¿Qué función cumple la transición de la ilusión omnipotente hacia la desilusión gradual en el desarrollo infantil?",
    options: [
      "Sostener primero la ilusión de omnipotencia creadora y luego introducir fallas dosificadas para acceder a la realidad.",
      "Generar una serie de traumatismos psíquicos intensos y repentinos que obliguen al infante a blindar prematuramente sus fronteras yoicas mediante la rigidización compulsiva de un falso self sumiso.",
      "Perpetuar de forma indefinida la creencia mágica en el control omnipotente para que el adulto desarrolle un pensamiento delirante que lo proteja de las frustraciones inherentes al mundo laboral.",
      "Erradicar de raíz cualquier vestigio de imaginación o creatividad lúdica con el fin de subordinar rápidamente la conducta del niño a las exigencias burocráticas del principio del deber social."
    ],
    correctAnswer: 0,
    explanation: "La madre primero brinda una adaptación perfecta que crea la ilusión de omnipotencia ('el bebé crea lo que encuentra'); después, desilusiona de manera gradual según la tolerancia infantil, abriendo el camino hacia el principio de realidad compartido.",
    distractorExplanations: [
      "El trauma severo no fortalece, sino que quiebra la continuidad del ser y precipita patologías arcaicas.",
      "La desilusión busca precisamente desmontar el pensamiento mágico omnipotente desmedido en el adulto.",
      "No suprime la creatividad; la transfiere desde la omnipotencia subjetiva hacia la cultura compartida."
    ]
  },
  {
    id: "q26",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Naturaleza del Objeto Transicional",
    question: "¿Cuál de las siguientes afirmaciones describe con precisión las propiedades del 'Objeto Transicional'?",
    options: [
      "Es un objeto que los progenitores compran y esterilizan minuciosamente a diario mediante lavados antisépticos para salvaguardar la higiene del infante y erradicar cualquier proliferación microbiana nociva.",
      "Es una alucinación endógena desprovista de cuerpo tangible que el infante proyecta en el espacio vacío como un intento desesperado de sustituir la pérdida melancólica del pecho materno.",
      "Es la primera posesión no-yo elegida por el bebé, con cualidades mágicas y materialidad resistente.",
      "Es un dispositivo lúdico electrónico complejo que el niño intercambia con sus semejantes en la guardería infantil para acelerar el desarrollo del lenguaje y la sociabilización temprana."
    ],
    correctAnswer: 2,
    explanation: "El objeto transicional (manta, osito, pañal) es la primera posesión 'no-yo': tiene realidad material externa pero está investido de cualidades subjetivas mágicas; no debe ser lavado obsesivamente y resiste el amor y la agresión del bebé.",
    distractorExplanations: [
      "Los padres no deben imponerlo ni lavarlo obsesivamente, pues destruirían su olor y el valor afectivo singular.",
      "No es una mera alucinación mental; tiene existencia material tangible que se puede abrazar, chupar y morder.",
      "No se define por ser un juguete sofisticado de intercambio social, sino por su valor transicional íntimo."
    ]
  },
  {
    id: "q27",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Destino Cultural del Objeto Transicional",
    question: "Al cabo de la infancia, ¿cuál es el destino metapsicológico final del objeto y los fenómenos transicionales?",
    options: [
      "Es objeto de un doloroso duelo melancólico en el cual el sujeto debe internalizarlo como un reproche superyoico punitivo para certificar su renuncia definitiva a los placeres infantiles.",
      "No se pierde ni se duela; se difumina gradualmente en todo el ámbito de la cultura y el arte.",
      "Se encapsula en el aparato psíquico transformándose en el núcleo patógeno y persecutorio del cual brotan las alucinaciones y delirios paranoides de influencia en la vida adulta madura.",
      "Debe ser incinerado o destruido físicamente por el propio sujeto al cumplir los siete años de edad como un rito de pasaje que marque el ingreso a la razón lógica."
    ],
    correctAnswer: 1,
    explanation: "Winnicott afirma textualmente que el objeto transicional 'no se duela porque no se pierde': su catexis puntual se va desinvistiendo y su cualidad intermedia se expande a las artes, la literatura, el juego, el cine y la religión.",
    distractorExplanations: [
      "No son objeto de duelo fúnebre o melancólico; no se extravían en el vacío psíquico.",
      "No son la semilla del delirio paranoide, sino la base estructurante de la apreciación estética y cultural sana.",
      "Destruirlo físicamente no es signo de madurez; de hecho, suele conservarse afectuosamente en el recuerdo."
    ]
  },
  {
    id: "q28",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Secuencia del Uso del Objeto",
    question: "¿Qué secuencia teórica describe el paso desde la 'Relación con el objeto' hasta el 'Uso del objeto'?",
    options: [
      "Relación de objeto ➔ Idealización mágica absoluta ➔ Sometimiento incondicional a la voluntad del objeto ➔ Disolución completa de la autonomía yoica en beneficio de la autoridad ajena.",
      "Relación de objeto ➔ Pérdida traumática del objeto ➔ Duelo inconsolable ➔ Retraimiento esquizoide irreversible hacia un mundo interior alucinatorio desprovisto de contacto humano compartido.",
      "Relación de objeto ➔ Retaliación violenta del objeto frente a los ataques ➔ Claudicación masoquista del sujeto ➔ Adaptación forzada a las demandas del principio de realidad exterior.",
      "Relación de objeto ➔ Objeto hallado/creado ➔ Destrucción en fantasía ➔ Sobrevivencia del objeto ➔ Uso del objeto."
    ],
    correctAnswer: 3,
    explanation: "Para pasar de proyectar sobre el objeto a USARLO como entidad externa independiente, el infante debe destruirlo en su fantasía y comprobar que el objeto sobrevive en la realidad sin vengarse ni destruirse.",
    distractorExplanations: [
      "El sometimiento incondicional consolida un falso self patológico, no el uso saludable del objeto real en el mundo exterior.",
      "Si el objeto se pierde de forma irreversible o no sobrevive a la destructividad, fracasa el tránsito hacia el uso.",
      "Si el objeto retalia o toma represalias violentas, la relación permanece atrapada en un circuito persecutorio."
    ]
  },

  // --- MÓDULO 4: WINNICOTT FALSO SELF Y ESTAR SOLO (8 preguntas) ---
  {
    id: "q29",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Etiología del Falso Self",
    question: "¿Cuál es la falla ambiental arcaica que precipita la estructuración defensiva del 'Falso Self' en Winnicott?",
    options: [
      "La imposición del quehacer de la madre en vez de acoger y responder a su gesto espontáneo.",
      "El castigo disciplinario corporal severo que las instituciones educativas formales imponen sobre el niño cuando este manifiesta dificultades para memorizar los contenidos curriculares del primer grado escolar.",
      "Una deficiencia neurobiológica congénita en la síntesis de neurotransmisores del sistema límbico que incapacita al lactante para procesar las caricias y demostraciones de afecto materno.",
      "La presencia ininterrumpida de una adaptación materna perfecta que se prolonga a lo largo de toda la adolescencia impidiendo que el sujeto descubra la existencia del mundo objetivo exterior."
    ],
    correctAnswer: 0,
    explanation: "El Falso Self surge cuando el ambiente primario falla en sintonizar: la madre impone sus propios gestos y objetos antes de que el niño exprese los suyos, forzándolo a una acomodación sumisa precoz para proteger su Verdadero Self.",
    distractorExplanations: [
      "El origen se ubica en las fases más arcaicas de la díada lactante-madre, mucho antes del ingreso escolar formal.",
      "Winnicott descarta las explicaciones biologicistas deterministas puras para la alienación subjetiva del falso self.",
      "La adaptación ininterrumpida produce fijación omnipotente mágica, pero no la coraza de sumisión del falso self."
    ]
  },
  {
    id: "q30",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Falso Self en Salud vs Patología",
    question: "¿Cómo se distingue la manifestación del Falso Self en un estado de salud frente a su expresión patológica?",
    options: [
      "En la salud el individuo carece de modales o convenciones sociales y expresa su franqueza brutal en todo espacio; en la patología adopta una actitud amistosa y sumamente dócil.",
      "En la salud produce episodios recurrentes de euforia maníaca con desinhibición motora; en la patología engendra delirios místicos de grandeza donde el sujeto cree dominar mágicamente el universo físico.",
      "En salud es la cortesía social educada; en patología engolfa al Verdadero Self produciendo vacío y futilidad.",
      "En la salud implica la sumisión ciega e incondicional a todas las exigencias del entorno; en la patología permite el despliegue espontáneo, creativo y libre de la personalidad genuina."
    ],
    correctAnswer: 2,
    explanation: "En la salud, el Falso Self es la actitud cortés y diplomática que permite convivir en sociedad sin exponerlo todo; en la patología, se hipertrofia y reemplaza al Verdadero Self, dejando una vida exitosa pero alienada y vacía.",
    distractorExplanations: [
      "Carecer de convenciones y agredir con franqueza bruta constante no es salud; destruye la vida social interpersonal.",
      "No se manifiesta típicamente como manía ni delirios místicos, sino como desvitalización y vivencia de falsedad existencial.",
      "Invierte los términos: la sumisión forzada es el sello patológico, mientras que la espontaneidad anida en el Verdadero Self."
    ]
  },
  {
    id: "q31",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Paradoja del Suicidio y Falso Self",
    question: "¿Cuál es la paradoja psicodinámica que Donald Winnicott revela respecto al suicidio en personalidades con Falso Self?",
    options: [
      "Destruir el self total como último recurso para evitar la aniquilación o traición definitiva del Verdadero Self.",
      "Constituye una estrategia deliberada de extorsión afectiva planificada con lucidez para forzar a la pareja parental a satisfacer de inmediato las exigencias económicas y materiales de la descendencia.",
      "Representa la culminación victoriosa de la pulsión de muerte freudo-kleiniana que finalmente logra triunfar sobre la libido devolviendo la materia viva al sosiego inanimado del estado inorgánico primitivo.",
      "Es un síntoma puramente histérico y superficial donde el paciente teatraliza la muerte biológica con la convicción consciente de que despertará indemne momentos después ante la admiración colectiva."
    ],
    correctAnswer: 0,
    explanation: "Winnicott devela que cuando el Falso Self ya no puede seguir defendiendo al Verdadero Self sin traicionarlo o prostituirlo ante el ambiente, el sujeto prefiere la muerte del cuerpo biológico para salvar la pureza del Verdadero Self secreto.",
    distractorExplanations: [
      "No es un cálculo utilitario de deudas financieras; responde a una fractura existencial intolerable del sentido de ser.",
      "Winnicott no recurre a la pulsión de muerte como causa; lo conceptualiza como defensa desesperada del Verdadero Self.",
      "No es una simple manipulación teatral secundaria; es una tragedia psíquica de salvaguarda de lo genuino."
    ]
  },
  {
    id: "q32",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Gesto Espontáneo y Psicosoma",
    question: "¿En qué territorio de la experiencia humana sitúa Winnicott el origen y nutrientes del 'Gesto Espontáneo'?",
    options: [
      "En la asimilación rigurosa de las reglas gramaticales y sintácticas que los adultos transmiten pacientemente durante los primeros ejercicios de estimulación del habla en la etapa maternal.",
      "En el funcionamiento sensorio-motor, los tejidos vivos, el tono muscular y la respiración.",
      "En la copia mimética meticulosa de los gestos, ademanes posturales y hábitos conductuales que los hermanos mayores desempeñan cotidianamente en el seno de la convivencia del hogar.",
      "En la introyección pasiva de los mandatos morales y prohibitivos que el Superyó de la cultura transmite de manera transgeneracional para frenar la agresividad innata del sujeto."
    ],
    correctAnswer: 1,
    explanation: "El gesto espontáneo proviene de la vida psicosomática íntima: de la respiración, las sensaciones motrices y el funcionamiento visceral de los tejidos; solo sobre este suelo somático vivo puede brotar el sentimiento de autenticidad.",
    distractorExplanations: [
      "El lenguaje formal no es la matriz originaria del gesto espontáneo; precede a la palabra y nace en el psicosoma.",
      "La imitación es justamente la herramienta del Falso Self para acomodarse a las expectativas del ambiente.",
      "No deriva de mandatos del Superyó, sino de los impulsos vitales del Ello asentados en el cuerpo integrado."
    ]
  },
  {
    id: "q33",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Regresión Terapéutica en Análisis",
    question: "¿Qué función cumple la 'Regresión a la Dependencia' en el tratamiento analítico de pacientes con Falso Self?",
    options: [
      "Permite al terapeuta infantilizar y amonestar al paciente para enseñarle pautas conductuales maduras que erradiquen definitivamente sus síntomas fóbicos y quejas somáticas del cuadro clínico.",
      "Busca hipertrofiar las defensas intelectuales del analizante para que elabore explicaciones teóricas racionales que neutralicen sus afectos espontáneos y garanticen una vida de acatamiento social productivo.",
      "Brinda un entorno de Yo auxiliar confiable donde el Falso Self cede y el Verdadero Self se arriesga a emerger.",
      "Constituye una técnica de sugestión hipnótica directa orientada a suprimir de la conciencia los recuerdos displacenteros asociados a las fallas tempranas cometidas por la madre en el amamantamiento."
    ],
    correctAnswer: 2,
    explanation: "En la regresión, el paciente vuelve a la fase de dependencia temprana; si el analista funciona como un Yo auxiliar confiable que sostiene sin invadir, el paciente puede desmontar la coraza del Falso Self y hacer nacer su Verdadero Self.",
    distractorExplanations: [
      "La infantilización y el disciplinamiento reproducen las intrusiones ambientales traumáticas originales.",
      "La meta no es hipertrofiar la coraza intelectual del falso self, sino recuperar el contacto con lo genuino y sentido.",
      "Winnicott no practica hipnosis sugestiva de borrado mnémico; promueve la vivencia actual de ser en el encuadre."
    ]
  },
  {
    id: "q34",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Universalidad de la Creatividad",
    question: "¿Cómo entiende Winnicott la 'Creatividad' y su importancia para la salud psíquica cotidiana?",
    options: [
      "Un don extraordinario y elitista reservado con exclusividad a aquellos individuos que ostentan un talento genial plasmado en la producción de obras de arte consagradas por la academia cultural.",
      "Una condición universal propia de estar vivos que permite sentir que la existencia vale la pena.",
      "Una manifestación infantil de inmadurez yoica que debe ser reemplazada gradualmente por el pensamiento lógico objetivo desprovisto de afecto a medida que el sujeto ingresa a la adultez.",
      "Un mecanismo de defensa neurótico de carácter fóbico al que recurren las personas que no toleran confrontarse con la crudeza del principio de realidad del mundo social objetivo."
    ],
    correctAnswer: 1,
    explanation: "Para Winnicott, la creatividad no es monopolio de artistas: es el modo universal en que un ser humano saludable interactúa con el mundo sintiendo que la vida es digna de ser vivida, a diferencia de la vida de puro acatamiento sumiso.",
    distractorExplanations: [
      "Winnicott afirma textualmente que 'la creatividad no le pertenece a los artistas; es una condición de estar vivos'.",
      "No es un rasgo de inmadurez; es el marcador por excelencia de la salud mental y del sentimiento de autenticidad.",
      "No es un mecanismo fóbico, sino la manifestación viva del Verdadero Self en acción."
    ]
  },
  {
    id: "q35",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Diferencia entre Ser y Hacer",
    question: "¿Cuál es la articulación ontológica entre el 'Ser' y el 'Hacer' desarrollada en la clínica winnicottiana?",
    options: [
      "El Hacer debe preceder cronológicamente al Ser para que el individuo justifique su valor y utilidad ante las demandas laborales que la comunidad le exige desde su infancia temprana.",
      "El Ser y el Hacer son denominaciones conceptuales indistinguibles que designan con exactitud la misma función adaptativa del aparato anímico frente a las imposiciones del medio biológico circundante.",
      "El sentimiento de SER es anterior y requisito para el HACER; lo femenino se asocia al Ser y lo masculino al Hacer.",
      "El Ser corresponde a la actitud sumisa y complaciente propia del falso self, mientras que el Hacer representa el despliegue motor autónomo y creador característico del verdadero self."
    ],
    correctAnswer: 2,
    explanation: "El sentimiento originario de SER (fundado en la unidad identitaria con la madre) antecede y sostiene al HACER. Si se empuja al niño a 'hacer' sin un piso firme de 'ser', se engendra una falsa existencia hiperactiva pero vacía.",
    distractorExplanations: [
      "Forzar el 'hacer' antes del 'ser' es precisamente la causa arcaica del Falso Self complaciente y desvitalizado.",
      "No son indistinguibles; la clínica con pacientes borderlines revela personas que 'hacen' mucho sin 'sentirse reales'.",
      "El Ser no es sumisión; es la morada íntima del Verdadero Self; la sumisión proviene del falso self acatador."
    ]
  },
  {
    id: "q36",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Paradoja de la Capacidad de Estar Solo",
    question: "¿Cuál es la paradoja esencial formulada por Winnicott respecto al desarrollo de la 'Capacidad de Estar Solo'?",
    options: [
      "Que para aprender a disfrutar de la soledad el infante debe ser sometido al aislamiento físico estricto y prolongado en una habitación cerrada sin auxilio de ninguna presencia humana.",
      "Que la capacidad de estar solo se funda en la experiencia de haber estado a solas en presencia de la madre.",
      "Que únicamente son capaces de tolerar la soledad aquellas personas que carecen por completo de afectos hacia los demás y que han expulsado todos los objetos introyectados de su mente.",
      "Que la soledad adulta representa el fracaso inevitable de las defensas transicionales y condena irreversiblemente al individuo a experimentar las agonías impensables de la desintegración del Yo."
    ],
    correctAnswer: 1,
    explanation: "La paradoja de Winnicott sostiene que la capacidad de estar solo (signo de alta madurez) se construye en la infancia al estar a solas EN PRESENCIA de la madre facilitadora, quien no invade ni exige nada, permitiendo el reposo en la no-integración.",
    distractorExplanations: [
      "El aislamiento físico forzado genera agonías impensables de desamparo y trauma, no madurez emocional.",
      "Para estar solo se requiere lo contrario: haber introyectado a la madre auxiliar confiable como piso de amparo interno.",
      "No deriva del fracaso del objeto transicional, sino de la internalización estable de un ambiente benigno."
    ]
  }
];

// PREGUNTAS DE DESARROLLO / COMPLETACIÓN DE ORACIONES CLAVE CON PALABRAS Y FRASES CLAVE
const COMPLETION_QUESTIONS_DATA = [
  {
    id: "c1",
    author: "Melanie Klein",
    topic: "Complejo de Edipo temprano y Posición Depresiva",
    title: "Origen temporal del Edipo kleiniano",
    instruction: "Completa la oración seleccionando los conceptos teóricos exactos en cada espacio:",
    template: "Para Melanie Klein, los estadios tempranos del Complejo de Edipo se originan entre {blank1} y emergen cuando el infante ingresa en la {blank2}, integrando a la madre como un {blank3}.",
    blanks: [
      {
        id: "blank1",
        label: "Rango temporal",
        correct: "los 6 meses y los 3 años",
        options: [
          "los 6 meses y los 3 años",
          "los 3 y los 5 años (fase fálica)",
          "el segundo y cuarto mes de vida",
          "el inicio de la pubertad"
        ]
      },
      {
        id: "blank2",
        label: "Posición psíquica",
        correct: "posición depresiva",
        options: [
          "posición depresiva",
          "posición esquizoparanoide pura",
          "fase genital madura",
          "etapa de latencia escolar"
        ]
      },
      {
        id: "blank3",
        label: "Tipo de objeto",
        correct: "objeto total y separado",
        options: [
          "objeto total y separado",
          "objeto parcial escindido",
          "objeto transicional neutro",
          "objeto subjetivo alucinado"
        ]
      }
    ],
    rationale: "Klein demuestra que el Edipo no espera al declive fálico clásico de los 3 a 5 años; sus raíces tempranas se hunden entre los 6 meses y 3 años cuando la integración del objeto total en la posición depresiva despierta culpa, ambivalencia y triangulación parental."
  },
  {
    id: "c2",
    author: "Melanie Klein",
    topic: "Destete y Cambio de Objeto",
    title: "El destete como motor del viraje al padre",
    instruction: "Completa los espacios para reconstruir la tesis del cambio de objeto en Melanie Klein:",
    template: "El acontecimiento que promueve el alejamiento de la madre hacia el padre es el {blank1}. Las frustraciones y el odio que suscita no conducen al pene por envidia fálica, sino como un objeto de deseo {blank2} alternativo para amortiguar las ansiedades {blank3}.",
    blanks: [
      {
        id: "blank1",
        label: "Acontecimiento fundante",
        correct: "destete oral",
        options: [
          "destete oral",
          "castigo del padre real",
          "entrenamiento higiénico anal",
          "nacimiento de un hermano"
        ]
      },
      {
        id: "blank2",
        label: "Registro del deseo",
        correct: "oral",
        options: [
          "oral",
          "fálico clásico",
          "uretral expulsivo",
          "intelectualizado neutro"
        ]
      },
      {
        id: "blank3",
        label: "Tipo de ansiedades",
        correct: "persecutorias y depresivas",
        options: [
          "persecutorias y depresivas",
          "de castración genital freudiana",
          "obsesivas de contaminación",
          "sociales y de timidez"
        ]
      }
    ],
    rationale: "A diferencia de Freud (que explicaba el viraje de la niña por envidia del pene anatómico), Klein demuestra que el destete oral fisura la fusión nutricia; el infante busca compensar la privación oral volviéndose hacia el pene paterno para mitigar angustias de desamparo y persecución."
  },
  {
    id: "c3",
    author: "Melanie Klein",
    topic: "Diferencia entre Celos y Envidia",
    title: "Estructura de los Celos y la Envidia",
    instruction: "Completa la distinción estructural entre ambas mociones afectivas:",
    template: "Los celos corresponden a una vivencia {blank1} que involucra a objetos {blank2} por temor a perder el amor ante un rival; en cambio, la envidia es una relación más arcaica y {blank3} donde se ataca lo bueno que la madre retiene.",
    blanks: [
      {
        id: "blank1",
        label: "Estructura relacional de los celos",
        correct: "triangular",
        options: [
          "triangular",
          "diádica",
          "monádica narcisista",
          "transgeneracional"
        ]
      },
      {
        id: "blank2",
        label: "Condición de los objetos en los celos",
        correct: "totales",
        options: [
          "totales",
          "parciales escindidos",
          "transicionales",
          "abstractos"
        ]
      },
      {
        id: "blank3",
        label: "Estructura relacional de la envidia",
        correct: "diádica",
        options: [
          "diádica",
          "triangular edípica",
          "institucional social",
          "secundaria madura"
        ]
      }
    ],
    rationale: "Los celos implican tres personas percibidas como seres enteros (madre, bebé, padre/tercero). La envidia, en cambio, es previa, diádica y feroz: ataca a la fuente nutricia misma porque contiene los bienes (leche, bebés, penes) de los cuales el bebé se siente privado."
  },
  {
    id: "c4",
    author: "Melanie Klein",
    topic: "Pulsión Epistemofílica e Inhibición Intelectual",
    title: "Raíces sádicas de la curiosidad",
    instruction: "Selecciona las frases que explican la articulación entre el deseo de saber y la agresividad:",
    template: "La pulsión epistemofílica surge de la fantasía de {blank1} el cuerpo materno y despojar sus riquezas. Por ello, investigar se articula con componentes {blank2}; si la culpa o la agresión son incontroladas, esto puede derivar en {blank3} como defensa frente al peligro de saber.",
    blanks: [
      {
        id: "blank1",
        label: "Fantasía inconsciente",
        correct: "abrirse paso sádicamente en",
        options: [
          "abrirse paso sádicamente en",
          "admirar pacíficamente desde lejos",
          "copiar las palabras lógicas de",
          "reprimir los orígenes de"
        ]
      },
      {
        id: "blank2",
        label: "Componente pulsional",
        correct: "sádicos (cortar, desarmar y vaciar)",
        options: [
          "sádicos (cortar, desarmar y vaciar)",
          "autoconservativos puros",
          "desexualizados sin afecto",
          "exclusivamente orales pasivos"
        ]
      },
      {
        id: "blank3",
        label: "Consecuencia clínica",
        correct: "inhibiciones severas del aprendizaje",
        options: [
          "inhibiciones severas del aprendizaje",
          "un rendimiento intelectual superdotado",
          "la supresión de la pulsión de muerte",
          "alucinaciones esquizofrénicas directas"
        ]
      }
    ],
    rationale: "Aprender y estudiar conllevan inconscientemente diseccionar y apropiarse de los secretos corporales de la madre. Si el niño siente que esa curiosidad es un ataque destructivo que destruyó a la madre amada, surge la inhibición intelectual escolar como escudo protector frente a la culpa."
  },
  {
    id: "c5",
    author: "Melanie Klein",
    topic: "Objeto Combinado",
    title: "Fantasía de la escena primaria arcaica",
    instruction: "Reconstruye la definición kleiniana de la figura del Objeto Combinado:",
    template: "Al proyectar su propia agresión sobre los padres unidos, el niño fantasea que el padre forma parte de la madre, creando la figura de la {blank1} en una escena confusa de coito {blank2} e infinito, lo que constituye la fuente de {blank3} infantiles.",
    blanks: [
      {
        id: "blank1",
        label: "Figura fantasmática",
        correct: "madre fálica",
        options: [
          "madre fálica",
          "madre suficientemente buena",
          "madre nutricia desexualizada",
          "mujer castrada pasiva"
        ]
      },
      {
        id: "blank2",
        label: "Naturaleza de la unión coital",
        correct: "sádico continuado",
        options: [
          "sádico continuado",
          "armonioso y sublimado",
          "verbal y pedagógico",
          "platónico sin intercambio corporal"
        ]
      },
      {
        id: "blank3",
        label: "Manifestación clínica infantil",
        correct: "pesadillas y delirios persecutorios",
        options: [
          "pesadillas y delirios persecutorios",
          "juegos transicionales pacíficos",
          "fobias exclusivas a la oscuridad",
          "retrasos motrices del lenguaje"
        ]
      }
    ],
    rationale: "El objeto combinado sintetiza los mayores terrores del niño pequeño: la exclusión de una escena primaria terrorífica donde los cuerpos parentales intercambian goce oral, anal, uretral y genital sin pausa, poblando las noches de pesadillas persecutorias."
  },
  {
    id: "c6",
    author: "Melanie Klein",
    topic: "Superyó Temprano y Pulsión de Muerte",
    title: "Génesis y severidad endógena del Superyó",
    instruction: "Completa la tesis kleiniana sobre el origen de la severidad del Superyó temprano:",
    template: "El Superyó temprano kleiniano surge en la fase {blank1} del primer año y suele ser extremadamente sádico porque constituye un cultivo de la {blank2}. Su severidad no depende del padre real, sino de las {blank3} proyectadas por el propio sujeto.",
    blanks: [
      {
        id: "blank1",
        label: "Fase de origen",
        correct: "oral-sádica",
        options: [
          "oral-sádica",
          "fálica clásica freudiana",
          "genital post-puberal",
          "de latencia moral"
        ]
      },
      {
        id: "blank2",
        label: "Fuerza pulsional",
        correct: "pulsión de muerte",
        options: [
          "pulsión de muerte",
          "pulsión de autoconservación",
          "libido narcisista pura",
          "tendencia adaptativa innata"
        ]
      },
      {
        id: "blank3",
        label: "Causa de la severidad",
        correct: "mociones agresivas y destructivas infantiles",
        options: [
          "mociones agresivas y destructivas infantiles",
          "órdenes disciplinarias del padre biológico",
          "normas escolares de la educación formal",
          "carencias nutricionales del amamantamiento"
        ]
      }
    ],
    rationale: "Klein demuestra que la crueldad del superyó primitivo no es copia de la severidad real del padre externo, sino el reflejo de las proyecciones de las pulsiones mortíferas del propio lactante sobre los objetos que luego introyecta como amos despiadados."
  },
  {
    id: "c7",
    author: "Donald Winnicott",
    topic: "Premisas y Rechazo de Pulsión de Muerte",
    title: "La agresión infantil según Donald Winnicott",
    instruction: "Completa la concepción winnicottiana de la agresividad inicial del bebé:",
    template: "Winnicott rechaza la noción de {blank1}. Para él, la agresividad inicial del lactante no encierra ninguna intención de dañar, sino que es testimonio de un {blank2} y de una vitalidad sensorio-motora en el marco de una tendencia innata hacia el {blank3}.",
    blanks: [
      {
        id: "blank1",
        label: "Concepto rechazado",
        correct: "pulsión de muerte",
        options: [
          "pulsión de muerte",
          "inconsciente reprimido",
          "desarrollo emocional primario",
          "relación con el ambiente"
        ]
      },
      {
        id: "blank2",
        label: "Sentido de la agresión",
        correct: "gesto espontáneo",
        options: [
          "gesto espontáneo",
          "deseo canibalístico perverso",
          "síntoma histérico temprano",
          "mandato del superyó cruel"
        ]
      },
      {
        id: "blank3",
        label: "Dirección evolutiva",
        correct: "desarrollo y la maduración",
        options: [
          "desarrollo y la maduración",
          "retorno a lo inorgánico inanimado",
          "sometimiento sumiso al orden",
          "aislamiento autista definitivo"
        ]
      }
    ],
    rationale: "Winnicott reemplaza el pesimismo pulsional kleiniano por una confianza fundamental en la naturaleza humana: el niño nace con una potencialidad madurativa propia ('como una semilla'); patología no es pulsión de muerte, sino interferencia y falla del ambiente facilitador."
  },
  {
    id: "c8",
    author: "Donald Winnicott",
    topic: "Preocupación Maternal Primaria y Yo Auxiliar",
    title: "La madre suficientemente buena en el puerperio",
    instruction: "Completa las características de la función materna temprana en Winnicott:",
    template: "En las últimas semanas de gestación y primeras de postparto, la madre entra en un estado de {blank1}. Al identificarse plenamente con su hijo, funciona como su {blank2} y barrera anti-estímulo, proporcionando las condiciones para que el infante viva la {blank3}.",
    blanks: [
      {
        id: "blank1",
        label: "Estado materno especial",
        correct: "locura normal y necesaria",
        options: [
          "locura normal y necesaria",
          "depresión psicótica puerperal",
          "neurosis obsesiva de vigilancia",
          "frialdad pedagógica planificada"
        ]
      },
      {
        id: "blank2",
        label: "Rol metapsicológico de la madre",
        correct: "Yo auxiliar",
        options: [
          "Yo auxiliar",
          "Superyó punitivo arcaico",
          "objeto transicional inerte",
          "rival edípico castrador"
        ]
      },
      {
        id: "blank3",
        label: "Experiencia fundante del bebé",
        correct: "ilusión omnipotente (crear lo hallado)",
        options: [
          "ilusión omnipotente (crear lo hallado)",
          "angustia inconcebible de caída",
          "sumisión obligada del falso self",
          "castración genital anticipada"
        ]
      }
    ],
    rationale: "Gracias a esta sensibilidad transitoria extrema ('preocupación maternal primaria'), la madre ofrece el pecho justo cuando el bebé lo desea, permitiendo que el bebé crea mágicamente que él creó aquello que se le presenta, fundando su confianza en la vida."
  },
  {
    id: "c9",
    author: "Donald Winnicott",
    topic: "No-Integración vs Desintegración y Agonías Impensables",
    title: "La desintegración como defensa activa",
    instruction: "Distingue entre el reposo no-integrado y la desintegración ante fallas ambientales:",
    template: "Al nacer, el bebé habita un estado saludable de {blank1}. Si el ambiente falla prematuramente, el infante se expone a la {blank2}; para protegerse, recurre a la desintegración, que consiste en una producción activa de {blank3} dentro del campo de la omnipotencia.",
    blanks: [
      {
        id: "blank1",
        label: "Estado basal saludable",
        correct: "no-integración",
        options: [
          "no-integración",
          "desintegración psicótica",
          "sumisión de falso self",
          "fusión indestructible"
        ]
      },
      {
        id: "blank2",
        label: "Amenaza catastrófica",
        correct: "angustia inconcebible (agonía impensable)",
        options: [
          "angustia inconcebible (agonía impensable)",
          "culpa depresiva kleiniana",
          "envidia hacia el pecho bueno",
          "represión neurótica del complejo de Edipo"
        ]
      },
      {
        id: "blank3",
        label: "Mecanismo de la desintegración",
        correct: "caos propio organizado por el infante",
        options: [
          "caos propio organizado por el infante",
          "ideas delirantes de grandeza",
          "obediencia ciega a la autoridad",
          "recuerdos reprimidos de la escena primaria"
        ]
      }
    ],
    rationale: "La no-integración permite descansar en el regazo materno. Pero si una falla ambiental irrumpe bruscamente, el bebé crea activamente caos (desintegración) para no caer en el vacío impensable: un caos que él mismo produce es menos destructivo que el terror absoluto del derrumbe."
  },
  {
    id: "c10",
    author: "Donald Winnicott",
    topic: "Zona Intermedia y Paradoja del Objeto Transicional",
    title: "La tercera área de experiencia humana",
    instruction: "Completa la formulación winnicottiana del objeto y espacio transicional:",
    template: "El objeto transicional representa la primera posesión {blank1} y se ubica en la {blank2}. Constituye una paradoja que debe ser tolerada sin resolver: el objeto es simultáneamente {blank3} por el sujeto.",
    blanks: [
      {
        id: "blank1",
        label: "Definición de posesión",
        correct: "no-mí (no-yo)",
        options: [
          "no-mí (no-yo)",
          "puramente endógena",
          "impuesta por la cultura",
          "delirante alucinatoria"
        ]
      },
      {
        id: "blank2",
        label: "Localización psíquica",
        correct: "zona intermedia de la experiencia",
        options: [
          "zona intermedia de la experiencia",
          "conciencia del principio del deber",
          "represión secundaria del Ello",
          "pulsión destructiva pura"
        ]
      },
      {
        id: "blank3",
        label: "Paradoja fundamental",
        correct: "creado y encontrado en la realidad",
        options: [
          "creado y encontrado en la realidad",
          "amado y castigado por el padre",
          "introyectado y expulsado al exterior",
          "destruido y lamentado en duelo fúnebre"
        ]
      }
    ],
    rationale: "Ni puramente adentro (subjetivo) ni puramente afuera (objetivo): el osito o la mantita viven en la zona intermedia. Los adultos jamás deben exigirle al niño que resuelva la paradoja ('¿lo inventaste tú o ya estaba ahí?'); de esta tercera zona nace el arte, la religión y el juego libre."
  },
  {
    id: "c11",
    author: "Donald Winnicott",
    topic: "Uso del Objeto y Destrucción",
    title: "La sobrevivencia del objeto a la destructividad",
    instruction: "Reconstruye la secuencia indispensable para acceder al Uso del Objeto:",
    template: "Para transitar de la relación con el objeto al {blank1}, es indispensable que el sujeto {blank2} al objeto en su fantasía y que el objeto {blank3} sin tomar represalias ni quebrarse.",
    blanks: [
      {
        id: "blank1",
        label: "Conquista de la exterioridad",
        correct: "uso del objeto real",
        options: [
          "uso del objeto real",
          "sometimiento del falso self",
          "estado de omnipotencia mágica",
          "duelo de la relación primaria"
        ]
      },
      {
        id: "blank2",
        label: "Acto inconsciente del sujeto",
        correct: "destruya con furia omnipotente",
        options: [
          "destruya con furia omnipotente",
          "idealice de forma perpetua",
          "someta a castigos morales estrictos",
          "expulse de su memoria consciente"
        ]
      },
      {
        id: "blank3",
        label: "Respuesta indispensable del objeto",
        correct: "sobreviva intacto a la destrucción",
        options: [
          "sobreviva intacto a la destrucción",
          "retalie con sanciones disciplinarias",
          "se desvanezca en la nada biológica",
          "interprete el odio del paciente como culpa"
        ]
      }
    ],
    rationale: "La destrucción ubica al objeto fuera de la omnipotencia subjetiva. Cuando la madre (o el analista) sobrevive sin contraatacar ni desmoronarse, el infante exclama en su inconsciente: '¡Te destruí y sigues viva, luego no eres un producto de mi alucinación, eres real y puedo usarte!'."
  },
  {
    id: "c12",
    author: "Donald Winnicott",
    topic: "Falso Self, Suicidio y Verdadero Self",
    title: "La tragedia defensiva del Falso Self",
    instruction: "Completa la articulación entre el gesto espontáneo, el falso self y el suicidio:",
    template: "El Verdadero Self brota del {blank1} corporal y psicosomático. Cuando la madre impone sus exigencias, surge el Falso Self como coraza protectora; en casos graves, el suicidio se presenta como la trágica destrucción del self total para salvar al Verdadero Self de {blank2} ante una vida sentida como {blank3}.",
    blanks: [
      {
        id: "blank1",
        label: "Fuente del Verdadero Self",
        correct: "gesto espontáneo y sensorio-motor",
        options: [
          "gesto espontáneo y sensorio-motor",
          "manual de crianza de los progenitores",
          "acatamiento de las normas escolares",
          "discurso racional del principio del deber"
        ]
      },
      {
        id: "blank2",
        label: "Propósito del acto suicida",
        correct: "la traición o aniquilación definitiva",
        options: [
          "la traición o aniquilación definitiva",
          "la pérdida de bienes materiales",
          "la culpa persecutoria por castración",
          "la falta de reconocimiento académico"
        ]
      },
      {
        id: "blank3",
        label: "Vivencia clínica patológica",
        correct: "vacía, fútil y no vivida",
        options: [
          "vacía, fútil y no vivida",
          "hiperactiva y sumamente placentera",
          "plena de vitalidad creativa compartida",
          "libre de exigencias y en calma"
        ]
      }
    ],
    rationale: "El Falso Self protege al Verdadero Self manteniéndolo en una vida secreta. Pero cuando el entorno acorrala a la persona obligándola a prostituir sus afectos más íntimos, el suicidio se convierte paradójicamente en el último escudo para evitar la aniquilación final de lo genuino."
  },
  {
    id: "c13",
    author: "Donald Winnicott",
    topic: "Capacidad de Estar Solo y el Ser vs Hacer",
    title: "Estar solo en presencia de la madre",
    instruction: "Completa la paradoja de la soledad y la primacía del Ser sobre el Hacer:",
    template: "Para Winnicott, el sentimiento de {blank1} es anterior y condición indispensable para el Hacer. La capacidad de estar solo descansa en la paradoja infantil de haber podido relajarse a solas {blank2}, sabiendo con confianza básica que ella {blank3}.",
    blanks: [
      {
        id: "blank1",
        label: "Primacía ontológica",
        correct: "SER (asociado al elemento femenino)",
        options: [
          "SER (asociado al elemento femenino)",
          "HACER (asociado a la acción laboral)",
          "OBEDECER (asociado a la sumisión social)",
          "REPRIMIR (asociado a la renuncia pulsional)"
        ]
      },
      {
        id: "blank2",
        label: "Paradoja de la soledad",
        correct: "en presencia no intrusiva de la madre",
        options: [
          "en presencia no intrusiva de la madre",
          "aislado en una habitación en penumbra",
          "tras romper todo vínculo afectivo familiar",
          "mediante el castigo por mala conducta"
        ]
      },
      {
        id: "blank3",
        label: "Certeza introyectada",
        correct: "sigue viva y no va a desaparecer",
        options: [
          "sigue viva y no va a desaparecer",
          "castigará severamente cualquier descuido",
          "exigirá cuentas de las tareas realizadas",
          "reemplazará su afecto por un objeto inerte"
        ]
      }
    ],
    rationale: "Solo quien pudo jugar en paz mientras su madre leía o cosía a su lado —sin entrometerse ni exigir nada— aprende a estar verdaderamente solo de adulto: puede descansar en la no-integración sabiendo que el amparo y la continuidad del mundo siguen intactos."
  }
];

// FLASHCARDS DE CONCEPTOS CLAVE (28 TARJETAS 3D)
const FLASHCARDS_DATA = [
  // --- MELANIE KLEIN (10) ---
  {
    id: "fc1",
    author: "Melanie Klein",
    category: "Edipo Temprano",
    term: "Estadios Tempranos del Edipo",
    tag: "Clase 6",
    front: "¿Cuándo sitúa Melanie Klein el inicio del Edipo y qué diferencia crucial marca con Freud?",
    back: "Klein los ubica entre los 6 meses y 3 años (en la posición depresiva), mientras Freud los situaba entre los 3 y 5 años (fase fálica). Para Klein, el Edipo temprano se asienta en la oralidad y la dinámica ambivalente hacia la madre como objeto total.",
    mastered: false
  },
  {
    id: "fc2",
    author: "Melanie Klein",
    category: "Prehistoria Edípica",
    term: "Fase Femenina",
    tag: "Clase 6",
    front: "¿En qué consiste la 'Fase Femenina' descripta por Melanie Klein?",
    back: "Es un período transversal para niñas y niños, anterior a la consolidación del psiquismo masculino o femenino. Se caracteriza por fines receptivos y de incorporación oral, y por una identificación primaria con el objeto materno.",
    mastered: false
  },
  {
    id: "fc3",
    author: "Melanie Klein",
    category: "Edipo Temprano",
    term: "El Destete",
    tag: "Clase 6",
    front: "¿Por qué el destete es el motor primordial del alejamiento de la madre hacia el padre?",
    back: "El destete representa la primera separación real y la fisura del estado de fusión. Las frustraciones orales y el odio reactivo despiertan sadismo y ansiedades persecutorias que impulsan al infante a buscar un objeto oral alternativo en el pene del padre.",
    mastered: false
  },
  {
    id: "fc4",
    author: "Melanie Klein",
    category: "Dinámica Afectiva",
    term: "Celos vs Envidia",
    tag: "Clase 6",
    front: "¿Cuál es la distinción clínica entre Celos y Envidia en Klein?",
    back: "• Celos: Sentimiento triangular (madre-bebé-padre) con objetos totales; miedo de perder el amor del otro y quedar en desamparo.\n• Envidia: Vivencia diádica más arcaica; frustración al sentirse privado de lo bueno. Fantasía de atacar, morder y despojar los contenidos del cuerpo materno (pechos, bebés, penes).",
    mastered: false
  },
  {
    id: "fc5",
    author: "Melanie Klein",
    category: "Pulsión y Cognición",
    term: "Pulsión Epistemofílica",
    tag: "Clase 6",
    front: "¿Qué es la pulsión epistemofílica y por qué puede derivar en inhibición del aprendizaje?",
    back: "Es la pulsión del saber y la curiosidad. Se articula con el componente sádico primario: investigar proviene de la fantasía de desarmar, cortar y apropiarse de los secretos del cuerpo materno. Si hay culpa excesiva o agresión incontrolada, deriva en inhibiciones severas del estudio y del aprendizaje escolar.",
    mastered: false
  },
  {
    id: "fc6",
    author: "Melanie Klein",
    category: "Fantasía Inconsciente",
    term: "Objeto Combinado y Madre Fálica",
    tag: "Clase 6",
    front: "¿Qué es el 'Objeto Combinado' y la figura de la 'Madre Fálica'?",
    back: "Fantasía arcaica donde la agresividad proyectada une a los padres en un coito sádico continuo e infinito del cual el niño queda excluido. Al no estar bien diferenciados, el pene del padre parece formar parte permanente de la madre (madre fálica), constituyendo la fuente de pesadillas infantiles y delirios persecutorios.",
    mastered: false
  },
  {
    id: "fc7",
    author: "Melanie Klein",
    category: "Diferenciación Sexual",
    term: "Edipo Masculino y Envidia de la Maternidad",
    tag: "Clase 6",
    front: "¿Qué envidia el varón en el Edipo temprano y cómo se defiende según Klein?",
    back: "Envidia la capacidad reproductiva del cuerpo materno (vientre, bebés, leche). Se defiende anudando el deseo frustrado de concebir a la pulsión epistemofílica (desplazamiento al intelecto) y desarrollando una sobrevaloración narcisista del pene con complejo de superioridad hacia la mujer.",
    mastered: false
  },
  {
    id: "fc8",
    author: "Melanie Klein",
    category: "Diferenciación Sexual",
    term: "Edipo Femenino y Zonas Erógenas",
    tag: "Clase 6",
    front: "¿Cuál es el obstáculo genital específico de la niña en su desarrollo?",
    back: "Poseer dos zonas de igual valor erógeno: clítoris y vagina, dificultando la consolidación receptiva vaginal. Además, el deseo de ser madre puede verse amenazado por la culpa persecutoria: teme que su madre haya retaliado dañando su vientre por los ataques sádicos que ella le propinó en su fantasía.",
    mastered: false
  },
  {
    id: "fc9",
    author: "Melanie Klein",
    category: "Metapsicología",
    term: "Superyó Temprano",
    tag: "Clase 6",
    front: "¿Cómo concibe Klein el Superyó y por qué discrepa de Freud?",
    back: "Klein postula que el Superyó surge tempranamente en la fase oral-sádica (1er año) y NO es heredero del Edipo, sino independiente y anterior. Es sumamente sádico ('cultivo de pulsión de muerte') y su extrema severidad se debe a los propios impulsos destructivos del niño proyectados e introyectados, no al padre real.",
    mastered: false
  },
  {
    id: "fc10",
    author: "Melanie Klein",
    category: "Afectos y Posición",
    term: "Culpa Depresiva Primitiva",
    tag: "Clase 6",
    front: "¿Cuál es el origen de la culpa en la posición depresiva kleiniana?",
    back: "Emerge al constatar que el objeto destruido en la fantasía sádica es el mismo objeto amado y proveedor de vida. El Yo teme perder al objeto total y quedar expuesto al desamparo, lo que activa el apremio de reparación afectiva.",
    mastered: false
  },

  // --- DONALD WINNICOTT (18) ---
  {
    id: "fc11",
    author: "Donald Winnicott",
    category: "Premisas Fundamentales",
    term: "Rechazo de la Pulsión de Muerte",
    tag: "Clase 7",
    front: "¿Cómo concibe Winnicott la agresividad del infante frente al concepto de Pulsión de Muerte?",
    back: "Rechaza categóricamente la pulsión de muerte. Para Winnicott, la agresividad inicial del bebé no implica intencionalidad destructiva ni deseo de dañar, sino que es expresión pura de un gesto espontáneo, vitalidad motora y afirmación de existencia.",
    mastered: false
  },
  {
    id: "fc12",
    author: "Donald Winnicott",
    category: "Desarrollo Emocional",
    term: "Tendencia Innata al Desarrollo",
    tag: "Clase 7",
    front: "¿Qué sostiene la teoría de la tendencia innata al desarrollo en Winnicott?",
    back: "El niño nace sano y porta como una semilla su potencial genuino y espontáneo de maduración. El ambiente no 'crea' al niño; su función es facilitar y no interferir en el despliegue normal de sus potencialidades innatas.",
    mastered: false
  },
  {
    id: "fc13",
    author: "Donald Winnicott",
    category: "Función Materna",
    term: "Preocupación Maternal Primaria",
    tag: "Clase 7",
    front: "¿Qué es la 'Preocupación Maternal Primaria'?",
    back: "Un estado psíquico especial de 'locura normal y necesaria' que inicia hacia el final del embarazo y abarca las primeras semanas postparto. La madre se entrega abnegadamente al bebé, operando como su 'Yo auxiliar' y barrera anti-estímulo para amortiguar las intrusiones del mundo externo.",
    mastered: false
  },
  {
    id: "fc14",
    author: "Donald Winnicott",
    category: "Funciones Maternas",
    term: "Holding (Sostén)",
    tag: "Clase 7",
    front: "¿Qué es el Holding y qué proceso del Yo posibilita?",
    back: "Es el sostén físico y emocional sensible brindado por la madre facilitadora. Su función estructurante es posibilitar la INTEGRACIÓN del Yo en el tiempo y en el espacio, garantizando la continuidad de la experiencia del 'seguir siendo'.",
    mastered: false
  },
  {
    id: "fc15",
    author: "Donald Winnicott",
    category: "Funciones Maternas",
    term: "Handling (Manipulación)",
    tag: "Clase 7",
    front: "¿Qué es el Handling y qué proceso psicológico promueve?",
    back: "Es el cuidado corporal minucioso y afectuoso (baño, caricias, cambios de postura). Facilita la PERSONALIZACIÓN: el proceso por el cual el psique aprende a habitar de manera cómoda e integrada el soma (cuerpo).",
    mastered: false
  },
  {
    id: "fc16",
    author: "Donald Winnicott",
    category: "Funciones Maternas",
    term: "Object Presenting (Presentación de Objeto)",
    tag: "Clase 7",
    front: "¿Qué es la Presentación de Objeto y qué ilusión permite?",
    back: "Es la habilidad materna de ofrecer el objeto de necesidad (ej: pecho) en el momento exacto en que surge la necesidad en el bebé. Esto permite la ILUSIÓN omnipotente de que el bebé mismo 'creó' lo que halló, fundando las relaciones de objeto.",
    mastered: false
  },
  {
    id: "fc17",
    author: "Donald Winnicott",
    category: "El Yo",
    term: "No-Integración",
    tag: "Clase 7",
    front: "¿Qué es el estado de No-Integración originario en el bebé?",
    back: "Es la condición basal natural en la que el bebé es un cúmulo de elementos sensoriales y motrices dispersos sin un Yo unitario. El bebé puede descansar en la función de Yo auxiliar de la madre, permitiéndose estar no-integrado sin angustia.",
    mastered: false
  },
  {
    id: "fc18",
    author: "Donald Winnicott",
    category: "Psicopatología",
    term: "Angustia Inconcebible / Impensable",
    tag: "Clase 7",
    front: "¿Cuáles son las 4 vivencias de la angustia inconcebible?",
    back: "Si la función materna falla, el infante queda expuesto a las agonías impensables (fuente de las psicosis):\n1. Fragmentarse\n2. Caer interminablemente sin fondo\n3. No tener ninguna relación con el propio cuerpo\n4. No tener ninguna orientación en el espacio.",
    mastered: false
  },
  {
    id: "fc19",
    author: "Donald Winnicott",
    category: "Mecanismo Defensivo",
    term: "Desintegración como Defensa",
    tag: "Clase 7",
    front: "¿Por qué la desintegración es considerada una 'defensa activa' en Winnicott?",
    back: "Frente a una intrusión ambiental traumática que interrumpe el 'seguir siendo', el bebé produce activamente caos. Este caos, aunque doloroso, tiene la ventaja de ser creado por el propio bebé dentro de su omnipotencia, siendo menos destructivo que la agonía impensable (miedo al derrumbe).",
    mastered: false
  },
  {
    id: "fc20",
    author: "Donald Winnicott",
    category: "Fases hacia la Autonomía",
    term: "Dependencia Absoluta vs Relativa",
    tag: "Clase 7",
    front: "¿En qué se diferencian la Dependencia Absoluta y la Dependencia Relativa?",
    back: "• Dependencia Absoluta: La madre se adapta casi al 100%; el bebé desconoce que depende y no distingue entre él y la madre.\n• Dependencia Relativa: La madre inicia una desadaptación gradual y dosificada; el infante se percata de su dependencia y de la ausencia materna (despertando rabia), recurriendo a objetos transicionales.",
    mastered: false
  },
  {
    id: "fc21",
    author: "Donald Winnicott",
    category: "Espacio Transicional",
    term: "Zona Intermedia de la Experiencia",
    tag: "Clase 8",
    front: "¿Qué es la 'Zona Intermedia' o Tercera Zona en Winnicott?",
    back: "Es un área neutral de descanso psíquico ubicada entre la realidad interna puramente subjetiva y el mundo exterior compartido. Permite el tránsito suave entre el control omnipotente y el principio de realidad; en los adultos se perpetúa en el arte, la religión y el juego.",
    mastered: false
  },
  {
    id: "fc22",
    author: "Donald Winnicott",
    category: "Objeto Transicional",
    term: "Paradoja del Objeto Transicional",
    tag: "Clase 8",
    front: "¿Cuál es la paradoja del objeto transicional que jamás debe resolverse?",
    back: "Que el objeto es al mismo tiempo 'creado' por el bebé y 'encontrado' en la realidad exterior; ni es puramente interno ni estrictamente externo. Winnicott exige aceptar y tolerar la paradoja sin exigirle al niño que decida si lo inventó o si ya existía afuera.",
    mastered: false
  },
  {
    id: "fc23",
    author: "Donald Winnicott",
    category: "Exterioridad",
    term: "Uso del Objeto y Destrucción",
    tag: "Clase 8",
    front: "¿Cuál es la secuencia obligatoria para que el sujeto logre 'Usar' un objeto?",
    back: "1. Relación con el objeto\n2. Objeto es hallado/creado\n3. El sujeto DESTRUYE al objeto en la fantasía\n4. El objeto SOBREVIVE a la destrucción (no retalia ni se destruye)\n5. El sujeto puede 'usar' al objeto en la realidad compartida por fuera de su omnipotencia.",
    mastered: false
  },
  {
    id: "fc24",
    author: "Donald Winnicott",
    category: "Falso Self",
    term: "Falso Self y su Etiología",
    tag: "Clase 9",
    front: "¿Cómo y por qué se origina la estructura de Falso Self?",
    back: "Surge por fallas del ambiente donde la madre no interpreta ni sostiene el gesto espontáneo del infante, sino que impone su propio quehacer. El bebé se acata y se vuelve sumiso para proteger al Verdadero Self secreto de la explotación o aniquilación.",
    mastered: false
  },
  {
    id: "fc25",
    author: "Donald Winnicott",
    category: "Clínica del Falso Self",
    term: "Paradoja del Suicidio en el Falso Self",
    tag: "Clase 9",
    front: "¿Qué significado clínico tiene el suicidio en personas con Falso Self grave?",
    back: "Constituye la destrucción trágica del self total para impedir la corrupción, traición y aniquilación definitiva del Verdadero Self. Es vivido inconscientemente como una salvación extrema frente a una vida vacía y desprovista de autenticidad.",
    mastered: false
  },
  {
    id: "fc26",
    author: "Donald Winnicott",
    category: "Subjetividad",
    term: "Verdadero Self y Gesto Espontáneo",
    tag: "Clase 9",
    front: "¿De qué se nutre el Verdadero Self y cuál es su característica esencial?",
    back: "Proviene de los impulsos espontáneos anclados en lo sensorio-motor, el tono muscular y la respiración. Solo el Verdadero Self es capaz de ser creativo, sentirse real, vital y disfrutar de la libertad existencial.",
    mastered: false
  },
  {
    id: "fc27",
    author: "Donald Winnicott",
    category: "Fenómenos del Desarrollo",
    term: "El Ser vs el Hacer",
    tag: "Clase 9",
    front: "¿Cuál es la distinción entre SER y HACER en la teoría winnicottiana?",
    back: "El sentimiento primordial de SER es anterior y requisito para el HACER. Winnicott asocia lo femenino primario al SER (identificación primaria, fusión y continuidad con el pecho) y lo masculino al HACER y a la diferenciación mediante la acción.",
    mastered: false
  },
  {
    id: "fc28",
    author: "Donald Winnicott",
    category: "Madurez Emocional",
    term: "Capacidad de Estar Solo",
    tag: "Clase 9",
    front: "¿Cuál es la paradoja fundante de la capacidad de estar solo?",
    back: "Se cimienta en la experiencia infantil de 'estar solo en presencia de la madre'. Cuando la madre está presente de manera no intrusiva y sin exigir nada, el niño puede relajarse en la no-integración, descubriendo su quehacer genuino y la confianza básica en el entorno.",
    mastered: false
  }
];

// TABLAS COMPARATIVAS
const COMPARATIVE_TABLES = {
  authors: [
    {
      criterio: "Concepción del Yo al nacer",
      freud: "Predominio del Ello; el Yo se diferencia progresivamente por el contacto con la realidad exterior.",
      klein: "Existe un Yo temprano desde el nacimiento, capaz de sentir ansiedad, escindir y proyectar fantasías.",
      winnicott: "No hay un Yo integrado al nacer. Existe un estado de No-integración; el Yo se consolida gracias a la madre como Yo auxiliar."
    },
    {
      criterio: "Pulsión de Muerte",
      freud: "Fuerza básica endógena que empuja hacia lo inorgánico y la repetición destructiva.",
      klein: "Pilar central y temprano: el superyó es un cultivo de pulsión de muerte y genera intensas angustias persecutorias.",
      winnicott: "RECHAZA categóricamente la pulsión de muerte. La agresividad primaria es signo de vitalidad y gesto espontáneo motor."
    },
    {
      criterio: "Complejo de Edipo",
      freud: "Etapa fálica clásica entre los 3 y 5 años; centrado en la amenaza de castración y la ley del padre.",
      klein: "Estadios tempranos (6 meses a 3 años); emerge en la posición depresiva con el objeto total materno y la triangulación.",
      winnicott: "Es una adquisición posterior que presupone que el Yo ya ha alcanzado la integración y superado las agonías impensables."
    },
    {
      criterio: "Superyó",
      freud: "Heredero tardío del declive del Complejo de Edipo (post-edípico, ~5 años).",
      klein: "Proceso anterior e independiente del Edipo freudiano; surge en la fase oral-sádica (primer año) con carácter cruel y sádico.",
      winnicott: "Se asienta sobre la introyección de un ambiente benigno y facilitador o deriva en organizaciones defensivas de falso self."
    },
    {
      criterio: "Rol del Ambiente (Madre)",
      freud: "Objeto de pulsión que satisface necesidades de autoconservación para el apuntalamiento libidinal.",
      klein: "Contenedora de objetos buenos y malos; objeto de proyección e introyección fantasmática primaria.",
      winnicott: "FACILITADOR ABSOLUTO: la madre sostiene (Holding), manipula (Handling) y presenta el objeto. Las fallas tempranas causan psicosis/falso self."
    }
  ],
  winnicottStages: [
    {
      fase: "Fase de Dependencia Absoluta",
      objeto: "Objeto Subjetivo (creado/hallado)",
      campo: "Ilusión omnipotente",
      relacion: "El bebé y la madre SON uno. La madre se adapta al 100% como Yo auxiliar.",
      paradoja: "El objeto es creado / encontrado omnipotentemente."
    },
    {
      fase: "Fase de Dependencia Relativa",
      objeto: "Objeto Transicional (primera posesión no-yo)",
      campo: "Zona Intermedia de experiencia",
      relacion: "El infante controla el objeto mediante manipulación y materialidad. Conciencia de la ausencia materna.",
      paradoja: "El objeto es destruido / sobrevive sin retaliar."
    },
    {
      fase: "Hacia la Independencia",
      objeto: "Objeto Objetivamente Percibido",
      campo: "Principio de Realidad y Cultura",
      relacion: "Encuentro enriquecedor con la sociedad, arte, juego y relaciones interpersonales maduras.",
      paradoja: "La separación permite la intimidad y la capacidad de estar solo."
    }
  ]
};
