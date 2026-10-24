// Base de datos completa de Psicoanálisis II (Melanie Klein & Donald Winnicott)
// Basado fielmente en el documento de cátedra de Melanie Leyton Blanche - Solemne II

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

const QUESTIONS_DATA = [
  // --- MÓDULO 1: KLEIN EDIPO TEMPRANO (Preguntas 1 a 10) ---
  {
    id: "q1",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Discordancias respecto a Freud",
    question: "¿En qué rango etario sitúa Melanie Klein los estadios tempranos del Complejo de Edipo y la formación temprana del Superyó?",
    options: [
      "Entre los 3 y los 5 años, coincidiendo con la fase fálica freudiana.",
      "Entre los 6 meses y los 3 años, como consolidación de procesos originados con anterioridad.",
      "Exclusivamente durante la pubertad como resignificación a posteriori.",
      "A partir del segundo mes de vida, antes de cualquier relación con el pecho materno."
    ],
    correctAnswer: 1,
    explanation: "A diferencia de Sigmund Freud (que sitúa el Edipo clásico en la fase fálica, entre los 3 y 5 años), Klein postula que los estadios tempranos del Complejo de Edipo y la formación del Superyó se originan de manera temprana entre los 6 meses y los 3 años de vida.",
    distractorExplanations: [
      "Los 3 a 5 años corresponden a la teoría clásica freudiana, que Klein busca revisar.",
      "La pubertad no es el momento fundante del Edipo en la metapsicología kleiniana.",
      "A los 2 meses aún predomina la posición esquizoparanoide pura sin la integración del objeto total propia del Edipo temprano."
    ]
  },
  {
    id: "q2",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Emergencia del Edipo",
    question: "¿En qué posición del desarrollo psíquico infantil comienza a desarrollarse el Complejo de Edipo temprano según Klein?",
    options: [
      "En la posición esquizoparanoide pura, dominada por la escisión del pecho bueno y malo.",
      "En la posición depresiva, con la integración de la madre como un objeto total y separado.",
      "En la etapa genital madura del período de latencia escolar.",
      "En la fase de narcisismo primario absoluto carente de objetos externos."
    ],
    correctAnswer: 1,
    explanation: "El Edipo temprano kleiniano emerge en la posición depresiva (alrededor de los 6 meses). Aquí el infante integra a la madre como un 'objeto total' separado e independiente, reconociendo que su propia agresión puede destruirla, lo que despierta culpa y triangulación.",
    distractorExplanations: [
      "En la posición esquizoparanoide los objetos están totalmente escindidos (parciales: pecho bueno/pecho malo), impidiendo la triangulación con objetos totales.",
      "El período de latencia ocurre mucho después (6 a 11 años).",
      "Klein rechaza la noción de narcisismo primario anobjetal; siempre hay relación de objeto desde el inicio."
    ]
  },
  {
    id: "q3",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Fase Femenina",
    question: "¿Cómo define Melanie Klein la denominada 'Fase Femenina' del desarrollo infantil?",
    options: [
      "Una etapa exclusiva de las niñas caracterizada por la envidia del pene y la rivalidad con el padre.",
      "Un período transversal tanto en niñas como en niños, previo a la consolidación del psiquismo masculino o femenino, con fines receptivos y de incorporación.",
      "Una regresión patológica en varones que no logran identificarse con el padre de la horda primitiva.",
      "La resolución final del Edipo en donde la mujer asume la maternidad y la pasividad social."
    ],
    correctAnswer: 1,
    explanation: "Klein conceptualiza la 'Fase femenina' como un momento transversal para ambos sexos, previo a la consolidación del psiquismo de género. En ella predominan los fines receptivos e incorporativos orales y una identificación primaria con el objeto materno.",
    distractorExplanations: [
      "No es exclusiva de niñas: Klein subraya expresamente que ocurre en niños y niñas.",
      "No es una patología ni una regresión, sino una etapa estructural normal del desarrollo temprano.",
      "No es la resolución edípica final, sino la prehistoria del Edipo temprano."
    ]
  },
  {
    id: "q4",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "El Destete",
    question: "Según Melanie Klein, ¿cuál es el factor determinante que posibilita que el lactante se aleje del primer objeto (madre) para volcarse hacia el padre?",
    options: [
      "La intervención prohibitiva de la ley del padre mediante la amenaza de castración real.",
      "Las frustraciones orales del destete y el odio que este despierta, generando la primera separación.",
      "La súbita toma de conciencia de la castración anatómica en la niña y la envidia del pene.",
      "La satisfacción oral perfecta y sin límites brindada por el pecho nutricio."
    ],
    correctAnswer: 1,
    explanation: "Para Klein, el destete es la primera gran fisura del estado de fusión. Las intensas frustraciones orales y el odio reactivo que este despierta generan sadismo y ansiedades persecutorias que impulsan al infante a buscar un objeto alternativo: el padre.",
    distractorExplanations: [
      "La ley paterna prohibitiva es la explicación freudiana/lacaniana clásica, no el motor kleiniano oral primario.",
      "Klein descarta que el viraje de la niña sea por envidia del pene en primera instancia; la causa primordial es la privación oral del destete.",
      "Una satisfacción sin frustración no promovería el alejamiento ni la búsqueda de un nuevo objeto compensatorio."
    ]
  },
  {
    id: "q5",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Cambio de Objeto",
    question: "¿Cómo se concibe el viraje del bebé hacia el pene paterno tras las frustraciones del destete?",
    options: [
      "Como un objeto de deseo oral alternativo para equilibrar y disipar las angustias persecutorias.",
      "Como un objeto fálico de sumisión masoquista derivado del complejo de castración clásico.",
      "Como una alianza consciente con el padre para destruir físicamente a la madre real.",
      "Como una defensa obsesiva tardía frente a las exigencias del superyó punitivo."
    ],
    correctAnswer: 0,
    explanation: "El cambio de objeto NO es motivado originalmente por envidia fálica. Las ansiedades persecutorias y depresivas llevan al bebé a desplazar sus intereses orales hacia el pene del padre, convirtiéndolo en un objeto de gratificación y deseo oral alternativo.",
    distractorExplanations: [
      "No es una sumisión pasiva fálica-masoquista freudiana, sino un relevo libidinal en el plano de la oralidad.",
      "No es una conspiración consciente, sino fantasías inconscientes de apaciguamiento de la angustia.",
      "No es tardío ni obsesivo; ocurre en las fases arcaicas del primer año de vida."
    ]
  },
  {
    id: "q6",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Diferencia entre Celos y Envidia",
    question: "¿Cuál es la distinción teórica fundamental que establece Melanie Klein entre Celos y Envidia?",
    options: [
      "Los celos son una vivencia díada arcaica, mientras que la envidia requiere siempre de tres personas.",
      "Los celos son el miedo a perder el amor del objeto total por un tercero total; la envidia es la frustración por sentirse privado de lo bueno que contiene el objeto.",
      "La envidia busca proteger y reparar al objeto amado, mientras que los celos buscan únicamente devorarlo.",
      "Los celos surgen del destete y la envidia surge con la entrada al complejo de castración fálico."
    ],
    correctAnswer: 1,
    explanation: "Klein distingue rigurosamente: los celos implican una relación triangular con 'objetos totales' (miedo de que un tercero me arrebate el amor del otro y quedar desamparado); la envidia es más primitiva, díada, y surge de la privación de lo bueno que la madre retiene (pechos, leche, bebés, pene).",
    distractorExplanations: [
      "Es al revés: la envidia es diádica y arcaica, mientras que los celos son triangulares.",
      "La envidia nunca repara: ataca y corrompe lo bueno para despojarlo o arruinarlo.",
      "Ambos afectos tienen raíces tempranas, pero la envidia es la más arcaica ligada al pecho y los celos se consolidan en la triangulación del objeto total."
    ]
  },
  {
    id: "q7",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Pulsión Epistemofílica",
    question: "En la teoría kleiniana, ¿con qué dinamismo pulsional se articula primariamente la curiosidad y la pulsión epistemofílica (el deseo de saber)?",
    options: [
      "Con la pulsión de autoconservación y el principio de realidad secundario.",
      "Con la agresión y el sadismo: el deseo de abrirse paso en el cuerpo materno, descubrir sus contenidos y apropiarse de ellos.",
      "Con la sublimación desexualizada pura exenta de conflicto agresivo.",
      "Con el temor consciente a los castigos impuestos por las normas escolares de la época."
    ],
    correctAnswer: 1,
    explanation: "Klein postula que el conocimiento y el saber tienen una raíz agresiva-sádica: investigar y aprender provienen de la fantasía de abrirse paso en el cuerpo materno, descomponer, cortar, desarmar y adueñarse de sus riquezas internas.",
    distractorExplanations: [
      "No es un cálculo adaptativo neutro de autoconservación; está profundamente cargada de impulsos orales y anales sádicos.",
      "Para Klein la pulsión de saber no nace 'pura' ni desexualizada, sino de mociones canibalísticas y sádicas.",
      "El origen es inconsciente e intrauterino/corporal primitivo, muy anterior a la educación formal."
    ]
  },
  {
    id: "q8",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Inhibición del Aprendizaje",
    question: "¿Qué consecuencia clínica puede acarrear el despliegue incontrolado de la agresividad hacia el cuerpo de la madre en relación con la pulsión epistemofílica?",
    options: [
      "Un desarrollo intelectual precoz y brillante que anula todo tipo de neurosis.",
      "Inhibiciones severas del aprendizaje y de la sexualidad, como defensa frente al peligro que despierta la curiosidad agresiva.",
      "La disolución completa de los sentimientos de culpa y de las ansiedades depresivas.",
      "La fijación permanente en una identificación pasiva sin actividad fantasmática."
    ],
    correctAnswer: 1,
    explanation: "Si la agresión fantaseada hacia el vientre materno suscita una culpa o angustia persecutoria intolerable, el niño puede inhibir el deseo de investigar y saber (inhibición cognitiva/escolar) para defenderse de la peligrosidad destructiva asociada al acto de indagar.",
    distractorExplanations: [
      "No estimula la brillantez; al contrario, bloquea y paraliza la capacidad de estudiar y aprender.",
      "No anula la culpa, sino que la inhibición es un síntoma defensivo ante la culpa devastadora.",
      "La vida fantasmática se intensifica y aterroriza al infante, no desaparece."
    ]
  },
  {
    id: "q9",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Objeto Combinado",
    question: "¿Qué es la figura del 'Objeto Combinado' descripta por Melanie Klein en la escena primaria temprana?",
    options: [
      "La integración armoniosa del pecho bueno y el pecho malo dentro del Yo del bebé.",
      "La fantasía aterradora de la pareja parental en estado de unión coital continua, donde el pene paterno forma parte de la madre (madre fálica).",
      "Un objeto transicional que fusiona un osito de peluche con la voz del padre.",
      "El superyó maduro post-edípico que combina preceptos morales de ambos progenitores."
    ],
    correctAnswer: 1,
    explanation: "El objeto combinado surge al proyectar la propia agresividad sobre los padres unidos: al no estar diferenciados, el niño fantasea que el padre/pene forma parte de la madre ('madre fálica') en un coito sádico, incesante y terrorífico, origen de pesadillas y delirios persecutorios.",
    distractorExplanations: [
      "No es una integración armoniosa ni benéfica; es una fantasía monstruosa teñida de agresión y exclusión.",
      "El objeto transicional es un concepto winnicottiano totalmente distinto.",
      "No es el superyó pos-edípico pacificado, sino una de las representaciones más persecutorias del psiquismo arcaico."
    ]
  },
  {
    id: "q10",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Fantasía de vaciamiento",
    question: "¿Mediante qué mociones fantasea el lactante abrirse paso en el cuerpo materno para robar sus contenidos según Klein?",
    options: [
      "Mociones sublimadas del lenguaje y de la motricidad fina.",
      "Mociones anales y orales sádicas: mordiendo, desgarrando y saqueando los pechos, bebés y penes contenidos en ella.",
      "Mociones contemplativas puramente pasivas basadas en la mirada receptiva.",
      "Mociones de reparación afectuosa mediante caricias corporales."
    ],
    correctAnswer: 1,
    explanation: "Bajo el imperio de la envidia, el infante recurre a fantasías sádico-orales (morder, vaciar) y sádico-anales (expulsar, quemar, corroer, rasgar) para apropiarse de los bienes que la madre retiene en su vientre y su pecho.",
    distractorExplanations: [
      "En esta fase arcaica no intervienen el lenguaje refinado ni la sublimación secundaria.",
      "No es una actitud pasiva contemplativa, sino un asalto activo y voraz.",
      "La reparación aparece recién tras la culpa depresiva; el ataque envidioso primario es expoliador."
    ]
  },

  // --- MÓDULO 2: KLEIN SUPERYÓ Y SEXUALIDAD (Preguntas 11 a 18) ---
  {
    id: "q11",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Superyó temprano: discrepancia con Freud",
    question: "¿Cuál es la discrepancia crucial entre Klein y Freud respecto a la génesis del Superyó?",
    options: [
      "Freud creía que el superyó nacía al nacer, mientras que Klein decía que nacía a los 18 años.",
      "Para Freud el Superyó es heredero y consecuencia del declive del Edipo; para Klein es un proceso independiente, anterior (fase oral-sádica, 1er año).",
      "Klein afirmaba que el Superyó no contenía ningún elemento agresivo, a diferencia de Freud.",
      "Para Klein el Superyó solo existe en niñas debido a la envidia del pene."
    ],
    correctAnswer: 1,
    explanation: "Para Freud, el Superyó se instaura tras la disolución del Complejo de Edipo (hacia los 5 años). Klein demuestra clínicamente que el Superyó surge de introyecciones tempranas en la fase oral-sádica (primer año de vida), siendo previo e independiente del Edipo freudiano clásico.",
    distractorExplanations: [
      "Freud jamás sostuvo que el superyó naciera con el parto; lo fechaba en la disolución edípica.",
      "Klein sostiene todo lo contrario: el superyó temprano es extremadamente cruel y sádico.",
      "El superyó temprano existe idénticamente en varones y mujeres."
    ]
  },
  {
    id: "q12",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Severidad del Superyó",
    question: "¿De dónde proviene la extrema severidad y crueldad del Superyó temprano según Melanie Klein?",
    options: [
      "De la violencia real, maltrato y rigor disciplinario ejercido por el padre biológico exterior.",
      "De las proyecciones de las propias mociones destructivas e impulsos sádicos del niño (cultivo de pulsión de muerte).",
      "De la falta de nutrientes y vitaminas durante la etapa del amamantamiento.",
      "De la internalización pasiva de las leyes jurídicas del Estado."
    ],
    correctAnswer: 1,
    explanation: "Klein afirma con contundencia que la severidad del Superyó NO es reflejo de la severidad del padre real, sino el resultado de los propios impulsos destructivos (pulsión de muerte) del sujeto proyectados sobre los objetos introyectados primarios.",
    distractorExplanations: [
      "El padre real puede ser muy tierno y, sin embargo, el niño poseer un superyó aterrador y sádico.",
      "La etiología no es biológica-nutricional, sino estrictamente psicodinámica y fantasmática.",
      "Las leyes jurídicas no operan en el psiquismo de un lactante de meses."
    ]
  },
  {
    id: "q13",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Núcleo del Superyó",
    question: "¿Cómo está constituido el núcleo del Superyó temprano en la teoría kleiniana?",
    options: [
      "Únicamente por preceptos morales civilizados aprendidos en la escuela.",
      "Por la incorporación de dos tipos de objetos introyectados: objetos malos vengativos y objetos buenos protectores.",
      "Por un vacío psíquico absoluto hasta el inicio del lenguaje verbal.",
      "Por el ideal del yo social exclusivamente masculino."
    ],
    correctAnswer: 1,
    explanation: "El núcleo del superyó temprano alberga tanto los objetos malos castigadores (teñidos por la proyección de impulsos mortíferos) como el objeto bueno introyectado (representante de tendencias amorosas y protectoras). La primacía de lo bueno determinará si el superyó deviene cruel o protector.",
    distractorExplanations: [
      "Los preceptos morales civilizados son formaciones secundarias tardías.",
      "No hay vacío psíquico; la vida fantasmática temprana es sumamente poblada de objetos introyectados.",
      "No está constituido únicamente por un ideal de género."
    ]
  },
  {
    id: "q14",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Edipo Masculino y Envidia de la Maternidad",
    question: "¿Qué siente el varón hacia el cuerpo materno en el Edipo temprano y cómo se defiende de ello según Klein?",
    options: [
      "Indiferencia total hacia el cuerpo de la madre y deseo de devorar al padre.",
      "Envidia por la capacidad de gestación y maternidad (vientre, bebés, leche); se defiende sobrevalorando narcisistamente el pene y desplazando el deseo al campo intelectual.",
      "Alivio al constatar que él carece de órganos internos productores de vida.",
      "Terror exclusivo a la castración física inmediata por parte de la madre armada."
    ],
    correctAnswer: 1,
    explanation: "El niño experimenta intensa envidia hacia el cuerpo materno contenedor de riquezas biológicas. Como defensa, compensa su imposibilidad de gestar desplazando el deseo al campo intelectual (pulsión epistemofílica) y erigiendo una sobrevaloración narcisista del pene con superioridad sobre la mujer.",
    distractorExplanations: [
      "El cuerpo de la madre es el foco primordial de deseo, admiración y envidia, no de indiferencia.",
      "No hay alivio; la privación de la capacidad de gestar es vivida como una falta penosa.",
      "La amenaza principal para Klein no es la castración física directa freudiana, sino el ataque interno retaliativo a sus órganos."
    ]
  },
  {
    id: "q15",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Edipo Femenino",
    question: "A diferencia de Freud, ¿qué propone Klein respecto al punto de partida del complejo de Edipo femenino?",
    options: [
      "Que la niña debe pasar obligatoriamente por una fase de hombría y masculinidad primaria previa.",
      "Que la niña no atraviesa por una masculinidad primaria, sino por una fase femenina transversal con conocimiento inconsciente precoz de la vagina.",
      "Que la niña se desinteresa de la madre desde el primer día y solo ama al padre.",
      "Que la niña no desarrolla ningún sentimiento de culpa ni superyó."
    ],
    correctAnswer: 1,
    explanation: "Klein refuta la tesis freudiana de una 'masculinidad primaria' en la niña. Sostiene que existe una fase femenina temprana transversal y un conocimiento inconsciente innato de la corporalidad vaginal receptiva, con envidia primordial de los contenidos maternos.",
    distractorExplanations: [
      "La hipótesis de la masculinidad primaria obligatoria es de Freud, la cual Klein combate activamente.",
      "La madre es el primer objeto de amor absoluto de la niña antes del viraje edípico.",
      "Klein demuestra que las niñas experimentan intensos sentimientos tempranos de culpa."
    ]
  },
  {
    id: "q16",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Dificultad específica de la niña",
    question: "¿Cuál es la dificultad erógena específica que Klein detecta en el desarrollo de la feminidad de la niña?",
    options: [
      "La ausencia total de zonas erógenas hasta la edad adulta.",
      "Poseer dos zonas genitales de igual valoración erótica (clítoris y vagina), lo que obstaculiza la primacía receptiva de esta última.",
      "La incapacidad absoluta para introyectar el pene paterno en sus fantasías orales.",
      "La inexistencia de rivalidad con la figura materna."
    ],
    correctAnswer: 1,
    explanation: "Una dificultad anatómica y libidinal de la niña pequeña es contar con dos órganos de intensa catexis: el clítoris (activo/fálico) y la vagina (receptiva/interior), lo que complica el asentamiento indiscutido del fin receptivo vaginal.",
    distractorExplanations: [
      "Existen dos zonas erógenas sumamente activas desde la infancia temprana.",
      "La niña sí introyecta el pene paterno tempranamente como objeto oral compensatorio del destete.",
      "La rivalidad y envidia hacia la madre son intensísimas en la niña."
    ]
  },
  {
    id: "q17",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Debilitamiento del deseo de maternidad",
    question: "En la teoría de Melanie Klein, ¿por qué podría quedar debilitado o inhibido el futuro deseo de maternidad en una mujer?",
    options: [
      "Por no haber completado estudios universitarios formales.",
      "Por la culpa asociada a los ataques destructivos de robo al cuerpo materno, fantaseando que la madre en retaliación dañó su propio vientre.",
      "Por un exceso de amor incondicional recibido durante la lactancia sin ninguna frustración.",
      "Por la total ausencia de pulsión de muerte en su psiquismo infantil."
    ],
    correctAnswer: 1,
    explanation: "Debido a las fantasías sádicas tempranas de vaciar y destruir el vientre de la madre, la niña teme que la madre arruinada tome represalias ('retaliación') destruyendo sus propios órganos internos reproductivos, inhibiendo el deseo de gestar por culpa y terror persecutorio.",
    distractorExplanations: [
      "Los factores sociales o académicos no son la causa metapsicológica profunda kleiniana.",
      "La frustración y el odio son universales e intrínsecos al destete en la clínica kleiniana.",
      "Klein sostiene que la pulsión de muerte es innata y constante en todo ser humano."
    ]
  },
  {
    id: "q18",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Culpa Primitiva",
    question: "¿De qué constatación psíquica emerge la culpa primitiva en la posición depresiva kleiniana?",
    options: [
      "De darse cuenta de que el objeto atacado con odio y sadismo es el mismísimo objeto amado, fuente de vida y protección.",
      "Del reproche verbal formulado explícitamente por el padre ante una travesura.",
      "Del descubrimiento de que los padres tienen relaciones sexuales sin permiso del niño.",
      "De la pérdida del control de esfínteres en el entrenamiento higiénico anal."
    ],
    correctAnswer: 0,
    explanation: "La culpa depresiva primitiva surge cuando el Yo integra el objeto: constata horrorizado que la madre que atacó y mordió con furia voraz es la misma madre buena que ama y necesita para no quedar expuesto al desamparo.",
    distractorExplanations: [
      "No proviene del reto verbal del padre externo, sino del dolor intrapsíquico de haber dañado al objeto de amor.",
      "La escena primaria suscita exclusión y rabia, pero la culpa surge de la agresión contra el objeto total amado.",
      "El control de esfínteres influye en las modalidades anales, pero el núcleo de la culpa depresiva es la preservación del objeto bueno."
    ]
  },

  // --- MÓDULO 3: WINNICOTT MADURACIÓN Y OBJETO TRANSICIONAL (Preguntas 19 a 28) ---
  {
    id: "q19",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Pulsión de muerte y agresividad",
    question: "¿Cuál es la postura categórica de Donald Winnicott respecto a la 'Pulsión de Muerte' propuesta por Freud y Klein?",
    options: [
      "La valida plenamente y la considera el motor central de todas las esquizofrenias tempranas.",
      "La rechaza: no cree en una fuerza endógena hacia lo inanimado; la agresividad del bebé es expresión de un gesto espontáneo de vitalidad y motilidad.",
      "Afirma que la pulsión de muerte solo aparece en el adulto anciano.",
      "Sostiene que la madre inyecta la pulsión de muerte en el bebé a través de la leche materna envenenada."
    ],
    correctAnswer: 1,
    explanation: "Winnicott se distancia radicalmente del pesimismo pulsional kleiniano: rechaza la pulsión de muerte. Para él, la agresividad inicial del bebé no conlleva intención destructiva ni maldad innata, sino que es signo de motilidad, gesto espontáneo y apetencia vital.",
    distractorExplanations: [
      "Winnicott discrepa abiertamente con Klein en este punto central.",
      "No es un fenómeno senil; para Winnicott simplemente el concepto no describe la realidad del desarrollo infantil.",
      "La etiología winnicottiana se basa en fallas de adaptación ambiental, no en sustancias biológicas envenenadas."
    ]
  },
  {
    id: "q20",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Preocupación Maternal Primaria",
    question: "¿Qué es la 'Preocupación Maternal Primaria' y cuándo se manifiesta?",
    options: [
      "Una neurosis obsesiva patológica que requiere hospitalización psiquiátrica de la madre.",
      "Un estado particular de 'locura normal y necesaria' al final del embarazo y primeras semanas de puerperio, con devoción y entrega casi perfecta a las necesidades del bebé.",
      "El temor fóbico de la madre a transmitir enfermedades bacterianas al infante.",
      "La educación estricta implementada por la madre durante la etapa del jardín infantil."
    ],
    correctAnswer: 1,
    explanation: "Winnicott describe la Preocupación Maternal Primaria como un estado psíquico especial de ensimismamiento y sensibilidad extrema (casi un estado disociativo o 'locura normal') que permite a la madre identificarse con su bebé y satisfacer oportunamente sus necesidades corporales y psíquicas.",
    distractorExplanations: [
      "No es una patología; es una condición indispensable de salud para la díada madre-bebé.",
      "No tiene relación con fobias microbiológicas obsesivas.",
      "Ocurre en el peri-parto y primeras semanas de vida, no en la edad escolar."
    ]
  },
  {
    id: "q21",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Tres Funciones Maternas",
    question: "¿Cuáles son las tres funciones maternas fundamentales y qué logro del desarrollo facilitan respectivamente?",
    options: [
      "Alimentar (nutrición), Bañar (higiene) y Castigar (disciplina social).",
      "Sostén (Integración), Manipulación (Personalización/psicosoma) y Presentación del objeto (Iniciación de relaciones objetales).",
      "Vigilancia (control), Represión (freno pulsional) y Desapego (autonomía prematura).",
      "Estimulación cognitiva (inteligencia), Aislamiento (calma) y Regulación del sueño."
    ],
    correctAnswer: 1,
    explanation: "La tríada funcional de Winnicott: 1) Holding (sostén físico/emocional) posibilita la INTEGRACIÓN del Yo; 2) Handling (manipulación y cuidado del cuerpo) posibilita la PERSONALIZACIÓN (habitar el psicosoma); 3) Object Presenting posibilita el contacto con la realidad y las RELACIONES OBJETALES.",
    distractorExplanations: [
      "Esos son cuidados zootécnicos o conductuales, no las funciones metapsicológicas estructurantes de Winnicott.",
      "Winnicott advierte contra la intrusión y la exigencia de adaptación precoz.",
      "La estimulación cognitiva acelerada es ajena al cuidado del Yo arcaico en Winnicott."
    ]
  },
  {
    id: "q22",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "El Yo al principio",
    question: "Frente a la pregunta '¿Existe un Yo desde el principio?', ¿cuál es la respuesta de Donald Winnicott?",
    options: [
      "Sí, el Yo nace completamente organizado con todas sus defensas desde el parto.",
      "No; el principio está en el momento en que empieza el Yo. Al inicio hay 'No-integración' y el bebé no existe sin la madre que oficie de Yo auxiliar.",
      "El Yo es un invento del lenguaje y solo surge a los 7 años de vida.",
      "El Yo solo existe en el padre, mientras la madre y el hijo son puro Ello biológico."
    ],
    correctAnswer: 1,
    explanation: "Winnicott ironiza con su famosa frase: 'No existe tal cosa como un bebé' (siempre hay un bebé con una madre). Al nacer el Yo no viene integrado; emerge gradualmente desde un estado primario de no-integración gracias a la madre como Yo auxiliar.",
    distractorExplanations: [
      "Winnicott critica a las corrientes psicoanalíticas que dan por supuesto un Yo ya integrado en los inicios.",
      "No surge a los 7 años; su integración nuclear se gesta en los primeros meses y años de vida.",
      "La formulación de un Ello puro sin el sostén materno ignora la función de soporte psicosomático."
    ]
  },
  {
    id: "q23",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Angustia Inconcebible",
    question: "¿Cuáles son las vivencias que componen la denominada 'Angustia Inconcebible o Impensable' (materia prima de las psicosis)?",
    options: [
      "Temor a reprobar un examen, miedo al ridículo y timidez ante extraños.",
      "Fragmentarse, caer interminablemente, no tener relación con el cuerpo y no tener ninguna orientación.",
      "Envidia del éxito laboral del padre y celos de los hermanos mayores.",
      "Preocupación moral por haber pecado contra las normas eclesiásticas."
    ],
    correctAnswer: 1,
    explanation: "Si el sostén falla, el infante cae en agonías primitivas impensables: 1. Sensación de fragmentarse en pedazos; 2. Sensación de caer en el vacío sin fondo para siempre; 3. Despersonalización (cuerpo ajeno); 4. Pérdida completa de orientación espacio-temporal.",
    distractorExplanations: [
      "Esos son temores neuróticos o ansiedades sociales secundarias.",
      "Los celos y la envidia son conflictos afectivos interpersonales, no catástrofes del ser.",
      "Las angustias de culpa moral son post-edípicas o depresivas, muy posteriores a las agonías impensables arcaicas."
    ]
  },
  {
    id: "q24",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "No-integración vs Desintegración",
    question: "¿Cuál es la diferencia capital entre el estado de 'No-integración' y la 'Desintegración' en Winnicott?",
    options: [
      "La no-integración es una enfermedad psicótica grave; la desintegración es un estado de profunda paz.",
      "La no-integración es el estado natural y relajado sostenido por la madre; la desintegración es una defensa activa donde el bebé produce caos para defenderse de la angustia inconcebible.",
      "Ambos términos son sinónimos idénticos utilizados indistintamente por el autor.",
      "La desintegración ocurre solo durante el sueño de los adultos sanos."
    ],
    correctAnswer: 1,
    explanation: "La no-integración es el reposo saludable inicial sostenido por la madre. La desintegración, en cambio, es una defensa organizada y reactiva: ante una falla ambiental intrusiva, el bebé produce caos activamente porque ese caos propio entra dentro de su omnipotencia y es menos aterrador que la agonía impensable.",
    distractorExplanations: [
      "Es justamente al revés: la no-integración permite descansar; la desintegración es patológica-defensiva.",
      "No son sinónimos: Winnicott hace un hincapié clínico terminante en su diferencia.",
      "No se refiere al sueño reparador adulto, sino a una respuesta traumática del infante."
    ]
  },
  {
    id: "q25",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Ilusión y Desilusión gradual",
    question: "¿Cuál es el rol de la madre en el proceso de Ilusión y posterior Desilusión del lactante?",
    options: [
      "Frustrar al bebé desde el día uno para que madure con severidad y disciplina.",
      "Primero sostener la ilusión de omnipotencia (el bebé crea lo que encuentra) y luego desilusionar gradualmente según su tolerancia a la frustración.",
      "Mantener la ilusión mágica perfecta durante toda la infancia y adolescencia sin fallar jamás.",
      "Ignorar los gestos del niño y forzarlo a adaptarse a las normas del mundo adulto inmediatamente."
    ],
    correctAnswer: 1,
    explanation: "La madre suficientemente buena primero aporta una adaptación casi perfecta para que el bebé sienta la ilusión de omnipotencia creadora; luego, al ritmo en que el niño adquiere memoria y tolerancia, introduce una desilusión gradual (pequeñas fallas dosificadas) para abrir paso a la realidad.",
    distractorExplanations: [
      "La frustración precoz e indiscriminada destruye la continuidad del ser y precipita agonías primitivas.",
      "Una adaptación perfecta perpetua es patológica: anula el acceso a la realidad y genera pensamiento omnipotente/mágico en el adulto.",
      "Ignorar al niño engendra un Falso Self sumiso o defensas autistas graves."
    ]
  },
  {
    id: "q26",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Objeto Transicional",
    question: "¿Qué características definen al 'Objeto Transicional' (primera posesión no-mí) según Winnicott?",
    options: [
      "Es un regalo costoso que los padres imponen y lavan obsesivamente a diario.",
      "Es una posesión elegida por el bebé (peluche, mantita), dotada de cualidades mágicas y materialidad resistente, que no se lava ni se impone, y alivia la separación materna.",
      "Es una alucinación psíquica sin ninguna base material tangible.",
      "Es un símbolo matemático abstracto propio de la etapa escolar."
    ],
    correctAnswer: 1,
    explanation: "El objeto transicional es una primera posesión 'no-yo': un muñeco, trapito o manta que el bebé encuentra y hace suyo. Es aromado, manchado de fluidos, mordido y abrazado; sobrevive al ataque agresivo y media el tránsito hacia el mundo exterior.",
    distractorExplanations: [
      "Los padres no deben imponerlo ni lavarlo compulsivamente, pues borrarían el olor y la investidura depositada por el infante.",
      "Tiene materialidad tangible que resiste, no es una mera alucinación interna.",
      "Aparece entre los 4 meses y el primer año de vida, no en la escuela."
    ]
  },
  {
    id: "q27",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Destino del Objeto Transicional",
    question: "¿Cuál es el destino final del objeto transicional a lo largo de la vida del sujeto?",
    options: [
      "Se entierra ritualmente mediante un complejo duelo patológico.",
      "No se pierde ni se duela; pierde relevancia específica en la medida en que sus funciones se difuminan en todo el ámbito de la cultura, el arte y el juego.",
      "Se convierte en el núcleo del delirio persecutorio esquizofrénico.",
      "Es sustituido forzosamente por el dinero y las posesiones materiales de la adultez."
    ],
    correctAnswer: 1,
    explanation: "El objeto transicional no es objeto de un duelo fúnebre porque nunca se 'pierde' psíquicamente: se descarga su catexis puntual y su cualidad transicional se extiende a todo el ámbito cultural humano (música, pintura, cine, literatura, religión).",
    distractorExplanations: [
      "Winnicott remarca textualmente: 'El objeto transicional no se duela porque no se pierde'.",
      "No es la base del delirio; al contrario, es el pilar de la salud mental y la capacidad de disfrute cultural.",
      "No es codicia materialista burguesa, sino experiencia simbólica y creativa."
    ]
  },
  {
    id: "q28",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Secuencia del Uso del Objeto",
    question: "En el tránsito crucial de la 'Relación con el objeto' al 'Uso del objeto', ¿qué paso indispensable debe acontecer según Winnicott?",
    options: [
      "El objeto debe castigar al niño para enseñarle los límites de la autoridad.",
      "El sujeto debe destruir al objeto en su fantasía y el objeto debe SOBREVIVIR sin tomar represalias ni retaliar.",
      "El sujeto debe abandonar todo contacto con la realidad exterior y aislarse.",
      "La madre debe retirarse definitivamente de la vida del niño."
    ],
    correctAnswer: 1,
    explanation: "Para pasar de proyectar sobre el objeto a USARLO en la realidad objetiva compartida, el sujeto debe destruirlo en la omnipotencia fantasmática. Si el objeto (madre/analista) sobrevive sin derrumbarse ni vengarse, el sujeto descubre: '¡Te destruí y sigues ahí, luego eres real y estás fuera de mi omnipotencia!'.",
    distractorExplanations: [
      "Si el objeto castiga o retalia, confirma las angustias persecutorias y anula el uso objetivo.",
      "El uso del objeto es precisamente la conquista del principio de realidad, no el aislamiento.",
      "La madre no debe desaparecer; su presencia constante que sobrevive es la condición de posibilidad del proceso."
    ]
  },

  // --- MÓDULO 4: WINNICOTT FALSO SELF Y ESTAR SOLO (Preguntas 29 a 36) ---
  {
    id: "q29",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Etiología del Falso Self",
    question: "¿Cuál es el origen o etiología estructural del 'Falso Self' según Winnicott?",
    options: [
      "Una alteración genética en los receptores sinápticos del lóbulo frontal.",
      "Una falla del ambiente facilitador donde la madre, en vez de acoger y satisfacer el gesto espontáneo del infante, impone su propio gesto, forzando la sumisión del niño.",
      "El aprendizaje deliberado de técnicas actorales teatrales en la infancia temprana.",
      "El castigo escolar por desobediencia en el primer año de educación básica."
    ],
    correctAnswer: 1,
    explanation: "El Falso Self surge cuando el ambiente primario falla: la madre no responde al gesto espontáneo infantil, sino que le impone sus propias demandas y objetos. El bebé, para proteger la continuidad de su existencia y su Verdadero Self secreto, se somete y adopta una coraza de sumisión y acomodación.",
    distractorExplanations: [
      "Winnicott no reduce este fenómeno intersubjetivo relacional a causas neurológicas congénitas.",
      "No es actuación artística voluntaria, sino una defensa psíquica de supervivencia arcaica.",
      "Se consolida mucho antes de la escolaridad, en la fase de dependencia temprana."
    ]
  },
  {
    id: "q30",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Falso Self: Salud vs Patología",
    question: "¿Cómo se manifiesta el Falso Self en un estado de salud psíquica comparado con un estado patológico?",
    options: [
      "En salud no existe en lo absoluto; en patología solo aparece cuando la persona duerme.",
      "En salud constituye la cortesía, la educación y los modales sociales; en patología se rigidiza, engolfa y reemplaza al Verdadero Self, produciendo sensación de vacío y futilidad.",
      "En salud produce alucinaciones visuales y en patología genera hiperactividad.",
      "En salud la persona es totalmente sincera y agresiva en todo contexto sin filtro alguno."
    ],
    correctAnswer: 1,
    explanation: "Winnicott aclara que el Falso Self tiene una vertiente sana: la cortesía civilizada, el tacto y el respeto de las normas sociales (no podemos decir todo sin filtros). En la patología, se hipertrofia y desconecta a la persona de sus afectos genuinos, dejándola con la dolorosa vivencia de 'no haber vivido realmente'.",
    distractorExplanations: [
      "En salud sí existe: un ser humano sin falso self social sería incapaz de convivencia pacífica.",
      "No se manifiesta como alucinaciones sensoriales directas.",
      "La franqueza bruta e irrestricta en todo momento no es sinónimo de salud mental en la sociedad humana."
    ]
  },
  {
    id: "q31",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Falso Self y Suicidio",
    question: "¿Cuál es la desgarradora paradoja teórica que Winnicott señala respecto al suicidio en personalidades con Falso Self grave?",
    options: [
      "El suicidio es un acto de venganza consciente y planificado contra los herederos testamentarios.",
      "El suicidio implica la destrucción del self total como último recurso extremo para evitar la traición y la aniquilación definitiva del Verdadero Self.",
      "El suicidio es solo un juego infantil mal calculado debido a falta de inteligencia.",
      "El suicidio ocurre únicamente por impulsos canibalísticos heredados biológicamente."
    ],
    correctAnswer: 1,
    explanation: "Winnicott revela una paradoja clínica profunda: cuando el Falso Self ya no puede seguir defendiendo al Verdadero Self sin traicionarlo o corromperlo totalmente, el sujeto prefiere la muerte del cuerpo para salvar a su Verdadero Self de la profanación y poner fin al vacío insoportable.",
    distractorExplanations: [
      "No se agota en una mezquina venganza consciente de herencia familiar.",
      "No se debe a déficit intelectual cognitivo, sino a una fractura existencial arcaica.",
      "Winnicott no suscribe las explicaciones reduccionistas canibalísticas puras en este plano."
    ]
  },
  {
    id: "q32",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "El Gesto Espontáneo y el Verdadero Self",
    question: "¿De dónde surge el 'Gesto Espontáneo' creador del Verdadero Self?",
    options: [
      "De las órdenes explícitas del manual de crianza seguido por los progenitores.",
      "De las sensaciones corporales, motrices, de los tejidos, las funciones fisiológicas y la respiración.",
      "De la copia imitativa exacta de los movimientos de los hermanos mayores.",
      "Del adiestramiento conductual y las recompensas externas."
    ],
    correctAnswer: 1,
    explanation: "El Verdadero Self se origina en la experiencia psicosomática basal: el libre fluir de impulsos sensorio-motores, la respiración, el tono muscular y los movimientos espontáneos del infante que no son reactivos a una intrusión exterior.",
    distractorExplanations: [
      "Las órdenes de manuales representan intrusiones ambientales contrarias al gesto espontáneo.",
      "La imitación es la marca distintiva del Falso Self que se amolda, no del Verdadero Self.",
      "El adiestramiento conductual premia la sumisión y la docilidad adaptativa."
    ]
  },
  {
    id: "q33",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Regresión en el Tratamiento Analítico",
    question: "En la clínica winnicottiana de pacientes con Falso Self o fallas tempranas, ¿cuál es el objetivo de la 'Regresión' en análisis?",
    options: [
      "Hacer que el paciente actúe como un bebé en público para humillarlo.",
      "Permitir una regresión a la fase de dependencia donde el analista oficie de Yo auxiliar confiable, para que el Falso Self ceda y el Verdadero Self se arriesgue a emerger.",
      "Interpretar obsesivamente los complejos edípicos y castigar las resistencias del paciente.",
      "Prescribir medicación química pesada para suprimir toda emoción espontánea."
    ],
    correctAnswer: 1,
    explanation: "En análisis, pacientes con defensas de falso self pueden emprender una regresión profunda a la dependencia: allí, al comprobar la confiabilidad del analista que sostiene sin intrusión, pueden suspender la coraza defensiva y experimentar por primera vez la libertad de ser sí mismos.",
    distractorExplanations: [
      "La humillación es una falla catastrófica y perversa del encuadre analítico.",
      "La interpretación intelectualizada precoz es vivida por el paciente como una nueva intrusión ambiental.",
      "La meta no es la sedación farmacológica, sino la recuperación de la vitalidad y espontaneidad."
    ]
  },
  {
    id: "q34",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Creatividad Universal",
    question: "¿Cómo entiende Donald Winnicott la 'Creatividad' en la experiencia humana cotidiana?",
    options: [
      "Un don reservado con exclusividad a grandes pintores, compositores y escritores consagrados.",
      "Una condición universal inherente a la condición de estar vivos, que permite sentir que la vida tiene sentido, apropiación y vale la pena ser vivida.",
      "Un síntoma histérico de desborde emocional que debe ser curado mediante disciplina.",
      "Una habilidad técnica que solo se adquiere en academias formales de bellas artes."
    ],
    correctAnswer: 1,
    explanation: "Para Winnicott, la creatividad no es un talento elitista de virtuosos; es el modo básico en que un sujeto sano se aproxima a la realidad percibiendo el mundo como algo recreable por su propio gesto, sintiéndose auténticamente vivo y no un mero autómata acatador.",
    distractorExplanations: [
      "Winnicott declara explícitamente: 'La creatividad no le pertenece a los artistas, es una condición universal'.",
      "No es un síntoma patológico ni una afección histérica.",
      "No es destreza académica de taller, sino la pulsación viva de la existencia."
    ]
  },
  {
    id: "q35",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Diferencia entre Ser y Hacer",
    question: "¿Cómo articula Winnicott la relación entre el 'Ser' y el 'Hacer', y su ligazón con lo femenino y lo masculino?",
    options: [
      "El Hacer debe preceder al Ser en todo momento para generar valor de mercado.",
      "El sentimiento de SER es anterior y condición previa al HACER; lo femenino se asocia al Ser (identificación primaria/unidad) y lo masculino a la separación y relación objetal.",
      "El Ser y el Hacer son idénticos y no admiten ninguna distinción clínica.",
      "Lo femenino se define por el hacer activo y lo masculino por la pasividad receptiva absoluta."
    ],
    correctAnswer: 1,
    explanation: "El sentimiento fundamental de SER (establecido en la fase de ilusión donde bebé y madre son una unidad identitaria) es el piso indispensable sobre el cual luego puede erigirse el HACER. Winnicott asocia el elemento femenino primario al puro SER y el masculino a la separación/acción relacional.",
    distractorExplanations: [
      "Exigir el 'hacer' antes del 'ser' produce una personalidad sumisa y vacía de falso self.",
      "Distinguirlos es fundamental para entender la psicopatología de pacientes que actúan sin sentirse vivos.",
      "Es una inversión contraria a las formulaciones teóricas expresadas en el documento de cátedra."
    ]
  },
  {
    id: "q36",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Capacidad de Estar Solo",
    question: "¿Cuál es la fascinante paradoja formulada por Winnicott en torno al desarrollo de la 'Capacidad de Estar Solo'?",
    options: [
      "Que para aprender a estar solo el niño debe ser encerrado en una habitación oscura sin luz.",
      "Que la capacidad genuina de estar solo tiene como condición fundante la experiencia en la infancia de estar solo en presencia de la madre.",
      "Que solo las personas que nunca amaron a nadie son capaces de tolerar la soledad.",
      "Que la soledad se adquiere a través del castigo por malas calificaciones escolares."
    ],
    correctAnswer: 1,
    explanation: "La paradoja de Winnicott: la capacidad de estar solo (uno de los signos más elevados de madurez psíquica) surge de haber vivido de pequeño la experiencia de jugar y relajarse en soledad EN PRESENCIA de una madre amorosa que no interrumpe ni exige nada. El infante introyecta esa presencia benigna como un piso de confianza infinita.",
    distractorExplanations: [
      "El encierro solitario produce angustias de desamparo y traumas devastadores.",
      "La soledad sana requiere haber introyectado objetos buenos protectores estables.",
      "El castigo y la frialdad ambiental no engendran capacidad de estar solo, sino pavor al abandono."
    ]
  }
];

const FLASHCARDS_DATA = [
  // --- MELANIE KLEIN ---
  {
    id: "fc1",
    author: "Melanie Klein",
    category: "Edipo Temprano",
    term: "Estadios Tempranos del Edipo",
    tag: "Clase 6",
    front: "¿Cuándo se originan los estadios tempranos del Edipo según Klein y qué diferencia marca con Freud?",
    back: "Klein los sitúa entre los 6 meses y los 3 años (en la posición depresiva), mientras Freud los ubicaba entre los 3 y 5 años (fase fálica). Para Klein, el Edipo temprano se asienta en la oralidad y la dinámica ambivalente de amor y odio hacia la madre como objeto total.",
    mastered: false
  },
  {
    id: "fc2",
    author: "Melanie Klein",
    category: "Desarrollo Temprano",
    term: "Fase Femenina",
    tag: "Clase 6",
    front: "¿Qué caracteriza a la 'Fase Femenina' descrita por Melanie Klein?",
    back: "Es un período transversal para niños y niñas, previo a la consolidación del psiquismo masculino o femenino. Predominan fines receptivos y de incorporación oral, caracterizado por una identificación primaria con el objeto materno.",
    mastered: false
  },
  {
    id: "fc3",
    author: "Melanie Klein",
    category: "Edipo Temprano",
    term: "Relevancia del Destete",
    tag: "Clase 6",
    front: "¿Por qué el destete es el motor del viraje hacia el padre en Klein?",
    back: "El destete representa la primera separación real y la fisura del estado de fusión. Las frustraciones orales y el odio que suscita despiertan sadismo y ansiedades persecutorias que compelen al bebé a apartarse de la madre y volcarse hacia el padre (pene paterno como objeto oral alternativo).",
    mastered: false
  },
  {
    id: "fc4",
    author: "Melanie Klein",
    category: "Dinámica Afectiva",
    term: "Celos vs Envidia",
    tag: "Clase 6",
    front: "¿Cuál es la distinción clínica entre Celos y Envidia en Klein?",
    back: "• Celos: Sentimiento triangular (madre-bebé-tercero) con objetos totales; miedo de perder el amor del otro y quedar expuesto al desamparo.\n• Envidia: Vivencia diádica más arcaica; frustración al sentirse privado de lo bueno. Fantasía de atacar, morder y despojar los contenidos del cuerpo materno (pechos, bebés, pene).",
    mastered: false
  },
  {
    id: "fc5",
    author: "Melanie Klein",
    category: "Pulsión y Cognición",
    term: "Pulsión Epistemofílica",
    tag: "Clase 6",
    front: "¿Qué es la pulsión epistemofílica y cuál es su riesgo si la agresión no se modula?",
    back: "Es la pulsión del saber y la curiosidad. Se articula con el componente sádico primario: investigar proviene de la fantasía de desarmar, cortar y apropiarse de los secretos del cuerpo materno. Si hay culpa excesiva o descontrol agresivo, deriva en inhibiciones severas del aprendizaje escolar e intelectual.",
    mastered: false
  },
  {
    id: "fc6",
    author: "Melanie Klein",
    category: "Fantasía Inconsciente",
    term: "Objeto Combinado",
    tag: "Clase 6",
    front: "¿Qué es el 'Objeto Combinado' y la figura de la 'Madre Fálica'?",
    back: "Fantasía arcaica donde la agresividad proyectada une a los padres en un coito sádico, incesante y terrorífico del cual el niño queda excluido. Al no estar bien diferenciados, el pene del padre parece formar parte permanente de la madre (madre fálica), constituyendo la fuente de pesadillas infantiles y delirios persecutorios.",
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

  // --- DONALD WINNICOTT ---
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
