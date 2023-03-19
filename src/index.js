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
const val5 = ['dog', 'cat'];
console.log(val5);

val5[0] = 'bird';
console.log(val5);

val5.push('monkey');
console.log(val5);

// reactの開発もほとんどconstを使っていく


/**
 * テンプレート文字列
 */
const name = 'ryo';
const age = 28;
// 「私の名前はryoです。年齢は28歳です。」

// 従来の方法
const message1 = '私の名前は' + name + 'です。年齢は' + age + 'です。';
console.log(message1);

// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);