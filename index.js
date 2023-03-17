// Code your solutions in this file
const gifts =["Guadalupe", "Ollie", "Aki"];
function writeCards(gifts){
    const response=[];
    let j = 0;
    while(j < gifts.length){
       response[j]=(`Thank you, ${gifts[j]}, for the wonderful surprise gift!`);
        j++;
      
    }
    return response;
}
function countDown(){
    let j=10
    while(j>=0){
        console.log(j--);

    }
}
countDown()