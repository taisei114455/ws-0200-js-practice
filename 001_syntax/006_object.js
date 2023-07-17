/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  const status = {
    name: 'Bob',
    age: 32,
    gender: 'male'
  };
  return (status);
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  const DataB = {
    name: 'Mary', 
    age: 37, 
    gender: 'female'
  };
  Object.assign(person,DataB); //personをDataBに書き換える
  return (DataB);
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
 const result = {}; // 空のオブジェクトを生成
  for (let i = 0; i < persons.length; i++) {
    const RandomNumber = Math.floor(Math.random() * 10) + 1; //Math.randomで0以上1未満の小数の乱数を作り、その数値を1~10の範囲にする。そのままでは小数が残っているので、Math.floorで小数点以下を切り捨てる。
    result[persons[i]] = RandomNumber; // 生成されたランダムな数値(RandomNumber)をresultオブジェクト内の各人物の名前に値として割り当てる
  }
  return result;
}

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  const A = {}; // 空のオブジェクトを生成
  for (let i = 0; i < array.length; i++) {
    const B = array[i]; // Bにi番目のarrayの要素を入れる
    if (A[B] === true) { // trueになっている要素があれば
      return true; // 重複した要素が見つかった場合はtrue
    }
    A[B] = true; // 要素をtrueにする
  }
  return false; // 重複した要素がない場合はfalse
}

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
