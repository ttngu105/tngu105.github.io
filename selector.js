var people = ["Emily", "Tommy","Miles"];
document.getElementById("demo").innerHTML = "<h2>"+people[0]+"<h2>";
document.write(5 + 6)
function myFunction() {
    console.log("Button clicked!");
    if (paidpeople.length  >= people.length)
    {paidpeople = []}
    console.log(people[paidpeople.length])
    person = people[paidpeople.length];
    paidpeople.push(person);
    document.getElementById("demo").innerHTML  = ("<h2>It is "+person+"'s turn<h2>");
  }
