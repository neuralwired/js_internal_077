let user = {
    name: "Walter White",
    age: "52",
    course: "Chemistry"
}

let jsonString = JSON.stringify(user)
console.log(jsonString, typeof(jsonString))

let userObj = JSON.parse(jsonString)
console.log(userObj, typeof(userObj))