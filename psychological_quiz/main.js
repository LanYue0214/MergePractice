$(document).ready(function(){
    // 建立currentQuiz，儲存目前作答到第幾題
    let currentQuiz = null;
    //當按下按鈕後，要做的事情放在這裡面
    $("#startButton").click(function(){
        //如果還沒作答就從這裡開始
        if(currentQuiz == null){
            //設定目前作答到第0題
            currentQuiz = 0;
            //顯示題目
            $("#question").text(questions[0].question);
            //清空選項區域（可以試著先不做這一步）
            $("#options").empty();
            //加入選項
            for(let x=0; x<questions[0].answers.length;x++){
                $("#options").append(
                    "<input name='options' type='radio' value="+
                    x+
                    "<label>"+questions[0].answers[x][0]+
                    "</label><br><br>" 
                );
            }
            //將按鈕文字換成Next或下一題
            $("#startButton").attr("value","Next");
        }else{ //如果已經開始作答就從這裡繼續
            //尋訪每個選項是否有被選取
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked){
                        //分成是否已產生最終結果（A~D）
                        if(isNaN(questions[currentQuiz].answers[i][1])){
                            //
                            let finalResult = questions[currentQuiz].answers[i][1];
                            //
                            $("#question").text(finalAnswers[finalResult][0]);
                            //
                            $("#options").empty();
                            //
                            $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                            //
                            currentQuiz = null;
                            //
                            $("#startButtion").attr("value","Restart");
                        }else{

                        }
                        //完成後即可跳離回圈
                        return false;
                    }
                }
            );
        }
    });
});