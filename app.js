const engContainer = document.querySelector(".eng");
const uzbContainer = document.querySelector(".uzb");
const start = document.querySelector("#start");
const wordsContainer = document.querySelector(".words-list");

const enterBtn = document.getElementById("enter-btn");
const enterBtn1 = document.getElementById("enter1");
const enterBtn2 = document.getElementById("enter2");
const enterBtn3 = document.getElementById("enter3");
const textLevel = document.querySelector("#text-level");
const enterPage = document.querySelector(".enter-page");
const levePage = document.querySelector(".level-page");
const background = document.querySelector(".bg-all");
const randomWord = document.querySelector(".random-word");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const time = document.querySelector(".time");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalTitle = document.querySelector(".modal-title");
const modalTitle2 = document.querySelector(".modal-title2");
const modalTitle3 = document.querySelector(".modal-title3");
const btnModal = document.querySelector("#new-game");
const record = document.querySelector("#record");

const inputVal = document.querySelector("input");
const form = document.querySelector("form");

enterBtn.addEventListener("click", (e) => {
  const audio = new Audio("./misic/good-6081.mp3");
  audio.play();
  e.preventDefault();
  if (inputVal.value == "") {
    inputVal.style.border = "1px solid red";
    setInterval(() => {
      inputVal.style.border = "1px solid chartreuse";
    }, 4000);
  } else {
    levePage.style.display = "block";
    enterPage.style.display = "none";
    background.style.display = "none";
    textLevel.textContent = `Hi ${inputVal.value} enter a level`;
  }
});

const arrUz = [
  {
    uzb: "Olma",
    id: 1,
  },
  {
    uzb: "Salom",
    id: 2,
  },
  {
    uzb: "Kitob",
    id: 3,
  },
  {
    uzb: "Ruchka",
    id: 4,
  },
  {
    uzb: "Kompyuter",
    id: 5,
  },
  {
    uzb: "Sumka",
    id: 6,
  },
  {
    uzb: "Aqilli",
    id: 7,
  },
  {
    uzb: "Bolalar",
    id: 8,
  },
  {
    uzb: "Stul",
    id: 9,
  },
  {
    uzb: "Oyna",
    id: 10,
  },
];
const arrEng = [
  {
    eng: "Apple",
    id: 1,
  },
  {
    eng: "Hello",
    id: 2,
  },
  {
    eng: "Book",
    id: 3,
  },
  {
    eng: "Pen",
    id: 4,
  },
  {
    eng: "Computer",
    id: 5,
  },
  {
    eng: "Bag",
    id: 6,
  },
  {
    eng: "Clever",
    id: 7,
  },
  {
    eng: "Children",
    id: 8,
  },
  {
    eng: "Chair",
    id: 9,
  },
  {
    eng: "Window",
    id: 10,
  },
];
//MEDIUM LIST
const arrUzMedium = [
  {
    uzb: "Telefon",
    id: 1,
  },
  {
    uzb: "Soyabon",
    id: 2,
  },
  {
    uzb: "Krassovka",
    id: 3,
  },
  {
    uzb: "Qalam",
    id: 4,
  },
  {
    uzb: "Gul",
    id: 5,
  },
  {
    uzb: "Olov",
    id: 6,
  },
  {
    uzb: "Yaxshi",
    id: 7,
  },
  {
    uzb: "Yomon",
    id: 8,
  },
  {
    uzb: "Jaxldor",
    id: 9,
  },
  {
    uzb: "Sokin",
    id: 10,
  },
];
const arrEngMedium = [
  {
    eng: "Phone",
    id: 1,
  },
  {
    eng: "Umbrella",
    id: 2,
  },
  {
    eng: "Sneaker",
    id: 3,
  },
  {
    eng: "Pencil",
    id: 4,
  },
  {
    eng: "Flowers",
    id: 5,
  },
  {
    eng: "Fire",
    id: 6,
  },
  {
    eng: "Good",
    id: 7,
  },
  {
    eng: "Bad",
    id: 8,
  },
  {
    eng: "Angry",
    id: 9,
  },
  {
    eng: "Calm",
    id: 10,
  },
];

//HARD LIST
const arrUzHard = [
  {
    uzb: "Osmon",
    id: 1,
  },
  {
    uzb: "Bulut",
    id: 2,
  },
  {
    uzb: "Pol",
    id: 3,
  },
  {
    uzb: "Shift",
    id: 4,
  },
  {
    uzb: "Kvartira",
    id: 5,
  },
  {
    uzb: "Yovvoyi",
    id: 6,
  },
  {
    uzb: "Keng",
    id: 7,
  },
  {
    uzb: "Chumoli",
    id: 8,
  },
  {
    uzb: "Axmoq",
    id: 9,
  },
  {
    uzb: "Suv",
    id: 10,
  },
];
const arrEngHard = [
  {
    eng: "Sky",
    id: 1,
  },
  {
    eng: "Cloud",
    id: 2,
  },
  {
    eng: "Floor",
    id: 3,
  },
  {
    eng: "Ceiling",
    id: 4,
  },
  {
    eng: "Flat",
    id: 5,
  },
  {
    eng: "Wild",
    id: 6,
  },
  {
    eng: "Wide",
    id: 7,
  },
  {
    eng: "Ant",
    id: 8,
  },
  {
    eng: "Stupid",
    id: 9,
  },
  {
    eng: "Water",
    id: 10,
  },
];

let great = 0;
let error = 0;
let timer = 15;
let record0 = 0;

enterBtn1.addEventListener("click", () => {
  const audio = new Audio("./misic/good-6081.mp3");
  audio.play();
  levePage.style.display = "none";
  background.style.display = "block";
  wordsContainer.style.display = "block";
  randomWord.style.display = "block";
  setInterval(() => {
    if (timer !== 0) {
      timer--;
      time.textContent = `Time:${timer < 10 ? "0" + timer : timer}`;
    }
  }, 1000);
  setInterval(() => {
    if (timer === 0) {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      modalTitle.textContent = `Your answers: ${great}`;
      modalTitle2.textContent = `Your errors: ${error}`;
      modalTitle3.textContent = `Your record: ${record0}`;
      const audio = new Audio("./misic/mixkit-sad-game-over-trombone-471.wav");
      audio.play();
    }
    if (timer === 50) {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      modalTitle.textContent = `Your answers: ${great}`;
      modalTitle2.textContent = `Your errors: ${error}`;
      modalTitle3.textContent = `Your record: ${record0}`;
      const audio = new Audio("./misic/success-fanfare-trumpets-6185.mp3");
      audio.play();
    }
    if (timer <= 5) {
      time.style.color = "red";
      const audio = new Audio(
        "./misic/time-passing-sound-effect-fast-clock-108403.mp3"
      );
      audio.play();
    } else {
      time.style.color = "black";
    }
  }, 1000);

  let random = arrEng[Math.floor(Math.random() * arrEng.length)];
  console.log(random);
  randomWord.textContent = random.eng;

  arrUz.forEach((word) => {
    const btnUz = document.createElement("button");
    btnUz.classList.add("button-30");

    btnUz.textContent = word.uzb;

    uzbContainer.appendChild(btnUz);

    btnUz.addEventListener("click", () => {
      if (word.id === random.id) {
        timer += 5;
        time.textContent = timer;
        great++;
        score1.textContent = `Correct answers: ${great}`;
        const audio = new Audio("./misic/wow-113128.mp3");
        audio.play();
        btnUz.style.backgroundColor = "green";
      } else {
        timer--;
        time.textContent = timer;
        error++;
        score2.textContent = `Wrong answers: ${error}`;
        const audio = new Audio("./misic/ooo.mp3");
        audio.play();
        btnUz.style.backgroundColor = "red";
      }
      random = arrEng[Math.floor(Math.random() * arrEng.length)];
      randomWord.textContent = random.eng;
    });
    btnModal.addEventListener("click", () => {
      if (record0 < great) {
        record0 = great;
        record.textContent = record0;
      }
      const audio = new Audio("./misic/good-6081.mp3");
      audio.play();
      timer = 15;
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
      btnUz.style.backgroundColor = "#FCFCFD";
      great = 0;
      error = 0;
      score1.textContent = `Correct answers: ${great}`;
      score2.textContent = `Wrong answers: ${error}`;
      random = arrEng[Math.floor(Math.random() * arrEng.length)];
      randomWord.textContent = random.eng;
    });
  });
});
enterBtn2.addEventListener("click", () => {
  levePage.style.display = "none";
  background.style.display = "block";
  wordsContainer.style.display = "block";
  randomWord.style.display = "block";

  //  TIME
  setInterval(() => {
    if (timer !== 0) {
      timer--;
      time.textContent = `Time: ${timer < 10 ? "0" + timer : timer}`;
    }
    if (timer === 0) {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      modalTitle.textContent = `Your answers: ${great}`;
      modalTitle2.textContent = `Your errors: ${error}`;
      modalTitle3.textContent = `Your record: ${record0}`;
      const audio = new Audio("./misic/mixkit-sad-game-over-trombone-471.wav");
      audio.play();
    }
    if (timer === 40) {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      modalTitle.textContent = `Your answers: ${great}`;
      modalTitle2.textContent = `Your errors: ${error}`;
      modalTitle3.textContent = `Your record: ${record0}`;
      const audio = new Audio("./misic/success-fanfare-trumpets-6185.mp3");
      audio.play();
    }
    if (timer <= 5) {
      time.style.color = "red";
      const audio = new Audio(
        "./misic/time-passing-sound-effect-fast-clock-108403.mp3"
      );
      audio.play();
    } else {
      time.style.color = "green";
    }
  }, 1000);

  let random = arrEngMedium[Math.floor(Math.random() * arrEngMedium.length)];
  console.log(random);
  randomWord.textContent = random.eng;

  arrUzMedium.forEach((word) => {
    const btnUz = document.createElement("button");
    btnUz.classList.add("button-30");

    btnUz.textContent = word.uzb;

    uzbContainer.appendChild(btnUz);

    btnUz.addEventListener("click", () => {
      if (word.id === random.id) {
        timer += 3;
        time.textContent = timer;
        great++;
        score1.textContent = `Correct answers: ${great}`;
        const audio = new Audio("./misic/wow-113128.mp3");
        audio.play();
        btnUz.style.backgroundColor = "green";
      } else {
        timer--;
        time.textContent = timer;
        error++;
        score2.textContent = `Wrong answers: ${error}`;
        const audio = new Audio("./misic/ooo.mp3");
        audio.play();
        btnUz.style.backgroundColor = "red";
      }

      random = arrEngMedium[Math.floor(Math.random() * arrEngMedium.length)];
      randomWord.textContent = random.eng;
    });

    btnModal.addEventListener("click", () => {
      if (record0 < great) {
        record0 = great;
        record.textContent = record0;
      }

      timer = 15;
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
      btnUz.style.backgroundColor = "#FCFCFD";
      great = 0;
      error = 0;
      score1.textContent = `Correct answers: ${great}`;
      score2.textContent = `Wrong answers: ${error}`;
      random = arrEngMedium[Math.floor(Math.random() * arrEngMedium.length)];
      randomWord.textContent = random.eng;
    });
  });
});

enterBtn3.addEventListener("click", () => {
  levePage.style.display = "none";
  background.style.display = "block";
  wordsContainer.style.display = "block";
  randomWord.style.display = "block";

  //  TIME
  setInterval(() => {
    if (timer !== 0) {
      timer--;
      time.textContent = `Time: ${timer < 10 ? "0" + timer : timer}`;
    }
    if (timer === 0) {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      modalTitle.textContent = `Your answers: ${great}`;
      modalTitle2.textContent = `Your errors: ${error}`;
      modalTitle3.textContent = `Your record: ${record0}`;
      const audio = new Audio("./misic/mixkit-sad-game-over-trombone-471.wav");
      audio.play();
    }
    if (timer === 30) {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
      modalTitle.textContent = `Your answers: ${great}`;
      modalTitle2.textContent = `Your errors: ${error}`;
      modalTitle3.textContent = `Your record: ${record0}`;
      const audio = new Audio("./misic/success-fanfare-trumpets-6185.mp3");
      audio.play();
    }
    if (timer <= 5) {
      time.style.color = "red";
      const audio = new Audio(
        "./misic/time-passing-sound-effect-fast-clock-108403.mp3"
      );
      audio.play();
    } else {
      time.style.color = "green";
    }
  }, 1000);

  let random = arrEngHard[Math.floor(Math.random() * arrEngHard.length)];
  console.log(random);
  randomWord.textContent = random.eng;

  arrUzHard.forEach((word) => {
    const btnUz = document.createElement("button");
    btnUz.classList.add("button-30");
    btnUz.textContent = word.uzb;
    uzbContainer.appendChild(btnUz);
    btnUz.addEventListener("click", () => {
      if (word.id === random.id) {
        timer += 1;
        time.textContent = timer;
        great++;
        score1.textContent = `Correct answers: ${great}`;
        const audio = new Audio("./misic/wow-113128.mp3");
        audio.play();
        btnUz.style.backgroundColor = "green";
      } else {
        timer--;
        time.textContent = timer;
        error++;
        score2.textContent = `Wrong answers: ${error}`;
        const audio = new Audio("./misic/ooo.mp3");
        audio.play();
        btnUz.style.backgroundColor = "red";
      }

      random = arrEngHard[Math.floor(Math.random() * arrEngHard.length)];
      randomWord.textContent = random.eng;
    });

    btnModal.addEventListener("click", () => {
      if (record0 < great) {
        record0 = great;
        record.textContent = record0;
      }
      timer = 15;
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
      btnUz.style.backgroundColor = "#FCFCFD";
      great = 0;
      error = 0;
      score1.textContent = `Correct answers: ${great}`;
      score2.textContent = `Wrong answers: ${error}`;
      random = arrEngHard[Math.floor(Math.random() * arrEngHard.length)];
      randomWord.textContent = random.eng;
    });
  });
});
