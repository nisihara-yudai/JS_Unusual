// try {
  // console.log("try節:この行は実行されます");
  // greeting();
  // undefinedFunction();
  // console.log("try節:この行は実行されません");
// }
// catch (error) {
  // console.log("try節:この行は実行されます");
  // const name = "西原雄大";
//   console.log(error);
// }
// finally {
//   // console.log("finally節:この行は実行されます");
// }

try {
  greeting;
} catch (e) {
  alert("エラーが発生しました。");
} finally {
  alert("プログラムを終了します。");
}

function div(a, b) {
  try {
    if (a === 0 || b === 0) {
      throw "ZeroDivision";
    } else if (isNaN(a) || isNaN(b)) {
      throw "nan";
    } else {
      alert(a / b);
    }
  } catch(error) {
    if (error == "ZeroDivision") {
      alert("0で除算した為終了します。");
    }
    if (error == "nan") {
      alert("数値以外で除算した為終了します");
    }
  }
}

// div(10, 2); //5
// div(4, 0); // 「0で除算した為終了します。」
// div(4, "f"); //「数値以外で除算した為終了します。」