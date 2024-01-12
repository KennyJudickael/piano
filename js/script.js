let init = () => {
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 7; j++) {
      let key = createKey("white");
    }
  }
};

let createKey = (type, note, octave) => {
  let key = document.createElement("button");
  key.className = `piano__key piano__key--${type}`;
  key.dataset.letterNote =
    type == "white" ? note + octave : note + "#" + octave;

  key.dataset.letterNoteFileName =
    type == "white" ? note + octave : note + "b" + octave;

  key.textContent = key.dataset.letterNote;

  return key;
};
