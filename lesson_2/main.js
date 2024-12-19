export const getLength = (data) => {
  const typeData = typeof data;
  let result;
  if (typeData === "function") {
    result = data.length;
  } else if (typeData === "string") {
    result = data.length;
  } else if (typeData === "object") {
    if (data === null) {
      result = 0;
    } else if (Array.isArray(data)) {
      result = data.length;
    } else if (isSetOrMap(data)) {
      result = data.size;
    } else {
      if (isPsevdoArray(data)) {
        result = data.length;
      } else {
        result = Object.keys(data).length;
      }
    }
  } else {
    result = 0;
  }
  console.log(result);
};

function isPsevdoArray(data) {
  let dataKeys = Object.keys(data);
  if (dataKeys.includes("length")) {
    return dataKeys.every((el) => {
      return Number.isInteger(+el) || el === "length";
    });
  } else {
    return false;
  }
}

function isSetOrMap(data) {
  if (data.constructor === Set || data.constructor === Map) {
    return true;
  } else {
    return false;
  }
}
