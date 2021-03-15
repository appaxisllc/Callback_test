setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "Good Morning !!";



//Grabs HTML elements
let btn = document.querySelector('#btn');
let ourNames = document.querySelector('#ourNames');
//Array of names
let names = ['Laura', 'Eyke', 'April', 'Echu', 'Jonathan'];
//Sorts the names array
function sortNames() {
  let sorted =  names.sort().join(', ');
  ourNames.innerHTML = sorted;
}
//sortNames as a Callback
btn.addEventListener('click', sortNames);


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();