// ГЕНЕРАЦИЯ СЛУЧАЙНОГО ПОЛОЖИТЕЛЬНОГО ЧИСЛА С ПЛАВАЮЩЕЙ ТОЧКОЙ
function getRandomArbitrary(min, max, maxDigits = 0) {
  if (min >= max || min < 0 || max <= 0) {
    return ('NaN');
  }

  const digitsDegree = 10 ** maxDigits;
  return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}
// Источник: https://qna.habr.com/q/999157

// ГЕНЕРАЦИЯ СЛУЧАЙНОГО ЦЕЛОГО ПОЛОЖИТЕЛЬНОГО ЧИСЛА
const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//ПОИСК СЛУЧАЙНОГО ЭЛЕМЕНТА В ПЕРЕДАННОМ МАССИВЕ
const getRandomArrayElement = (elements) => elements[
  getRandomPositiveInteger(0, elements.length - 1)
];

/*
1) Итоговый результат: массив из 10-ти объявлений.
2) Каждое объявление - тоже массив, который состоит из переменных:
    autor, offer и location.
*/

const autor = {
  avatar,
}

    const createAutor = () => {
      let x = getRandomPositiveInteger(1, 10);
      if (x < 10) {
        return autor.avatar = 'img/avatars/user' + '0' + x + '.png';
      } else {
      return autor.avatar = 'img/avatars/user' + x + '.png';
      }
    }

const offer = {
  title: 'Заголовок предложения',
  address,
  price,
  type: [`palace`, `flat`, `house`, `bungalow`, `hotel`],
  rooms,
  guests,
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elewator', 'conditioner'],
  description: 'описание помещения',
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
}

    const createOffer = () => {
      offer.address = [location.lat, location.lng]
      offer.price = getRandomPositiveInteger(100, 500) + '$';
      offer.type = getRandomArrayElement(offer.type);
      offer.rooms = getRandomPositiveInteger(1, 5);
      offer.guests = getRandomPositiveInteger(1, 5);
      offer.checkin = getRandomArrayElement(offer.checkin);
      offer.checkout = getRandomArrayElement(offer.checkout);

      let getFeatures = function() {
        for (let i = getRandomPositiveInteger(1, offer.features.length - 1); i <= offer.features.length - 1; i++) {
          offer.features += offer.features[i];
        }
        return offer.features;
      }

      let getPhotos = function() {
        for (let i = getRandomPositiveInteger(1, offer.photos.length - 1); i <= offer.photos.length - 1; i++) {
          offer.photos += offer.photos[i];
        }
        return offer.photos;
      }

    }

const location = {
  lat: getRandomArbitrary(35.65000, 35.70000, 5),
  lng: getRandomArbitrary(139.70000, 139.80000, 5),
}

const createDescription = () => ({
  autor: createAutor(),
  offer: createOffer(),
  location: [location.lat, location.lng],
});

const similarDescriptions = Array.from({length: 10}, createDescription);
