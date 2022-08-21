function throwDice() {
var winner;
switch( Math.floor(Math.random() * 13) + 1) {
 case 1:
    winner = "Best Consumer Solution";
    break;
case 2:
    winner = "Best Enterprise Solution";
    break;
case 3:
    winner = "Best African Solution";
    break;
case 4:
    winner = "Most Innovative Solution";
    break;
case 5:
    winner = "Best Gaming Solution";
    break;
case 6:
    winner = "Best Health Solution";
    break;
case 7:
    winner = "Best Agricultural Solution";
    break;
case 8:
    winner = "Best Educational Solution";
    break;
case 9:
    winner = "Best Financial Solution";
    break;
case 10:
    winner = "Best Hackathon Solution";
    break;
case 11:
    winner = "Best South African Solution";
    break;
case 12:
    winner = "Best Campus Cup Solution";
    break;
case 13:
    winner = "Huawei AppGallery Category 15";
    break;
}
console.log(winner);
}
