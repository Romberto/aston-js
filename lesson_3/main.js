// создание  объектов

class Counter {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}
let counterInit = {
  first: {
    name: "Mike",
    age: 28,
    address: {
      town: "Moscow",
      index: {
        id: 345,
        artik: 3,
      },
    },
  },
  second: ["HTML", "CSS", "Python"],
};

let counter = {};
let counter_1 = new Object();
let counter_2 = Object.create({});
let counter_3 = new Counter(1, 4);
let counter_4 = Object.assign(
  {},
  {
    first: 1,
    second: 5,
  }
);
let counter_5 = { ...counter_4 };

// копирование объектов

let counter_6 = Object.assign({}, counterInit);
let counter_7 = { ...counterInit };
let counter_8 = _.assign({}, counterInit);
let counter_9 = JSON.parse(JSON.stringify(counterInit));

class Copy {
  copy() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

class CounterTwo extends Copy {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
}

let counter_10 = new CounterTwo("Alex", 34).copy();

export function getCopyObject(obj) {
  let result = {};
  let objectKeys = Object.keys(obj);
  objectKeys.forEach((element) => {
    if (typeof obj[element] === "object") {
      result[element] = JSON.parse(JSON.stringify(obj[element]));
    } else {
      result[element] = obj[element];
    }
  });
  return result;
}

// реверс строки

export function reverseStr(str) {
  return str.split(",").reverse().join();
}

// сравнение двух объектов

export const deepEqual = (obj1, obj2) => {
  _.isEqual(obj1, obj2);
};

