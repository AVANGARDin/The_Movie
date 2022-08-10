export function deleteIncorrectData (data) {
  const result = [];
  data.forEach((item) => {
    const keys = Object.keys(item);
    let checkData = false;
    keys.forEach((key) => {
      if (item[key] === "" || item[key] === null || item[key].length === 0) {
        checkData = true;
      }
    });
    if (checkData) return;
    result.push(item);
  });
  return result;
}