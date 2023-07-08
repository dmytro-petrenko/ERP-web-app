export function splitObjectToArrayObj(data) {
  const showDataArr = [];
  Object.keys(data).forEach((item) => {
    let resObj = {};
    resObj[item] = data[item];

    showDataArr.push(resObj);
  });
  return showDataArr;
}