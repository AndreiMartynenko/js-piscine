/*
Write the body of the getArchitects function, which returns an array containing 2 arrays of HTML elements:

the first array contains the architects, all corresponding to a <a> tag
the second array contains all the non-architects people
 */

function getArchitects() {
    let architects = document.getElementsByTagName("a");
    let nonarchitects = document.getElementsByTagName("span");
    let architectsArr = Array.prototype.slice.call(architects);
    let nonarchitectsArr = Array.prototype.slice.call(nonarchitects);
    return [architectsArr], [nonarchitectsArr];
}

/*
Array.prototype.slice is called with the call method, 
which allows you to invoke a function with a specified 
this value and pass arguments to it. 
In this case, Array.prototype.slice is called with architects 
or nonarchitects as the this value, effectively treating them as arrays.
 
Array.prototype.slice creates a new array that contains 
all the elements of architects or nonarchitects. 
Since slice is called with no arguments, it creates a shallow 
copy of the original array, effectively creating a new array with the same elements.
 
The resulting array is assigned to the variables architectsArr 
and nonarchitectsArr, respectively, using the let keyword.
 
After these lines of code are executed, architectsArr and 
nonarchitectsArr will be actual arrays that contain the 
same elements as the original HTML collections architects and 
nonarchitects, respectively. This allows you to use standard 
array methods, such as forEach, map, filter, etc., on these arrays
for further processing or manipulation.
*/


/*
<span> is an HTML element used to define an inline section 
of text within a larger block of content. 
It is a generic container element that does not carry any 
specific semantic meaning or default styling, but it can be 
styled using CSS to control its appearance.

The <span> element is often used in conjunction with CSS to apply styles, 
such as color, font size, or text formatting, to specific sections 
of text within a larger HTML document. It can also be used to group together 
multiple inline elements, such as links or images, for styling or scripting purposes.
 */
/*
Write the body of the getClassical function, 
which returns an array containing 2 arrays of HTML elements:

the first array contains the architects belonging to the classical class
the second array contains the non-classical architects
 */

function getClassical() {
    let architects = document.querySelectorAll("a.classical");
    let nonarchitects = document.querySelectorAll("a:not(.classical)");
    let architectsArr = Array.prototype.slice.call(architects);
    let nonarchitectsArr = Array.prototype.slice.call(nonarchitects);
    return [architectsArr], [nonarchitectsArr];
}

/*
Write the body of the getActive function, which returns an array containing 2 arrays of HTML elements:

the first array contains the classical architects who are active in their class
the second array contains the non-active classical architects
 */

function getActive() {
    let activeArchitects = document.querySelectorAll (".classical.active");
    let nonactiveArchitects = document.querySelectorAll (".classical:not(.active)");
    let architectsArr = Array.prototype.slice.call(activeArchitects);
    let nonarchitectsArr = Array.prototype.slice.call(nonactiveArchitects);
    return [activeArchitects], [nonactiveArchitects];
}

/*
Write the body of the getBonannoPisano function, which returns an array containing:

the HTML element of the architect you're looking for, whose id is BonannoPisano
an array which contains all the remaining HTML elements of active classical architects
 */

function getBonannoPisano() {
    let archWithIdBonannoPiscano = document.getElementById("BonannoPisano");
    let archWithOtherId = document.getElementById("a.classical.active:not(#BonannoPisano)")
    let arrArchWithOtherId = Array.prototype.slice.call(archWithOtherId)
    return archWithIdBonannoPiscano, arrArchWithOtherId

}














