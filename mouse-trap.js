export function createCircle() {
    document.addEventListener('mousedown', event => {
        /*
        This line adds an event listener to the mousedown event on the document. 
        When the mouse is clicked, the function specified in the second argument 
        (an arrow function) will be executed.
        */
        const newCirc = document.createElement('div')
        newCirc.setAttribute('class', 'circle')
        newCirc.setAttribute('id', 'Tester')
        let x = event.clientX - 25
        let y = event.clientY - 25
        /*
        These lines calculate the x and y coordinates of the mouse click, 
        offset by 25 pixels so that the circle is centered around the click.
         */
        newCirc.setAttribute('style', 'left: ' + x.toString() + 'px; top: ' + y.toString() + 'px; background: white;')
        document.body.appendChild(newCirc);
        /*
        This line sets the style attribute of the newCirc element to 
        position it at the x and y coordinates, with a white background. 
        */
    })
}
export function moveCircle() {
    document.addEventListener('mousemove', event => {
          /*
        This line adds an event listener to the mousedown event on the document. 
        When the mouse is clicked, the function specified in the second argument 
        (an arrow function) will be executed.
        */
        const lastCircle = document.querySelector('div:last-child')
        lastCircle.style.left = `${event.clientX - 25}px`
        lastCircle.style.top = `${event.clientY - 25}px`
        /*
        These lines update the left and top CSS properties of the 
        lastCircle element to follow the mouse movement, 
        offset by 25 pixels so that the circle is centered around the mouse.
         */
        document.body.append(lastCircle)
        let midBox = document.querySelector('div.box')
        let dims = midBox.getBoundingClientRect()
        if (lastCircle.getAttribute('class') !== 'box') {
            if ((+lastCircle.style.left.replace('px', '') > (dims.x)) && (+lastCircle.style.left.replace('px', '') < (dims.right - 50)) && (+lastCircle.style.top.replace('px', '') > (dims.top)) && (+lastCircle.style.top.replace('px', '') < (dims.bottom - 50))) {
                lastCircle.style.background = 'var(--purple)'
            }
        }
        if (event.clientX - 25 < (dims.x) && lastCircle.style.background === 'var(--purple)') {
            console.log(lastCircle.style.left)
            lastCircle.style.left = (dims.x).toString() + 'px'
            if (event.clientY - 25 < (dims.top)) {
                lastCircle.style.top = (dims.y).toString() + 'px'
            }
            console.log(event.clientY - 25)
            console.log(dims.bottom)
            if (event.clientY - 25 > (dims.bottom - 50)) {
                lastCircle.style.top = (dims.bottom - 50).toString() + 'px'
            }
        } else if (event.clientX - 25 > (dims.right - 50) && lastCircle.style.background === 'var(--purple)') {
            lastCircle.style.left = (dims.right - 50).toString() + 'px'
            if (event.clientY - 25 < (dims.top)) {
                lastCircle.style.top = (dims.y).toString() + 'px'
            }
            console.log(event.clientY - 25)
            console.log(dims.bottom)
            if (event.clientY - 25 > (dims.bottom - 50)) {
                lastCircle.style.top = (dims.bottom - 50).toString() + 'px'
            }
        } else if ((event.clientY - 25 > (dims.bottom - 50)) && lastCircle.style.background === 'var(--purple)') {
            lastCircle.style.top = (dims.bottom - 50).toString() + 'px'
        } else if ((event.clientY - 25 < (dims.top)) && lastCircle.style.background === 'var(--purple)') {
            lastCircle.style.top = (dims.top).toString() + 'px'
        }
    })
}
export function setBox() {
    const centerBox = document.createElement('div')
    centerBox.setAttribute('class', 'box')
    document.body.append(centerBox)
}
/*
The code first checks if the class of the last circle element on the page is not "box". 
If it is not, then it checks if the position of the circle is within a specific area 
on the page defined by the "dims" object. 
If the circle is within that area, then its background color is changed to purple.
The code then checks if the user has clicked within a certain distance from the left 
or right edge of the defined area, and if the last 
circle element's background color is purple. 
If these conditions are true, then the code sets the position of the last circle 
element to the left or right edge of the defined area.
The code also checks if the user has clicked within a certain distance from the top 
or bottom edge of the defined area, and if the last circle element's background 
color is purple. If these conditions are true, then the code sets the position 
of the last circle element to the top or bottom edge of the defined area.
Finally, the code defines a function called "setBox" that creates a new div 
element with a class of "box" and appends it to the end of the document body.
Overall, this code appears to be controlling the behavior of a draggable circle 
element on a webpage, restricting its movement to a defined area and changing 
its appearance when it is within that area. The "setBox" function is likely 
used to set up the initial state of the webpage.
*/