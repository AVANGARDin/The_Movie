export function checkData(data) {
  const result = [];
  data.forEach((item) => {
    const keys = Object.keys(item);
    let checkData = false;
    keys.forEach((key) => {
      console.log(data);
      if (item[key] === "" || item[key] === null) {
        checkData = true;
      }
    });
    console.log(checkData)
    if (checkData) return;
    result.push(item);
  });
  return result;
}