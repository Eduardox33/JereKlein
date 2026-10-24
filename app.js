// PsicoStudy Kawaii - Lógica de la aplicación
// Autores: Melanie Klein & Donald Winnicott (Solemne II)

(function () {
  "use strict";

  // --- AUDIO SYNTHESIS ENGINE (Web Audio API - Cero dependencias externas) ---
  class KawaiiAudio {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    }

    playSuccess() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Arpegio mayor dulce en campanita (Do - Mi - Sol - Do)
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    }

    playError() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Sonido suave y cariñoso tipo 'burbuja' (sin estridencia)
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.25);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.06);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.07);
    }

    playFlip() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.12);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.13);
    }

    playFanfare() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [
        { f: 523.25, d: 0.1 },
        { f: 659.25, d: 0.1 },
        { f: 783.99, d: 0.1 },
        { f: 1046.5, d: 0.3 }
      ];
      let t = now;
      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(n.f, t);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + n.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + n.d);
        t += n.d * 0.9;
      });
    }
  }

  const audio = new KawaiiAudio();

  // --- STATE MANAGEMENT & LOCAL STORAGE ---
  const STORAGE_KEY = "psicostudy_kawaii_v1";

  const defaultState = {
    xp: 0,
    streak: 0,
    highestStreak: 0,
    soundEnabled: true,
    userProgress: {
      mod1: { answered: 0, correct: 0, completed: false },
      mod2: { answered: 0, correct: 0, completed: false },
      mod3: { answered: 0, correct: 0, completed: false },
      mod4: { answered: 0, correct: 0, completed: false }
    },
    answeredQuestions: {}, // { qId: { selectedOption: number, isCorrect: boolean } }
    masteredFlashcards: {}, // { fcId: true/false }
    unlockedBadges: []
  };

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn("Error cargando estado local:", e);
    }
    return JSON.parse(JSON.stringify(defaultState));
  }

  let state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Error guardando estado local:", e);
    }
  }

  // --- COMPANION / MASCOT QUOTES ---
  const MASCOT_QUOTES = {
    start: [
      "¡Hola estudiante estrella! 🌸 Hoy dominaremos Klein y Winnicott paso a pasito.",
      "Recuerda: una mente tranquila aprende mejor. ¡Vamos a brillar con alegría! ✨",
      "Cada pregunta es una oportunidad para integrar conceptos hermosos 🧸💕"
    ],
    correct: [
      "¡Qué precisión! Tu Yo analítico está perfectamente integrado 🌸✨",
      "¡Impresionante! Comprendes las complejidades psicoanalíticas con maestría 💖",
      "¡Gesto espontáneo acertado! Sientes la teoría viva y palpitante 🧸✨",
      "¡Puntaje perfecto en este concepto! Donald Winnicott sonreiría con orgullo 🍼🌸"
    ],
    incorrect: [
      "No te preocupes dulce aprendiz: equivocarse es parte de la zona de juego y aprendizaje 💫",
      "¡El error nos hace humanos! Como decía Winnicott, la madre solo necesita ser 'suficientemente buena' 🧸🌸",
      "Lee la explicación con ternura. ¡Ahora jamás olvidarás este concepto! 🎀✨",
      "¡Respira hondo! La comprensión toma su tiempo y estamos avanzando juntit@s 🌸"
    ],
    moduleComplete: [
      "¡FELICITACIONES! 🌸 Has completado este módulo con dedicación y cariño. ¡Sigue brillando!",
      "¡Un logro magnífico! Estás transformándote en un/a gigante del Psicoanálisis II 🧸🎉"
    ]
  };

  function getRandomQuote(type) {
    const list = MASCOT_QUOTES[type] || MASCOT_QUOTES.start;
    return list[Math.floor(Math.random() * list.length)];
  }

  // --- CONFETTI TRIGGER ---
  function fireConfetti() {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#F472B6", "#FBCFE8", "#C084FC", "#93C5FD", "#FDE047"]
      });
    }
  }

  function fireBigConfetti() {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#F472B6", "#FDA4AF", "#E879F9", "#A7F3D0", "#FDE68A"]
      });
    }
  }

  // --- UI CONTROLLERS ---
  let currentActiveTab = "learning"; // 'learning' | 'exam' | 'flashcards' | 'tables'
  let currentModuleId = "mod1";
  let currentQuestionIndexInModule = 0;
  let activeQuestionsList = [];
  let examQuestions = [];
  let examAnswers = {};
  let examSubmitted = false;
  let examTimerInterval = null;
  let examTimeLeft = 1500; // 25 min en segundos

  // Flashcards state
  let currentCardIndex = 0;
  let cardIsFlipped = false;
  let currentFcFilter = "all"; // 'all' | 'klein' | 'winnicott' | 'repasar' | 'mastered'
  let fcSearchQuery = "";

  // Initialize Elements
  document.addEventListener("DOMContentLoaded", () => {
    initApp();
  });

  function initApp() {
    audio.enabled = state.soundEnabled !== false;
    updateStatsBar();
    setupTabNavigation();
    setupSoundToggle();
    renderLearningJourneyOverview();
    renderFlashcardsView();
    renderComparativeTables();
    setupKeyboardListeners();

    // Set default mascot greeting
    setMascotMessage(getRandomQuote("start"));
  }

  function setMascotMessage(msg) {
    const mascotBubble = document.getElementById("mascot-bubble-text");
    if (mascotBubble) {
      mascotBubble.innerHTML = msg;
    }
  }

  function updateStatsBar() {
    const xpEl = document.getElementById("stat-xp");
    const streakEl = document.getElementById("stat-streak");
    const progressEl = document.getElementById("stat-progress-text");
    const progressBar = document.getElementById("global-progress-bar");

    if (xpEl) xpEl.textContent = state.xp;
    if (streakEl) streakEl.textContent = state.streak;

    // Calcular progreso total de preguntas respondidas
    const totalQuestions = QUESTIONS_DATA.length;
    const answeredTotal = Object.keys(state.answeredQuestions).length;
    const pct = Math.min(100, Math.round((answeredTotal / totalQuestions) * 100));

    if (progressEl) progressEl.textContent = `${pct}% Dominado`;
    if (progressBar) progressBar.style.width = `${pct}%`;
  }

  function setupSoundToggle() {
    const btn = document.getElementById("btn-toggle-sound");
    if (btn) {
      btn.innerHTML = audio.enabled ? "🔔 Sonidos: ON" : "🔕 Sonidos: OFF";
      btn.addEventListener("click", () => {
        audio.enabled = !audio.enabled;
        state.soundEnabled = audio.enabled;
        saveState();
        btn.innerHTML = audio.enabled ? "🔔 Sonidos: ON" : "🔕 Sonidos: OFF";
        if (audio.enabled) audio.playClick();
      });
    }
  }

  function setupTabNavigation() {
    const tabs = document.querySelectorAll("[data-nav-tab]");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-nav-tab");
        switchTab(target);
      });
    });

    const resetBtn = document.getElementById("btn-reset-progress");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("¿Quieres reiniciar todo tu progreso y empezar como nuevo? 🌸")) {
          state = JSON.parse(JSON.stringify(defaultState));
          saveState();
          updateStatsBar();
          renderLearningJourneyOverview();
          renderFlashcardsView();
          setMascotMessage("¡Progreso reiniciado con cariño! ¡A por una nueva oportunidad! 🌸");
          audio.playClick();
        }
      });
    }
  }

  function switchTab(tabName) {
    if (tabName === "flashcards") {
      switchTab("learning");
      setTimeout(() => {
        const el = document.getElementById("section-flashcards-bottom");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    currentActiveTab = tabName;
    audio.playClick();

    // Actualizar botones de navegación
    document.querySelectorAll("[data-nav-tab]").forEach(t => {
      const isCurrent = t.getAttribute("data-nav-tab") === tabName;
      t.classList.toggle("bg-pink-500", isCurrent);
      t.classList.toggle("text-white", isCurrent);
      t.classList.toggle("shadow-md", isCurrent);
      t.classList.toggle("bg-white", !isCurrent);
      t.classList.toggle("text-pink-700", !isCurrent);
    });

    // Ocultar todas las secciones de vista
    document.querySelectorAll(".tab-view-section").forEach(sec => {
      sec.classList.add("hidden");
    });

    // Mostrar activa
    const activeSec = document.getElementById(`view-${tabName}`);
    if (activeSec) {
      activeSec.classList.remove("hidden");
    }

    // Comportamientos específicos por pestaña
    if (tabName === "learning") {
      renderLearningJourneyOverview();
      renderFlashcardsView();
    } else if (tabName === "exam") {
      prepareExamView();
    } else if (tabName === "tables") {
      renderComparativeTables();
    }
  }

  // --- SECCIÓN 1: RUTA DE APRENDIZAJE PROGRESIVO ---
  function renderLearningJourneyOverview() {
    const container = document.getElementById("modules-grid");
    const activeQuizArea = document.getElementById("active-quiz-area");
    if (!container) return;

    activeQuizArea.classList.add("hidden");
    container.classList.remove("hidden");
    container.innerHTML = "";

    MODULES_DATA.forEach((mod, index) => {
      const modQuestions = QUESTIONS_DATA.filter(q => q.moduleId === mod.id);
      let answeredCount = 0;
      let correctCount = 0;

      modQuestions.forEach(q => {
        if (state.answeredQuestions[q.id]) {
          answeredCount++;
          if (state.answeredQuestions[q.id].isCorrect) {
            correctCount++;
          }
        }
      });

      const pct = modQuestions.length > 0 ? Math.round((correctCount / modQuestions.length) * 100) : 0;
      const isCompleted = correctCount >= Math.ceil(modQuestions.length * 0.7);

      const card = document.createElement("div");
      card.className = "bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between";

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-3xl p-3 bg-pink-50 rounded-2xl border border-pink-100">${mod.icon}</span>
            <span class="text-xs font-bold px-3 py-1 rounded-full ${isCompleted ? 'bg-emerald-100 text-emerald-700' : 'bg-pink-100 text-pink-600'}">
              ${isCompleted ? '✓ Completado' : `${answeredCount}/${modQuestions.length} Respondidas`}
            </span>
          </div>
          <h3 class="text-lg font-bold text-gray-800 mb-1 leading-snug">${mod.title}</h3>
          <p class="text-xs text-gray-500 mb-4 line-clamp-2">${mod.description}</p>
        </div>

        <div>
          <div class="mb-3">
            <div class="flex justify-between text-xs font-semibold text-gray-500 mb-1">
              <span>Dominio: ${pct}%</span>
              <span>${correctCount}/${modQuestions.length} Aciertos</span>
            </div>
            <div class="w-full bg-pink-50 rounded-full h-2.5 overflow-hidden">
              <div class="bg-gradient-to-r from-pink-400 to-rose-400 h-2.5 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
            </div>
          </div>

          <button class="w-full py-2.5 px-4 rounded-2xl font-bold text-sm transition-transform active:scale-95 flex items-center justify-center gap-2 ${
            isCompleted 
              ? 'bg-pink-100 hover:bg-pink-200 text-pink-700 border border-pink-200' 
              : 'bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white shadow-sm'
          }">
            <span>${isCompleted ? 'Repasar Módulo 🎀' : 'Comenzar Módulo 🌸'}</span>
            <span>→</span>
          </button>
        </div>
      `;

      const startBtn = card.querySelector("button");
      startBtn.addEventListener("click", () => {
        startModuleQuiz(mod.id);
      });

      container.appendChild(card);
    });
  }

  function startModuleQuiz(moduleId) {
    currentModuleId = moduleId;
    activeQuestionsList = QUESTIONS_DATA.filter(q => q.moduleId === moduleId);
    currentQuestionIndexInModule = 0;

    // Buscar la primera pregunta no respondida o empezar de cero
    const firstUnansweredIndex = activeQuestionsList.findIndex(q => !state.answeredQuestions[q.id]);
    if (firstUnansweredIndex !== -1) {
      currentQuestionIndexInModule = firstUnansweredIndex;
    }

    const container = document.getElementById("modules-grid");
    const activeQuizArea = document.getElementById("active-quiz-area");

    container.classList.add("hidden");
    activeQuizArea.classList.remove("hidden");

    renderCurrentQuizQuestion();
  }

  function renderCurrentQuizQuestion() {
    const container = document.getElementById("active-quiz-area");
    if (!container) return;

    const q = activeQuestionsList[currentQuestionIndexInModule];
    const mod = MODULES_DATA.find(m => m.id === currentModuleId);
    const existingAnswer = state.answeredQuestions[q.id];

    const total = activeQuestionsList.length;
    const currentNum = currentQuestionIndexInModule + 1;
    const progressPct = Math.round((currentNum / total) * 100);

    container.innerHTML = `
      <div class="bg-white rounded-3xl p-6 md:p-8 border-2 border-pink-100 shadow-sm max-w-3xl mx-auto">
        <!-- Top bar: Regresar y progreso del módulo -->
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-pink-50">
          <button id="btn-back-to-modules" class="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-800 bg-pink-50 hover:bg-pink-100 px-3 py-1.5 rounded-full transition-colors">
            <span>←</span> Volver a Módulos
          </button>
          <span class="text-xs font-bold text-gray-500">
            ${mod.icon} ${mod.shortTitle} • Pregunta ${currentNum} de ${total}
          </span>
        </div>

        <!-- Barra de progreso suave -->
        <div class="w-full bg-pink-50 rounded-full h-2 mb-6 overflow-hidden">
          <div class="bg-gradient-to-r from-pink-400 to-rose-400 h-2 rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
        </div>

        <!-- Etiqueta de tema -->
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-600 border border-purple-100">
            ${q.theme}
          </span>
          <span class="text-xs font-medium text-pink-500">
            📖 ${q.topic}
          </span>
        </div>

        <!-- Enunciado de la pregunta -->
        <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-6 leading-relaxed">
          ${q.question}
        </h2>

        <!-- Opciones de selección múltiple -->
        <div class="space-y-3 mb-6" id="options-container">
          ${q.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            return `
              <button 
                class="option-item w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-start gap-3 text-sm md:text-base border-gray-100 bg-white hover:border-pink-300 hover:bg-pink-50/50"
                data-option-index="${idx}"
              >
                <span class="flex-shrink-0 w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center bg-pink-100 text-pink-700">
                  ${letter}
                </span>
                <span class="text-gray-700 pt-0.5 flex-1">${opt}</span>
              </button>
            `;
          }).join("")}
        </div>

        <!-- Área de retroalimentación detallada (oculta hasta responder) -->
        <div id="feedback-box" class="hidden p-5 rounded-2xl border mb-6 text-sm">
          <div id="feedback-header" class="flex items-center gap-2 font-bold mb-2"></div>
          <div class="space-y-3">
            <div class="p-3.5 rounded-xl bg-white border border-pink-100 shadow-xs">
              <span class="font-bold text-pink-700 block mb-1">🌸 ¿Por qué es la respuesta correcta?</span>
              <p class="text-gray-700 leading-relaxed">${q.explanation}</p>
            </div>
            <div id="distractor-box" class="p-3.5 rounded-xl bg-pink-50/50 border border-pink-100 text-xs text-gray-600 space-y-1.5">
              <span class="font-bold text-pink-900 block">💡 Análisis pedagógico de las otras alternativas:</span>
              <ul class="list-disc pl-4 space-y-1">
                ${q.distractorExplanations.map(d => `<li>${d}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>

        <!-- Botones de navegación inferior -->
        <div class="flex items-center justify-between pt-4 border-t border-pink-50">
          <button id="btn-prev-q" class="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none" ${currentQuestionIndexInModule === 0 ? 'disabled' : ''}>
            ← Anterior
          </button>
          
          <button id="btn-next-q" class="hidden px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 shadow-sm transition-transform active:scale-95">
            ${currentQuestionIndexInModule === total - 1 ? 'Finalizar Módulo 🎀' : 'Siguiente Pregunta 🌸 →'}
          </button>
        </div>
      </div>
    `;

    // Eventos
    document.getElementById("btn-back-to-modules").addEventListener("click", () => {
      audio.playClick();
      renderLearningJourneyOverview();
    });

    const prevBtn = document.getElementById("btn-prev-q");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (currentQuestionIndexInModule > 0) {
          currentQuestionIndexInModule--;
          audio.playClick();
          renderCurrentQuizQuestion();
        }
      });
    }

    const nextBtn = document.getElementById("btn-next-q");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        audio.playClick();
        if (currentQuestionIndexInModule < total - 1) {
          currentQuestionIndexInModule++;
          renderCurrentQuizQuestion();
        } else {
          // Finalizó módulo
          fireBigConfetti();
          audio.playFanfare();
          setMascotMessage(getRandomQuote("moduleComplete"));
          renderLearningJourneyOverview();
        }
      });
    }

    // Attach option clicks
    const optionButtons = container.querySelectorAll(".option-item");
    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.getAttribute("data-option-index"), 10);
        handleSelectOption(q, selectedIdx);
      });
    });

    // Si ya fue respondida anteriormente, mostrar el estado
    if (existingAnswer) {
      displayAnsweredState(q, existingAnswer.selectedOption);
    }
  }

  function handleSelectOption(question, selectedIdx) {
    const isCorrect = selectedIdx === question.correctAnswer;
    const existing = state.answeredQuestions[question.id];

    // Actualizar estado si es la primera vez que se responde
    if (!existing) {
      state.answeredQuestions[question.id] = {
        selectedOption: selectedIdx,
        isCorrect: isCorrect
      };

      if (isCorrect) {
        state.xp += 15;
        state.streak += 1;
        if (state.streak > state.highestStreak) {
          state.highestStreak = state.streak;
        }
        audio.playSuccess();
        fireConfetti();
        setMascotMessage(getRandomQuote("correct"));
      } else {
        state.streak = 0;
        audio.playError();
        setMascotMessage(getRandomQuote("incorrect"));
      }

      saveState();
      updateStatsBar();
    } else {
      audio.playClick();
    }

    displayAnsweredState(question, selectedIdx);
  }

  function displayAnsweredState(question, selectedIdx) {
    const optionButtons = document.querySelectorAll(".option-item");
    const isCorrect = selectedIdx === question.correctAnswer;

    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.remove("hover:border-pink-300", "hover:bg-pink-50/50");

      if (idx === question.correctAnswer) {
        // Opción correcta
        btn.classList.remove("border-gray-100", "bg-white");
        btn.classList.add("border-emerald-300", "bg-emerald-50", "text-emerald-900");
        const badge = btn.querySelector("span:first-child");
        badge.classList.remove("bg-pink-100", "text-pink-700");
        badge.classList.add("bg-emerald-500", "text-white");
        badge.innerHTML = "✓";
      } else if (idx === selectedIdx && !isCorrect) {
        // Opción incorrecta seleccionada
        btn.classList.remove("border-gray-100", "bg-white");
        btn.classList.add("border-rose-300", "bg-rose-50", "text-rose-900");
        const badge = btn.querySelector("span:first-child");
        badge.classList.remove("bg-pink-100", "text-pink-700");
        badge.classList.add("bg-rose-400", "text-white");
        badge.innerHTML = "✗";
      } else {
        btn.classList.add("opacity-60");
      }
    });

    // Mostrar feedback
    const feedbackBox = document.getElementById("feedback-box");
    const feedbackHeader = document.getElementById("feedback-header");
    const nextBtn = document.getElementById("btn-next-q");

    if (feedbackBox && feedbackHeader) {
      feedbackBox.classList.remove("hidden");
      if (isCorrect) {
        feedbackBox.classList.remove("border-rose-200", "bg-rose-50/30");
        feedbackBox.classList.add("border-emerald-200", "bg-emerald-50/30");
        feedbackHeader.className = "text-emerald-800 text-base font-bold flex items-center gap-2";
        feedbackHeader.innerHTML = "✨ ¡Excelente respuesta! Comprensión teórica impecable.";
      } else {
        feedbackBox.classList.remove("border-emerald-200", "bg-emerald-50/30");
        feedbackBox.classList.add("border-rose-200", "bg-rose-50/30");
        feedbackHeader.className = "text-rose-800 text-base font-bold flex items-center gap-2";
        feedbackHeader.innerHTML = "💫 ¡Buen intento! Repasemos la fundamentación teórica:";
      }
    }

    if (nextBtn) {
      nextBtn.classList.remove("hidden");
    }
  }

  // --- SECCIÓN 2: SIMULACRO SOLEMNE II (EXAMEN) ---
  function prepareExamView() {
    const container = document.getElementById("exam-content-area");
    if (!container) return;

    if (examSubmitted) {
      renderExamResults();
      return;
    }

    // Inicializar o reanudar examen
    if (examQuestions.length === 0) {
      // Tomar 20 preguntas aleatorias de los diferentes módulos
      const shuffled = [...QUESTIONS_DATA].sort(() => 0.5 - Math.random());
      examQuestions = shuffled.slice(0, 20);
      examAnswers = {};
    }

    renderExamRunner();
  }

  function renderExamRunner() {
    const container = document.getElementById("exam-content-area");
    if (!container) return;

    container.innerHTML = `
      <div class="max-w-4xl mx-auto space-y-6">
        <!-- Banner del examen -->
        <div class="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 text-white rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Solemne II Simulada</span>
            <h2 class="text-xl md:text-2xl font-bold mt-2">Evaluación Integradora de Psicoanálisis II</h2>
            <p class="text-pink-100 text-xs mt-1">20 preguntas representativas de Melanie Klein y Donald Winnicott.</p>
          </div>
          <div class="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/20 self-start sm:self-auto">
            <span class="text-2xl">⏱️</span>
            <div>
              <span class="text-xs block text-pink-100 font-medium">Modo Examen</span>
              <span class="text-lg font-black tracking-wider">Sin Límite</span>
            </div>
          </div>
        </div>

        <!-- Lista de preguntas del examen -->
        <form id="exam-form" class="space-y-6">
          ${examQuestions.map((q, qIndex) => {
            const currentSelected = examAnswers[q.id];
            return `
              <div class="bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-xs transition-all hover:border-pink-200">
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="text-xs font-bold px-3 py-1 rounded-full bg-pink-100 text-pink-700">
                    Pregunta ${qIndex + 1} de ${examQuestions.length}
                  </span>
                  <span class="text-xs font-semibold text-gray-500">
                    ${q.theme} • ${q.topic}
                  </span>
                </div>

                <h3 class="text-base md:text-lg font-bold text-gray-800 mb-4 leading-relaxed">
                  ${q.question}
                </h3>

                <div class="space-y-2">
                  ${q.options.map((opt, oIdx) => {
                    const isChecked = currentSelected === oIdx;
                    return `
                      <label class="flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        isChecked 
                          ? 'border-pink-400 bg-pink-50/70 text-pink-900 font-medium' 
                          : 'border-gray-100 hover:border-pink-200 hover:bg-pink-50/30 text-gray-700'
                      }">
                        <input 
                          type="radio" 
                          name="exam_q_${q.id}" 
                          value="${oIdx}" 
                          ${isChecked ? 'checked' : ''} 
                          class="mt-1 accent-pink-500 cursor-pointer"
                          data-exam-qid="${q.id}"
                          data-exam-oidx="${oIdx}"
                        >
                        <span class="text-sm leading-relaxed">${opt}</span>
                      </label>
                    `;
                  }).join("")}
                </div>
              </div>
            `;
          }).join("")}

          <!-- Botón de entrega de examen -->
          <div class="sticky bottom-4 bg-white/90 backdrop-blur-md p-4 rounded-3xl border-2 border-pink-200 shadow-lg flex items-center justify-between gap-4">
            <span class="text-xs text-gray-600 font-semibold" id="exam-answered-counter">
              Respondidas: ${Object.keys(examAnswers).length} de ${examQuestions.length}
            </span>
            <div class="flex gap-2">
              <button type="button" id="btn-reset-exam" class="px-4 py-2 rounded-2xl text-xs font-bold text-pink-700 bg-pink-100 hover:bg-pink-200 transition-colors">
                Limpiar Respuestas
              </button>
              <button type="submit" class="px-6 py-2.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 shadow-sm transition-transform active:scale-95">
                Entregar Solemne 🎓✨
              </button>
            </div>
          </div>
        </form>
      </div>
    `;

    // Listeners para opciones del examen
    const radioInputs = container.querySelectorAll("input[type='radio']");
    radioInputs.forEach(input => {
      input.addEventListener("change", (e) => {
        const qid = e.target.getAttribute("data-exam-qid");
        const oidx = parseInt(e.target.getAttribute("data-exam-oidx"), 10);
        examAnswers[qid] = oidx;
        audio.playClick();
        updateExamCounter();
        renderExamRunner(); // refrescar estilos visuales de seleccionado
      });
    });

    const resetExamBtn = document.getElementById("btn-reset-exam");
    if (resetExamBtn) {
      resetExamBtn.addEventListener("click", () => {
        if (confirm("¿Deseas reiniciar tus respuestas de este examen?")) {
          examAnswers = {};
          audio.playClick();
          renderExamRunner();
        }
      });
    }

    const form = document.getElementById("exam-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const answeredCount = Object.keys(examAnswers).length;
      if (answeredCount < examQuestions.length) {
        if (!confirm(`Aún tienes ${examQuestions.length - answeredCount} preguntas sin responder. ¿Deseas entregar de todos modos? 🌸`)) {
          return;
        }
      }
      submitExam();
    });
  }

  function updateExamCounter() {
    const el = document.getElementById("exam-answered-counter");
    if (el) {
      el.textContent = `Respondidas: ${Object.keys(examAnswers).length} de ${examQuestions.length}`;
    }
  }

  function submitExam() {
    examSubmitted = true;
    audio.playFanfare();
    fireBigConfetti();
    renderExamResults();
  }

  function renderExamResults() {
    const container = document.getElementById("exam-content-area");
    if (!container) return;

    let totalCorrect = 0;
    let kleinCorrect = 0;
    let kleinTotal = 0;
    let winnicottCorrect = 0;
    let winnicottTotal = 0;

    examQuestions.forEach(q => {
      const selected = examAnswers[q.id];
      const isCorrect = selected === q.correctAnswer;
      if (isCorrect) totalCorrect++;

      if (q.theme === "Melanie Klein") {
        kleinTotal++;
        if (isCorrect) kleinCorrect++;
      } else {
        winnicottTotal++;
        if (isCorrect) winnicottCorrect++;
      }
    });

    const scorePct = Math.round((totalCorrect / examQuestions.length) * 100);
    // Escala chilena típica 1.0 a 7.0 con 60% de exigencia
    let grade = 1.0;
    if (scorePct >= 60) {
      grade = 4.0 + 3.0 * ((scorePct - 60) / 40);
    } else {
      grade = 1.0 + 3.0 * (scorePct / 60);
    }
    const formattedGrade = grade.toFixed(1);

    container.innerHTML = `
      <div class="max-w-4xl mx-auto space-y-6">
        <!-- Tarjeta de calificación -->
        <div class="bg-white rounded-3xl p-6 md:p-8 border-2 border-pink-100 shadow-sm text-center">
          <span class="text-4xl mb-2 block">🎓🌸✨</span>
          <h2 class="text-2xl font-bold text-gray-800 mb-1">Resultados de tu Solemne II</h2>
          <p class="text-sm text-gray-500 mb-6">Diagnóstico exhaustivo de contenidos evaluados</p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-6">
            <div class="bg-pink-50 p-4 rounded-2xl border border-pink-100">
              <span class="text-xs font-bold text-pink-600 uppercase block mb-1">Nota Estimada</span>
              <span class="text-3xl font-black ${grade >= 4.0 ? 'text-pink-600' : 'text-rose-600'}">${formattedGrade}</span>
            </div>
            <div class="bg-purple-50 p-4 rounded-2xl border border-purple-100">
              <span class="text-xs font-bold text-purple-600 uppercase block mb-1">Puntaje</span>
              <span class="text-3xl font-black text-purple-700">${totalCorrect} / ${examQuestions.length}</span>
            </div>
            <div class="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
              <span class="text-xs font-bold text-emerald-600 uppercase block mb-1">Porcentaje</span>
              <span class="text-3xl font-black text-emerald-700">${scorePct}%</span>
            </div>
          </div>

          <!-- Desglose por autor -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-6 text-left">
            <div class="p-4 rounded-2xl border border-pink-100 bg-white">
              <span class="text-xs font-bold text-gray-500">Melanie Klein</span>
              <div class="text-lg font-bold text-pink-700">${kleinCorrect} de ${kleinTotal} (${kleinTotal > 0 ? Math.round((kleinCorrect/kleinTotal)*100) : 0}%)</div>
            </div>
            <div class="p-4 rounded-2xl border border-purple-100 bg-white">
              <span class="text-xs font-bold text-gray-500">Donald Winnicott</span>
              <div class="text-lg font-bold text-purple-700">${winnicottCorrect} de ${winnicottTotal} (${winnicottTotal > 0 ? Math.round((winnicottCorrect/winnicottTotal)*100) : 0}%)</div>
            </div>
          </div>

          <button id="btn-retry-exam" class="px-6 py-2.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 shadow-sm transition-transform active:scale-95">
            Realizar Otro Simulacro 🔄
          </button>
        </div>

        <!-- Revisión pregunta por pregunta -->
        <h3 class="text-lg font-bold text-gray-800 pt-4">Revisión Detallada de Preguntas</h3>
        
        <div class="space-y-4">
          ${examQuestions.map((q, idx) => {
            const userAns = examAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            return `
              <div class="bg-white rounded-3xl p-6 border-2 ${isCorrect ? 'border-emerald-100' : 'border-rose-100'} shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold px-3 py-1 rounded-full ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}">
                    ${isCorrect ? '✓ Correcta' : '✗ Incorrecta'} • Pregunta ${idx + 1}
                  </span>
                  <span class="text-xs font-semibold text-gray-400">${q.theme}</span>
                </div>

                <h4 class="font-bold text-gray-800 text-base mb-3">${q.question}</h4>

                <div class="space-y-2 mb-4 text-sm">
                  ${q.options.map((opt, oIdx) => {
                    const isRight = oIdx === q.correctAnswer;
                    const isChosen = oIdx === userAns;
                    let style = "border-gray-100 bg-gray-50/50 text-gray-600";
                    if (isRight) style = "border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold";
                    if (isChosen && !isRight) style = "border-rose-300 bg-rose-50 text-rose-900";

                    return `
                      <div class="p-3 rounded-xl border flex items-start gap-2.5 ${style}">
                        <span class="font-bold text-xs">${String.fromCharCode(65 + oIdx)}.</span>
                        <span class="flex-1">${opt}</span>
                        ${isRight ? '<span class="text-emerald-600 text-xs font-bold">Respuesta correcta</span>' : ''}
                        ${isChosen && !isRight ? '<span class="text-rose-600 text-xs font-bold">Tu selección</span>' : ''}
                      </div>
                    `;
                  }).join("")}
                </div>

                <div class="p-4 rounded-2xl bg-pink-50/60 border border-pink-100 text-xs text-gray-700 leading-relaxed">
                  <span class="font-bold text-pink-800 block mb-1">🌸 Justificación Teórica:</span>
                  ${q.explanation}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;

    document.getElementById("btn-retry-exam").addEventListener("click", () => {
      examSubmitted = false;
      examQuestions = [];
      examAnswers = {};
      audio.playClick();
      prepareExamView();
    });
  }

  // --- SECCIÓN 3: TARJETAS DE ESTUDIO (FLASHCARDS) ---
  function getFilteredFlashcards() {
    let list = [...FLASHCARDS_DATA];

    if (currentFcFilter === "klein") {
      list = list.filter(c => c.author === "Melanie Klein");
    } else if (currentFcFilter === "winnicott") {
      list = list.filter(c => c.author === "Donald Winnicott");
    } else if (currentFcFilter === "repasar") {
      list = list.filter(c => !state.masteredFlashcards[c.id]);
    } else if (currentFcFilter === "mastered") {
      list = list.filter(c => !!state.masteredFlashcards[c.id]);
    }

    if (fcSearchQuery.trim()) {
      const q = fcSearchQuery.toLowerCase();
      list = list.filter(c => 
        c.term.toLowerCase().includes(q) || 
        c.front.toLowerCase().includes(q) || 
        c.back.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      );
    }

    return list;
  }

  function renderFlashcardsView() {
    const countTotal = FLASHCARDS_DATA.length;
    let countMastered = 0;
    FLASHCARDS_DATA.forEach(c => {
      if (state.masteredFlashcards[c.id]) countMastered++;
    });

    const masteredBadge = document.getElementById("fc-mastered-count");
    if (masteredBadge) {
      masteredBadge.textContent = `${countMastered}/${countTotal} Dominadas`;
    }

    // Renderizar filtros
    setupFlashcardFilters();
    renderActiveCard();
  }

  function setupFlashcardFilters() {
    const filterButtons = document.querySelectorAll("[data-fc-filter]");
    filterButtons.forEach(btn => {
      const f = btn.getAttribute("data-fc-filter");
      btn.onclick = () => {
        currentFcFilter = f;
        currentCardIndex = 0;
        cardIsFlipped = false;
        audio.playClick();

        filterButtons.forEach(b => {
          const isActive = b.getAttribute("data-fc-filter") === f;
          b.classList.toggle("bg-pink-500", isActive);
          b.classList.toggle("text-white", isActive);
          b.classList.toggle("bg-pink-50", !isActive);
          b.classList.toggle("text-pink-700", !isActive);
        });

        renderActiveCard();
      };
    });

    const searchInput = document.getElementById("fc-search-input");
    if (searchInput) {
      searchInput.oninput = (e) => {
        fcSearchQuery = e.target.value;
        currentCardIndex = 0;
        cardIsFlipped = false;
        renderActiveCard();
      };
    }
  }

  function renderActiveCard() {
    const list = getFilteredFlashcards();
    const container = document.getElementById("fc-deck-container");
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="bg-white rounded-3xl p-10 border-2 border-dashed border-pink-200 text-center text-gray-500 max-w-lg mx-auto">
          <span class="text-4xl block mb-2">🌸</span>
          <h4 class="font-bold text-gray-700 mb-1">No hay tarjetas con este filtro</h4>
          <p class="text-xs">Prueba seleccionando 'Todas' o cambiando el término de búsqueda.</p>
        </div>
      `;
      return;
    }

    if (currentCardIndex >= list.length) {
      currentCardIndex = 0;
    }

    const card = list[currentCardIndex];
    const isMastered = !!state.masteredFlashcards[card.id];

    container.innerHTML = `
      <div class="max-w-xl mx-auto flex flex-col items-center">
        <!-- Indicador de tarjeta -->
        <div class="w-full flex items-center justify-between text-xs font-semibold text-gray-400 mb-3 px-2">
          <span>Tarjeta ${currentCardIndex + 1} de ${list.length}</span>
          <span class="px-2.5 py-0.5 rounded-full ${isMastered ? 'bg-emerald-100 text-emerald-700' : 'bg-pink-100 text-pink-700'}">
            ${isMastered ? '💖 Dominado' : '💫 Por repasar'}
          </span>
        </div>

        <!-- 3D Flip Card Container -->
        <div id="flashcard-3d" class="flashcard-scene w-full cursor-pointer select-none" style="perspective: 1200px;">
          <div class="flashcard-inner w-full min-h-[300px] md:min-h-[340px] relative transition-transform duration-500" style="transform-style: preserve-3d; ${cardIsFlipped ? 'transform: rotateY(180deg);' : ''}">
            
            <!-- Cara Frontal -->
            <div class="flashcard-face flashcard-front absolute inset-0 bg-white rounded-3xl p-7 border-2 border-pink-100 shadow-sm flex flex-col justify-between hover:border-pink-300 transition-colors" style="backface-visibility: hidden;">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-bold px-3 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
                    ${card.author} • ${card.tag}
                  </span>
                  <span class="text-xs font-semibold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-100">
                    ${card.category}
                  </span>
                </div>
                <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">${card.term}</h3>
                <p class="text-sm md:text-base text-gray-600 leading-relaxed">${card.front}</p>
              </div>

              <div class="pt-4 border-t border-pink-50 flex items-center justify-between text-xs text-pink-400 font-semibold">
                <span>🔄 Toca para voltear tarjeta</span>
                <span>[Espacio]</span>
              </div>
            </div>

            <!-- Cara Trasera -->
            <div class="flashcard-face flashcard-back absolute inset-0 bg-gradient-to-br from-white to-pink-50/50 rounded-3xl p-7 border-2 border-pink-200 shadow-sm flex flex-col justify-between" style="backface-visibility: hidden; transform: rotateY(180deg);">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold text-pink-700 uppercase tracking-wider">Concepto Fundamental</span>
                  <span class="text-xs font-semibold text-gray-400">${card.term}</span>
                </div>
                <div class="text-sm md:text-base text-gray-800 leading-relaxed space-y-2 whitespace-pre-line font-normal">
                  ${card.back}
                </div>
              </div>

              <div class="pt-4 border-t border-pink-100 flex items-center justify-between text-xs text-pink-500 font-semibold">
                <span>🔄 Toca para volver al frente</span>
                <span>[Espacio]</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Controles de navegación y marcado -->
        <div class="w-full flex items-center justify-between gap-3 mt-6">
          <button id="btn-fc-prev" class="p-3 rounded-2xl bg-white border border-pink-100 hover:bg-pink-50 text-gray-600 text-sm font-bold shadow-xs transition-colors flex items-center gap-1.5">
            <span>←</span> Anterior
          </button>

          <div class="flex items-center gap-2">
            <button id="btn-fc-mark-review" class="px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              !isMastered 
                ? 'bg-amber-100 text-amber-800 border border-amber-200 shadow-xs' 
                : 'bg-white text-gray-500 border border-gray-200 hover:bg-amber-50'
            }">
              Repasar 💫
            </button>
            <button id="btn-fc-mark-master" class="px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              isMastered 
                ? 'bg-emerald-500 text-white shadow-xs' 
                : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
            }">
              ¡Dominado! 💖
            </button>
          </div>

          <button id="btn-fc-next" class="p-3 rounded-2xl bg-white border border-pink-100 hover:bg-pink-50 text-gray-600 text-sm font-bold shadow-xs transition-colors flex items-center gap-1.5">
            Siguiente <span>→</span>
          </button>
        </div>
      </div>
    `;

    // Click en la tarjeta para voltear
    const flipContainer = document.getElementById("flashcard-3d");
    if (flipContainer) {
      flipContainer.addEventListener("click", () => {
        cardIsFlipped = !cardIsFlipped;
        audio.playFlip();
        const inner = flipContainer.querySelector(".flashcard-inner");
        if (inner) {
          inner.style.transform = cardIsFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
        }
      });
    }

    // Botones de anterior / siguiente
    document.getElementById("btn-fc-prev").addEventListener("click", () => {
      if (currentCardIndex > 0) {
        currentCardIndex--;
      } else {
        currentCardIndex = list.length - 1;
      }
      cardIsFlipped = false;
      audio.playClick();
      renderActiveCard();
    });

    document.getElementById("btn-fc-next").addEventListener("click", () => {
      if (currentCardIndex < list.length - 1) {
        currentCardIndex++;
      } else {
        currentCardIndex = 0;
      }
      cardIsFlipped = false;
      audio.playClick();
      renderActiveCard();
    });

    // Marcar como repasar
    document.getElementById("btn-fc-mark-review").addEventListener("click", () => {
      delete state.masteredFlashcards[card.id];
      saveState();
      audio.playClick();
      renderFlashcardsView();
    });

    // Marcar como dominada
    document.getElementById("btn-fc-mark-master").addEventListener("click", () => {
      state.masteredFlashcards[card.id] = true;
      state.xp += 5;
      saveState();
      audio.playSuccess();
      fireConfetti();
      updateStatsBar();
      renderFlashcardsView();
    });
  }

  // --- SECCIÓN 4: CUADROS COMPARATIVOS ---
  function renderComparativeTables() {
    const authorsContainer = document.getElementById("table-authors-body");
    const stagesContainer = document.getElementById("table-stages-body");

    if (authorsContainer) {
      authorsContainer.innerHTML = COMPARATIVE_TABLES.authors.map(row => `
        <tr class="hover:bg-pink-50/40 transition-colors border-b border-pink-50 text-sm">
          <td class="p-4 font-bold text-gray-800 bg-pink-50/20 w-1/4">${row.criterio}</td>
          <td class="p-4 text-gray-600 w-1/4 border-l border-pink-50">${row.freud}</td>
          <td class="p-4 text-pink-900 bg-pink-50/30 w-1/4 border-l border-pink-50 font-medium">${row.klein}</td>
          <td class="p-4 text-purple-900 bg-purple-50/20 w-1/4 border-l border-pink-50 font-medium">${row.winnicott}</td>
        </tr>
      `).join("");
    }

    if (stagesContainer) {
      stagesContainer.innerHTML = COMPARATIVE_TABLES.winnicottStages.map(row => `
        <tr class="hover:bg-pink-50/40 transition-colors border-b border-pink-50 text-sm">
          <td class="p-4 font-bold text-purple-900 bg-purple-50/30 w-1/5">${row.fase}</td>
          <td class="p-4 text-gray-700 w-1/5 border-l border-pink-50">${row.objeto}</td>
          <td class="p-4 text-pink-700 w-1/5 border-l border-pink-50 font-medium">${row.campo}</td>
          <td class="p-4 text-gray-600 w-1/4 border-l border-pink-50">${row.relacion}</td>
          <td class="p-4 text-rose-800 bg-rose-50/30 w-1/5 border-l border-pink-50 font-medium">${row.paradoja}</td>
        </tr>
      `).join("");
    }
  }

  // --- SHORTCUTS DE TECLADO ACCESIBLES ---
  function setupKeyboardListeners() {
    window.addEventListener("keydown", (e) => {
      // No capturar teclas si el usuario está en un input de texto
      if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
        return;
      }

      const flipContainer = document.getElementById("flashcard-3d");
      if (!flipContainer) return;

      if (e.code === "Space") {
        e.preventDefault();
        flipContainer.click();
      } else if (e.code === "ArrowLeft") {
        const prev = document.getElementById("btn-fc-prev");
        if (prev) prev.click();
      } else if (e.code === "ArrowRight") {
        const next = document.getElementById("btn-fc-next");
        if (next) next.click();
      }
    });
  }

})();
