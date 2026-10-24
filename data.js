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

// 36 PREGUNTAS DE SELECCIÓN MÚLTIPLE CON ALTERNATIVAS DE LONGITUD SIMILAR Y DISTRACTORES PLAUSIBLES (CASI CORRECTOS / TRAMPAS)
const QUESTIONS_DATA = [
  // --- MÓDULO 1: KLEIN EDIPO TEMPRANO (10 preguntas) ---
  {
    id: "q1",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Discordancias temporales con Freud",
    question: "¿En qué período del desarrollo infantil sitúa Melanie Klein el origen de los estadios tempranos del Complejo de Edipo?",
    options: [
      "Entre el nacimiento y los 6 meses, durante la posición esquizoparanoide, con vínculos solo con objetos parciales.",
      "Entre los 3 y los 5 años, cuando la fase fálica consolida el conflicto edípico bajo la amenaza de castración real.",
      "Entre los 6 meses y los 3 años, en procesos previos que ya están marcados por una dinámica de amor y odio.",
      "Entre los 2 y los 4 años, cuando la adquisición del lenguaje permite introyectar la prohibición paterna del incesto."
    ],
    correctAnswer: 2,
    explanation: "Klein postula que los estadios tempranos del Edipo y la formación temprana del Superyó se originan entre los 6 meses y los 3 años, distanciándose del marco freudiano clásico que lo ubica entre los 3 y 5 años en la fase fálica.",
    distractorExplanations: [
      "Antes de los 6 meses domina la posición esquizoparanoide con objetos parciales; el Edipo temprano exige un objeto total, propio de la posición depresiva.",
      "Es la ubicación freudiana clásica (fase fálica); para Klein esa etapa solo consolida procesos originados antes.",
      "Para Klein el Edipo temprano no depende del lenguaje ni de la ley paterna verbal: se arma en la oralidad, antes de esa elaboración."
    ]
  },
  {
    id: "q2",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Emergencia y Posición Depresiva",
    question: "¿Qué transformación en la relación con el objeto posibilita la emergencia del Complejo de Edipo temprano en Klein?",
    options: [
      "La integración de la madre como objeto total, separado e independiente, lo que abre paso a la culpa y a la triangulación.",
      "La escisión del pecho en uno idealizado y otro persecutorio, que protege al Yo de la ambivalencia y de la culpa.",
      "El descubrimiento de la diferencia anatómica entre los sexos, que instala la primacía fálica y la envidia del pene.",
      "La renuncia al pecho tras el destete, que reemplaza el vínculo oral por un vínculo genital estable con el padre."
    ],
    correctAnswer: 0,
    explanation: "El Edipo temprano surge en la posición depresiva: el bebé integra a la madre como objeto total separado e independiente, reconoce que sus ataques destructivos pueden dañarla, experimenta culpa y advierte la relación de pareja entre los padres.",
    distractorExplanations: [
      "Esa escisión pertenece a la posición esquizoparanoide, previa; mientras domina, no hay objeto total ni culpa.",
      "Es el esquema freudiano; para Klein no hay masculinidad primaria y la envidia del pene es un efecto secundario.",
      "El destete explica el viraje hacia el padre, pero lo que habilita el Edipo es el objeto total; además, lo genital oscila con lo pregenital."
    ]
  },
  {
    id: "q3",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Fase Femenina",
    question: "¿Cómo conceptualiza Melanie Klein la denominada 'Fase Femenina' en la prehistoria del Complejo de Edipo?",
    options: [
      "Como la organización sexual definitiva de la mujer, alcanzada al aceptar la pasividad y renunciar a sus aspiraciones masculinas.",
      "Como una etapa exclusiva de las niñas, en la que la vagina desplaza al clítoris y se fija la identificación con la madre.",
      "Como una desviación regresiva del varón que no logra superar su identificación con la madre y teme la castración por el padre.",
      "Como un período común a ambos sexos, anterior al psiquismo de género, con fines receptivos e identificación primaria con la madre."
    ],
    correctAnswer: 3,
    explanation: "Para Klein, la fase femenina es un momento transversal a ambos sexos anterior a la consolidación del psiquismo de género, caracterizado por fines receptivos/incorporativos orales y una identificación primaria con el objeto materno.",
    distractorExplanations: [
      "No es una meta final de la mujer, sino un momento anterior y común a ambos sexos.",
      "No es exclusiva de las niñas; además, para Klein clítoris y vagina conviven con igual valor erótico.",
      "No es una desviación ni una patología del varón: es una fase universal y constitutiva del psiquismo infantil."
    ]
  },
  {
    id: "q4",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Relevancia del Destete",
    question: "Según Melanie Klein, ¿cuál es el factor primordial que desencadena que el lactante se aleje de la madre y vire hacia el padre?",
    options: [
      "La amenaza de castración que el padre real ejerce sobre los deseos incestuosos, obligando al niño a abandonar a la madre.",
      "Las frustraciones orales del destete y el odio que despiertan, que reactivan todo el sadismo y las ansiedades persecutorias.",
      "La envidia del pene que la niña siente al descubrir su falta anatómica, y el resentimiento hacia la madre por dejarla incompleta.",
      "La culpa depresiva por los ataques a la madre, que lleva al bebé a apartarse de ella para reparar el daño con el padre."
    ],
    correctAnswer: 1,
    explanation: "El destete rompe la fusión primaria con la madre. Las frustraciones orales y el odio reactivo despiertan sadismo y ansiedades persecutorias que impulsan al infante a buscar un objeto alternativo compensatorio en el padre.",
    distractorExplanations: [
      "Es la tesis freudiana; en Klein el temor al padre castrador está disminuido por la confianza en el padre bueno.",
      "Para Klein la envidia del pene es un efecto secundario de la envidia hacia los objetos internos de la madre, no la causa del viraje.",
      "La culpa y la reparación pertenecen a la posición depresiva, pero lo que aleja de la madre es la frustración del destete, no un afán de reparar."
    ]
  },
  {
    id: "q5",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Cambio de Objeto",
    question: "¿Qué estatuto adquiere el pene paterno en el proceso de cambio de objeto analizado por Melanie Klein?",
    options: [
      "Un objeto de temor y sumisión, ligado a la amenaza de castración que el padre ejerce sobre el deseo incestuoso.",
      "Un símbolo fálico de la diferencia sexual, al que el niño accede recién al constatar la anatomía del otro.",
      "Un objeto de deseo oral alternativo al pecho, que ayuda a equilibrar las angustias persecutorias del bebé.",
      "Un objeto de envidia, hacia el cual el bebé dirige ataques sádicos por poseer lo que la madre le niega a él."
    ],
    correctAnswer: 2,
    explanation: "El cambio de objeto no es motivado por envidia del pene, sino por la necesidad de equilibrar las angustias persecutorias y depresivas tras el destete, convirtiendo al pene del padre en un objeto de deseo oral alternativo.",
    distractorExplanations: [
      "Es la lectura freudiana (castración); en Klein el pene paterno es un relevo oral, no un objeto de terror.",
      "Para Klein existe un conocimiento inconsciente del pene y la vagina desde temprano; no depende de una constatación visual tardía.",
      "Klein afirma expresamente que el cambio de objeto no es por envidia; la ambivalencia hacia ambos padres aparece después, con la triangulación."
    ]
  },
  {
    id: "q6",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Diferencia entre Celos y Envidia",
    question: "¿Qué diferencia estructural y clínica establece Melanie Klein entre los Celos y la Envidia?",
    options: [
      "Los celos son una relación arcaica de a dos centrada en el pecho; la envidia surge recién en la triangulación frente a un rival.",
      "Los celos temen perder el amor de un objeto total ante un tercero; la envidia ataca lo bueno que la madre contiene.",
      "Los celos buscan robar y vaciar el cuerpo materno; la envidia teme perder el amor del objeto ante un rival edípico.",
      "Ambos surgen en la posición depresiva por la exclusión de la pareja parental y solo se distinguen por su intensidad."
    ],
    correctAnswer: 1,
    explanation: "Los celos son triangulares y conciernen a objetos totales (miedo de perder el amor ante un rival y quedar en desamparo); la envidia es más arcaica, diádica, y nace de la frustración por la privación de lo bueno que la madre contiene.",
    distractorExplanations: [
      "Está invertido: los celos son triangulares (un tercero) y la envidia es la relación más arcaica, centrada en el pecho.",
      "Están intercambiadas las definiciones: robar y vaciar lo bueno del cuerpo materno es propio de la envidia, y el miedo a perder el amor es propio de los celos.",
      "Klein los distingue por su estructura y su objeto: uno es triangular y de objeto total, el otro diádico y dirigido a lo bueno que se desea."
    ]
  },
  {
    id: "q7",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Pulsión Epistemofílica y Agresión",
    question: "¿Cómo fundamenta Klein la conexión originaria entre la pulsión epistemofílica y el sadismo infantil?",
    options: [
      "La envidia oral lleva al bebé a fantasear que se abre paso en el cuerpo materno para controlarlo y apoderarse de lo que contiene.",
      "La curiosidad nace de la sublimación de los impulsos agresivos, una vez que el niño los controla y los desexualiza.",
      "El deseo de saber surge de la frustración del destete, que empuja al bebé a conocer al padre como nuevo objeto de amor.",
      "La curiosidad es una defensa contra la angustia de castración, que reorienta lo sexual hacia el estudio durante la latencia."
    ],
    correctAnswer: 0,
    explanation: "Klein afirma que estudiar y conocer conllevan descomponer, cortar y desarmar, articulándose con la fantasía sádica inconsciente de forzar la entrada al cuerpo de la madre para descubrir y apropiarse de sus contenidos retenidos.",
    distractorExplanations: [
      "Para Klein el saber conserva el componente sádico (cortar, desarmar, apropiarse); no es una sublimación que lo haya neutralizado.",
      "El destete motiva el cambio de objeto, pero la pulsión epistemofílica se origina en la envidia oral y la fantasía de apropiarse del cuerpo materno.",
      "Es un esquema freudiano (castración y latencia); Klein ubica la curiosidad en la fase oral-sádica."
    ]
  },
  {
    id: "q8",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Inhibición del Aprendizaje",
    question: "¿Por qué un despliegue incontrolado de la agresividad hacia la madre puede provocar inhibiciones intelectuales?",
    options: [
      "Porque la agresividad agota la energía psíquica disponible, que el Yo ya no puede invertir en tareas de atención y memoria.",
      "Porque el niño teme perder el amor de sus padres si destaca, y renuncia al aprendizaje para evitar la rivalidad edípica.",
      "Porque el Superyó maduro castiga la curiosidad sexual infantil con una prohibición que se consolida durante la latencia.",
      "Porque investigar equivale en la fantasía a atacar sádicamente el cuerpo materno, y el saber se inhibe como defensa."
    ],
    correctAnswer: 3,
    explanation: "Si el deseo de conocer está fuertemente anudado a la destrucción del vientre materno, el acto de aprender despierta un terror persecutorio y culpa intolerable; en consecuencia, el Yo inhibe el aprendizaje como autodefensa frente al peligro de saber.",
    distractorExplanations: [
      "Klein no explica la inhibición por un déficit energético, sino por el sentido sádico que adquiere el conocer.",
      "El temor a perder el amor del objeto ante un rival es la lógica de los celos; la inhibición del aprendizaje se vincula con el peligro de la curiosidad sádica.",
      "Para Klein el Superyó es temprano y no un producto tardío de la latencia; la inhibición nace de la agresión fantaseada contra la madre."
    ]
  },
  {
    id: "q9",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Objeto Combinado y Escena Primaria",
    question: "¿Qué describe Melanie Klein bajo la figura del 'Objeto Combinado' en las fantasías del Edipo temprano?",
    options: [
      "La fusión de los padres en una figura protectora que, al reunir sostén y autoridad, calma las ansiedades persecutorias del niño.",
      "Los padres fantaseados en un coito sádico continuo e infinito, mezclados en una figura persecutoria: la madre fálica.",
      "La unión del pecho bueno y el pecho malo en un solo objeto total, lograda al integrarse la posición depresiva del bebé.",
      "Un objeto transicional que combina rasgos de ambos padres y permite al niño tolerar su ausencia sin sentir angustia."
    ],
    correctAnswer: 1,
    explanation: "El objeto combinado resulta de proyectar la agresividad infantil sobre la pareja parental: al no estar diferenciados, el pene del padre parece incorporado en la madre (madre fálica) en un coito infinito, sádico y persecutorio.",
    distractorExplanations: [
      "El objeto combinado no es protector: es una escena confusa y distorsionada, teñida por la agresión proyectada, que puede volverse terrorífica.",
      "Esa síntesis de lo bueno y lo malo es la integración del objeto total, no el objeto combinado, que surge de la fantasía sobre la pareja parental.",
      "El objeto transicional es un concepto winnicottiano; el objeto combinado es kleiniano y refiere a la escena primaria fantaseada."
    ]
  },
  {
    id: "q10",
    moduleId: "mod1",
    theme: "Melanie Klein",
    topic: "Fantasías de Robo y Vientre Materno",
    question: "¿Cuáles son los contenidos que el lactante fantasea robar del vientre materno mediante ataques sádicos?",
    options: [
      "La leche, el cuidado y la atención que la madre reserva para el padre, más los hijos que este podría darle.",
      "Los bebés y los penes que la madre guarda dentro de sí, pero no los pechos, que el bebé ya posee por la lactancia.",
      "Los pechos, los bebés y los penes que la madre idealizada retiene dentro de sí y que le niega al niño.",
      "Los pechos y la leche que la madre reserva para sus otros hijos, en una rivalidad fraterna previa al Edipo."
    ],
    correctAnswer: 2,
    explanation: "Bajo la envidia arcaica, la madre es idealizada como un continente omnipotente que alberga todo lo deseable y valioso: los pechos nutricios, los penes paternos y futuros bebés, los cuales el infante desea despojar.",
    distractorExplanations: [
      "Los contenidos robados son del cuerpo materno (pechos, bebés y penes); no se reducen a leche y cuidados que se dan al padre.",
      "Los pechos también están entre los contenidos que el bebé siente que le son denegados, sobre todo desde el destete.",
      "La rivalidad fraterna no es el eje de esta fantasía; el niño se siente excluido de la pareja parental y privado de lo bueno de la madre."
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
      "Surge en la fase oral-sádica del primer año por introyección de objetos buenos y malos, y es anterior e independiente del Edipo.",
      "Surge como heredero del Edipo, pero antes de lo que sostiene Freud: hacia los 3 años, con la renuncia a los deseos incestuosos.",
      "Surge de la identificación con el padre real severo y se consolida cuando el niño internaliza la prohibición y la amenaza.",
      "Surge en el primer año, pero solo como una instancia protectora; la agresión aparece recién con el conflicto edípico."
    ],
    correctAnswer: 0,
    explanation: "Freud concebía al Superyó como el heredero tardío del Complejo de Edipo (hacia los 5 años); Klein demuestra que surge mucho antes, en la fase oral-sádica (primer año), siendo independiente y anterior a la resolución edípica.",
    distractorExplanations: [
      "Para Klein el Superyó no es consecuencia del Edipo: es un proceso independiente y anterior.",
      "La severidad del Superyó no proviene del padre real, sino de los impulsos destructivos del propio sujeto.",
      "Su núcleo incluye objetos malos teñidos de agresión desde el comienzo, de modo que suele ser marcadamente sádico."
    ]
  },
  {
    id: "q12",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Etiología de la Severidad del Superyó",
    question: "¿Cuál es el origen de la severidad aterradora que caracteriza al Superyó temprano en la clínica de Klein?",
    options: [
      "La severidad real del padre y de las figuras de autoridad, que el niño introyecta tal como las percibe en la crianza.",
      "La culpa edípica ante el deseo incestuoso hacia la madre, que el Superyó castiga para sostener la represión.",
      "Las frustraciones reales del ambiente, como el destete, cuando la madre falla en satisfacer las necesidades del bebé.",
      "Los propios impulsos destructivos del sujeto, proyectados sobre los objetos que luego introyecta como persecutorios."
    ],
    correctAnswer: 3,
    explanation: "Klein afirma enfáticamente que la severidad del Superyó no es copia del padre real, sino el producto de proyectar las propias pulsiones destructivas infantiles sobre los objetos que luego son introyectados como castigadores.",
    distractorExplanations: [
      "Para Klein el Superyó no es idéntico a sus objetos reales: es una construcción interna y su rigor no depende del padre real.",
      "Esa es una explicación freudiana, que supone que el Superyó es consecuencia del Edipo; Klein sostiene que es previo.",
      "La frustración del destete despierta el sadismo, pero la severidad se explica por las pulsiones del sujeto proyectadas, no por una falla real."
    ]
  },
  {
    id: "q13",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Estructura del Núcleo del Superyó",
    question: "¿Cómo se compone el núcleo del temprano Superyó según los desarrollos teóricos de Melanie Klein?",
    options: [
      "Solo los objetos malos y vengativos, teñidos por las mociones agresivas proyectadas, pues lo bueno permanece a salvo en el Yo.",
      "La incorporación de dos tipos de objetos introyectados: objetos malos teñidos de agresión y objetos buenos protectores.",
      "La internalización de las normas y prohibiciones parentales, filtradas por la culpa y la renuncia al deseo edípico.",
      "Los objetos buenos que el bebé introyecta, ya que la agresión se descarga hacia afuera mediante la proyección al mundo."
    ],
    correctAnswer: 1,
    explanation: "El núcleo del superyó temprano alberga tanto objetos malos sádicos (teñidos de mociones mortíferas proyectadas) como el objeto bueno introyectado protector; la primacía de lo bueno sobre lo malo determinará su carácter final.",
    distractorExplanations: [
      "El núcleo también incluye el lado protector: el objeto bueno introyectado que representa las tendencias libidinales y amorosas.",
      "Esa es la concepción freudiana del Superyó como heredero del Edipo; en Klein su núcleo son las primeras introyecciones.",
      "La proyección no vacía al Yo de agresión: los objetos malos teñidos de agresión también se introyectan y forman parte del núcleo."
    ]
  },
  {
    id: "q14",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Edipo Masculino y Envidia de la Gestación",
    question: "En el Edipo masculino temprano, ¿qué envidia el niño en la madre y qué mecanismo defensivo edifica?",
    options: [
      "Envidia el pene del padre; se defiende identificándose con él y renunciando a la madre por temor a la castración.",
      "Envidia la autoridad de la madre; se defiende desvalorizando lo materno y sometiéndose al padre para no ser castigado.",
      "Envidia el poder de gestar de la madre; se defiende sobrevalorando el pene y desplazando el deseo al intelecto.",
      "Envidia la unión sexual de los padres; se defiende negando la escena primaria y regresando a la gratificación oral."
    ],
    correctAnswer: 2,
    explanation: "El niño envidia la maternidad, el vientre gestante, los bebés y la leche; para compensar su imposibilidad biológica de concebir, recurre a la pulsión epistemofílica intelectual y a la sobrevaloración narcisista del pene.",
    distractorExplanations: [
      "Es el esquema freudiano; para Klein el niño envidia primero el cuerpo materno y su capacidad reproductiva.",
      "La envidia kleiniana no es de autoridad, sino del vientre, el pecho y los bebés; su defensa no es la sumisión sino la sobrevaloración del pene.",
      "Aunque el niño se siente excluido de la pareja, la envidia masculina se centra en la maternidad y la defensa es la sobrevaloración narcisista del pene."
    ]
  },
  {
    id: "q15",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Edipo Femenino y Refutación a Freud",
    question: "¿Qué postula Melanie Klein contra la tesis freudiana de una 'masculinidad primaria' en el desarrollo de la niña?",
    options: [
      "Que no hay masculinidad primaria: existe una fase femenina previa, con conocimiento inconsciente de la vagina y deseos receptivos.",
      "Que la masculinidad primaria existe, pero se debilita con el destete, cuando la niña se vuelve hacia el pene paterno.",
      "Que la niña atraviesa una fase masculina, pero la envidia del pene surge de la rivalidad con la madre y no de la anatomía.",
      "Que la niña ignora su genital hasta la latencia, momento en que organiza su identidad sexual por identificación con la madre."
    ],
    correctAnswer: 0,
    explanation: "Klein refuta el postulado freudiano de que la niña empieza siendo un 'pequeño varón': demuestra la existencia de una fase femenina transversal originaria y un saber corporal inconsciente temprano de la vagina receptiva.",
    distractorExplanations: [
      "Klein rechaza que exista un paso por una masculinidad primaria; propone en su lugar una fase femenina transversal.",
      "No acepta la fase masculina; la envidia del pene es un efecto secundario de la envidia hacia los objetos internos de la madre.",
      "Klein sostiene que hay un conocimiento inconsciente temprano de los genitales, tanto masculinos como femeninos."
    ]
  },
  {
    id: "q16",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Dificultad Genital Específica de la Niña",
    question: "¿Cuál es el obstáculo particular del desarrollo psicosexual femenino que Klein describe en relación con sus genitales?",
    options: [
      "La ausencia de pene, que la lleva a vivir su genital como una falta y a dirigir su deseo hacia el padre en lugar de la madre.",
      "Poseer dos zonas genitales de igual valor erótico, clítoris y vagina, lo que obstaculiza la primacía receptiva vaginal.",
      "Tener un genital interno y poco visible, que retrasa el conocimiento inconsciente de la vagina hasta la pubertad.",
      "El cambio de zona erógena del clítoris a la vagina, que exige renunciar a la satisfacción oral lograda con la madre."
    ],
    correctAnswer: 1,
    explanation: "Una dificultad anatómica y libidinal de la niña es contar simultáneamente con el clítoris (activo/fálico) y la vagina (receptiva), complicando la delimitación y consolidación del fin receptivo vaginal hacia el padre.",
    distractorExplanations: [
      "Es la lectura freudiana de la falta; la dificultad que Klein señala es la coexistencia de dos zonas de igual valor erótico.",
      "Klein sostiene un conocimiento inconsciente de la vagina desde temprano, que no espera a la pubertad.",
      "Para Klein el desarrollo genital implica trasladar a los genitales el fin receptivo de la fase oral, no renunciar a él; el obstáculo es el valor igual de las dos zonas."
    ]
  },
  {
    id: "q17",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Inhibición del Deseo de Maternidad",
    question: "¿A qué atribuye Melanie Klein el posterior debilitamiento o rechazo del deseo de maternidad en una mujer?",
    options: [
      "A la envidia del pene, que desvaloriza el vientre y lleva a la mujer a orientarse hacia ideales masculinos de logro y competencia.",
      "A la identificación con una madre fálica, que hace aparecer la maternidad como una carga y no como un deseo propio.",
      "A la persistencia de la fase femenina, que impide a la mujer salir de su dependencia afectiva hacia la madre de la infancia.",
      "A la culpa por sus ataques fantaseados al cuerpo materno y al miedo a que la madre, en retaliación, dañe su maternidad."
    ],
    correctAnswer: 3,
    explanation: "Habiendo fantaseado vaciar y destruir el vientre materno, la niña teme la venganza ('retaliación') de la madre perseguidora, alucinando que dañó sus órganos reproductores internos, lo que debilita el deseo de concebir.",
    distractorExplanations: [
      "Es una explicación freudiana; Klein la atribuye a la culpa y al temor a la retaliación materna.",
      "La madre fálica pertenece a la fantasía del objeto combinado; el debilitamiento del deseo de maternidad se explica por la culpa y la retaliación fantaseada.",
      "La fase femenina es un momento universal y previo; no explica por sí misma el rechazo posterior de la maternidad."
    ]
  },
  {
    id: "q18",
    moduleId: "mod2",
    theme: "Melanie Klein",
    topic: "Origen de la Culpa Primitiva",
    question: "¿De qué doloroso reconocimiento psíquico nace la culpa primitiva en la posición depresiva según Klein?",
    options: [
      "Del temor a perder el amor del padre al rivalizar con él por la madre, en plena triangulación edípica del niño.",
      "De advertir que el objeto atacado es el mismo que lo odia y lo castiga, y que podría vengarse cruelmente del niño.",
      "De constatar que el objeto atacado es el mismo objeto de amor y protección, lo que expone al desamparo y al abandono.",
      "De sentirse excluido de la escena primaria, al verse apartado de la gratificación sexual oral que se otorgan los padres."
    ],
    correctAnswer: 2,
    explanation: "La culpa depresiva nace al unificarse el objeto total: el infante comprueba que el pecho y la madre atacados con furia destructiva son idénticos a la fuente nutricia amada, emergiendo el dolor psíquico y el anhelo de reparación.",
    distractorExplanations: [
      "Ese temor corresponde a los celos y a la triangulación, no al origen de la culpa primitiva de la posición depresiva.",
      "El temor a la venganza del objeto es una ansiedad persecutoria; la culpa nace de reconocer que se daña al objeto amado.",
      "La exclusión de la escena primaria alimenta los celos y la envidia, pero no es el origen de la culpa primitiva."
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
      "La rechaza: no reconoce una fuerza hacia lo inanimado y ve la agresión temprana como gesto espontáneo, sin intención de dañar.",
      "La acepta como fuerza innata, pero sostiene que el ambiente puede modularla si la madre es suficientemente buena.",
      "La reinterpreta como tendencia a la no-integración, un retorno sano al reposo previo a la constitución del Yo del bebé.",
      "La rechaza, pero atribuye la agresión temprana a la frustración real del destete y a la envidia hacia el pecho materno."
    ],
    correctAnswer: 0,
    explanation: "Winnicott no cree en una fuerza endógena que empuje a lo inanimado; afirma que la agresividad inicial del bebé es motilidad pura, expresión vital y gesto espontáneo sin intencionalidad de dañar ni maldad congénita.",
    distractorExplanations: [
      "Winnicott no considera la pulsión de muerte en absoluto; no admite una fuerza que empuje hacia lo inanimado.",
      "La no-integración es un reposo natural en que el bebé descansa en el Yo auxiliar materno; no es una pulsión de muerte reinterpretada.",
      "La envidia al pecho y la frustración del destete como motores son propios de Klein; para Winnicott la agresión es un gesto espontáneo."
    ]
  },
  {
    id: "q20",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Preocupación Maternal Primaria",
    question: "¿Cómo describe Winnicott el estado psíquico conocido como 'Preocupación Maternal Primaria'?",
    options: [
      "Un estado de ansiedad de la madre ante su bebé, que la lleva a sobreprotegerlo y a retrasar su futura autonomía.",
      "Una 'locura normal y necesaria' al final del embarazo y las primeras semanas, con adaptación casi perfecta al bebé.",
      "Una depresión puerperal leve en la que la madre se retrae del mundo, lo que protege al bebé de estímulos externos.",
      "La fusión duradera entre madre e hijo, que debe mantenerse todo el primer año para que el Yo logre integrarse bien."
    ],
    correctAnswer: 1,
    explanation: "Winnicott define este estado transitorio como una 'locura normal y necesaria' en la que la madre se entrega abnegadamente al cuidado, sintiendo al bebé como parte de sí misma y actuando como su Yo auxiliar protector.",
    distractorExplanations: [
      "No es una ansiedad patológica ni una sobreprotección; es un estado temporal de entrega que permite sintonizar con las necesidades del bebé.",
      "No es una depresión: la madre está volcada activamente al cuidado de su bebé y funciona como Yo auxiliar y barrera anti-estímulo.",
      "Es un estado limitado a las primeras semanas; después la madre falla gradualmente en su adaptación, lo que da paso a la dependencia relativa."
    ]
  },
  {
    id: "q21",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Tríada de Funciones Maternas",
    question: "¿Qué logro evolutivo del infante facilita respectivamente cada una de las tres funciones maternas winnicottianas?",
    options: [
      "Sostén (Holding) ➔ Personalización; Manipulación (Handling) ➔ Integración; Presentación del objeto ➔ Relaciones objetales.",
      "Sostén (Holding) ➔ Integración; Manipulación (Handling) ➔ Relaciones objetales; Presentación del objeto ➔ Personalización.",
      "Sostén (Holding) ➔ Relaciones objetales; Manipulación (Handling) ➔ Personalización; Presentación del objeto ➔ Integración.",
      "Sostén (Holding) ➔ Integración; Manipulación (Handling) ➔ Personalización; Presentación del objeto ➔ Relaciones objetales."
    ],
    correctAnswer: 3,
    explanation: "El Holding (sostén) permite la integración del Yo en el tiempo y espacio; el Handling (manipulación corporal) promueve la personalización (habitar el psicosoma); el Object presenting inaugura las relaciones con los objetos.",
    distractorExplanations: [
      "Están invertidos el sostén y la manipulación: el sostén favorece la integración y la manipulación la personalización.",
      "Se confunden la manipulación y la presentación: el handling facilita la personalización y la presentación abre las relaciones objetales.",
      "Está invertido el orden completo: el holding no se asocia a las relaciones objetales sino a la integración del Yo."
    ]
  },
  {
    id: "q22",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "El Yo al Comienzo",
    question: "Frente a la interrogante sobre la existencia del Yo en los albores de la vida, ¿qué postula Donald Winnicott?",
    options: [
      "El Yo existe desde el nacimiento con defensas rudimentarias de escisión y proyección contra la pulsión de muerte.",
      "El Yo surge por identificación con el padre, que introduce la separación y permite diferenciar interior y exterior.",
      "El Yo comienza a existir con la integración; al inicio hay no-integración y la madre funciona como Yo auxiliar.",
      "El Yo existe pero desorganizado; la desintegración inicial es el estado básico del que emerge gracias a la madre."
    ],
    correctAnswer: 2,
    explanation: "Winnicott objeta dar por sentado un Yo integrado al nacer. Sostiene que 'el principio está en el momento en que empieza el Yo'; en los comienzos reina la No-integración, y el bebé solo existe en unidad con la madre (Yo auxiliar).",
    distractorExplanations: [
      "Es la concepción kleiniana; Winnicott no considera la pulsión de muerte y piensa que el Yo se constituye por integración.",
      "Para Winnicott el Yo se integra gracias al sostén de la madre, no por la intervención del padre ni de la ley.",
      "El estado inicial es la no-integración, un reposo saludable; la desintegración es una defensa activa posterior ante una falla ambiental."
    ]
  },
  {
    id: "q23",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Angustias Inconcebibles",
    question: "¿Cuáles son las cuatro vivencias nucleares que constituyen la llamada 'Angustia Inconcebible o Impensable'?",
    options: [
      "Fragmentarse, caer interminablemente, no tener ninguna relación con el cuerpo y no tener ninguna orientación.",
      "Fragmentarse, ser devorado por el objeto, perder el amor de la madre y quedar abandonado sin ninguna orientación.",
      "Caer interminablemente, ser castrado, no tener relación alguna con el cuerpo y perder el control de los esfínteres.",
      "Fragmentarse, ser aniquilado por la madre, caer en el vacío y no reconocer la propia imagen en el espejo."
    ],
    correctAnswer: 0,
    explanation: "Si el sostén falla, el infante se asoma a las agonías impensables (materia prima de las psicosis): fragmentación, caída infinita en el abismo, despersonalización corporal y desorientación total en el espacio.",
    distractorExplanations: [
      "Ser devorado o perder el amor de la madre son ansiedades persecutorias y depresivas; la angustia impensable es de fragmentación, caída, falta de cuerpo y de orientación.",
      "La castración y la pérdida de esfínteres son temas freudianos; no forman parte de las cuatro vivencias de la angustia inconcebible.",
      "La aniquilación por la madre y el reconocimiento especular no son parte del cuadro; las cuatro vivencias son fragmentarse, caer, no tener cuerpo y no tener orientación."
    ]
  },
  {
    id: "q24",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "No-integración vs Desintegración",
    question: "¿Cuál es la diferencia capital que establece Winnicott entre el estado de 'No-integración' y la 'Desintegración'?",
    options: [
      "La no-integración es la defensa activa frente al trauma; la desintegración es el reposo pasivo en el que el bebé descansa.",
      "La no-integración es un reposo natural sostenido por el Yo auxiliar; la desintegración, una producción activa de caos como defensa.",
      "La no-integración es el estado previo al Yo y la desintegración es la pérdida de un Yo ya integrado, propia de la psicosis.",
      "Ambas son fallas ambientales, pero la no-integración ocurre en la dependencia absoluta y la desintegración en la relativa."
    ],
    correctAnswer: 1,
    explanation: "La no-integración es un estado relajado y pacífico posible gracias al sostén materno; la desintegración es una defensa reactiva donde el infante produce activamente caos para evitar la agonía impensable (el caos es suyo y dentro de su omnipotencia).",
    distractorExplanations: [
      "Está invertido: la no-integración es el reposo saludable y la desintegración es la defensa activa ante la falla ambiental.",
      "La desintegración no es una pérdida pasiva del Yo, sino una producción activa de caos que el bebé controla dentro de su omnipotencia.",
      "La no-integración no es una falla: es un estado natural y saludable en el que el bebé puede relajarse gracias a la función materna."
    ]
  },
  {
    id: "q25",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Ilusión y Desilusión Gradual",
    question: "¿Qué función cumple la transición de la ilusión omnipotente hacia la desilusión gradual en el desarrollo infantil?",
    options: [
      "Preparar al bebé para renunciar a la omnipotencia de manera temprana, anticipando la frustración para fortalecer el Yo.",
      "Evitar toda frustración durante el primer año, porque la ilusión debe mantenerse hasta que el bebé descubra la realidad por sí mismo.",
      "Reemplazar la ilusión por el objeto transicional, de modo que el bebé abandone al instante la creencia en su control omnipotente.",
      "Sostener primero la ilusión de haber creado el objeto y luego retirar gradualmente la adaptación, según la tolerancia del bebé."
    ],
    correctAnswer: 3,
    explanation: "La madre primero brinda una adaptación perfecta que crea la ilusión de omnipotencia ('el bebé crea lo que encuentra'); después, desilusiona de manera gradual según la tolerancia infantil, abriendo el camino hacia el principio de realidad compartido.",
    distractorExplanations: [
      "Una desilusión temprana sería intrusiva: el bebé debe vivir primero la omnipotencia y las fallas se introducen luego, de manera gradual.",
      "La adaptación casi perfecta no dura indefinidamente: la madre debe desilusionar de forma gradual; si se prolonga, el objeto sigue siendo parte del bebé.",
      "El objeto transicional no suprime la ilusión de golpe: la experiencia de la ilusión se difunde en la zona intermedia y el control omnipotente cede de modo progresivo."
    ]
  },
  {
    id: "q26",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Naturaleza del Objeto Transicional",
    question: "¿Cuál de las siguientes afirmaciones describe con precisión las propiedades del 'Objeto Transicional'?",
    options: [
      "Es la primera posesión no-yo, hallada y no impuesta, con cualidades mágicas y una materialidad que resiste y sobrevive.",
      "Es un objeto interno que representa al pecho, tan fusionado con el bebé que no se distingue de su cuerpo ni de su fantasía.",
      "Es un objeto elegido por los padres para calmar la angustia, que el bebé acepta y luego idealiza como parte de sí.",
      "Es la primera relación de objeto del bebé, en la que reconoce a la madre como entidad separada y con vida propia."
    ],
    correctAnswer: 0,
    explanation: "El objeto transicional (manta, osito, pañal) es la primera posesión 'no-yo': tiene realidad material externa pero está investido de cualidades subjetivas mágicas; no debe ser lavado obsesivamente y resiste el amor y la agresión del bebé.",
    distractorExplanations: [
      "Esa descripción corresponde al objeto subjetivo; el objeto transicional es una posesión no-mí con materialidad, ni puramente interna ni externa.",
      "El objeto transicional no es impuesto: el bebé lo encuentra porque estaba a su disposición, y los padres respetan su valor sin interferir.",
      "Reconocer a la madre como separada pertenece a etapas posteriores; en el objeto transicional aún hay mezcla entre lo interno y lo externo."
    ]
  },
  {
    id: "q27",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Destino Cultural del Objeto Transicional",
    question: "Al cabo de la infancia, ¿cuál es el destino metapsicológico final del objeto y los fenómenos transicionales?",
    options: [
      "Se elabora mediante un duelo durante la latencia, y su pérdida da paso a los intereses culturales y religiosos.",
      "Se internaliza como objeto bueno protector dentro del Yo y se manifiesta luego como confianza básica en el mundo.",
      "No se pierde ni se llora: pierde relevancia y se difumina en la experiencia cultural, el arte, la religión y el juego.",
      "Se transforma en objeto objetivamente percibido y es sustituido por las relaciones interpersonales con los pares y la escuela."
    ],
    correctAnswer: 2,
    explanation: "Winnicott afirma textualmente que el objeto transicional 'no se duela porque no se pierde': su catexis puntual se va desinvistiendo y su cualidad intermedia se expande a las artes, la literatura, el juego, el cine y la religión.",
    distractorExplanations: [
      "El objeto transicional no se duela porque no se pierde; simplemente deja de ser relevante y se difumina.",
      "La confianza básica proviene del sostén materno suficientemente bueno; el objeto transicional se extiende al campo cultural, no se internaliza como objeto bueno.",
      "Los objetos transicionales no son reemplazados por relaciones con pares: sus fenómenos persisten en la cultura y la experiencia intermedia."
    ]
  },
  {
    id: "q28",
    moduleId: "mod3",
    theme: "Donald Winnicott",
    topic: "Secuencia del Uso del Objeto",
    question: "¿Qué secuencia teórica describe el paso desde la 'Relación con el objeto' hasta el 'Uso del objeto'?",
    options: [
      "Relación de objeto ➔ Objeto hallado/creado ➔ Sobrevivencia del objeto ➔ Destrucción en fantasía ➔ Uso del objeto.",
      "Relación de objeto ➔ Destrucción en fantasía ➔ Objeto hallado/creado ➔ Sobrevivencia del objeto ➔ Uso del objeto.",
      "Relación de objeto ➔ Objeto hallado/creado ➔ Destrucción en fantasía ➔ Retaliación del objeto ➔ Uso del objeto.",
      "Relación de objeto ➔ Objeto hallado/creado ➔ Destrucción en fantasía ➔ Sobrevivencia del objeto ➔ Uso del objeto."
    ],
    correctAnswer: 3,
    explanation: "Para pasar de proyectar sobre el objeto a USARLO como entidad externa independiente, el infante debe destruirlo en su fantasía y comprobar que el objeto sobrevive en la realidad sin vengarse ni destruirse.",
    distractorExplanations: [
      "La sobrevivencia no puede preceder a la destrucción: el objeto sobrevive justamente a un ataque previo.",
      "El objeto debe primero ser hallado/creado para luego ser destruido en la fantasía.",
      "La retaliación del objeto invalida el paso al uso: para que el objeto se vuelva real debe sobrevivir sin tomar represalias."
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
      "La ausencia prolongada de la madre en la dependencia relativa, que obliga al bebé a defenderse con una pseudo-independencia.",
      "Que la madre imponga su propio gesto y sus objetos, en lugar de sostener y responder al gesto espontáneo del bebé.",
      "Una madre excesivamente permisiva que no pone límites a la agresividad del bebé y le genera un sentimiento de culpa.",
      "El castigo del padre ante los gestos agresivos del bebé, que instala un Superyó severo y una sumisión defensiva."
    ],
    correctAnswer: 1,
    explanation: "El Falso Self surge cuando el ambiente primario falla en sintonizar: la madre impone sus propios gestos y objetos antes de que el niño exprese los suyos, forzándolo a una acomodación sumisa precoz para proteger su Verdadero Self.",
    distractorExplanations: [
      "La madre debe comenzar a fallar gradualmente en la dependencia relativa; el Falso Self nace de la sustitución del gesto del bebé en las fases más tempranas.",
      "El problema no es la permisividad: el Falso Self surge cuando el ambiente no responde al gesto espontáneo y lo reemplaza por el quehacer materno.",
      "Winnicott pone el acento en la falla ambiental materna temprana, no en el castigo paterno ni en el Superyó."
    ]
  },
  {
    id: "q30",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Falso Self en Salud vs Patología",
    question: "¿Cómo se distingue la manifestación del Falso Self en un estado de salud frente a su expresión patológica?",
    options: [
      "En salud es la actitud social cortés que respeta convenciones; en patología se rigidiza, engolfa al Verdadero Self y deja vacío.",
      "En salud permite al Verdadero Self expresarse sin restricciones; en patología lo reemplaza para evitar el rechazo del entorno.",
      "En salud es una defensa transitoria de la infancia que desaparece en la adultez; en patología persiste como rasgo del carácter.",
      "En salud es un rol intelectual que organiza el pensamiento; en patología se disocia del cuerpo y genera delirios de grandeza."
    ],
    correctAnswer: 0,
    explanation: "En la salud, el Falso Self es la actitud cortés y diplomática que permite convivir en sociedad sin exponerlo todo; en la patología, se hipertrofia y reemplaza al Verdadero Self, dejando una vida exitosa pero alienada y vacía.",
    distractorExplanations: [
      "En la salud el Falso Self no desplaza al Verdadero: sostiene la cortesía social, ya que no es posible decir todo con franqueza absoluta en todo momento.",
      "Un Falso Self saludable sigue siendo útil en la adultez como actitud social; no desaparece, y lo patológico es su rigidización.",
      "Puede tener una ligazón intelectual, pero lo patológico no es un delirio sino el vacío y la futilidad que deja al engolfar al Verdadero Self."
    ]
  },
  {
    id: "q31",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Paradoja del Suicidio y Falso Self",
    question: "¿Cuál es la paradoja psicodinámica que Donald Winnicott revela respecto al suicidio en personalidades con Falso Self?",
    options: [
      "Es la expresión máxima de la pulsión de muerte, que triunfa sobre un Yo debilitado por la sumisión al ambiente familiar.",
      "Es un ataque al ambiente que falló, dirigido a castigar a la madre por no reconocer el gesto espontáneo del bebé.",
      "Se destruye el self total para evitar la traición o aniquilación del Verdadero Self, ante una vida vacía.",
      "Se mata al Falso Self para liberar al Verdadero Self, que así podría expresarse por fin en un entorno más confiable."
    ],
    correctAnswer: 2,
    explanation: "Winnicott devela que cuando el Falso Self ya no puede seguir defendiendo al Verdadero Self sin traicionarlo o prostituirlo ante el ambiente, el sujeto prefiere la muerte del cuerpo biológico para salvar la pureza del Verdadero Self secreto.",
    distractorExplanations: [
      "Winnicott no admite la pulsión de muerte; el suicidio se explica por la protección del Verdadero Self.",
      "No se trata de castigar a nadie: es una salida desesperada para evitar la traición y la aniquilación del Verdadero Self.",
      "El suicidio destruye al self total, no solo al Falso Self; la paradoja es que se destruye todo para proteger lo genuino."
    ]
  },
  {
    id: "q32",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Gesto Espontáneo y Psicosoma",
    question: "¿En qué territorio de la experiencia humana sitúa Winnicott el origen y nutrientes del 'Gesto Espontáneo'?",
    options: [
      "En el mundo de las fantasías inconscientes de objetos parciales, que el bebé proyecta sobre el pecho materno.",
      "En la relación con el objeto transicional, donde el bebé ensaya por primera vez su capacidad creadora y su control.",
      "En las pulsiones sexuales y agresivas del Ello, cuya descarga el bebé logra cuando la madre se lo permite.",
      "En lo sensorio-motor: los tejidos vivos, el tono muscular y la respiración, que sostienen el seguir siendo."
    ],
    correctAnswer: 3,
    explanation: "El gesto espontáneo proviene de la vida psicosomática íntima: de la respiración, las sensaciones motrices y el funcionamiento visceral de los tejidos; solo sobre este suelo somático vivo puede brotar el sentimiento de autenticidad.",
    distractorExplanations: [
      "Las fantasías de objetos parciales son un desarrollo kleiniano; Winnicott sitúa el gesto en lo corporal.",
      "La creatividad parte del gesto espontáneo y llega luego a los fenómenos transicionales; el gesto es anterior al objeto transicional.",
      "Winnicott pone el acento en el ambiente y en lo corporal, no en una descarga pulsional del Ello."
    ]
  },
  {
    id: "q33",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Regresión Terapéutica en Análisis",
    question: "¿Qué función cumple la 'Regresión a la Dependencia' en el tratamiento analítico de pacientes con Falso Self?",
    options: [
      "Permite que el analista interprete las fantasías infantiles del paciente para resolver sus conflictos pulsionales inconscientes.",
      "Ofrece un ambiente confiable donde el analista actúa como Yo auxiliar materno y el Falso Self cede ante el Verdadero.",
      "Hace que el paciente reviva el trauma temprano mediante la interpretación del odio y la envidia hacia el analista.",
      "Refuerza las defensas del Falso Self para que el paciente sostenga mejor su adaptación social antes de tocar lo genuino."
    ],
    correctAnswer: 1,
    explanation: "En la regresión, el paciente vuelve a la fase de dependencia temprana; si el analista funciona como un Yo auxiliar confiable que sostiene sin invadir, el paciente puede desmontar la coraza del Falso Self y hacer nacer su Verdadero Self.",
    distractorExplanations: [
      "Winnicott distingue las satisfacciones pulsionales de las necesidades del Yo: en la regresión importa la adaptación del analista, no la interpretación.",
      "En estos casos la interpretación puede vivirse como autodefensa o rechazo; lo terapéutico es la adaptación y la confiabilidad del analista.",
      "El objetivo no es reforzar el Falso Self, sino que el paciente ceda sus defensas y se arriesgue a dar lugar al Verdadero Self."
    ]
  },
  {
    id: "q34",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Universalidad de la Creatividad",
    question: "¿Cómo entiende Winnicott la 'Creatividad' y su importancia para la salud psíquica cotidiana?",
    options: [
      "Una condición universal propia de estar vivos, que permite sentir que la vida vale la pena y crear el mundo de modo personal.",
      "Una capacidad innata que solo se desarrolla plenamente en el arte, la ciencia y la cultura que la sociedad reconoce y valida.",
      "Una capacidad que depende de la inteligencia y se potencia con la estimulación temprana que dan los padres al niño.",
      "Un mecanismo de sublimación de la agresividad infantil, que transforma los impulsos destructivos en producciones valiosas."
    ],
    correctAnswer: 0,
    explanation: "Para Winnicott, la creatividad no es monopolio de artistas: es el modo universal en que un ser humano saludable interactúa con el mundo sintiendo que la vida es digna de ser vivida, a diferencia de la vida de puro acatamiento sumiso.",
    distractorExplanations: [
      "Para Winnicott la creatividad no pertenece a los artistas: es una condición universal ligada a estar vivo.",
      "No depende del coeficiente intelectual ni de la estimulación, sino de la confianza básica y del riesgo de ponerse en juego.",
      "Winnicott no explica la creatividad como sublimación de la agresión, sino como gesto espontáneo que se inicia en la ilusión."
    ]
  },
  {
    id: "q35",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Diferencia entre Ser y Hacer",
    question: "¿Cuál es la articulación ontológica entre el 'Ser' y el 'Hacer' desarrollada en la clínica winnicottiana?",
    options: [
      "El Hacer es previo al Ser, pues el bebé se constituye al actuar sobre el pecho; lo masculino se asocia al Ser y a la acción.",
      "Ser y Hacer son simultáneos; lo femenino se asocia al Hacer porque implica cuidar y adaptarse a las necesidades del otro.",
      "El sentimiento de SER es anterior y necesario para el HACER; lo femenino se asocia al Ser y lo masculino, a la separación.",
      "El Ser aparece con la separación entre el yo y el no-yo; el Hacer corresponde a la identificación primaria con la madre."
    ],
    correctAnswer: 2,
    explanation: "El sentimiento originario de SER (fundado en la unidad identitaria con la madre) antecede y sostiene al HACER. Si se empuja al niño a 'hacer' sin un piso firme de 'ser', se engendra una falsa existencia hiperactiva pero vacía.",
    distractorExplanations: [
      "Está invertido: primero es el sentimiento de SER, y lo femenino, no lo masculino, se asocia al Ser.",
      "No son simultáneos: el establecimiento del sentimiento de SER es anterior y necesario, y lo femenino se vincula a ese Ser.",
      "Se intercambian los términos: la identificación primaria con la madre corresponde al Ser, y lo masculino se asocia a la separación y la relación objetal."
    ]
  },
  {
    id: "q36",
    moduleId: "mod4",
    theme: "Donald Winnicott",
    topic: "Paradoja de la Capacidad de Estar Solo",
    question: "¿Cuál es la paradoja esencial formulada por Winnicott respecto al desarrollo de la 'Capacidad de Estar Solo'?",
    options: [
      "Se aprende a estar solo cuando se tolera la ausencia de la madre y se la reemplaza por un objeto transicional que calma.",
      "Se funda en haber estado a solas, de niño, en presencia de la madre, que sostiene sin intrusión ni exigencia.",
      "Se logra cuando el niño ya no necesita a la madre y la introyecta como Superyó, que lo vigila y lo reprende en su ausencia.",
      "Se basa en haber superado la angustia de separación gracias a ausencias breves y repetidas de la madre desde temprano."
    ],
    correctAnswer: 1,
    explanation: "La paradoja de Winnicott sostiene que la capacidad de estar solo (signo de alta madurez) se construye en la infancia al estar a solas EN PRESENCIA de la madre facilitadora, quien no invade ni exige nada, permitiendo el reposo en la no-integración.",
    distractorExplanations: [
      "Quien puede estar solo no necesita un referente materno ni un símbolo para sentirse a salvo; su base es la presencia confiable de la madre.",
      "No se trata de un Superyó vigilante: se introyecta a la madre auxiliar, que permite un piso de confianza básica.",
      "La paradoja es justamente que se estaba solo estando ella presente; no es la ausencia lo que funda la capacidad."
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
        correct: "los 6 meses y los 3 años de vida del niño",
        options: [
          "el nacimiento y los 6 meses de vida",
          "los 6 meses y los 3 años de vida del niño",
          "los 3 y los 5 años, en la fase fálica",
          "los 6 y los 11 años, en la latencia"
        ]
      },
      {
        id: "blank2",
        label: "Posición psíquica",
        correct: "posición depresiva",
        options: [
          "posición depresiva",
          "posición esquizoparanoide",
          "fase fálica clásica",
          "fase de latencia"
        ]
      },
      {
        id: "blank3",
        label: "Tipo de objeto",
        correct: "objeto total y diferenciado",
        options: [
          "objeto parcial idealizado",
          "objeto subjetivo fusionado",
          "objeto combinado terrorífico",
          "objeto total y diferenciado"
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
        correct: "destete con intensa frustración oral",
        options: [
          "temor a la castración paterna",
          "hallazgo de la diferencia sexual",
          "destete con intensa frustración oral",
          "ingreso al período de latencia"
        ]
      },
      {
        id: "blank2",
        label: "Registro del deseo",
        correct: "oral",
        options: [
          "anal",
          "fálico",
          "genital",
          "oral"
        ]
      },
      {
        id: "blank3",
        label: "Tipo de ansiedades",
        correct: "persecutorias y depresivas",
        options: [
          "de castración y de rivalidad",
          "persecutorias y depresivas",
          "esquizoides y de desintegración",
          "de caída y fragmentación"
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
          "fusional",
          "narcisista"
        ]
      },
      {
        id: "blank2",
        label: "Condición de los objetos en los celos",
        correct: "totales",
        options: [
          "parciales",
          "ideales",
          "internos",
          "totales"
        ]
      },
      {
        id: "blank3",
        label: "Estructura relacional de la envidia",
        correct: "diádica",
        options: [
          "triangular",
          "diádica",
          "simbólica",
          "genital"
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
    template: "La pulsión epistemofílica surge de la fantasía de {blank1}. Por ello, investigar se articula con componentes {blank2}; si la culpa o la agresión son incontroladas, esto puede derivar en {blank3} como defensa frente al peligro de saber.",
    blanks: [
      {
        id: "blank1",
        label: "Fantasía inconsciente",
        correct: "abrirse paso en el cuerpo materno y despojar sus riquezas",
        options: [
          "reparar el cuerpo materno para restituir sus riquezas",
          "fusionarse con el cuerpo materno y compartir sus riquezas",
          "abrirse paso en el cuerpo materno y despojar sus riquezas",
          "controlar el cuerpo paterno y apropiarse de su potencia"
        ]
      },
      {
        id: "blank2",
        label: "Componente pulsional",
        correct: "sádicos (descomponer, cortar y desarmar)",
        options: [
          "sádicos (descomponer, cortar y desarmar)",
          "reparatorios (reunir, proteger y sanar)",
          "autoconservativos (nutrir, abrigar y cuidar)",
          "sublimatorios (ordenar, clasificar y nombrar)"
        ]
      },
      {
        id: "blank3",
        label: "Consecuencia clínica",
        correct: "inhibiciones del aprendizaje y la sexualidad",
        options: [
          "sublimaciones creativas que canalizan la agresión",
          "regresiones a una fase femenina de pasividad",
          "fijaciones a la dependencia absoluta del ambiente",
          "inhibiciones del aprendizaje y la sexualidad"
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
          "madre pasiva",
          "madre fálica",
          "madre buena",
          "madre auxiliar"
        ]
      },
      {
        id: "blank2",
        label: "Naturaleza de la unión coital",
        correct: "sádico continuado",
        options: [
          "genital armonioso",
          "reparador sublimado",
          "idealizado protector",
          "sádico continuado"
        ]
      },
      {
        id: "blank3",
        label: "Manifestación clínica infantil",
        correct: "pesadillas y delirios persecutorios",
        options: [
          "pesadillas y delirios persecutorios",
          "fobias escolares y ansiedad social",
          "rituales obsesivos y manías de orden",
          "retrasos del habla y enuresis nocturna"
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
          "fálico-edípica",
          "anal-sádica",
          "oral-sádica",
          "genital-puberal"
        ]
      },
      {
        id: "blank2",
        label: "Fuerza pulsional",
        correct: "pulsión de muerte",
        options: [
          "pulsión de vida",
          "pulsión de dominio",
          "libido narcisista",
          "pulsión de muerte"
        ]
      },
      {
        id: "blank3",
        label: "Causa de la severidad",
        correct: "mociones agresivas y destructivas infantiles",
        options: [
          "mociones libidinales y amorosas infantiles",
          "mociones agresivas y destructivas infantiles",
          "fantasías reparatorias y de gratitud infantiles",
          "representaciones idealizadas del pecho bueno"
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
          "ambiente facilitador",
          "dependencia absoluta",
          "pulsión de muerte",
          "Yo integrado"
        ]
      },
      {
        id: "blank2",
        label: "Sentido de la agresión",
        correct: "gesto espontáneo",
        options: [
          "ataque envidioso",
          "gesto espontáneo",
          "impulso destructivo",
          "acto reparatorio"
        ]
      },
      {
        id: "blank3",
        label: "Dirección evolutiva",
        correct: "desarrollo y la maduración",
        options: [
          "equilibrio y la homeostasis",
          "control y la omnipotencia",
          "retorno a lo inanimado",
          "desarrollo y la maduración"
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
          "depresión puerperal leve",
          "obsesión protectora normal",
          "idealización narcisista",
          "locura normal y necesaria"
        ]
      },
      {
        id: "blank2",
        label: "Rol metapsicológico de la madre",
        correct: "Yo auxiliar",
        options: [
          "Yo auxiliar",
          "Superyó auxiliar",
          "Yo ideal",
          "objeto parcial"
        ]
      },
      {
        id: "blank3",
        label: "Experiencia fundante del bebé",
        correct: "ilusión omnipotente de crear el objeto",
        options: [
          "desilusión gradual de su omnipotencia",
          "ilusión omnipotente de crear el objeto",
          "frustración dosificada de sus necesidades",
          "separación tolerable del mundo externo"
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
          "desintegración",
          "integración plena",
          "no-integración",
          "relación de objeto"
        ]
      },
      {
        id: "blank2",
        label: "Amenaza catastrófica",
        correct: "angustia inconcebible",
        options: [
          "angustia inconcebible",
          "angustia persecutoria",
          "angustia de castración",
          "angustia depresiva"
        ]
      },
      {
        id: "blank3",
        label: "Mecanismo de la desintegración",
        correct: "caos controlado por el propio bebé",
        options: [
          "fantasías reparatorias hacia la madre",
          "caos controlado por el propio bebé",
          "imágenes persecutorias del pecho malo",
          "calma obtenida mediante el ambiente"
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
        correct: "no-mí, ubicada fuera del propio cuerpo",
        options: [
          "interna, equivalente al propio cuerpo",
          "objetiva, ajena a la fantasía del niño",
          "impuesta, elegida por los progenitores",
          "no-mí, ubicada fuera del propio cuerpo"
        ]
      },
      {
        id: "blank2",
        label: "Localización psíquica",
        correct: "zona intermedia de la experiencia humana",
        options: [
          "zona intermedia de la experiencia humana",
          "realidad psíquica interna del niño",
          "realidad exterior compartida con otros",
          "zona de control omnipotente mágico"
        ]
      },
      {
        id: "blank3",
        label: "Paradoja fundamental",
        correct: "creado y encontrado",
        options: [
          "amado y odiado",
          "introyectado y proyectado",
          "creado y encontrado",
          "perdido y recuperado"
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
        correct: "uso del objeto como algo real",
        options: [
          "dominio omnipotente del objeto",
          "uso del objeto como algo real",
          "duelo por el objeto perdido",
          "juego con el objeto transicional"
        ]
      },
      {
        id: "blank2",
        label: "Acto inconsciente del sujeto",
        correct: "destruya con furia omnipotente",
        options: [
          "destruya con furia omnipotente",
          "controle con dominio omnipotente",
          "idealice con gratitud reparadora",
          "abandone con indiferencia"
        ]
      },
      {
        id: "blank3",
        label: "Respuesta indispensable del objeto",
        correct: "sobreviva intacto a la destrucción",
        options: [
          "interprete el ataque como defensa",
          "se deje controlar por el sujeto",
          "sobreviva intacto a la destrucción",
          "se identifique con la agresión"
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
    template: "El Verdadero Self brota del {blank1}. Cuando la madre impone sus exigencias, surge el Falso Self como coraza protectora; en casos graves, el suicidio se presenta como la trágica destrucción del self total para salvar al Verdadero Self de {blank2} ante una vida sentida como {blank3}.",
    blanks: [
      {
        id: "blank1",
        label: "Fuente del Verdadero Self",
        correct: "gesto espontáneo, de base sensorio-motora",
        options: [
          "juego simbólico en la zona intermedia",
          "quehacer materno incorporado desde temprano",
          "gesto espontáneo, de base sensorio-motora",
          "fantasía inconsciente de objetos parciales"
        ]
      },
      {
        id: "blank2",
        label: "Propósito del acto suicida",
        correct: "la traición o aniquilación definitiva",
        options: [
          "la persecución de un Superyó cruel",
          "la traición o aniquilación definitiva",
          "la destrucción por su propia agresión",
          "el abandono físico del entorno familiar"
        ]
      },
      {
        id: "blank3",
        label: "Vivencia clínica patológica",
        correct: "vacía, fútil y no vivida realmente",
        options: [
          "vacía, fútil y no vivida realmente",
          "culpable, castigadora y persecutoria",
          "caótica, desbordada y fragmentada",
          "plena, estable y socialmente valorada"
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
          "SER (asociado al elemento masculino)",
          "SER-UNO-CON (propio de lo femenino)",
          "SEPARACIÓN (asociada a lo masculino)",
          "SER (asociado al elemento femenino)"
        ]
      },
      {
        id: "blank2",
        label: "Paradoja de la soledad",
        correct: "en presencia no intrusiva de la madre",
        options: [
          "en presencia no intrusiva de la madre",
          "bajo la vigilancia atenta de la madre",
          "durante ausencias breves y repetidas",
          "con un objeto transicional que la reemplaza"
        ]
      },
      {
        id: "blank3",
        label: "Certeza introyectada",
        correct: "sigue viva y no va a desaparecer",
        options: [
          "volverá siempre que él la reclame",
          "vigila sus movimientos para intervenir",
          "sigue viva y no va a desaparecer",
          "lo protegerá de cualquier frustración"
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
