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
  name: 'ryo',
  age: 20,
};

const message10 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message10);

const { name1, age1 } = myProfile
const message11 = `名前は${name1}です。年齢は${age1}です。`;
console.log(message11);

const myProfile1 = ['ryo', 20];

const message12 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}です。`;
console.log(message12);

const [name2, age2] = myProfile1;
const message13 = `名前は${name2}です。年齢は${age2}です。`;
console.log(message13);


/**
 * デフォルト値、引数
 */
const sayHello = (name10 = 'ゲスト') => console.log(`こんにちは!${name10}さん!`);
sayHello();