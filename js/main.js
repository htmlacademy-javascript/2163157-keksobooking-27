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


const createAuthor = () => {
  const authorId = getRandomPositiveInteger(1, 10);
  return {
    avatar: `img/avatars/user${authorId < 10 ? '0' : ''}${authorId}.png`
  }
}


const randomArray = (array) => {
  let randomLength = getRandomPositiveInteger(1, array.length);
  let randomElement = getRandomPositiveInteger(1, randomLength);
  let result = [];

  for (let i = randomElement; i <= randomLength; i++) {
      result.push(array[i])
  }

  return array;
}


const createOffer = () => {
  let type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  let checkin = ['12:00', '13:00', '14:00'];
  let checkout = ['12:00', '13:00', '14:00'];
  let features = ['wifi', 'dishwasher', 'parking', 'washer', 'elewator', 'conditioner'];
  let photos = [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
      ];
  const getAddress = createLocation();
  const getPrice = getRandomPositiveInteger(100, 500);
  const getType = randomArray(type);
  const getRooms = getRandomPositiveInteger(1, 5) + ' rooms';
  const getGuests = getRandomPositiveInteger(1, 5) + ' guests';
  const getCheckin = getRandomArrayElement(checkin);
  const getCheckout = getRandomArrayElement(checkout);
  const getFeatures = randomArray(features);
  const getPhotos = randomArray(photos);
    return {
      title: 'Заголовок предложения',
      address: getAddress,
      price: getPrice + '$',
      type: getType,
      rooms: getRooms,
      guests: getGuests,
      checkin: getCheckin,
      checkout: getCheckout,
      features: getFeatures,
      description: 'описание помещения',
      photos: getPhotos,
    }
  }

const createLocation = () => {
  lat = getRandomArbitrary(35.65000, 35.70000, 5);
  lng = getRandomArbitrary(139.70000, 139.80000, 5);
  return {lat, lng};
}

const createDescription = () => ({
  autor: createAuthor(),
  offer: createOffer(),
  location: createLocation(),
});

const createBigMassive = () => {
  let bigMassive = [];
  for (let i = 1; i <= 10; i++) {
    bigMassive.push(createDescription());
  }
  return bigMassive;
}

createBigMassive();
