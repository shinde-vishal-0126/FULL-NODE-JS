/*
# what is chainable method 
    1: method chaining is a programming technique in which multiple method are called on same object or value in single line of code 
    2: with each method call performing an operation and returning the same object or a modified version of it.
    3: Chainable method is nothing but allow us to run multiple methods on the same element within a single segment map(), filer(), and reduce() method allow the chaining (so we can chain another function in-front of this function)
    4:If you perform different operation in single array and produced the expected result you have to used chaining concept 
    So basically map function used for chaining the different methods and produced the required result.
*/

var student = [
    { mark: 99 },
    { mark: 65 },
    { mark: 23 },
    { mark: 21 },
    { mark: 89 },
    { mark: 90 },
    { mark: 98 }
];
const total = student
    .map((ele) => {
        if (ele.mark < 90) {
            console.log("ele.mark..", ele.mark)
            ele.mark = ele.mark + 20;
            console.log(ele.mark)
        }
        return ele;
    })
    .filter((ele) => {
        console.log(ele)
        return ele.mark > 100;
          })  .reduce((acc, curr) => {
            return acc + curr.mark;
         }, 0);
     console.log(total);


/*
 # Array all chaining method:\
            1: map(): Transforms each element in the array.
            2: filter(): Filters elements based on a condition.
            3: reduce(): Reduces the array to a single value.
            4: concat(): Combines multiple arrays or values into one.
            5: sort(): Sorts the array elements.
            

# String chainable method:
    1: toLowerCase(): Converts a string to lowercase.
    2: toUpperCase(): Converts a string to uppercase.
    3: trim(): Removes whitespace from both ends of a string.
    4: replace(): Replaces part of the string.
    5: substring(): Extracts a part of a string.

# 
    # Benefits of Method Chaining:
    1: Concise Code: Makes the code more readable by reducing the need for intermediate variables.
    2: Improved Readability: It expresses the intent in a more fluid and natural way, often resembling English phrases.
    3: Flexibility: It allows operations to be performed in a sequence, reducing clutter in the code

    */