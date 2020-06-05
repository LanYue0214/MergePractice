let topicsArray = [
    "Introduction",
    "Hello JavaScript",
    "不上課",
    "Arrangement Club",
    "不上課",
    "心理測驗 & RPG極簡製作",
    "不上課",
    "期中考",
    "不上課",
    "Youtube Player",
    "不上課",
    "網站上線啦",
    "30",
    "期末報告1",
    "不上課",
    "不上課",
    "期末報告2"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次設定好月份和日期
    startDate.setMonth(startMonth-1, startDay);
    //時間先忽略，設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(3, 7);//自己設定時間

//$("#datepicker1").datepicker();改成現在日期