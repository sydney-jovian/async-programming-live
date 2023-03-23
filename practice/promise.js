console.log("Start")

function longOperation(waitMs = 2000) {
    console.log("longOperation started")
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log("longOperation finished");
            resolve(100);
        }, waitMs)
    })
}

let resultPromise = longOperation();
console.log(resultPromise)

resultPromise
    .then((result) => result * 2)
    .then(function (result2) {
        console.log("result2:", result2)
    }).catch(function (error) {
        console.error("Something happened", error)
    }).finally(function () {
        console.log("Finally")
        // code clean up
    })

console.log("End")


let fn = (result) => result * 2