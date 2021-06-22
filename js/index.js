        // HTML要素の変数割り当て
        var hit = document.getElementById('hit');
        var reset = document.getElementById('reset'); 
        var stand = document.getElementById('stand');
        var your_sum = document.getElementById('your_sum');
        var com_sum = document.getElementById('com_sum');
        var form = document.getElementById('form');
        var innner_candidate_month = document.getElementById('candidate_month');
        var innner_candidate_day = document.getElementById('candidate_day');


        // 選択できる月日を格納する関数
        function Select_birthdays(month, day){
          this.month = month;
          this.day = day;
        };
        var select_birthdays = [];
        let x=0;




        // 月の生成
        let candidate_month = new Array(4); // 月配列の初期化
      
        let duplicate_judge = "false"; // 判定済フラグ
        while(duplicate_judge == "false"){
          candidate_month[0] = Math.floor( Math.random() * 12 );
          if(0 != candidate_month[0]){
            duplicate_judge = "true";
          }
        }
      
        for(let n=1; n<4; n++){
          // 重複判定
          duplicate_judge = "false";
          while(duplicate_judge == "false"){
            candidate_month[n] = Math.floor( Math.random() * 12 ) ;
            if(candidate_month[n-1] != candidate_month[n] && candidate_month[n-2] != candidate_month[n] && candidate_month[n-3] != candidate_month[n] && candidate_month[n-4] != candidate_month[n] && 0 != candidate_month[n]){
              duplicate_judge = "true";
            }
          }
        }   
        for(let n=0; n<4; n++){
          var com_box = document.createElement("td"); 
          var com_hand = document.createTextNode(candidate_month[n]+"月 ");
          innner_candidate_month.appendChild(com_box);
          innner_candidate_month.appendChild(com_hand);
        }

        // 日の生成
        let candidate_day = new Array(3); // 日配列の初期化
      
        duplicate_judge = "false"; // 判定済フラグ
        while(duplicate_judge == "false"){
          candidate_day[0] = Math.floor( Math.random() * 28 );
          if(0 != candidate_day[0]){
            duplicate_judge = "true";
          }
        }
      
        for(let n=1; n<6; n++){
          // 重複判定
          duplicate_judge = "false";
          while(duplicate_judge == "false"){
            candidate_day[n] = Math.floor( Math.random() * 28 ) ;
            if(candidate_day[n-1] != candidate_day[n] && candidate_day[n-2] != candidate_day[n] && candidate_day[n-3] != candidate_day[n] && candidate_day[n-4] != candidate_day[n] && 0 != candidate_day[n]){
              duplicate_judge = "true";
            }
          }
        }   
        for(let n=0; n<6; n++){
          // 並び替え
          candidate_day.sort(function(first, second){
            if (first > second){
              return 1;
            }else if (first < second){
              return -1;
            }else{
              return 0;
            }
          });
          var com_box = document.createElement("td"); 
          var com_hand = document.createTextNode(candidate_day[n]+"日 ");
          innner_candidate_day.appendChild(com_box);
          innner_candidate_day.appendChild(com_hand);
        }








        // 最初に消去する日を2つ選ぶ
        let choice_day = new Array(2);  // 選ぶ日の引数初期化
      
        duplicate_judge = "false";  // 判定済フラグ
        choice_day[0] = Math.floor( Math.random() * 6 );
        for(let n=1; n<2; n++){
          // 重複判定
          duplicate_judge = "false";
          while(duplicate_judge == "false"){
            choice_day[n] = Math.floor( Math.random() * 6 ) ;
            if(choice_day[n-1] != choice_day[n]){
              duplicate_judge = "true";
            }
          }
        }







        // 最初に消去する月を2つ選ぶ
        let choice_month = new Array(2);  // 選ぶ月の引数初期化
      
        choice_month[0] = Math.floor( Math.random() * 4 );
        for(let n=1; n<2; n++){
          // 重複判定
          duplicate_judge = "false";
          while(duplicate_judge == "false"){
            choice_month[n] = Math.floor( Math.random() * 4 ) ;
            if(choice_month[n-1] != choice_month[n]){
              duplicate_judge = "true";
            }
          }
        }




        // 残った4つ日から1つを除外する日を選ぶ
        let choice_day2 = new Array(1); // 選ぶ日の引数初期化

        duplicate_judge = "false";  // 判定済フラグ

        while(duplicate_judge == "false"){
          choice_day2 = Math.floor( Math.random() * 6 ) ;
          if(choice_day[0] != choice_day2 && choice_day[1] != choice_day2){
            duplicate_judge = "true";
          }
        }





          // 正解の日を選ぶ
          let collect_day;  // 選ぶ日の引数初期化

          duplicate_judge = "false";  // 判定済フラグ

          while(duplicate_judge == "false"){
            collect_day = Math.floor( Math.random() * 6 ) ;
            if(choice_day[0] != collect_day && choice_day[1] != collect_day && choice_day2 != collect_day){
              duplicate_judge = "true";
            }
          }










        // 確定した選択肢の表示処理
        let n2=0;
        let collect_month_flag="false";
        for(let n=0; n<4; n++){

          if(choice_month[n2] == n){

            //　誕生日の選択肢を追加する
            function init(){
              select_birthdays[x] = new Select_birthdays(candidate_month[n], candidate_day[choice_day[n2]]);
              x++;
            };init();

            n2++;
          }
          else{
            if(collect_month_flag == "false"){
              // 正解の月を確定
              var collect_month = n;

              collect_month_flag = "ture";

              //　誕生日の選択肢を追加する
              function init(){
                select_birthdays[x] = new Select_birthdays(candidate_month[n], candidate_day[collect_day]);
                x++;
              };init(); 
            }

              //　誕生日の選択肢を追加する
              function init(){
                select_birthdays[x] = new Select_birthdays(candidate_month[n], candidate_day[choice_day2]);
                x++;
              };init(); 
          }
        }

         // 最後に出力する不正解の日の引数確定
         let choice_day3 = Array(3);
         let i = 0;
         for(let n=0; n<6; n++){
          if(choice_day[0] != n && choice_day[1] != n && collect_day != n){
            choice_day3[i] = n;
            i++;
          }
         }


        for(let n=0; n<4; n++){
          if(choice_month[0] != n && choice_month[1] != n && collect_month != n){
            for(let i=0; i<2; i++){

              //　誕生日の選択肢を追加する
              function init(){
                select_birthdays[x] = new Select_birthdays(candidate_month[n], candidate_day[choice_day3[i]]);
                x++;
              };init(); 
            }
          }
        }





        // 最初に除外した月に正解日と最後に確定した除外する2つの日をランダムで散らばせる
        let random = Math.floor( Math.random() * 2) + 1; //割合を決める
        if(random == 1){

          // 正解の誕生日が含まれている引数を格納する
          var collect_birthday_num = x;

          //　誕生日の選択肢を追加する
          function init(){
            select_birthdays[x] = new Select_birthdays(candidate_month[choice_month[1]], candidate_day[collect_day]);
            x++;
          };init(); 

          for(let i=0; i<random+1; i++){

            //　誕生日の選択肢を追加する
            function init(){
              select_birthdays[x] = new Select_birthdays(candidate_month[choice_month[0]], candidate_day[choice_day3[i]]);
              x++;
            };init(); 
          }
        }
          else if(random == 2){
            for(let i=0; i<random; i++){

            //　誕生日の選択肢を追加する
            function init(){
              select_birthdays[x] = new Select_birthdays(candidate_month[choice_month[0]], candidate_day[choice_day3[i]]);
              x++;
            };init(); 
          }


            // 正解の誕生日が含まれている引数を格納する
            var collect_birthday_num = x;

            //　誕生日の選択肢を追加する
            function init(){
              select_birthdays[x] = new Select_birthdays(candidate_month[choice_month[1]], candidate_day[collect_day]);
              x++;
            };init(); 
          }


          
          // 月でソート実行
          // select_birthdays.sort(function(a, b){
          //   if (a.month > b.month) return 1;
          //   if (a.month < b.month) return -1;
          //   return 0;
          // });



          

          console.log("正解の誕生月");
            console.log(select_birthdays[collect_birthday_num].month);
            console.log("正解の誕生月");
            console.log("正解の誕生ひ");
            console.log(select_birthdays[collect_birthday_num].day);
            console.log("正解の誕生ひ");



            var parent = document.getElementById('choices');
          var input_data = document.createElement('input');
          input_data.type = 'radio';
          input_data.id = 'inputform_' + 1;
          parent.appendChild(input_data);
              
          var com_hand = document.createTextNode(select_birthdays[collect_birthday_num].month +"月"+select_birthdays[collect_birthday_num].day +"日 ⇦正解の回答です");
          parent.appendChild(com_hand);

          var br = document.createElement("br");
          parent.appendChild(br);

        for(let n=0; n<15; n++){
          var parent = document.getElementById('choices');
          var input_data = document.createElement('input');
          input_data.type = 'radio';
          input_data.id = 'inputform_' + 1;
          parent.appendChild(input_data);
              
          var com_hand = document.createTextNode(select_birthdays[n].month +"月"+select_birthdays[n].day +"日");
          parent.appendChild(com_hand);

          var br = document.createElement("br");
          parent.appendChild(br);
        }








        // リセットボタンの動作
        reset.addEventListener("click", function(){ 
          location.reload();
        });

        //ヒットボタンの動作
        hit.addEventListener("click", function(){
          
　　　　　　// 月の生成
          let flag = false; // 判定済フラグ
          let challenge_num = 0; // 判定回数の初期化
        
          // 月の初期化
          let candidate_month = new Array(3);
          let answer;
        
          //1番目の数値生成
          duplicate_judge = "false";
          while(duplicate_judge == "false"){
            candidate_month[0] = Math.floor( Math.random() * 12 );
            if(0 != candidate_month[0]){
              duplicate_judge = "true";
            }
          }
          answer = candidate_month[0];
        
          // 2番目以降の数値生成
          for(let n=1; n<4; n++){
        
            // 重複判定
            duplicate_judge = "false";
            while(duplicate_judge == "false"){
              candidate_month[n] = Math.floor( Math.random() * 12 ) ;
              if(candidate_month[n-1] != candidate_month[n] && candidate_month[n-2] != candidate_month[n] && candidate_month[n-3] != candidate_month[n] && candidate_month[n-4] != candidate_month[n] && 0 != candidate_month[n]){
                answer = answer + String(candidate_month[n]);
                duplicate_judge = "true";
              }
            }
          }        
          console.log(candidate_month[0]);
          console.log(candidate_month[1]);
          console.log(candidate_month[2]);
          console.log(candidate_month[3]);

            var your_box = document.createElement("td");
            var your_hand = document.createTextNode(candidate_month[0]);
            your_card.appendChild(your_box);
            your_box.appendChild(your_hand);
            record.push(draw);

            if (your_sum_process > 21) {
                hit.className = "btn inactive";
            };
            if (your_sum_process > 0) {
                stand.className = "btn";
            };
        }); 

        //スタンドボタンの動作
        stand.addEventListener("click", function(){
            if (your_sum_process == 0) {
              return;
            };
            
            while (com_sum_process <= 19){ // comがカードを引く条件
                var draw = Math.floor(Math.random()*52);
                while (record.indexOf(draw) >= 0){
                    draw = Math.floor(Math.random()*52); 
                }; 
                var com_box = document.createElement("td"); 
                var com_hand = document.createTextNode(cards[draw].mark + cards[draw].num);
                com_card.appendChild(com_box);
                com_box.appendChild(com_hand);
                record.push(draw);

                // 引いたカード別の動作
                switch(cards[draw].num){
                    case 11:
                    case 12:
                    case 13:
                    com_sum_process += 10;
                    break;

                    case 1:
                    if ((com_sum_process + 11) <= 21){
                        com_sum_process += 11;
                    } else {
                        com_sum_process += 1;
                    };
                    break;

                    default:
                    com_sum_process += cards[draw].num;
                    break;
                };
                com_sum.innerHTML = com_sum_process;

                //勝敗を決める
                if (your_sum_process < 22 && your_sum_process > com_sum_process){
                    result.innerHTML = "あなたの勝ちです！";
                } else if (your_sum_process < 22 && com_sum_process > 21){
                    result.innerHTML = "あなたの勝ちです！";
                }else if (your_sum_process < 22 && your_sum_process == com_sum_process){
                    result.innerHTML = "引き分けです。";
                } else if (your_sum_process > 21 && com_sum_process > 21){
                    result.innerHTML = "引き分けです。";
                } else {
                    result.innerHTML = "あなたの負けです…";
                };
            };
            
        });

