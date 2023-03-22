
const sp1 = document.createElement("span");

// Give it an id attribute called 'newSpan'
sp1.id = "newSpan";

// Create some content for the new element.
let heart = document.createTextNode("💖");

// Apply that content to the new element
sp1.appendChild(heart);

// Build a reference to the existing node to be replaced
const sp2 = document.querySelector(this.firstChild);

const parentDiv = sp2.parentNode;

// Replace existing node sp2 with the new span element sp1
parentDiv.replaceChild(sp1, sp2);

// Result:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>