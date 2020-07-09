const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0;
  
  document.body.addEventListener("keydown", (e) => {
     const key = e.key
  
  idx = (codes[idx] === key) ? ++idx : 0
  
   if (idx === codes.length) {
     window.alert("Hurray!");
     idx = 0
   }
  });
}
 
 function init() {
   document.body.addEventListener("keydown", (event) => {
     const alphabet = ['a', 'b', 'c'];
     let index = 0;
     function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
   }
 }