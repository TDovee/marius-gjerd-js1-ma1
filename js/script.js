var cat = {
    complain: function() {
        console.log("meow")
    }
}

console.log(cat);



//Q2


var heading = document.querySelector("#myH3").innerHTML = "Updated Heading";




//Q3
 

const para = document.querySelector("#myH3");
para.style.fontSize = "2em"

//Q4

const subHeading = document.querySelector("#myH3");
myH3.classList.add("subHeading");

//Q5


var paragraphs = document.querySelectorAll("p");
var i;
for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "red";
}

//Q6


var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>" + "New Para" + "</p>"
resultsContainer.style.backgroundColor = "yellow"


//Q7


function myFunction(list) {
    return list;
}

let result = myFunction("list")
console.log(result);

//Q8



const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
