let balance = 1500; 
let firstQuestions = prompt("Xosh gelmisiz ! Balansi artirmaq isteyirsizse + ,balansdan pul cixmaq istiyirsizse - elave edin");



var a;

test();

function test(){
    console.log(a);
}

a =17;



switch(firstQuestions.toLowerCase()){
    case "+" : let secondQuestions = prompt("Meblegi daxil edin !");
    prompt("Balansiniz",balance+Number(secondQuestions));
    break;
    case "-" : let thirdQuestions = prompt("Meblegi daxil edin !");
    if(thirdQuestions < balance){
        prompt("Balansdan pul cixildi qaliq",balance-thirdQuestions)
    }
    else{
        prompt("Balansda lazimi geder vesait yoxdu!");
    }
    break;
    default :{
        alert("Duzgun secim edilmedi !!!");
    }
}




