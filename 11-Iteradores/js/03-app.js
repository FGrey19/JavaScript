//Fizz Buzz

for(let i=0; i<100 ; i++){
    
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
        //Multiplos de 3 y 5 imprimen palabra FizzBuzz
    }else if(i%3==0){
        console.log("Fizz");
        //Multiplos de 3 imprimen palabra Fizz
    }else if(i%5==0){
        console.log("Buzz");
        //Multiplos de 5 imprimen palabra Buzz
    }else{
        console.log(i);
    }
}












