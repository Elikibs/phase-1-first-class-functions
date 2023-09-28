
function receivesAFunction(callback){
    return callback()
}


function returnsANamedFunction(){
    return function multiply(x,y){
        return x + y;
    }
}


function returnsAnAnonymousFunction(){
    return function(){
        console.log ("Previously on first-class-functions");
    }
}