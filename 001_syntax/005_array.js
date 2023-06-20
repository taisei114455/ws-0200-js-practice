/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

console.log(printArray(["いち","にー","さん"]));

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  let result = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  return result;
}

console.log(getDays);
/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {

  for (let i = 0; i < array.length; i++) {  
    
    if (array[i] === num) {  // array[i]とnumの数が同じであればtureを返す

      return true;

    } 

  }

  return false;  //それ以外であればfalseを返す
  
}

console.log(findNum([1,2,3,4,5,6,7,8,9,10],10));

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {

  for (let i = 0; i < array.length; i++) {  // iは配列の最初からスタート

    for (let j = i + 1; j < array.length; j++) {  // jはiの一つ次からスタート

      if (array[i] === array[j]) {  // 比較して重複があればture

        return true;

      }

    }

  }

  return false;  // なければfalse

}

console.log(isDuplicate([1,33,3,7,4]));

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
