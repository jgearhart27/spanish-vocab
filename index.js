const words = [
  { spanish: "hola", english: "hello" },
  { spanish: "adios", english: "goodbye" },
  { spanish: "gracias", english: "thank you" },
  { spanish: "por favor", english: "please" },
  { spanish: "me llamo...", english: "my name is..." },
  { spanish: "como te llamas?", english: "what is your name?" },
  { spanish: "donde esta...?", english: "where is..." },
  { spanish: "el baño", english: "the bathroom" },
  { spanish: "el bus", english: "the bus" },
  { spanish: "vamos!", english: "let's go!" },
  { spanish: "la comida", english: "the food" },
  { spanish: "la ropa", english: "the food" },
  { spanish: "con", english: "with" },
  { spanish: "si", english: "yes" },
  { spanish: "no", english: "no" },
  { spanish: "es", english: "it is" },
  { spanish: "yo", english: "I/me" },
  { spanish: "tu", english: "you" },
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
  { spanish: "ser (yo soy, tu eres)", english: "to be (permanently)" },
  { spanish: "estar (yo estoy, tu estas)", english: "to be (temporary)" },
  { spanish: "estoy bien, gracias. Y tu?", english: "I am good, and you?" },
  { spanish: "de donde eres?", english: "where are you from?" },
  { spanish: "soy de los estados unidos", english: "I am from the USA" },
  { spanish: "aprender (yo aprendo, tu aprendes)", english: "to learn" },
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
  { spanish: "viajar (yo viajo, tu viajas)", english: "to travel" },
  { spanish: "comprar (yo compro, tu compras", english: "to buy" },
  { spanish: "tener (yo tengo, tu tienes)", english: "to have" },
  { spanish: "hacer (yo hago, tu haces)", english: "to make/to do" },
  { spanish: "entender (yo entiendo, tu entiendes)", english: "to understand" },
  { spanish: "ir (yo voy, tu vas)", english: "to go" },
  { spanish: "no entiendo", english: "i don't understand" },
  { spanish: "que?", english: "what?" },
  { spanish: "comer (yo como, tu comes)", english: "to eat" },
  { spanish: "beber (yo bebo, tu bebes)", english: "to drink" },
  { spanish: "hay", english: "to there is/there are" },
  { spanish: "saber (yo se, tu sabes)", english: "to know" },
  { spanish: "no se", english: "I don't know" },
  { spanish: "querer (yo quiero, tu quieres)", english: "to want" },
  { spanish: "vivir (yo vivo, tu vives)", english: "to live" },
  { spanish: "que es eso?", english: "what is this/that?" },
  { spanish: "creer (yo creo, tu crees)", english: "to believe" },
  { spanish: "creo que si", english: "I think so" },
  { spanish: "yo creo en Jesus", english: "I believe in Jesus" },
  {
    spanish: "conocer (yo conozco, tu conoces)",
    english: "to know (a person, place or thing)",
  },
  { spanish: "Conozco el pastor bien", english: "I know the pastor well" },
  { spanish: "el pastor", english: "the pastor" },
  { spanish: "la iglesia", english: "the church" },
  { spanish: "la gente", english: "the people" },
  { spanish: "la cruz", english: "the cross" },
  { spanish: "morir (yo muero, tu mueres)", english: "to die" },
  { spanish: "Jesus morio en la cruz", english: "Jesus died on the cross" },
  { spanish: "los pecados", english: "the sins" },
  { spanish: "... por nuestros pecados", english: "...for our sins" },
  {
    spanish: "entonces el resucito de entre los muertos ",
    english: "then he rose from the dead",
  },
  {
    spanish: "ahora estamos libres de nuestros pecados",
    english: "now we are free from our sins",
  },
  {
    spanish: "quieres conocer a Jesus como tu salvador?",
    english: "do you want to know Jesus as your savior?",
  },
  { spanish: "la esperanza", english: "the hope" },
  { spanish: "decir (yo digo, tu dices)", english: "to tell" },
  { spanish: "la gracia", english: "the grace" },
  { spanish: "la biblia", english: "the bible" },
  { spanish: "tienes una bibla?", english: "do you have a bible?" },
  { spanish: "orar (yo oro, tu oras)", english: "to pray" },
  { spanish: "oramos", english: "let's pray" },
  { spanish: "Puedo orar por ti?", english: "can I pray for you?" },
  { spanish: "seguir (yo sigo, tu sigues)", english: "to follow" },
  { spanish: "quiero seguir a Jesus", english: "I want to follow Jesus" },
  { spanish: "sentir (yo siento, tu sientes)", english: "to feel" },
  { spanish: "escribir (yo escribo, tu escribes)", english: "to write" },
  { spanish: "volver (yo vuelvo, tu vuelves)", english: "to return/go back" },
  { spanish: "mirar (yo miro, tu miras)", english: "to watch/look at" },
  {
    spanish: "esperar (yo espero, tu esperas)",
    english: "to wait for/hope for",
  },
  { spanish: "jugar (yo juego, tu juegas)", english: "to play" },
  { spanish: "te gusta jugar futbol?", english: "do you like to play soccer?" },
  { spanish: "tocar (yo toco, tu tocas)", english: "to play/touch" },
  { spanish: "yo toco la guitarra", english: "I play the guitar" },
  { spanish: "musica de adoracion", english: "worship music" },
  { spanish: "escuchar (yo escucho, tu escuchas", english: "to listen" },
  {
    spanish: "vamos a escuchar musica de adoracion",
    english: "let's listen to worship music",
  },
  { spanish: "vas a la iglesia?", english: "do you go to church?" },
  {
    spanish: "nuestra iglesia se llama La Vid",
    english: "our church is called La Vid",
  },
  {
    spanish: "tenemos servicos los domingos",
    english: "we have services on Sundays",
  },
  { spanish: "Dios/El Señor", english: "God/The Lord" },
  { spanish: "Jesus Cristo", english: "Jesus Christ" },
  { spanish: "El Espiritu Santo", english: "The Holy Spirit" },
];

let currentIndex = 0;
let spanishFirst = true;

const flashcard = document.getElementById("flashcard");
const front = document.getElementById("front");
const back = document.getElementById("back");
const toggleMode = document.getElementById("toggleMode");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const randomButton = document.getElementById("random");

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
  toggleMode.textContent = spanishFirst ? "English" : "Spanish";
  flashcard.classList.remove("flipped");
  loadCard();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % words.length;
  flashcard.classList.remove("flipped");
  setTimeout(loadCard, 300);
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    flashcard.classList.remove("flipped");
    setTimeout(loadCard, 300);
  }
});

randomButton.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * words.length);
  flashcard.classList.remove("flipped");
  loadCard();
});
loadCard();
