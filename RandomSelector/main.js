/*
window.onload=function()
{
    this.document.write("Hello JavaScript!");
}
*/

$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");
        //$("H1").text("Hello");
        $("H1").text($("li:first").text());
        $("H1").text($("li:last").text());
        $("H1").text($("li:last").text());
    });
});
