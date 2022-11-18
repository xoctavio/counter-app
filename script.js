// variables
let currentCount = document.getElementById("count");
let totalCount = document.getElementById("total");
let count = 0;

console.log(currentCount);
console.log(totalCount);

// functions
function increment() {
 count += 1;
 currentCount.textContent = count;
}

function save() {
 let countString = ` ${count} - ` ;
 totalCount.textContent += countString;
 count = 0;
 currentCount.textContent = count;
}