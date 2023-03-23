console.log("Start")

function longOperation(waitMs=2000) {
    console.log("longOperation started")

    setTimeout(function() {
        console.log("longOperation finished")
    }, waitMs)
}

longOperation()

console.log("End")
