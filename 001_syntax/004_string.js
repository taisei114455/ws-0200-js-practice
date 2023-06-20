/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  return str.length;
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  return str.length % 2 === 0;

}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {

  if (str.length === 0) {
    return "";
  } else {
    return str[0];
  }
}


/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  if (str.length === 0) {
    return "";
  } else {
    return str[str.length - 1];
  }
}

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  if (a < 1) {
    a = 1;
  }  // aが0以下の場合、0文字目以下の文字は存在しないので、1にしておく
  
  if (b > str.length) {
    b = str.length;
  }  // bがstrの文字列の長さを超えている場合、最大値であるstrの文字列の長さに合わせる
  
  if (a > b) {
    return "";
  }  // a > b は成立しないので、何も返さない

  let result = "";

  for (let i = a - 1; i <= b - 1; i++) {
    result += str[i];
  }  // a文字目~b文字目までの文字をresultに入れていく

  return result;
}

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

function isInclude(a, b) {
  for (let i = 0; i <= a.length - b.length; i++) {  // a[]のスタート位置を変えていく
    let result = true;

    for (let j = 0; j < b.length; j++) {

      if (a[i + j] !== b[j]) {  //　a[]とb[]の文字の比較、a[]とb[]が等しくなければ
        result = false;  
        break;  //　内側のループから抜け出す
      }
    }

    if (result == true) {
      return true;
    }
  }
  return false;  //それ以外であればfalseを返す
}

/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

function printByChar(str) {
  for (let i = 0; i < str.length; i++) {  // strの長さまでiを一つずつ増やしていく
    console.log(str[i]);  // iを一つずつ出力
  }
}


module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar
}
