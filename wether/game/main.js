function clickme() {
  handleData();
}

/*
    fetch(url)
     .then(res => res.json())
      .then(response => {
        handleData(response);
      })
      .catch(error => {
       // console.error("Error:");
        handleError(error);
      console.log(res);
      }); 
  }*/
/////async&await///////////////
if (me != "") {
  getUser();
} else alert("give a city Name");
//
//////////async&await////////////
async function getUser(url) {
  let res = await fetch(url);
  let data = await res.json();
  console.log(res);
  handleData(data);
}
getUser();

function handleError(error) {
  document.getElementById(
    "demo"
  ).innerHTML = `<li><h1>City not found${error}</h1></li>`;
  let output = "";
}
function handleData(data) {
  document.getElementById("demo").innerHTML = "";
  let me = document.getElementById("input").value;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${me}&APPID=9b3b4e386b6cac9f20fa1928c2b096ca`;
  getUser();
}
