const words = [
  { spanish: "hola", english: "hello" },
  { spanish: "adios", english: "goodbye" },
  { spanish: "gracias", english: "thank you" },
  { spanish: "por favor", english: "please" },
  { spanish: "de", english: "of/from" },
  { spanish: "el/la/los/las", english: "the" },
  { spanish: "que", english: "that/which" },
  { spanish: "en", english: "in/on" },
  { spanish: "y", english: "and" },
  { spanish: "a", english: "to/at" },
  { spanish: "un/una", english: "a/an" },
  { spanish: "por", english: "by/for/through" },
  { spanish: "con", english: "with" },
  { spanish: "si", english: "yes" },
  { spanish: "no", english: "no" },
  { spanish: "es", english: "it is" },
  { spanish: "de nada", english: "you're welcome" },
  { spanish: "buenos dias", english: "good morning" },
  { spanish: "amigo", english: "friend" },
  { spanish: "buenos tardes", english: "good afternoon" },
  { spanish: "buenas noches", english: "good evening" },
  { spanish: "antes", english: "before" },
  { spanish: "despues", english: "after" },
  { spanish: "uno momento", english: "one moment" },
  { spanish: "me gusta", english: "I like" },
  { spanish: "no me gusta", english: "I don't like" },
  { spanish: "muy", english: "very" },
  { spanish: "mucho", english: "a lot/much" },
  { spanish: "ser", english: "to be (permanently)" },
  { spanish: "estar", english: "to be (temporary)" },
  { spanish: "estoy bien, gracias. Y tu?", english: "I am good, and you?" },
  { spanish: "de donde eres?", english: "where are you from?" },
  { spanish: "soy de los estados unidos", english: "I am from the USA" },
  { spanish: "aprender", english: "to learn" },
  { spanish: "espanol", english: "spanish" },
  { spanish: "ingles", english: "english" },
  { spanish: "porque", english: "why/because" },
  {
    spanish: "porque estas aprendiendo el espanol?",
    english: "why are you learning Spanish?",
  },
  {
    spanish: "estoy aprendiendo el espanol porque me gusta la cultura",
    english: "I am learning Spanish because I love the culture",
  },
  { spanish: "viajar", english: "to travel" },
  { spanish: "comprar", english: "to buy" },
  { spanish: "tener", english: "to have" },
  { spanish: "hacer", english: "to make/to do" },
  { spanish: "entender", english: "to understand" },
  { spanish: "ir", english: "to go" },
  { spanish: "no entiendo", english: "i don't understand" },
  { spanish: "que?", english: "what?" },
  { spanish: "comer", english: "to eat" },
  { spanish: "beber", english: "to drink" },
  { spanish: "hablar", english: "to speak" },
];

let currentIndex = 0;
let spanishFirst = true;

const flashcard = document.getElementById("flashcard");
const front = document.getElementById("front");
const back = document.getElementById("back");
const toggleMode = document.getElementById("toggleMode");
const nextButton = document.getElementById("next");

function loadCard() {
  if (spanishFirst) {
    front.textContent = words[currentIndex].spanish;
    back.textContent = words[currentIndex].english;
  } else {
    front.textContent = words[currentIndex].english;
    back.textContent = words[currentIndex].spanish;
  }
}
flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
  setTimeout(() => {
    if (flashcard.classList.contains("flipped")) {
      front.textContent = words[currentIndex].english;
    } else {
      front.textContent = words[currentIndex].spanish;
    }
  }, 300);
});

toggleMode.addEventListener("click", () => {
  spanishFirst = !spanishFirst;
  toggleMode.textContent = spanishFirst ? "Spanish First" : "English First";
  flashcard.classList.remove("flipped");
  loadCard();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % words.length;
  flashcard.classList.remove("flipped");
  setTimeout(loadCard, 300);
});
loadCard();
