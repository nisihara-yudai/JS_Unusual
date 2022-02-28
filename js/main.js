try {
  // console.log("try節:この行は実行されます");
  var greeting = "こんにちは、" + name + "です";
  // console.log(greeting);
  // undefinedFunction();
  // console.log("try節:この行は実行されません");
}
catch (error) {
  // console.log("try節:この行は実行されます");
  const name = "西原雄大";
  console.log(greeting);
}
// finally {
//   // console.log("finally節:この行は実行されます");
// }