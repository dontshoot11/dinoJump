import {jump, goRight, goLeft} from "./movement.js"

function speechInit() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "ru-RU";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
        let interim_transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          let result = event.results[i];
          const lastWord = result[0].transcript.split(" ").pop()
          if (result.isFinal) {
           // transcript += result[0].transcript;
          } else {
              console.log(lastWord)
              resultHandler(lastWord)
          }
        }
        console.log(interim_transcript);
  
        //handler(interim_transcript);
      };

      document.querySelector('.speech').addEventListener('click', ()=> {
          recognition.start()
      })
}

const resultHandler = function (result) {
    if (result.includes('прыжок')) {
        jump();
} else if (result.includes('вперёд')) {
goRight();
} else if (result.includes('назад')) {
    goLeft();
    }
}

export {speechInit}