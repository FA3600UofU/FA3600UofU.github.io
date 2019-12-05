function game(i) {
    var text;
    if (i == 0) {
        index++;
        document.getElementById("header").innerHTML = "Thursday, test is next week.";
        text = "You just got out of class, the test is next week. You feel like you payed enough attention in class to wing it, but you need to get a good grade to pass the class.\n";

        document.getElementById("insctuction").innerHTML = text;
    }
}