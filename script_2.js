/*
<<<<<<<<<<<<<<<<<<<< Записать через Promise >>>>>>>>>>>>>>>>>>>

1) С помощью Promise  обработайте загрузку изображения. То есть необходимо будет создать элемент img через JavaScript и настроить ему атрибут src.
2) Сразу после загрузки изображения выведите в консоль «Загрузка завершена». При неудачной загрузке выведите в консоль «Ошибка загрузки».
Примечание: можете воспользоваться ссылкой https://srs.myrusakov.ru/images/php7-cover.png, также обязательно попробуйте несуществующий адрес, чтобы проверить обработку ошибки.
*/

document.addEventListener('DOMContentLoaded', () => {

    let img = document.createElement('img');

    let prom = new Promise (function(resolve, reject) {
        img.src = 'https://srs.myrusakov.ru/images/php7-cover.png';
        resolve(img);
    });

    prom.then(
        result => {
            console.log('Загрузка завершена');
            document.body.append(img);
        },
        error => console.log('Ошибка загрузки')
    );
});
