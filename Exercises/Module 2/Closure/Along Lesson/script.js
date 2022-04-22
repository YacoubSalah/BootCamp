/* // along lecture
const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()
  increment()
 */

// Spot Check 1

const family = function(){
    const member = []
    const birth = function(name){
        member.push(name)
        console.log(member);
    }
    return birth
}

const givebirth = family()
givebirth("nana")
givebirth("tata")
givebirth("fafa")

