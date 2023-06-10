// Import the 'gossips' variable from the 'gossip-grid.data.js' file
import { gossips } from "./gossip-grid.data.js";

// Export the 'grid' function as a module
export function grid() {
    // Create a new 'div' element for the range controls
    let allChange = document.createElement('div');
    allChange.className = 'ranges';

    // Create an 'input' element for adjusting the width
    let width = document.createElement('input');
    width.className = 'range';
    width.id = 'width';
    width.type = 'range';
    width.value = '';
    width.min = '200';
    width.max = '800';

    // Add an event listener to adjust the width of gossip elements
    width.addEventListener('input', function () {
        let gos = document.querySelectorAll('.gossip');
        gos.forEach(e => {
            e.style.width = width.value + 'px';
        });
    });

    // Create an 'input' element for adjusting the font size
    let fontSize = document.createElement('input');
    fontSize.className = 'range';
    fontSize.id = 'fontSize';
    fontSize.type = 'range';
    fontSize.min = '20';
    fontSize.max = '40';
    fontSize.value = '';

    // Add an event listener to adjust the font size of gossip elements
    fontSize.addEventListener('input', function () {
        let gos = document.querySelectorAll('.gossip');
        gos.forEach(e => {
            e.style.fontSize = fontSize.value + 'px';
        });
    });

    // Create an 'input' element for adjusting the background color
    let background = document.createElement('input');
    background.className = 'range';
    background.id = 'background';
    background.type = 'range';
    background.min = '20';
    background.max = '75';
    background.value = '';

    // Add an event listener to adjust the background color of gossip elements
    background.addEventListener('input', function () {
        let gos = document.querySelectorAll('.gossip');
        gos.forEach(e => {
            e.style.background = "hsl(280, 50%," + background.value + "%)";
        });
        console.log(background.value);
    });

    // Append the range control elements to the 'allChange' div
    allChange.appendChild(width);
    allChange.appendChild(fontSize);
    allChange.appendChild(background);

    // Append the 'allChange' div to the document body
    document.body.appendChild(allChange);

    // Create a form element for sharing gossip
    let share = document.createElement("form");
    share.className = "gossip";
    document.body.appendChild(share);

    // Create a textarea element for entering gossip
    let textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Got a gossip to share?");
    share.appendChild(textarea);

    // Create a button element for sharing gossip
    let button = document.createElement("button");
    button.innerHTML = "Share gossip!";
    share.appendChild(button);

    // Add an event listener to the button for sharing gossip
    button.addEventListener("click", function () {
        let val = textarea.value;

        // Create a new gossip div with the entered gossip message
        let goss1 = document.createElement('div');
        goss1.className = "gossip";
        goss1.textContent = val;

        // Insert the new gossip div before the second existing gossip element
        document.body.insertBefore(goss1, document.querySelectorAll('.gossip')[1]);

        // Clear the textarea value and prevent the default form submission behavior
        textarea.value = "";
        event.preventDefault();
    });

    // Call the 'addGross' function with the 'gossips' array
    addGross(gossips);
}

// Function to add gossip elements to the document
function addGross(goss) {
    goss.forEach(elem => {
        // Create a new gossip div with the gossip message
        let goss = document.createElement('div');
        goss.className = "gossip";
        goss.innerHTML = elem;

        // Append the gossip div to the document body
        document.body.appendChild(goss);
    });
}
