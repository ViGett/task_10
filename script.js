/*
1) Сделайте асинхронную загрузку трёх изображений, и когда они прогрузятся все 3, сообщить об этом в консоли: «Загрузка 3-х изображений завершена».
Примечание: для тестов можете воспользоваться ссылками https://srs.myrusakov.ru/images/php7-cover.png, https://srs.myrusakov.ru/images/python-cover.png и https://srs.myrusakov.ru/images/makeup2-cover.png.
*/

async function loadImg(src) {
    let img = document.createElement('img');
    img.src = src;
    document.body.append(img);
}

let s = 0;
function counter () {
    s++;
    if (s == 3) console.log('Загрузка 3-х изображений завершена');
}

document.addEventListener('DOMContentLoaded', function() {

    let url = [
        'https://srs.myrusakov.ru/images/php7-cover.png',
        'https://srs.myrusakov.ru/images/python-cover.png',
        'https://srs.myrusakov.ru/images/makeup2-cover.png'
    ];

    for (let u of url) loadImg(u).then(counter);
})
