
/**
 *  文字列の長さ
 *
 *  lengthをも使わずに引数で渡された文字列の長さを求める関数を定義してください
 *
 *  example:
 *    'banana' => output: 6
 *    'cucumber' => output: 8
 *    '' => output: 0
 *
 */

function length(str) {
  let count = 0;
  for (const char of str) { //文字の数をカウント
    count++;
  }
  return count;
}

/**
 *  文字列の反転
 *
 *  文字列を反転させる関数を実装してください
 *
 *  example:
 *    'library' => 'yrarbil'
 *    'krow' => 'work'
 *    'fizzbuzz' => 'zzubzzif'
 *
 */
function reverse(str) {
  let result = ''; //返却用の空文字
  for (let i = str.length - 1; i >= 0; i--) { //strの末尾から順に文字をresultに入れていく
    result += str[i];
  }
  return result;
}

/**
 *  指定された文字列の位置を返却
 *
 *  指定された文字列の位置を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: 4
 *    'work', w => output: 0
 *    'bicycle', a => output: -1
 *
 */

function findIndex(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) { //str[i]とcharの文字が同じであれば、その要素番号を返す
      return i;
    }
  }
  return -1; //なければ-1を返す
}

/**
 *  指定された文字列を指定された文字で分割
 *
 *  指定された文字列aを指定された一文字bで分割して配列を返却する関数を定義してください
 *
 *  example:
 *    'library', a => output: ['libr', 'ry']
 *    'apple,banana,pineapple', w => output: ['apple', 'banana', 'pineapple']
 *    'bicycle', a => output: ['bicycle']
 *
 */

function split(a, b) {
  const result = []; //返却用の配列
  let position = 0; //文字bの場所用
  for (let i = 0; i < a.length; i++) { //文字列aの長さまで繰り返す
    if (a[i] === b) { //文字列aに文字bと同じ文字があれば
      result.push(a.slice(position, i)); //文字列aの先頭から文字bまでをresultにpushする
      position = i + 1; //文字列aの文字bから末尾までのスタート位置を入れる
    }
  }
  result.push(a.slice(position)); //文字列aの文字bから末尾までをresultにpushする
  return result;
}

//.slice( 開始位置, 終了位置(省略可能) ) 特定の文字列を対象に任意の文字を切り抜く

/**
 *  配列の合計
 *
 *  渡された配列の合計を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 20
 *    [2, 5, 3] => output: 10
 *    [1] => output: 1
 *
 */

function sum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

/**
 *  配列の平均
 *
 *  渡された配列の合計を整数(小数切り捨て)で返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 5
 *    [2, 5, 3] => output: 3
 *    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => output: 5
 *    [1] => output: 1
 *    [] => output: 0
 *
 */

function average(array) {
  if (array.length === 0) {
    return 0;
  }

  //配列内の数字を合計する
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  const result = Math.floor(total / array.length); //合計値を要素数で割りMath.floorで小数点以下を切り捨てる
  return result;
}

/**
 *  配列の結合
 *
 *  渡された二つの配列を連結する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9], [3, 4] => output: [1, 3, 7, 9, 3, 4]
 *    ['h', 'o', 'm', 'e'], ['w', 'o', 'r', 'k'] => output: ['h', 'o', 'm', 'e', 'w', 'o', 'r', 'k']
 *    [], [] => output: []
 *
 */

function concat(a, b) {
  const result = [...a, ...b]; //スプレッド構文
  return result;
}

/**
 *  2.1.2 配列の個数
 *
 *  渡された配列の要素数を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 4
 *    [2, 5, 3] => output: 3
 *    [1] => output: 1
 *
 */

function size(array) {
  return array.length;
}

/**
 *  2.1.3 配列の最大値と最小値
 *
 *  配列の最大値と最小値を出力する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => max: 20, min: 1
 *    [2, 5, 3, 6, 10, -1] => max: 10, min: -1
 *    [1] => max: 1, min: 1
 *    [] => 表示しない
 *
 */

function minMax(array) {
  if (array.length === 0) {
    return;
  } //空なので表示しない

  let max = array[0];
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } //maxとarray[i]を比べて、array[i]のほうが大きければarray[i]をmaxに入れる

    if (array[i] < min) {
      min = array[i];
    } //minとarray[i]を比べて、array[i]のほうが小さければarray[i]をminに入れる
  }

  console.log("max: " + max + ","  + " min: " + min);
}

/**
 *  連番
 *
 *  指定された数字のまでの連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [0, 1, 2, 3, 4]
 *    0 => []
 *
 */

function seq(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(i);
  }
  return result;
}

/**
 *  奇数の連番
 *
 *  指定された数字までの奇数の連番の配列を生成する関数を定義してください
 *
 *  example:
 *    5 => [1, 3, 5]
 *    10 => [1, 3, 5, 7, 9]
 *    0 => []
 *
 */

function omitSeq(num) {
  let result = [];
  for (let i = 1; i <= num; i = i + 2) {
    result.push(i);
  }
  return result;
}


/**
 *  指定された数値以下の配列
 *
 *  指定された数字以下を抜き出した配列を返す関数を定義してください
 *
 *  example:
 *    [1, 7, 5, 4], 3 => [1]
 *    [1, 7, 5, 4], 7 => [1, 7, 5, 4]
 *    [], 7 => []
 *
 */

function filter(array, num) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= num) {
    result.push(array[i]);
    }
  }
  return result;
}


/**
 *  Fizz Buzz
 *
 *  1から100の数字までをカウントして、数字が3の倍数の場合にFizz
 *  5の倍数の場合にBuzz、3と5の倍数の時にFizzBuzzと表示する関数を実装してください。
 *
 *  example:
 *    1
 *    2
 *    3 Fizz
 *    4
 *    5 Buzz
 *    6
 *    7
 *    ..
 *    15 FizzBuzz
 *    ..
 *    18 Fizz
 *    ...
 *    30 FizzBuzz
 *    ...
 */

function fizzBuzz () {
  for (let i = 1; i <= 100; i++) { //1~100まで繰り返す
    if (i % 15 === 0) { //3と5の倍数(15の倍数)であれば、数字とFizzBuzzを表示
      console.log(i + ' FizzBuzz');
    } else if (i % 3 === 0) { //3の倍数であれば、数字とFizzを表示
      console.log(i + ' Fizz');
    } else if (i % 5 === 0) { //5の倍数であれば、数字とBuzzを表示
      console.log(i + ' Buzz');
    } else {
      console.log(i); //それ以外は数字だけを表示
    }
  }
}

module.exports = {
  length,
  reverse,
  findIndex,
  split,
  sum,
  size,
  average,
  size,
  minMax,
  concat,
  seq,
  filter,
  omitSeq,
  fizzBuzz
}
