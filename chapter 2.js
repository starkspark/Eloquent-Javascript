//1st problem solution
var count = "#";

while (count.length <= 7) {
    console.log(count);
    count += "#";
}

//2nd problem solution part 1
for (var begin = 1 ; begin <= 100 ; begin += 1) {
    if (begin %
      5 == 0 && begin % 3 != 0){
        console.log("Buzz");
    }
    else if (begin % 3 == 0){
        console.log("Fizz");
    }
    else{
        console.log(begin);
    }
}
//2nd problem solution part 2
for (var begin = 1 ; begin <= 100 ; begin += 1) {
    if (begin % 5 == 0 && begin % 3 == 0){
        console.log("FizzBuzz");
    }
    else if (begin % 5 == 0 && begin % 3 != 0){
        console.log("Buzz");
    }
    else if (begin % 3 == 0){
        console.log("Fizz");
    }
    else{
        console.log(begin);
    }
}

//personal attempts at 3rd solution
for (var line = 0 ; line < 8 ; line++){
    for (var hashtag = " #" ; hashtag.length <= 8 ; hashtag+=hashtag){
        if (hashtag.length == 8){
            console.log("\n" + hashtag);
        }
    }
}

for (var line = 0 ; line < 8 ; line++){
    for (var empty = " " ; empty.length <= 8 ; empty+="# "){
        if (empty.length == 8){
            console.log("\n" + empty);
        }
    }
}

//3rd problem solution
var size = 8;
var board = "";

for (var y = 0 ; y < size ; y++){
    for (var x = 0 ; x < size ; x++){
        if ((x + y) % 2 == 0){
            board += " ";
        }
        else {
            board += "#";
        }
    }
        board += "\n";
    }
console.log(board);
