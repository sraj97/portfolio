//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function myFunction() {
  randomButton = document.getElementById("randomButton");
  let choice = document.getElementById("chosenOne"); 

  const random = ["Lion King", "Incredibles", "Moana" , "Coco", "Finding Nemo", "Inside Out", "Funny Girl","Ocean's 8", "Pride & Prejudice", "Deadpool", "The Terminal", "Jurrasic World", "Hairspray", "The Help", "Blade","Pretty Woman", "The Ugly Truth", "Eat Pray Love", "Leap Year", "Definitely Maybe", "50 First Dates", "Chalet Girl", "Friends with Benefits", "Letters to Juliet", "La La Land", "Hamilton", "The Proposal", "The Intern", "Mr & Mrs Smith", "Sex & the City"];

  choice.innerHTML = random[Math.floor(Math.random()*random.length)];

}
