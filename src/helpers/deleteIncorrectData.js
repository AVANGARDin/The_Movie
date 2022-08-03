export function deleteIncorrectData (data) {
  const result = [];
  data.forEach((item) => {
    const keys = Object.keys(item);
    let checkData = false;
    keys.forEach((key) => {
      if (item[key] === "" || item[key] === null) {
        checkData = true;
      }
    });
    if (checkData) return;
    result.push(item);
  });
  return result;
}