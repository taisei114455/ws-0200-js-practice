/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  //numがstrの文字列の長さ内になるようにする
  num = num % str.length;

  //負のnumを正にする
  if (num < 0) {
    num = str.length + num;}

    //文字列の長さをnumで引いた位置から末尾まで
    let result1 = str.slice(str.length - num); 
    
     //文字列の先頭から文字列の長さをnumで引いた位置まで
    let result2 = str.slice(0, str.length - num);
    return result1 + result2;
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */

function removeVowels(str) {
  const vowels = { a: true ,i: true, u: true, e: true, o: true }; 

  let res = ""
  for(let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase()
      if (!vowels[char]) {
          res += char
      }
  }

  return res;
}

/*function removeVowels(str) {
  //文字列を配列に変える
  let array = [...str];

  //消したい文字
  let vowels = ['a','i','u','e','o','A','I','U','E','O']; 

  //array内でvowelsにある文字を削除する
  let result = array.filter(function(sakujo) {
    return ! vowels.includes(sakujo);
  });

  //配列を文字列に戻す
  return result.join('');
}*/

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  //s1,s2のどちらか一つでも空であれば0を返す
  if (!s1 || !s2) {
    return 0;
  }

  // カウント用
  let count = 0;
  // 検索を開始する位置
  let index = 0;
  
  // indexOfの戻り値が-1でない場合、（s2がs1の中で見つかる限り）ループ
  while ((index = s1.indexOf(s2, index)) !== -1) {
    // 見つかった場合１つずつ増やす
    count++;
    // 検索の位置をs2の文字数分ずらす
    index += s2.length;
  }

  return count;
}

// 文字列.indexOf(検索文字列 [, 開始インデックス])

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
 // 文字列の長さ
 const len = str.length;

 // 文字列の前半部分（len / 2まで）をループして、文字列の先頭から始まる文字と対応する文字を末尾から比較
 for (let i = 0; i < len / 2; i++) {

     // 一致しなければfalseを返す
     if (str[i] !== str[len - 1 - i]) {
         return false;
     }
 }
 // ループで一致しない箇所がなければtrue
 return true;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */

function isPrime(num) {
  //1は素数でないのでfalseを返す
  if (num === 1) {
    return false;
  }

  //2は素数なのでtrueを返す
  if(num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false
  }
  
  for (i = 3; i < Math.sqrt(num); i = i + 2) {
    //iで割り切れたらfalse
    if (num % i === 0) {
      return false;
    }
  }
    
  return true
}

/*
function isPrime(num) {

  //1は素数でないのでfalseを返す
  if (num === 1) {
    return false;

    //2は素数なのでtrueを返す
    } else if(num === 2) {
    return true;

    } else {
    for (i = 2; i < num; i++) {

      //iで割り切れたらfalse
      if (num % i === 0) {
        return false;
      
      //i + 1してnumと同じであればtrue、同じで無ければループに戻る
      } else if (i + 1 === num) {
        return true;
      }
    }
  }
}
*/

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */

function sumWithout4andNext(array) {
  // 返却用
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    // array[i]が4のときは、resultに足さずにskipをtureにする
    if (array[i] !== 4 && array[i-1] !== 4) {
      result += array[i];
    }
  }
}

/*
function sumWithout4andNext(array) {
  // 返却用
  let result = 0;
  // skipはfalseでスタート
  let skip = false;

  for (let i = 0; i < array.length; i++) {
    // array[i]が4のときは、resultに足さずにskipをtureにする
    if (array[i] === 4) {
      skip = true;

    // skipがfalseであればresultにarray[i]を足す
    } else if (!skip) {
      result += array[i];

    // 上二つの条件に引っかからない場合（4の次の数字）はresultに足さずにskipをfalseに戻す
    } else {
      skip = false;
    }
  }

  return result;
}
*/

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
