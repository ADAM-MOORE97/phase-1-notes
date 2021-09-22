// ❗ Use console.log() To Check Answers

// ✅ Creating / Accessing Arrays

    // what are arrays?

        // let array = []
        // let array = new Array('my element');
        // let array = new Array();
        // array[0]='my'
        // console.log(array)


    // define an array with several values

    // let array = ['john','ben', 'sam']

    // what is the technical term for these individual items?

    // values, indexed 
       
    // count items in an array
    // console.log(array)
    // console.log(array.length)

    // access elements in an array
    
    // console.log(array[0])
   

// ✅ Modifying Arrays

    // adding elements to an array

        // add element to end of array
        //.push

        // let array = ['john','ben', 'sam']
        // console.log(array)
        // array.push('adam')
        // console.log(array)




        // add element to beginning of array
        //.unshift

        // let array = ['john','ben', 'sam']
        // console.log(array)
        // array.unshift('brooke')
        // console.log(array)



    // removing elements from an array
    // let array = ['john','ben', 'sam', 'jacob']

        // remove last element and return that element
    // console.log(array);
    //  array.pop();
    //  console.log(array);

    
        // remove first element and return that element
        // array.shift();
        // console.log(array);
    
        // return the element at the index provided in a new array


        // console.log(array)
        // let newArray = array.slice(1)
        // console.log(newArray)
    
        // return all elements where index >= 0 and index < 2

        // console.log(array);
        // let newArray = array.slice(0,2)
        // console.log(newArray)
        // starting at index 1, return 2 elements

        // console.log(array)
        // let newArray1=array.slice(1,3)
        // console.log(newArray1)
    
        // add elements where others are removed

        // console.log(array);
        // let newArray = array.slice(1,3,'Teddy')
        // console.log(newArray)

        

// ✅ Iterating Through Arrays



let array = ['john','ben', 'sam', 'jacob']


    // looping over arrays
        
        // for loop
        // function loopOverNames(array){
        //     for(let i=0; i< array.length; i++){
        //         console.log(array[i])
        //     }
        // }
        // loopOverNames(array);

        function loopOverNames(array){
            for(let i=0; i< array.length; i++){
                if(array[i]==="sam"){
                console.log(array[i])
                }
            }
        }
        loopOverNames(array);

        //returns [i] if it is in the array


        
        // do while loop
        
        // for...of loop
        
        // while loop

// ✅ Array Iteration Methods

        // .forEach()
        
        // .map()
        
        // .filter()
        
        // .find()

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Creating / Accessing / Modifying Arrays

    // ✨ BONUS: Try using different ways to define your functions (i.e., const, arrow syntax, etc.) 

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that accepts an array of numbers and returns the first element

        // Example: getFirstElement([10, 9, 8]) => 10
        // Example: getFirstElement([1, 2, 3]) => 1
        // Example: getFirstElement([-10, 0, 10]) => -10

        // ✅ Check Answer: 
        // console.log(getFirstElement());

    // 2️⃣ Create a function that returns an array of unique strings sorted by length in ascending order.

        // Example: sortWords(["i'm", "louis", "hi"]) => ["hi", "i'm", "louis"]
        // Example: sortWords(["yellow", "red", "blue"]) => ["red", "blue", "yellow"]
        
        // ❗ If the provided array is empty, return an empty array

        // Example: sortWords([]) => []

        // ✅ Check Answer: 
        // console.log(sortWords());

// 🚧 Break Out Activity 2: Iterating Through Arrays

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that sorts and removes all duplicate elements from an array of numbers
    // before returning the new array.

        // Example: removeDuplicates([1, 1, 2, 2, 3, 3]) => [1, 2, 3]
        // Example: removeDuplicates([1, 1, 1, 1]) => [1]
        // Example: removeDuplicates([3, 3, 3, 2, 1]) => [1, 2, 3]

        // ❗ Aim to use loops, ".map()" or other Array methods that we have covered

        // ✅ Check Answer: 
        // console.log(removeDuplicates());

// 🚧 Break Out Activity 3: Advanced Array Challenge

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that returns the total sum of cubes for a given array of numbers.

        // Example: sumCubes([1, 2, 3]) => 99
            // 1^3 + 2^3 + 3^3 = 1 + 8 + 27 => 36
        // Example: sumCubes([1]) => 1
        // Example: sumCubes([3]) => 27

        // ❗ If the provided array is empty, return 0
        
        // Example: sumCubes([]) => 0

        // ✅ Check Answer: 
        // console.log(sumCubes());