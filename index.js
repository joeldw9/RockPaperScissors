var playerScore = 0
var computerScore = 0

function rockPaperScissors1() {
    $("#1").removeClass("computersChoice")
    $("#2").removeClass("computersChoice")
    $("#3").removeClass("computersChoice")
    var computerChoice = Math.random(2)
    console.log(computerChoice)
    if (computerChoice < 0.334 || computerChoice == 0.334) {
        var winner = "It's a tie!"
        $("#1").addClass("computersChoice")
    }
    else if (computerChoice < 0.67 && computerChoice > 0.334) {
        var winner = "The computer wins!"
        computerScore++
        $("#2").addClass("computersChoice")
    }
    else if (computerChoice >= 0.67 && computerChoice <= 1) {
        var winner = "You win!"
        playerScore++
        $("#3").addClass("computersChoice")
    }
    $(".winner").text(winner)
    $(".player").text("Player Score: " + playerScore)
    $(".computer").text("Computer Score: " + computerScore)
}

function rockPaperScissors2() {
    $("#1").removeClass("computersChoice")
    $("#2").removeClass("computersChoice")
    $("#3").removeClass("computersChoice")
    var computerChoice = Math.random(2)
    console.log(computerChoice)
    if (computerChoice < 0.334 || computerChoice == 0.334) {
        var winner = "You win!"
        playerScore++
        $("#1").addClass("computersChoice")
    }
    else if (computerChoice < 0.67 && computerChoice > 0.334) {
        var winner = "It's a tie!"
        $("#2").addClass("computersChoice")
    }
    else if (computerChoice >= 0.67 && computerChoice <= 1) {
        var winner = "The computer wins!"
        computerScore++
        $("#3").addClass("computersChoice")
    }
    $(".winner").text(winner)
    $(".player").text("Player Score: " + playerScore)
    $(".computer").text("Computer Score: " + computerScore)
}

function rockPaperScissors3() {
    $("#1").removeClass("computersChoice")
    $("#2").removeClass("computersChoice")
    $("#3").removeClass("computersChoice")
    var computerChoice = Math.random(2)
    console.log(computerChoice)
    if (computerChoice < 0.3 || computerChoice == 0.3) {
        var winner = "The computer wins!"
        computerScore++
        $("#1").addClass("computersChoice")
    }
    else if (computerChoice < 0.67 && computerChoice > 0.3) {
        var winner = "You win!"
        playerScore++
        $("#2").addClass("computersChoice")
    }
    else if (computerChoice >= 0.67 && computerChoice <= 1) {
        var winner = "It's a tie!"
        $("#3").addClass("computersChoice")
    }
    $(".winner").text(winner)
    $(".player").text("Player Score: " + playerScore)
    $(".computer").text("Computer Score: " + computerScore)
}