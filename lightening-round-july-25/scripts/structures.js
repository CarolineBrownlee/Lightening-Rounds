// Take the data below and represent it as each of these data structures.
// 1. A string
// 2. An object
// 3. An array

// "lunch"
// "peanut butter and jelly"
// "whole wheat"
// "grape juice"
// "apple"

// const lunch = {
//     bread: "whole wheat",
//     type: "peanut butter and jelly",
//     drink: "grape juice",
//     fruit: "apple"
// }

// const lunch = "Lunch for today is peanut butter and jelly on whole wheat with an apple and grape juice to drink."

// const lunch = ["whole wheat bread", "peanut butter and jelly", "grape juice", "apple"]


// set object example removes duplicates from an array

// var lunch = new Set();
// lunch.add("peanut butter and jelly")
// lunch.add("whole wheat")
// lunch.add("grape juice")
// lunch.add("apple")

// console.log(lunch)

const cats = [
    {
      name: "Henry",
      bio: "Eat plants, meow, and throw up because I ate plants. Knock over christmas tree, stare at imaginary bug, and meow and walk away. Lick master's hand at first then bite because im moody purrrrrr do not try to mix old food with new one to fool me!"
    },
    {
      name: "Jessica",
      bio: "Spend all night ensuring people don't sleep. Sleep all day. Meowzer for when in doubt, destroy the couch."
    },
    {
      name: "Jake",
      bio: "Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked munch on tasty moths for meow meow mama meow all night murr I hate humans they are so annoying."
    }
  ]
  // Write out a brief list of steps needed to display this data.

//   const dataContainer = document.querySelector(".cats")
  
//   const data = (cats) => {
//     return `
//     <section>
//     1. Create a DOM element in your index.html with a class of cat.
//     2. Create a function which returns a string template. 
//     3. The template is the HTML representation for a cat item.
//     4. Create a function that inserts an HTML representation of a cat into the DOM
//     </section>
//     `
// }

// data(cats)
// console.log(data)




// CORRECT BELOW


// Reference to dom Element
// Iterate Data
// HTML Representation
// Render to DOM

// Now using that list you created, display that data to the dom.


// first step
const catOutput = document.querySelector(".catList")


// third step
const htmlRep = (catObject) => {
    return `
        <div>
            <h3>${catObject.name}</h3>
            <h3>${catObject.bio}</h3>
        </div>
    `
}

// fourth step
const renderToDom = htmlString => {
    catOutput.innerHTML += htmlString
}


// second step
cats.forEach(cat => {
   const catHtml = htmlRep(cat)     
   renderToDom(catHtml)
})





