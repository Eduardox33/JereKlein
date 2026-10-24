// PsicoStudy Kawaii - Lógica de la aplicación v2
// Autores: Melanie Klein & Donald Winnicott (Solemne II)

(function () {
  "use strict";

  // --- AUDIO SYNTHESIS ENGINE (Web Audio API) ---
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
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.14, now + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.32);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.35);
      });
    }

    playError() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.22);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.23);
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
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.05);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
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
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.1);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.11);
    }

    playFanfare() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [
        { f: 523.25, d: 0.09 },
        { f: 659.25, d: 0.09 },
        { f: 783.99, d: 0.09 },
        { f: 1046.5, d: 0.28 }
      ];
      let t = now;
      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(n.f, t);
        gain.gain.setValueAtTime(0.16, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + n.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + n.d);
        t += n.d * 0.88;
      });
    }
  }

  const audio = new KawaiiAudio();

  // --- BORRADO OBLIGATORIO DE DATOS PREVIOS Y REINICIO A CERO ---
  // Se purgan versiones anteriores para que todo usuario comience de cero estrictamente
  const STORAGE_KEY_V2 = "psicostudy_kawaii_v2_reset_fresh";
  try {
    localStorage.removeItem("psicostudy_kawaii_v1");
    // Si no existe la clave v2, limpiar cualquier residuo
    if (!localStorage.getItem(STORAGE_KEY_V2)) {
      localStorage.clear();
    }
  } catch (e) {
    console.warn("Storage reset check:", e);
  }

  const defaultState = {
    version: 2,
    xp: 0,
    streak: 0,
    highestStreak: 0,
    soundEnabled: true,
    answeredQuestions: {}, // { qId: { selectedOption: number, isCorrect: boolean } }
    masteredFlashcards: {}, // { fcId: true/false }
    completedCloze: {}, // { cId: { userAnswers: {}, isCorrect: boolean } }
    unlockedBadges: []
  };

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_V2);
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn("Error cargando estado:", e);
    }
    return JSON.parse(JSON.stringify(defaultState));
  }

  let state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(state));
    } catch (e) {
      console.warn("Error guardando estado:", e);
    }
  }

  // --- MASCOT QUOTES (MOCHI EL GATITO NARANJA) ---
  const MASCOT_QUOTES = {
    start: [
      "¡Miau! Soy Mochi 🐱🍊 tu gatito de estudio. ¡Aprenderemos Melanie Klein y Donald Winnicott paso a pasito! 🌸✨",
      "¡Purr! Todas las preguntas tienen alternativas desafiantes. ¡Lee con calma y garras afiladas! 🐾🎀",
      "¡Recuerda que cada detalle teórico cuenta en Solemne II! Vamos con todo el ánimo 🐱💕"
    ],
    correct: [
      "¡Miau, qué precisión! Superaste una alternativa difícil con maestría teórica 🐱🌸✨",
      "¡Ronroneo de orgullo! Distinguiste los matices más sutiles de la cátedra 🐾💖",
      "¡Impresionante! Donald Winnicott y Melanie Klein estarían orgullosos de ti 🐱✨"
    ],
    incorrect: [
      "¡Miau! No te preocupes: los gatitos también aprendemos explorando. ¡Revisa la justificación! 🐾💫",
      "¡Arriba ese ánimo! Como decía Winnicott, el error abre la zona de juego y aprendizaje 🐱🌸",
      "¡Lee con ternura la explicación abajo! Ahora jamás olvidarás ese concepto analítico 🍊✨"
    ],
    clozeCorrect: [
      "¡Miau! ¡Oración completada con exactitud! Manejas el vocabulario técnico impecable ✍️🐱✨",
      "¡Ronroneo total! Reconstruiste la tesis teórica con las palabras clave precisas 🐾🌸"
    ],
    clozeIncorrect: [
      "¡Miau! Alguna de las frases o palabras clave no coincide. Lee la solución abajo con atención ✍️🍊"
    ]
  };

  function getRandomQuote(type) {
    const list = MASCOT_QUOTES[type] || MASCOT_QUOTES.start;
    return list[Math.floor(Math.random() * list.length)];
  }

  function setMascotMessage(msg) {
    const el = document.getElementById("mascot-bubble-text");
    if (el) el.innerHTML = msg;
  }

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
        particleCount: 110,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#F472B6", "#FDA4AF", "#E879F9", "#A7F3D0", "#FDE68A"]
      });
    }
  }

  // --- NAVEGACIÓN Y ESTADO DE VISTAS ---
  let currentActiveTab = "learning"; // 'learning' | 'cloze' | 'exam' | 'flashcards' | 'tables'
  let currentModuleId = "mod1";
  let currentQuestionIndexInModule = 0;
  let activeQuestionsList = [];

  // Examen
  let examQuestions = [];
  let examAnswers = {};
  let examSubmitted = false;

  // Flashcards
  let currentCardIndex = 0;
  let cardIsFlipped = false;
  let currentFcFilter = "all";
  let fcSearchQuery = "";

  // Cloze / Completación de oraciones
  let currentClozeIndex = 0;
  let currentClozeAnswers = {}; // { blankId: selectedValue }

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
    renderClozeView();
    renderComparativeTables();
    setupKeyboardListeners();

    setMascotMessage(getRandomQuote("start"));
  }

  function updateStatsBar() {
    const xpEl = document.getElementById("stat-xp");
    const streakEl = document.getElementById("stat-streak");
    const progressEl = document.getElementById("stat-progress-text");
    const progressBar = document.getElementById("global-progress-bar");

    if (xpEl) xpEl.textContent = state.xp;
    if (streakEl) streakEl.textContent = state.streak;

    const totalQuestions = QUESTIONS_DATA.length + COMPLETION_QUESTIONS_DATA.length;
    const answeredTotal = Object.keys(state.answeredQuestions).length + Object.keys(state.completedCloze).length;
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
        if (confirm("¿Deseas reiniciar absolutamente todos tus datos y partir desde cero? 🌸")) {
          state = JSON.parse(JSON.stringify(defaultState));
          saveState();
          updateStatsBar();
          renderLearningJourneyOverview();
          renderFlashcardsView();
          renderClozeView();
          setMascotMessage("¡Progreso borrado! Has partido de cero limpiamente 🌸");
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
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    currentActiveTab = tabName;
    audio.playClick();

    document.querySelectorAll("[data-nav-tab]").forEach(t => {
      const isCurrent = t.getAttribute("data-nav-tab") === tabName;
      t.classList.toggle("bg-pink-500", isCurrent);
      t.classList.toggle("text-white", isCurrent);
      t.classList.toggle("shadow-md", isCurrent);
      t.classList.toggle("bg-white", !isCurrent);
      t.classList.toggle("text-pink-700", !isCurrent);
    });

    document.querySelectorAll(".tab-view-section").forEach(sec => {
      sec.classList.add("hidden");
    });

    const activeSec = document.getElementById(`view-${tabName}`);
    if (activeSec) {
      activeSec.classList.remove("hidden");
    }

    if (tabName === "learning") {
      renderLearningJourneyOverview();
      renderFlashcardsView();
    } else if (tabName === "cloze") {
      renderClozeView();
    } else if (tabName === "exam") {
      prepareExamView();
    } else if (tabName === "tables") {
      renderComparativeTables();
    }
  }

  // --- SECCIÓN 1: SELECCIÓN MÚLTIPLE PROGRESIVA ---
  function renderLearningJourneyOverview() {
    const container = document.getElementById("modules-grid");
    const activeQuizArea = document.getElementById("active-quiz-area");
    if (!container) return;

    activeQuizArea.classList.add("hidden");
    container.classList.remove("hidden");
    container.innerHTML = "";

    MODULES_DATA.forEach(mod => {
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
      card.className = "bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-xs hover:border-pink-300 transition-all flex flex-col justify-between";

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-3xl p-3 bg-pink-50 rounded-2xl border border-pink-100">${mod.icon}</span>
            <span class="text-xs font-bold px-3 py-1 rounded-full ${isCompleted ? 'bg-emerald-100 text-emerald-700' : 'bg-pink-100 text-pink-700'}">
              ${isCompleted ? '✓ Aprobado' : `${answeredCount}/${modQuestions.length} Respondidas`}
            </span>
          </div>
          <h3 class="text-lg font-bold text-gray-800 mb-1.5 leading-snug">${mod.title}</h3>
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

          <button class="w-full py-2.5 px-4 rounded-2xl font-bold text-xs transition-transform active:scale-95 flex items-center justify-center gap-2 ${
            isCompleted 
              ? 'bg-pink-100 hover:bg-pink-200 text-pink-700 border border-pink-200' 
              : 'bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white shadow-xs'
          }">
            <span>${isCompleted ? 'Repasar Módulo 🎀' : 'Comenzar Módulo 🌸'}</span>
            <span>→</span>
          </button>
        </div>
      `;

      card.querySelector("button").addEventListener("click", () => {
        startModuleQuiz(mod.id);
      });

      container.appendChild(card);
    });
  }

  function startModuleQuiz(moduleId) {
    currentModuleId = moduleId;
    activeQuestionsList = QUESTIONS_DATA.filter(q => q.moduleId === moduleId);
    currentQuestionIndexInModule = 0;

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
      <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-pink-100 shadow-sm max-w-3xl mx-auto">
        <!-- Top bar -->
        <div class="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-pink-50">
          <button id="btn-back-to-modules" class="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-800 bg-pink-50 hover:bg-pink-100 px-3 py-1.5 rounded-full transition-colors">
            <span>←</span> Volver a Módulos
          </button>
          <span class="text-xs font-bold text-gray-500">
            ${mod.icon} ${mod.shortTitle} • Pregunta ${currentNum} de ${total}
          </span>
        </div>

        <!-- Barra de progreso -->
        <div class="w-full bg-pink-50 rounded-full h-2 mb-4 sm:mb-6 overflow-hidden">
          <div class="bg-gradient-to-r from-pink-400 to-rose-400 h-2 rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
        </div>

        <!-- Etiqueta de tema -->
        <div class="flex items-center gap-2 mb-2 sm:mb-3">
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-600 border border-purple-100">
            ${q.theme}
          </span>
          <span class="text-xs font-medium text-pink-500">
            📖 ${q.topic}
          </span>
        </div>

        <!-- Enunciado -->
        <h2 class="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-4 sm:mb-6 leading-relaxed">
          ${q.question}
        </h2>

        <!-- Opciones (con longitud equilibrada y diseño uniforme) -->
        <div class="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6" id="options-container">
          ${q.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            return `
              <button 
                class="option-item w-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 flex items-start gap-2.5 sm:gap-3.5 text-xs sm:text-sm md:text-base border-gray-100 bg-white hover:border-pink-300 hover:bg-pink-50/40"
                data-option-index="${idx}"
              >
                <span class="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl font-bold text-xs flex items-center justify-center bg-pink-100 text-pink-700">
                  ${letter}
                </span>
                <span class="text-gray-700 pt-0.5 flex-1 leading-relaxed">${opt}</span>
              </button>
            `;
          }).join("")}
        </div>

        <!-- Feedback justificado -->
        <div id="feedback-box" class="hidden p-5 rounded-2xl border mb-6 text-sm">
          <div id="feedback-header" class="flex items-center gap-2 font-bold mb-3"></div>
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-white border border-pink-100 shadow-xs">
              <span class="font-bold text-pink-700 block mb-1">🌸 Justificación de la respuesta correcta:</span>
              <p class="text-gray-700 leading-relaxed text-sm">${q.explanation}</p>
            </div>
            <div id="distractor-box" class="p-3.5 rounded-xl bg-pink-50/50 border border-pink-100 text-xs text-gray-600 space-y-1.5">
              <span class="font-bold text-pink-900 block">💡 Trampas teóricas en las alternativas incorrectas:</span>
              <ul class="list-disc pl-4 space-y-1">
                ${q.distractorExplanations.map(d => `<li>${d}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>

        <!-- Botones de navegación -->
        <div class="flex items-center justify-between pt-4 border-t border-pink-50">
          <button id="btn-prev-q" class="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:opacity-30 disabled:pointer-events-none" ${currentQuestionIndexInModule === 0 ? 'disabled' : ''}>
            ← Anterior
          </button>
          
          <button id="btn-next-q" class="hidden px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 shadow-xs transition-transform active:scale-95">
            ${currentQuestionIndexInModule === total - 1 ? 'Finalizar Módulo 🎀' : 'Siguiente Pregunta 🌸 →'}
          </button>
        </div>
      </div>
    `;

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
          fireBigConfetti();
          audio.playFanfare();
          setMascotMessage("¡Felicitaciones! Has completado este módulo riguroso 🌸✨");
          renderLearningJourneyOverview();
        }
      });
    }

    container.querySelectorAll(".option-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.getAttribute("data-option-index"), 10);
        handleSelectOption(q, selectedIdx);
      });
    });

    if (existingAnswer) {
      displayAnsweredState(q, existingAnswer.selectedOption);
    }
  }

  function handleSelectOption(question, selectedIdx) {
    const isCorrect = selectedIdx === question.correctAnswer;
    const existing = state.answeredQuestions[question.id];

    if (!existing) {
      state.answeredQuestions[question.id] = {
        selectedOption: selectedIdx,
        isCorrect: isCorrect
      };

      if (isCorrect) {
        state.xp += 20;
        state.streak += 1;
        if (state.streak > state.highestStreak) state.highestStreak = state.streak;
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
      btn.classList.remove("hover:border-pink-300", "hover:bg-pink-50/40");

      if (idx === question.correctAnswer) {
        btn.classList.remove("border-gray-100", "bg-white");
        btn.classList.add("border-emerald-300", "bg-emerald-50", "text-emerald-900");
        const badge = btn.querySelector("span:first-child");
        badge.classList.remove("bg-pink-100", "text-pink-700");
        badge.classList.add("bg-emerald-500", "text-white");
        badge.innerHTML = "✓";
      } else if (idx === selectedIdx && !isCorrect) {
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

    const feedbackBox = document.getElementById("feedback-box");
    const feedbackHeader = document.getElementById("feedback-header");
    const nextBtn = document.getElementById("btn-next-q");

    if (feedbackBox && feedbackHeader) {
      feedbackBox.classList.remove("hidden");
      if (isCorrect) {
        feedbackBox.className = "p-5 rounded-2xl border border-emerald-200 bg-emerald-50/30 mb-6 text-sm";
        feedbackHeader.className = "text-emerald-800 text-base font-bold flex items-center gap-2";
        feedbackHeader.innerHTML = "✨ ¡Excelente respuesta! Comprensión teórica impecable.";
      } else {
        feedbackBox.className = "p-5 rounded-2xl border border-rose-200 bg-rose-50/30 mb-6 text-sm";
        feedbackHeader.className = "text-rose-800 text-base font-bold flex items-center gap-2";
        feedbackHeader.innerHTML = "💫 ¡Ojo con el detalle teórico! Analicemos por qué:";
      }
    }

    if (nextBtn) {
      nextBtn.classList.remove("hidden");
    }
  }

  // --- SECCIÓN 2: PREGUNTAS DE DESARROLLO / COMPLETACIÓN DE ORACIONES CLAVE ---
  function renderClozeView() {
    const container = document.getElementById("cloze-content-area");
    if (!container) return;

    const list = COMPLETION_QUESTIONS_DATA;
    if (currentClozeIndex >= list.length) currentClozeIndex = 0;
    const item = list[currentClozeIndex];
    const saved = state.completedCloze[item.id];

    // Construir la plantilla con selects interactivos
    let htmlTemplate = item.template;
    item.blanks.forEach(b => {
      const selectedVal = currentClozeAnswers[b.id] || (saved ? saved.userAnswers[b.id] : "");
      const isEvaluated = !!saved;
      const isBlankCorrect = isEvaluated && saved.userAnswers[b.id] === b.correct;

      let selectStyle = "border-pink-300 bg-white text-gray-800";
      if (isEvaluated) {
        selectStyle = isBlankCorrect 
          ? "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold" 
          : "border-rose-400 bg-rose-50 text-rose-900 font-bold";
      }

      const selectHtml = `
        <select 
          class="inline-block mx-1 my-1 px-3 py-1.5 rounded-xl border-2 text-xs md:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-pink-400 ${selectStyle}"
          data-blank-id="${b.id}"
          ${isEvaluated ? 'disabled' : ''}
        >
          <option value="" disabled ${!selectedVal ? 'selected' : ''}>— Selecciona ${b.label} —</option>
          ${b.options.map(opt => `
            <option value="${opt}" ${selectedVal === opt ? 'selected' : ''}>${opt}</option>
          `).join("")}
        </select>
      `;

      htmlTemplate = htmlTemplate.replace(`{${b.id}}`, selectHtml);
    });

    const isDone = !!saved;
    const completedCount = Object.keys(state.completedCloze).length;

    container.innerHTML = `
      <div class="max-w-3xl mx-auto space-y-6">
        
        <!-- Header de Completación -->
        <div class="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 text-white rounded-3xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Preguntas de Desarrollo Teórico</span>
            <h2 class="text-xl md:text-2xl font-bold mt-2">Completación de Oraciones y Conceptos Clave</h2>
            <p class="text-xs text-pink-100 mt-1">Integra las frases exactas para reconstruir las tesis centrales de Klein y Winnicott.</p>
          </div>
          <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-white text-pink-700 shadow-xs whitespace-nowrap">
            ${completedCount}/${list.length} Dominadas
          </span>
        </div>

        <!-- Tarjeta del Desafío Activo -->
        <div class="bg-white rounded-3xl p-6 md:p-8 border-2 border-pink-100 shadow-xs space-y-6">
          
          <div class="flex items-center justify-between gap-2 border-b border-pink-50 pb-3">
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-pink-100 text-pink-700">
              Desafío ${currentClozeIndex + 1} de ${list.length}
            </span>
            <span class="text-xs font-semibold text-gray-500">
              ${item.author} • ${item.topic}
            </span>
          </div>

          <div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">${item.title}</h3>
            <p class="text-xs text-pink-600 font-semibold mb-4">✍️ ${item.instruction}</p>
            
            <!-- Oración con selects interactivos -->
            <div class="p-5 md:p-6 rounded-2xl bg-pink-50/40 border-2 border-dashed border-pink-200 text-sm md:text-base text-gray-800 leading-loose">
              ${htmlTemplate}
            </div>
          </div>

          <!-- Rationale / Explicación (si ya fue evaluado) -->
          ${isDone ? `
            <div class="p-4 rounded-2xl ${saved.isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-rose-50 border border-rose-200 text-rose-900'} text-xs md:text-sm leading-relaxed">
              <span class="font-bold block mb-1">
                ${saved.isCorrect ? '✨ ¡Completación Correcta!' : '💫 Solución y Fundamentación Teórica:'}
              </span>
              <p class="text-gray-700">${item.rationale}</p>
            </div>
          ` : ''}

          <!-- Botones de Acción -->
          <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-pink-50">
            <button id="btn-cloze-prev" class="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 disabled:opacity-30" ${currentClozeIndex === 0 ? 'disabled' : ''}>
              ← Anterior
            </button>

            <div class="flex gap-2">
              ${!isDone ? `
                <button id="btn-cloze-check" class="px-6 py-2.5 rounded-2xl text-xs md:text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 shadow-xs transition-transform active:scale-95">
                  Verificar Completación 🌸
                </button>
              ` : `
                <button id="btn-cloze-retry" class="px-4 py-2 rounded-xl text-xs font-bold text-pink-700 bg-pink-100 hover:bg-pink-200">
                  Reintentar 🔄
                </button>
              `}
            </div>

            <button id="btn-cloze-next" class="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 disabled:opacity-30" ${currentClozeIndex === list.length - 1 ? 'disabled' : ''}>
              Siguiente →
            </button>
          </div>

        </div>

        <!-- Selector rápido de desafíos -->
        <div class="flex items-center justify-center gap-1.5 flex-wrap">
          ${list.map((c, idx) => {
            const isCompleted = state.completedCloze[c.id];
            const isCurrent = idx === currentClozeIndex;
            let dotStyle = "bg-gray-200 text-gray-500";
            if (isCompleted && isCompleted.isCorrect) dotStyle = "bg-emerald-500 text-white font-bold";
            if (isCurrent) dotStyle += " ring-2 ring-pink-400 ring-offset-2";
            return `
              <button 
                class="w-7 h-7 rounded-full text-xs flex items-center justify-center transition-all ${dotStyle}"
                data-cloze-nav="${idx}"
                title="${c.title}"
              >
                ${idx + 1}
              </button>
            `;
          }).join("")}
        </div>

      </div>
    `;

    // Listeners de los selects
    container.querySelectorAll("select").forEach(sel => {
      sel.addEventListener("change", (e) => {
        const bid = e.target.getAttribute("data-blank-id");
        currentClozeAnswers[bid] = e.target.value;
        audio.playClick();
      });
    });

    const checkBtn = document.getElementById("btn-cloze-check");
    if (checkBtn) {
      checkBtn.addEventListener("click", () => {
        handleCheckCloze(item);
      });
    }

    const retryBtn = document.getElementById("btn-cloze-retry");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        delete state.completedCloze[item.id];
        currentClozeAnswers = {};
        saveState();
        audio.playClick();
        renderClozeView();
      });
    }

    const prevBtn = document.getElementById("btn-cloze-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (currentClozeIndex > 0) {
          currentClozeIndex--;
          currentClozeAnswers = {};
          audio.playClick();
          renderClozeView();
        }
      });
    }

    const nextBtn = document.getElementById("btn-cloze-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (currentClozeIndex < list.length - 1) {
          currentClozeIndex++;
          currentClozeAnswers = {};
          audio.playClick();
          renderClozeView();
        }
      });
    }

    container.querySelectorAll("[data-cloze-nav]").forEach(btn => {
      btn.addEventListener("click", () => {
        currentClozeIndex = parseInt(btn.getAttribute("data-cloze-nav"), 10);
        currentClozeAnswers = {};
        audio.playClick();
        renderClozeView();
      });
    });
  }

  function handleCheckCloze(item) {
    let allFilled = true;
    let allCorrect = true;

    item.blanks.forEach(b => {
      const userChoice = currentClozeAnswers[b.id];
      if (!userChoice) allFilled = false;
      if (userChoice !== b.correct) allCorrect = false;
    });

    if (!allFilled) {
      alert("Por favor selecciona una opción en todos los espacios en blanco antes de verificar 🌸");
      return;
    }

    state.completedCloze[item.id] = {
      userAnswers: { ...currentClozeAnswers },
      isCorrect: allCorrect
    };

    if (allCorrect) {
      state.xp += 25;
      state.streak += 1;
      if (state.streak > state.highestStreak) state.highestStreak = state.streak;
      audio.playSuccess();
      fireConfetti();
      setMascotMessage(getRandomQuote("clozeCorrect"));
    } else {
      state.streak = 0;
      audio.playError();
      setMascotMessage(getRandomQuote("clozeIncorrect"));
    }

    saveState();
    updateStatsBar();
    renderClozeView();
  }

  // --- SECCIÓN 3: SIMULACRO SOLEMNE II (EXAMEN) ---
  function prepareExamView() {
    const container = document.getElementById("exam-content-area");
    if (!container) return;

    if (examSubmitted) {
      renderExamResults();
      return;
    }

    if (examQuestions.length === 0) {
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
        <div class="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 text-white rounded-3xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Solemne II Simulada</span>
            <h2 class="text-xl md:text-2xl font-bold mt-2">Evaluación Integradora de Psicoanálisis II</h2>
            <p class="text-pink-100 text-xs mt-1">20 preguntas aleatorias con alternativas de longitud y dificultad homogénea.</p>
          </div>
          <div class="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/20 self-start sm:self-auto">
            <span class="text-2xl">⏱️</span>
            <div>
              <span class="text-xs block text-pink-100 font-medium">Modo Examen</span>
              <span class="text-base font-black tracking-wider">Sin Límite</span>
            </div>
          </div>
        </div>

        <form id="exam-form" class="space-y-6">
          ${examQuestions.map((q, qIndex) => {
            const currentSelected = examAnswers[q.id];
            return `
              <div class="bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-xs hover:border-pink-200 transition-all">
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

                <div class="space-y-2.5">
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

          <div class="sticky bottom-3 sm:bottom-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-pink-200 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
            <span class="text-xs text-gray-600 font-semibold" id="exam-answered-counter">
              Respondidas: ${Object.keys(examAnswers).length} de ${examQuestions.length}
            </span>
            <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button type="button" id="btn-reset-exam" class="flex-1 sm:flex-none px-3.5 py-2 rounded-xl sm:rounded-2xl text-xs font-bold text-pink-700 bg-pink-100 hover:bg-pink-200 transition-colors">
                Limpiar
              </button>
              <button type="submit" class="flex-1 sm:flex-none px-5 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 shadow-xs transition-transform active:scale-95 whitespace-nowrap">
                Entregar Solemne 🎓✨
              </button>
            </div>
          </div>
        </form>
      </div>
    `;

    container.querySelectorAll("input[type='radio']").forEach(input => {
      input.addEventListener("change", (e) => {
        const qid = e.target.getAttribute("data-exam-qid");
        const oidx = parseInt(e.target.getAttribute("data-exam-oidx"), 10);
        examAnswers[qid] = oidx;
        audio.playClick();
        renderExamRunner();
      });
    });

    const resetExamBtn = document.getElementById("btn-reset-exam");
    if (resetExamBtn) {
      resetExamBtn.addEventListener("click", () => {
        if (confirm("¿Deseas reiniciar tus respuestas del simulacro?")) {
          examAnswers = {};
          audio.playClick();
          renderExamRunner();
        }
      });
    }

    const form = document.getElementById("exam-form");
    if (form) {
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
    let grade = 1.0;
    if (scorePct >= 60) {
      grade = 4.0 + 3.0 * ((scorePct - 60) / 40);
    } else {
      grade = 1.0 + 3.0 * (scorePct / 60);
    }
    const formattedGrade = grade.toFixed(1);

    container.innerHTML = `
      <div class="max-w-4xl mx-auto space-y-6">
        <div class="bg-white rounded-3xl p-6 md:p-8 border-2 border-pink-100 shadow-xs text-center">
          <span class="text-4xl mb-2 block">🎓🌸✨</span>
          <h2 class="text-2xl font-bold text-gray-800 mb-1">Resultados de tu Solemne II</h2>
          <p class="text-sm text-gray-500 mb-6">Diagnóstico con alternativas rigurosas</p>

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

          <button id="btn-retry-exam" class="px-6 py-2.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 shadow-xs transition-transform active:scale-95">
            Realizar Otro Simulacro 🔄
          </button>
        </div>

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

  // --- SECCIÓN 4: FLASHCARDS 3D ---
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

    setupFlashcardFilters();
    renderActiveCard();
  }

  function setupFlashcardFilters() {
    document.querySelectorAll("[data-fc-filter]").forEach(btn => {
      const f = btn.getAttribute("data-fc-filter");
      btn.onclick = () => {
        currentFcFilter = f;
        currentCardIndex = 0;
        cardIsFlipped = false;
        audio.playClick();

        document.querySelectorAll("[data-fc-filter]").forEach(b => {
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

    if (currentCardIndex >= list.length) currentCardIndex = 0;
    const card = list[currentCardIndex];
    const isMastered = !!state.masteredFlashcards[card.id];

    container.innerHTML = `
      <div class="max-w-xl mx-auto flex flex-col items-center">
        <div class="w-full flex items-center justify-between text-xs font-semibold text-gray-400 mb-3 px-2">
          <span>Tarjeta ${currentCardIndex + 1} de ${list.length}</span>
          <span class="px-2.5 py-0.5 rounded-full ${isMastered ? 'bg-emerald-100 text-emerald-700' : 'bg-pink-100 text-pink-700'}">
            ${isMastered ? '💖 Dominado' : '💫 Por repasar'}
          </span>
        </div>

        <div id="flashcard-3d" class="flashcard-scene w-full cursor-pointer select-none" style="perspective: 1200px;">
          <div class="flashcard-inner w-full min-h-[280px] sm:min-h-[320px] md:min-h-[340px] relative transition-transform duration-500" style="transform-style: preserve-3d; ${cardIsFlipped ? 'transform: rotateY(180deg);' : ''}">
            
            <!-- Cara Frontal -->
            <div class="flashcard-face flashcard-front absolute inset-0 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-pink-100 shadow-xs flex flex-col justify-between hover:border-pink-300 transition-colors" style="backface-visibility: hidden;">
              <div>
                <div class="flex items-center justify-between mb-3 sm:mb-4">
                  <span class="text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
                    ${card.author} • ${card.tag}
                  </span>
                  <span class="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                    ${card.category}
                  </span>
                </div>
                <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">${card.term}</h3>
                <p class="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">${card.front}</p>
              </div>

              <div class="pt-3 sm:pt-4 border-t border-pink-50 flex items-center justify-between text-xs text-pink-400 font-semibold">
                <span>🔄 Toca para voltear tarjeta</span>
                <span class="hidden sm:inline">[Espacio]</span>
              </div>
            </div>

            <!-- Cara Trasera -->
            <div class="flashcard-face flashcard-back absolute inset-0 bg-gradient-to-br from-white to-pink-50/50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-pink-200 shadow-xs flex flex-col justify-between" style="backface-visibility: hidden; transform: rotateY(180deg);">
              <div>
                <div class="flex items-center justify-between mb-2.5 sm:mb-3">
                  <span class="text-xs font-bold text-pink-700 uppercase tracking-wider">Concepto Fundamental</span>
                  <span class="text-xs font-semibold text-gray-400">${card.term}</span>
                </div>
                <div class="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed space-y-1.5 sm:space-y-2 whitespace-pre-line font-normal">
                  ${card.back}
                </div>
              </div>

              <div class="pt-3 sm:pt-4 border-t border-pink-100 flex items-center justify-between text-xs text-pink-500 font-semibold">
                <span>🔄 Toca para volver al frente</span>
                <span class="hidden sm:inline">[Espacio]</span>
              </div>
            </div>

          </div>
        </div>

        <div class="w-full flex items-center justify-between gap-1.5 sm:gap-3 mt-4 sm:mt-6">
          <button id="btn-fc-prev" class="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white border border-pink-100 hover:bg-pink-50 text-gray-600 text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center gap-1">
            <span>←</span> <span class="hidden sm:inline">Anterior</span>
          </button>

          <div class="flex items-center gap-1.5 sm:gap-2">
            <button id="btn-fc-mark-review" class="px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold transition-all ${
              !isMastered 
                ? 'bg-amber-100 text-amber-800 border border-amber-200 shadow-xs' 
                : 'bg-white text-gray-500 border border-gray-200 hover:bg-amber-50'
            }">
              Repasar 💫
            </button>
            <button id="btn-fc-mark-master" class="px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold transition-all ${
              isMastered 
                ? 'bg-emerald-500 text-white shadow-xs' 
                : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
            }">
              ¡Dominado! 💖
            </button>
          </div>

          <button id="btn-fc-next" class="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white border border-pink-100 hover:bg-pink-50 text-gray-600 text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center gap-1">
            <span class="hidden sm:inline">Siguiente</span> <span>→</span>
          </button>
        </div>
      </div>
    `;

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

    document.getElementById("btn-fc-prev").addEventListener("click", () => {
      currentCardIndex = currentCardIndex > 0 ? currentCardIndex - 1 : list.length - 1;
      cardIsFlipped = false;
      audio.playClick();
      renderActiveCard();
    });

    document.getElementById("btn-fc-next").addEventListener("click", () => {
      currentCardIndex = currentCardIndex < list.length - 1 ? currentCardIndex + 1 : 0;
      cardIsFlipped = false;
      audio.playClick();
      renderActiveCard();
    });

    document.getElementById("btn-fc-mark-review").addEventListener("click", () => {
      delete state.masteredFlashcards[card.id];
      saveState();
      audio.playClick();
      renderFlashcardsView();
    });

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

  // --- SECCIÓN 5: CUADROS COMPARATIVOS ---
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

  // --- SHORTCUTS DE TECLADO ---
  function setupKeyboardListeners() {
    window.addEventListener("keydown", (e) => {
      if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA" || document.activeElement.tagName === "SELECT")) {
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
