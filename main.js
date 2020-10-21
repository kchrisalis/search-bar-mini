// TITLE
let stuffArray = [];
let title = document.getElementById('title');
let input = document.getElementById('add-stuff');

// Event Listener
document.getElementById('yeah').addEventListener("click", things);

function things() {
  if (input.value == "" || title.value == "") {
    alert("lol you suck");
  } else {
    stuffArray.push({
      titleV: title.value,
      inputV: input.value
    })
    input.value = "";
    title.value = "";
    localStorage.setItem("stuff", JSON.stringify(stuffArray));

    document.getElementById('ha').innerHTML = ""
    for (let i = 0; stuffArray.length; i++) {
      document.getElementById('ha').append(smth(stuffArray[i]));
    }
  }
}

function smth(something) {
  let stuffDiv = document.createElement('div');
  stuffDiv.innerHTML = `
  <h1>${something.titleV}</h1>
  <p>${something.inputV}</p>
  `;
  return stuffDiv;
}
