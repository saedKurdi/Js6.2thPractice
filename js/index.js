let currentIndex = 0;

let hasOutAdded = false;

function addOrRemoveAnimationClass(tag){
    if(hasOutAdded){
        tag.classList.remove("animate__fadeOut");
        tag.classList.add("animate__fadeIn");
    }else{
        tag.classList.remove("animate__fadeIn");
        tag.classList.add("animate__fadeOut");
    }
    hasOutAdded = !hasOutAdded;
}



// Автоматическая прокрутка слайдов - Создайте слайд-шоу на веб-странице,
// который автоматически прокручивает слайды с картинками через определенные
// промежутки времени, используя `setInterval`.
let imgArr = ['./images/castle.jpeg','./images/flamingo.jpeg','./images/paris.jpeg','./images/pizza.jpeg','./images/sea.jpeg'];
let imageSlide = document.querySelector(".image-slide");
setInterval(() => {
    imageSlide.src = imgArr[currentIndex];
    addOrRemoveAnimationClass(imageSlide);
    currentIndex += 1;
    if(currentIndex == imgArr.length) currentIndex = 0;
}, 1000);



// Показ случайных цитат - Напишите программу, которая показывает случайную
// цитату через определенные интервалы времени, используя setInterval. Также добавьте
// смены стилей при смене цитаты ( цвет заднего фона,текста и тд )
// const quotes = [
//     {writer:"Анатолий Виноградов",writing:"Настоящий герой, слав, это не тот,кто в сияющих доспехах и красивой позе. Герой-тот кто делает что нужно сделать. И запачкаться приходится, и кровь проливать,а он всё ровно делает,потому что так надо."},
//     {writer:"Virginia Woolf",writing:"You cannot find peace by avoiding life"},
//     {writer:"George Eliot",writing:"The strongest principle of growth lies in the human choice"},
//     {writer:"Emily Dickinson",writing:"Unable are the loved to die for love is immortality"},
//     {writer:"Oscar Wilde",writing:"To live is the rarest thing in the world. Most people exist, that is all"}
// ];

// let quote = document.querySelector(".quote");
// let quote__writer = document.querySelector(".quote__writer");
// let quote__writing = document.querySelector(".quote__writing");

// setInterval(() => {
//     quote__writer.textContent = quotes[currentIndex].writer;
//     quote__writing.textContent = quotes[currentIndex].writing;
//     addOrRemoveAnimationClass(quote);
//     currentIndex += 1;
//     if(currentIndex == quotes.length) currentIndex = 0;
// }, 2000);


// Таймер обратного отсчета - Создайте таймер обратного отсчета, который
// отображает сколько времени осталось до определенного события. Также добавьте
// поля ввода времени для начала отсчета
// let text = document.querySelector(".text");
// let clear;
// function start(){
//     clearInterval(clear);
//     let input = document.querySelector(".timer");
//     if(input.value < 1){
//         alert("Minimum value must be 1 second !");
//         return;
//     }else{
//         let copy = input.value;
//         clear = setInterval(() => {
//             if(copy == 0) {
//                 clearInterval(clear);
//                 input.value = "";
//             };
//             text.textContent = copy--;
//         }, 1000);
//     }
// }