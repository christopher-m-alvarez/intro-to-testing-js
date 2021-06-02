// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//function sayHello(){
//    return "";
//}

//function sayHello(input) {
//    if (input === false) {
//        return "Hello, World!"
//    } else if (input === true) {
//        return "Hello, World!"
//   }
//    return "Hello, " + input + "!";
//}

//function sayHello(name) {
//
//   if (name === "Jane") {
//       return "Hello, Jane!"
//   } else if (name === "Alex")
//   {
//       return "Hello, Alex!";
//   } else if (name === "Pat") {
//       return "Hello, Pat!"
//   }
//    return "Hello, " + name + "!";
//}

function sayHello(name) {
    if (name === undefined) {
        return "Hello, World!";
    }
    return "Hello, " + name + "!";
}