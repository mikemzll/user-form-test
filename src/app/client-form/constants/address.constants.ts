const countryOptionList = [{
  name: 'Україна',
  type: 'ua'
}, {
  name: 'Польща',
  type: 'pl'
}];

const countries = {
  ua: 'Україна',
  pl: 'Польща'
}

const cityOptions = {
  ua: [{
      name: 'Київ',
      type: 'kyiv'
    }, {
      name: 'Харків',
      type: 'kharkiv'
    }, {
      name: 'Одеса',
      type: 'odesa'
    }, {
      name: 'Дніпро',
      type: 'dnipro'
    }, {
      name: 'Донецьк',
      type: 'donetsk'
    }, {
      name: 'Запоріжжя',
      type: 'zaporizhzhia'
    }],
  pl: [{
      name: 'Варшава',
      type: 'warszawa'
    }, {
      name: 'Краків',
      type: 'krakow'
    }, {
      name: 'Лодзь',
      type: 'lodz'
    }, {
      name: 'Вроцлав',
      type: 'wroclaw'
    }, {
      name: 'Познань',
      type: 'poznan'
    }, {
      name: 'Ґданськ',
      type: 'gdansk'
    }],
};

const cities = {
  kyiv: 'Київ',
  kharkiv: 'Харків',
  odesa: 'Одеса',
  dnipro: 'Дніпро',
  type: 'dnipro',
  donetsk: 'Донецьк',
  zaporizhzhia: 'Запоріжжя',
  warszawa: 'Варшава',
  krakow: 'Краків',
  lodz: 'Лодзь',
  wroclaw: 'Вроцлав',
  poznan: 'Познань',
  gdansk: 'Ґданськ',
};

export const ADDRESS = {
  countryOptionList,
  cityOptions,
  countries,
  cities
}