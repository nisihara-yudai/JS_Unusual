try {
  // console.log("try節:この行は実行されます");
  greeting();
  // undefinedFunction();
  // console.log("try節:この行は実行されません");
}
catch (error) {
  // console.log("try節:この行は実行されます");
  // const name = "西原雄大";
  console.log(error);
}
// finally {
//   // console.log("finally節:この行は実行されます");
// }