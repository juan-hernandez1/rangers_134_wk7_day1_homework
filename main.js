//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]


let foundMatch = false;

dogNames.forEach(currentName => {
    if (dogString.includes(currentName)) {
        console.log("Matched " + currentName)
        foundMatch = true
    }
})

if (foundMatch) {
    
} else {
    console.log("That's a damn cat")
}



//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

// arr == ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

function replaceEvenIndexes(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
}


let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"];

replaceEvenIndexes(arr);

console.log(arr);

// ---------- Code Wars ------------

// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// https://www.codewars.com/kata/55f73be6e12baaa5900000d4


function totalGoals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

const messiTotalGoals = totalGoals(5, 10, 2)
console.log(messiTotalGoals)



// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  
  console.log(reverseString('world'))
  console.log(reverseString('word'))
  
  