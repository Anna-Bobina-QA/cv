/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('«Тот человек, которого ты любишь во мне, конечно, лучше меня: я не такой. Но ты люби, а я постараюсь быть лучше себя»')
})