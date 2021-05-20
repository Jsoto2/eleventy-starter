// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");


function switchStyle() {
    if (document.getElementById('styleSwitch').checked) {
      document.getElementById('gallery').classList.add("custom");
      document.getElementById('exampleModal').classList.add("custom");
    } else {
      document.getElementById('gallery').classList.remove("custom");
      document.getElementById('exampleModal').classList.remove("custom");
    }
  }