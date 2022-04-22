//code before callback
/* let users = []

const getData = function () {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData()
displayData() */


/* //after adding callback
let users = []

const getData = function (callbackFnName) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        callbackFnName()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData) */



/* const timer = function(){
    console.log(new Date())
  }
   */
/*   setInterval(function(){
      console.log(new Date())
  }, 1000) */

/*   const square = (num) => console.log(num * num);
  square(5) */

/* const getFormalTitle = (title, name) => title + " " + name
console.log(getFormalTitle("mr", "yaocu")) */