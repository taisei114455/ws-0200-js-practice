/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
function printMessageByAge(age) {
  if (age >= 20) {
    console.log('成年です。');
  } else {
    console.log('未成年です。');
  }
}


/**
 *  2.2 引数から与えられた時間が
 *    4時から12時より前であれば、 Good Morning
 *    12時から17時より前であれば、 Hello
 *    17時以降であれば、 Good Night
 *    と出力するメソッドを実装してください
 *
 */
function greeding(hour) {
  if (hour < 4) {
    console.log('Good Night');
  } else if (hour < 12) {
    console.log('Good Morning');
  } else if (hour < 17) {
    console.log('Hello');
  } else {
    console.log('Good Night');
  }
}

/**
 *  2.3 引数から与えられた数字に対応する曜日を返却するメソッドを実装してください
 *    0 ・・・Sunday
 *    1 ・・・Monday
 *    2 ・・・Tuesday
 *    3 ・・・Wednesday
 *    4 ・・・Thursday
 *    5 ・・・Friday
 *    6 ・・・Saturday
 *    と出力するメソッドを実装してください
 *
 */

//if else
/*function getDay(day) {
  if (day === 0) {
    console.log('Sunday');
  } else if (day === 1) {
    console.log('Monday');
  } else if (day === 2) {
    console.log('Tuesday');
  } else if (day === 3) {
    console.log('Wednesday');
  } else if (day === 4) {
    console.log('Thursday');
  } else if (day === 5) {
    console.log('Friday');
  } else if (day === 6) {
    console.log('Saturday');
  } 

}*/

//switch
function getDay(day) {
  const dayNamber = day;
  switch (dayNamber) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
  }
}

module.exports = {
  printMessageByAge,
  greeding,
  getDay
}
