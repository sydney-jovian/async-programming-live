console.log("Start")

function longOperation(waitMs = 2000) {
    console.log("longOperation started")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("longOperation finished");
            reject(100);
        }, waitMs)
    })
}

async function main() {
    try {
        let resultPromise = longOperation(500);
        let result = await resultPromise;
        console.log("Result", result)
        let result2 = await longOperation(200)
        console.log("Result2", result2)
    } catch(error) {
        console.log("some error happened", error)
    } finally {
        console.log("finally called")
    }
}

main()
console.log("End")