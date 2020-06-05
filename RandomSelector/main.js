/*
window.onload=function()
{
    this.document.write("Hello JavaScript!");
}
*/

$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);//向下整數
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());//get
        $("#random-pic").attr("src", pictures[randomChildNumber]);//attr() 抓取圖片的屬性以及改變圖片的路徑
    });
});
