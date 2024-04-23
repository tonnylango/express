//var users = require("./users")()

//console.log(users)

// Define an async function
async function delayAndLog() {
    // Use await to pause execution for 1 second (1000 milliseconds)
    console.log("somethinnnggggggggggggg")
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("One second has passed.");
}

// Call the async function
//delayAndLog();

function greet(name, callback) {
    callback(0)
    console.log("Hello, " + name + "!");
    callback(); // Execute the callback function
}

function sayGoodbye(t = 5000) {
    if (t === 0) console.log("Goodbye")
    else setTimeout(()=>{console.log("Goodbye!");}, t)
}

// Call the greet function with a callback function
greet("Alice", sayGoodbye);
