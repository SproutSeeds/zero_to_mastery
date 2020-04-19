const fs = require("fs");

fs.readFile("./directions.txt", (error, data) => {
  console.time("timer");
  if (error) console.log(error);
  const data_array = data.toString().split("");

  const endFloorNumber =
    data_array.filter((value) => "(" === value).length -
    data_array.filter((value) => ")" === value).length;

  const firstBasementIndex = question2(data_array);

  let myAnswer = {
    endFloorNumber: endFloorNumber,
    firstBasementIndex: firstBasementIndex,
  };
  console.log(myAnswer);
  console.timeEnd("timer");
});

function question2(data_array) {
  //   data_array.reduce((prev, value) => console.log(value, prev));
}
