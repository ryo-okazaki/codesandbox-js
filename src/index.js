/**
 * const, let等の変数宣言
 */

// var val1 = 'var変数';
// console.log(val1);

// // var変数は上書き可能
// val1 = 'var変数上書き'
// console.log(val1);

// // var変数は再宣言可能
// var val1 = 'var変数は再宣言可能';
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// // letは上書き可能
// val2 = 'let変数を上書き';
// console.log(val2);

// // letは再宣言不可能
// let val2 = 'letは再宣言不可能';

// const val3 = 'const変数';
// console.log(val3);

// // const変数は上書き不可能
// val3 = 'const変数上書き';
// console.log(val3);

// // const変数は再宣言不可能
// const val3 = 'const変数を再宣言';

// constのオブジェクトは中身を書き換えられる
// objectを定義するときはconstで定義するようにする
// const val4 = {
//   name: 'aaa',
//   age: 28,
// };
// console.log(val4);
// val4.name = 'bbbb';
// console.log(val4);

// val4.aaa = 'ccc';
// console.log(val4);

// 配列
// constの配列は書き換え可能
const val5 = ["dog", "cat"];
console.log(val5);

val5[0] = "bird";
console.log(val5);

val5.push("monkey");
console.log(val5);

// reactの開発もほとんどconstを使っていく

/**
 * テンプレート文字列
 */
const name = "ryo";
const age = 28;
// 「私の名前はryoです。年齢は28歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};

console.log(func1("func1です。"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です。"));

// 1行で終わる場合はreturnを省略できる
const func3 = (str) => str;

const func4 = (num1, num2) => {
  return num1 + num2;
};

console.log(func4(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  name: "ryo",
  age: 20,
};

const message10 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message10);

const { name1, age1 } = myProfile;
const message11 = `名前は${name1}です。年齢は${age1}です。`;
console.log(message11);

const myProfile1 = ["ryo", 20];

const message12 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}です。`;
console.log(message12);

const [name2, age2] = myProfile1;
const message13 = `名前は${name2}です。年齢は${age2}です。`;
console.log(message13);

/**
 * デフォルト値、引数
 */
const sayHello = (name10 = "ゲスト") =>
  console.log(`こんにちは!${name10}さん!`);
sayHello();

/**
 * スプレッド構文 ...
 * 順番に処理をする
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
console.log(arr1[0], arr1[1]);
console.log(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num10, num11, ...arr3] = arr2;
console.log(num10);
console.log(num11);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// 配列を=でコピーする場合、参照元も影響を受けてしまう。
const arr8 = arr4;
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

/**
 * map、filterを使用した配列の処置
 */
// 従来
const nameArr = ["田中", "山田", "ryo"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// map
const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// filter
const numArr = [1, 2, 3, 4, 5];
const newNumarr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumarr);

const newNameArr2 = nameArr.map((name) => {
  if (name === "ryo") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr2);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの処理 : 条件がfalseの処理
const val1 = 1 < 0 ? "true" : "false";
console.log(val1);

const num30 = "1300";
console.log(num30.toLocaleString());

const formattedNum =
  typeof num30 === "number" ? num30.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味 && ||
 */
// 一般的な使い方
const flg1 = true;
const flg2 = false;

if (flg1 || flg2) {
  console.log("1か2はtrueになります");
}
if (flg1 && flg2) {
  console.log("1も2もtrueになります");
}

// || は左側がfalseなら右側を返す
const num100 = null;
const fee = num100 || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側を返す
const num200 = null;
const fee2 = num200 || "設定済みです";
console.log(fee2);
