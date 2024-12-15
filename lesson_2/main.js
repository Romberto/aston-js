const getLength = (data) => {
  const typeData = typeof data;

  if (typeData === "string") {
    return data.length;
  }
  if (typeData === "number" || typeData === "bigint") {
    return data.toString().length;
  }
  if (typeData === "object") {
    if (Array.isArray(data)) {
      return data.length;
    } else {
      return Object.keys(data).length;
    }
  }
  return 0
  
};

data = [true, false, [10, 23, 24], {'35345': '2342', "erwe": 2354}, undefined, 'test', 'test1', 12n,12,'foo']

data.forEach(element => {
    console.log(typeof element,  getLength(element))
});