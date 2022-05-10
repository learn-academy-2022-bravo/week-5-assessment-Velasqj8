// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("returnMessage", () => {
  const secretCodeWord1 = "Lackadaisical"
  const secretCodeWord2 = "Gobbledygook"
  const secretCodeWord3 = "Eccentric"
  it("takes in a string and returns a coded message", () => {
      expect(returnMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(returnMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(returnMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// FAIL  ./code-challenges.test.js
//  returnMessage
//    ✕ takes in a string and returns a coded message (1 ms)
//
//  ● returnMessage › takes in a string and returns a coded message
//
//    ReferenceError: returnMessage is not defined

// b) Create the function that makes the test pass.

// Pseudocode
// Create a funtion called returnMessage that takes in a string
// Use hasOwnProperty method to indicate whether the object has specific properties
// Use ? operator to create boolean statement
// Use a split method to split a string
// Use map to iterate const letter_checker
// Use join method to create and return a new string
// Expected output: "L4ck4d41s1c4l"
// Expected output: "G0bbl3dyg00k"
// Expected output: "3cc3ntr1c"

const returnMessage = (message) => {
  const letters = {'a': 4, 'e': 3, 'i': 1, 'o': 0, 'A': 4, 'E': 3, 'I': 1, 'O': 0}
  const letter_checker = (words) => {
      return letters.hasOwnProperty(words)?
      letters[words]:words
  }
      return message.split('').map(letter_checker).join('')
}

// PASS  ./code-challenges.test.js
//  returnMessage
//    ✓ takes in a string and returns a coded message (1 ms)

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("particularLetter", () => {
  const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
  const letterA = "a"
  const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
  const letterE = "e"
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
      expect(particularLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(particularLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// FAIL  ./code-challenges.test.js
//  particularLetter
//    ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)
//
//  ● particularLetter › takes in an array of words and a single letter and returns all the words that contain that particular letter
//
//    ReferenceError: particularLetter is not defined

// b) Create the function that makes the test pass.

// Pseudocode
// Create a function called particularLetter that takes in an array of words
// Use the .filter method to iterate
// Use .toLowerCase method to convert a string to lowercase letters
// Use .includes method to return true if string contains a sprecified string
// const letterA = "a"
// const letterE = "e"

const particularLetter = (array, letter) => {
  return array.filter(value => value.toLowerCase().includes(letter))
}

// PASS  ./code-challenges.test.js
//  particularLetter
//    ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
  const hand1 = [5, 5, 5, 3, 3]
  const hand2 = [5, 5, 3, 3, 4]
  const hand3 = [5, 5, 5, 5, 4]
  it("takes in an array of 5 numbers and determines whether or not the array is a “full house”", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
  })
})

// FAIL  ./code-challenges.test.js
//  fullHouse
//    ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”
//
//  ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house”
//
//    ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

// Pseudocode
// Create a function called fullHouse that takes in an array of 5 numbers
// Use a for loop to interate conditional statement
// Use || operator to determine if either or both operands is true
// Use && operator to evaluate operands
// Call the Object and use .values method to return array of the object's property values
// // Expected output: true
// // Expected output: false
// Expected output: false

const fullHouse = (array) => {
  let newArray = {}
  for(let x of array){
    newArray[x] = (newArray[x] || 0) + 1;
  }
  let values = Object.values(newArray);
  if((values[0] ===2 && values[1] === 3) || (values[1] ===2 && values[0] ===3)){
    return true;
  }
  return false;
}

// PASS  ./code-challenges.test.js
//  fullHouse
//    ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house” (1 ms)
