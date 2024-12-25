`Структура данных массив включает в себя такие структуры данных как : стек, очередь и свазный список.`;

const obj = { item: "some value" };

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

logger.call(obj);
logger.apply(obj);
const someLogger = logger.bind(obj);
