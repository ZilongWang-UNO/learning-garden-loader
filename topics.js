export const topics = [
  {
    id: "leaves",
    title: "Why do leaves look green?",
    captions: [
      "Did you know sunlight looks white, but it is actually a mix of many different colors?",
      "When sunlight reaches a leaf, it absorbs most colors, while green light bounces away.",
      "That reflected green light reaches our eyes, and our brain tells us the leaf looks green!",
    ],
    visual: leafVisual,
  },
  {
    id: "loops",
    title: "Why do programmers use loops?",
    captions: [
      "Have you ever repeated the same task several times? Computer programs often need to do that too.",
      "A loop repeats an instruction automatically, so programmers write the action only once.",
      "Change one number, and the loop can repeat two times, ten times, or even a thousand times!",
    ],
    visual: loopVisual,
  },
  {
    id: "coordinates",
    title: "How can a robot find one exact spot?",
    captions: [
      "Imagine giving a robot directions across a big grid. How can it find one exact spot?",
      "First, the x coordinate tells the robot how far to move across the grid.",
      "Then y tells it how far to move up. Together, x and y create one exact address!",
    ],
    visual: coordinateVisual,
  },
];

function leafVisual() {
  return `
    <svg class="topic-art leaf-art" viewBox="0 0 720 390" role="img" aria-label="Colored sunlight enters a leaf and green light reflects toward an eye">
      <g class="sun-group">
        <circle class="sun-body" cx="90" cy="102" r="45"/>
        <g class="sun-rays">
          <path d="M90 35V14M90 190v-21M23 102H2M178 102h-21M42 54 27 39M153 165l-15-15M42 150l-15 15M153 39l-15 15"/>
        </g>
        <circle class="sun-eye" cx="75" cy="99" r="4"/>
        <circle class="sun-eye" cx="103" cy="99" r="4"/>
        <path class="smile" d="M79 113c7 7 15 7 22 0"/>
      </g>
      <g class="light-in">
        <path class="ray red" d="M137 87 318 142"/>
        <path class="ray orange" d="M136 98 315 161"/>
        <path class="ray yellow" d="M132 110 311 180"/>
        <path class="ray blue" d="M129 121 309 199"/>
        <path class="ray purple" d="M125 132 307 218"/>
        <circle class="light-dot red-fill" cx="245" cy="120" r="8"/>
        <circle class="light-dot orange-fill" cx="257" cy="143" r="8"/>
        <circle class="light-dot yellow-fill" cx="268" cy="166" r="8"/>
        <circle class="light-dot blue-fill" cx="279" cy="190" r="8"/>
        <circle class="light-dot purple-fill" cx="290" cy="214" r="8"/>
      </g>
      <g class="leaf-character">
        <path class="leaf-body" d="M389 51C300 115 281 226 353 303c16 17 35 29 56 37 34-35 66-87 66-148 0-55-28-102-86-141Z"/>
        <path class="leaf-vein" d="M402 316c-4-83-2-156-13-238M393 132l-48-32M395 177l55-43M399 222l-66-39M400 261l49-38"/>
        <circle class="leaf-eye" cx="365" cy="183" r="12"/>
        <circle class="leaf-eye" cx="418" cy="178" r="12"/>
        <circle class="eye-shine" cx="361" cy="179" r="4"/>
        <circle class="eye-shine" cx="414" cy="174" r="4"/>
        <path class="leaf-mouth" d="M374 210q20 24 40-2"/>
        <circle class="cheek" cx="348" cy="210" r="8"/>
        <circle class="cheek" cx="435" cy="204" r="8"/>
      </g>
      <g class="green-out">
        <path d="M461 151c51-27 92-43 142-49"/>
        <path d="M470 177c56-4 103 1 143 18"/>
        <path d="M464 202c51 19 89 43 121 78"/>
        <circle cx="492" cy="138" r="7"/><circle cx="523" cy="124" r="7"/>
        <circle cx="503" cy="177" r="7"/><circle cx="539" cy="182" r="7"/>
        <circle cx="493" cy="218" r="7"/><circle cx="527" cy="237" r="7"/>
      </g>
      <g class="eye-icon">
        <path d="M582 185q48-49 96 0-48 49-96 0Z"/>
        <circle cx="630" cy="185" r="20"/><circle cx="630" cy="185" r="8"/>
        <circle cx="623" cy="177" r="4"/>
      </g>
      <text class="visual-note note-one" x="31" y="263">Many colors enter</text>
      <text class="visual-note note-one" x="31" y="286">the leaf.</text>
      <path class="note-arrow note-one" d="M145 268q45 5 85-40"/>
      <text class="visual-note note-two" x="520" y="329">Green light bounces</text>
      <text class="visual-note note-two" x="535" y="352">back to our eyes.</text>
    </svg>`;
}

function loopVisual() {
  return `
    <svg class="topic-art loop-art" viewBox="0 0 720 390" role="img" aria-label="A loop repeats a robot's movement four times">
      <g class="code-card">
        <rect x="36" y="67" width="250" height="188" rx="24"/>
        <circle cx="66" cy="94" r="6"/><circle cx="86" cy="94" r="6"/><circle cx="106" cy="94" r="6"/>
        <text class="code" x="65" y="143"><tspan class="code-key">repeat</tspan>(4) {</text>
        <text class="code action-code" x="87" y="184">moveForward();</text>
        <text class="code" x="65" y="225">}</text>
      </g>
      <path class="robot-path" d="M343 268H660"/>
      <g class="step-flags">
        <circle cx="383" cy="268" r="24"/><text x="376" y="276">1</text>
        <circle cx="468" cy="268" r="24"/><text x="461" y="276">2</text>
        <circle cx="553" cy="268" r="24"/><text x="546" y="276">3</text>
        <circle cx="638" cy="268" r="24"/><text x="631" y="276">4</text>
      </g>
      <g class="robot">
        <rect class="robot-body" x="332" y="130" width="86" height="77" rx="20"/>
        <rect class="robot-head" x="345" y="77" width="61" height="61" rx="18"/>
        <path class="robot-antenna" d="M375 77V55"/>
        <circle class="antenna-ball" cx="375" cy="47" r="8"/>
        <circle class="robot-eye" cx="363" cy="106" r="6"/><circle class="robot-eye" cx="388" cy="106" r="6"/>
        <path class="robot-smile" d="M361 120q14 10 28 0"/>
        <circle class="wheel" cx="351" cy="218" r="17"/><circle class="wheel" cx="400" cy="218" r="17"/>
        <path class="robot-arm" d="M333 150l-28-20M418 151l27-21"/>
      </g>
      <path class="loop-arrow" d="M318 301c82 35 225 34 310-10"/>
      <path class="loop-arrow-head" d="m612 286 17 5-8 17"/>
    </svg>`;
}

function coordinateVisual() {
  return `
    <svg class="topic-art coordinate-art" viewBox="0 0 720 390" role="img" aria-label="A robot moves across and up a coordinate grid to point three comma two">
      <g class="coordinate-scene">
      <g class="grid-lines">
        <path d="M117 331V35M117 331H674"/>
        <path d="M225 331V35M333 331V35M441 331V35M549 331V35M657 331V35"/>
        <path d="M117 257H674M117 183H674M117 109H674"/>
      </g>
      <g class="axis-labels">
        <text x="216" y="360">1</text><text x="324" y="360">2</text><text x="432" y="360">3</text><text x="540" y="360">4</text>
        <text x="84" y="264">1</text><text x="84" y="190">2</text><text x="84" y="116">3</text>
        <text x="683" y="338">x</text><text x="105" y="25">y</text>
      </g>
      <path class="x-path" d="M117 331H441"/><path class="y-path" d="M441 331V183"/>
      <g class="map-pin">
        <path d="M441 149c-20 0-36 15-36 35 0 28 36 59 36 59s36-31 36-59c0-20-16-35-36-35Z"/>
        <circle cx="441" cy="183" r="12"/>
      </g>
      <g class="coordinate-label"><rect x="477" y="142" width="92" height="48" rx="14"/><text x="497" y="174">(3, 2)</text></g>
      <g class="grid-robot">
        <rect x="74" y="273" width="70" height="56" rx="18"/><rect x="85" y="239" width="48" height="41" rx="13"/>
        <circle cx="100" cy="258" r="5"/><circle cx="119" cy="258" r="5"/>
        <path d="M109 239v-15M109 224l12-8"/>
        <circle cx="85" cy="336" r="13"/><circle cx="133" cy="336" r="13"/>
      </g>
      <text class="move-label across" x="247" y="316">across 3</text>
      <text class="move-label upward" x="456" y="263">up 2</text>
      </g>
    </svg>`;
}
