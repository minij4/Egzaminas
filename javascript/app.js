var blackSq = ["02", "04", "06", "08", "10", "11", "12", "16", "34", "36", "39", "42", "54", "56", "57", "63", "72", "74", "86", "88", "89", "91", "92", "96"];
var letters = ["O", "K", " ", "B", " ", "S", " ", "M", " ", "S",
               " ", " ", " ", "E", "R", "A", " ", "A", "M", "O",
               "G", "L", "I", "C", "E", "R", "I", "N", "A", "S",
               "R", "I", "M", "A", " ", "K", " ", "T", "M", " ",
               "I", "E", " ", "T", "U", "O", "J", "A", "U", "S",
               "E", "T", "N", "O", " ", "F", " ", " ", "T", "U",
               "B", "U", "S", " ", "B", "A", "L", "S", "A", "S",
               "L", "V", " ", "M", " ", "G", "U", "O", "S", "A",
               "Y", "A", "M", "A", "H", "A", " ", "P", " ", " ",
               "S", " ", " ", "N", "E", "S", " ", "A", "N", "T"];
               
function makeBlack(){
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let id = "" + i + j;
             
            
            const detected = blackSq.indexOf(id);

            if(detected > -1){
                document.getElementById(id).style.backgroundColor = "#94999c";
                document.getElementById(id).setAttribute("disabled", " ");
            }
        }
    }
}
//
makeBlack();

function takeRez(){
    var p = 0;

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            var input = document.getElementById("" + i + j);

            if((input.value).toUpperCase() !== letters[p]){
                if(letters[p] !== " "){
                    input.style.backgroundColor = "red";
                }
            }
            if((input.value).toUpperCase() == letters[p]){
                if(letters[p] !== " "){
                    input.style.backgroundColor = "white";
                }
            }
            p++;
        }
    }

    var win = true;
    p = 0;

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if((document.getElementById("" + i + j).value).toUpperCase() !== letters[p]){
                if(letters[p] !== " "){
                    win = false;
                }
            }
            p++;
        }
    }
    if(win == true){
        alert("\n" + "Visi Atsakymai Teisingi!!!" + "\n\n" + "LAIMĖJOTE!");
    } 
}
function giveUp(){
    let p = 0;

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            var input = document.getElementById("" + i + j);

            if(letters[p] !== " "){
                input.value = letters[p];
            }
            p++;
        }
    }
}


const buttonPublish = document.getElementById("publish");
buttonPublish.addEventListener('click', takeRez);


const buttonGiveUp = document.getElementById("giveUp");
buttonGiveUp.addEventListener('click', giveUp);