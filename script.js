const menuButton = document.querySelector(".menu-button");
const mobileNavigation = document.querySelector("#mobile-navigation");
const completeButton = document.querySelector(".next-button");
const currentLesson = document.querySelector("#current-lesson");
const currentLessonButton = currentLesson.querySelector("button");
const lessonStatus = currentLesson.querySelector(".lesson-status");
const nowPlaying = currentLesson.querySelector(".now-playing");
const courseProgress = document.querySelector(".course-progress");
const courseProgressValue = document.querySelector("#course-progress-value");
const courseProgressFill = document.querySelector("#course-progress-fill");
const lessonProgressCopy = document.querySelector("#lesson-progress-copy");
const lessonProgressFill = document.querySelector("#lesson-progress-fill");
const lessonPanel = document.querySelector(".lesson-panel");

function celebrateCompletion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const colors = ["#22588e", "#38a9d6", "#d7e83f", "#f7c963", "#73a849"];
  const panelBox = lessonPanel.getBoundingClientRect();
  const layer = document.createElement("div");
  const startX = panelBox.width / 2;
  const startY = panelBox.height * 0.46;

  layer.className = "confetti-layer";
  layer.setAttribute("aria-hidden", "true");
  lessonPanel.appendChild(layer);

  const message = document.createElement("span");
  message.className = "cool-burst";
  message.textContent = "C.O.O.L.!";
  layer.appendChild(message);

  for (let index = 0; index < 28; index += 1) {
    const piece = document.createElement("span");
    const angle = (-155 + Math.random() * 130) * (Math.PI / 180);
    const burstDistance = 80 + Math.random() * 130;
    const burstX = Math.cos(angle) * burstDistance;
    const burstY = Math.sin(angle) * burstDistance;
    const drift = -22 + Math.random() * 44;
    const fallDistance = 150 + Math.random() * 70;
    const rotation = (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 420);

    piece.className = "confetti-piece";
    piece.style.setProperty("--start-x", `${startX}px`);
    piece.style.setProperty("--start-y", `${startY}px`);
    piece.style.setProperty("--burst-x", `${burstX}px`);
    piece.style.setProperty("--burst-y", `${burstY}px`);
    piece.style.setProperty("--fall-x-mid", `${burstX + drift * 0.5}px`);
    piece.style.setProperty("--fall-y-mid", `${burstY + fallDistance * 0.4}px`);
    piece.style.setProperty("--fall-x", `${burstX + drift}px`);
    piece.style.setProperty("--fall-y", `${burstY + fallDistance}px`);
    piece.style.setProperty("--rotation-mid", `${rotation * 0.25}deg`);
    piece.style.setProperty("--rotation-late", `${rotation * 0.58}deg`);
    piece.style.setProperty("--rotation-end", `${rotation}deg`);
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);

    layer.appendChild(piece);
  }

  window.setTimeout(() => layer.remove(), 2500);
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  mobileNavigation.hidden = isOpen;
});

completeButton.addEventListener("click", () => {
  currentLesson.classList.remove("current");
  currentLesson.classList.add("complete");
  currentLessonButton.removeAttribute("aria-current");

  lessonStatus.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7 12 3 3 7-7"></path>
    </svg>
  `;
  lessonStatus.setAttribute("aria-label", "Completed");
  nowPlaying.remove();

  courseProgress.setAttribute("aria-label", "Course progress: 50 percent");
  courseProgressValue.textContent = "50%";
  courseProgressFill.style.width = "50%";
  lessonProgressCopy.textContent = "2 of 4 lessons complete";
  lessonProgressFill.style.width = "50%";

  completeButton.textContent = "Lesson complete";
  completeButton.disabled = true;
  completeButton.classList.add("just-completed");
  currentLesson.classList.add("just-completed");
  celebrateCompletion();

  window.setTimeout(() => {
    completeButton.classList.remove("just-completed");
    currentLesson.classList.remove("just-completed");
  }, 2500);
});
