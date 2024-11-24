const notes = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
const exercise = {
  Chromatic: { type: "scale" },
  Minor: { type: "scale" },
  Major: { type: "scale" },

};
const validNotes = [];


function pushValidNotes(list, scale, chosenNoteIndex) {
  if (scale === "Minor") {
    list.push(notes[chosenNoteIndex]);
    list.push(notes[(chosenNoteIndex + 2) % 12]);
    list.push(notes[(chosenNoteIndex + 3) % 12]);
    list.push(notes[(chosenNoteIndex + 5) % 12]);
    list.push(notes[(chosenNoteIndex + 7) % 12]);
    list.push(notes[(chosenNoteIndex + 8) % 12]);
    list.push(notes[(chosenNoteIndex + 10) % 12]);
  } else if (scale === "Major") {
    list.push(notes[chosenNoteIndex]);
    list.push(notes[(chosenNoteIndex + 2) % 12]);
    list.push(notes[(chosenNoteIndex + 4) % 12]);
    list.push(notes[(chosenNoteIndex + 5) % 12]);
    list.push(notes[(chosenNoteIndex + 7) % 12]);
    list.push(notes[(chosenNoteIndex + 9) % 12]);
    list.push(notes[(chosenNoteIndex + 11) % 12]);
  } else if (scale === "Chromatic") {
    for (let i = 0; i < 12; i++) {
      list.push(notes[(chosenNoteIndex + i) % 12]);
    }
  }
}

function selectConditions(scale) {
    return [
      `Left hand starts in ${getRandomElement(validNotes)}`,
      `Right hand starts in ${getRandomElement(validNotes)}`,
    ];
}


function randomize() {
  const chosenScale = getRandomElement(Object.keys(scales));
  const chosenNoteIndex = Math.floor(Math.random() * notes.length);
  const chosenNote = notes[chosenNoteIndex];
  validNotes.length = 0;

  pushValidNotes(validNotes, chosenScale, chosenNoteIndex);
  const conditions = selectConditions(chosenScale);

  const exercise_title = chosenScale === "Chromatic" ? `${chosenScale} Scale`
                                                     : `${chosenNote} ${chosenScale} Scale`

  document.getElementById("exercise-title").innerText = exercise_title;
  document.getElementById("conditions-list").innerHTML = conditions.map(c => `<li>${c}</li>`).join(""); 
}


function getRandomElement(array){
  return array[Math.floor(Math.random() * array.length)];
}

// Initial load
randomize();

// Add start from top
// Add contrary/symmtric motion
// 