$(document).ready(function(){
    //一次產生固定標題列
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );
    //反覆產生資料列
    let topicCount = topicsArray.length;

    //計算一天有多少毫秒
    let oneDayMillseconds = 24*60*60*1000;

    for(let x=0; x < topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMillseconds);
        let trSpecial = "<tr>";
        if(topicsArray[x]!="不上課"){
            trSpecial = "<tr style='background-color:lightyellow'>";
        }
        $("#courseTable").append(
            trSpecial +
            "<td>"+ (x+1) + "</td>"+
            "<td>"+ thisDate.toLocaleDateString() +"</td>"+
            "<td>"+ topicsArray[x]+"</td>"+
            "</tr>"
        );//每一列有場次，預計日期，主題
    }
});
