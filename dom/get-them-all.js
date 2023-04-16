function getarr() {
    const arr1 = ["Hello"];
    const arr2 = ["World"];
    const arr3 = ["!"];
    return allarr = arr1.concat(arr2, arr3)

    /*The concat() method concatenates (joins) two or more arrays.
    The concat() method returns a new array, containing the joined arrays.
    The concat() method does not change the existing arrays.
    */
}
console.log(getAchitects())


//DOM Document Object Model

function getArchitects() {
    let architects = document.getElementsByTagName("a");
    let nonArchitects = document.getElementsByTagName("span");
    let arrArchitects = Array.prototype.slice.call(architects);
    let arrNonArchitects = Array.prototype.slice.call(nonArchitects);
   
    return [arrArchitects, arrNonArchitects]
}

function getClassical() {
    let architects = document.querySelectorAll("a.classical");
    let nonArchitects = document.querySelectorAll("a:not(.classical)");
    let arrArchitects = Array.prototype.slice.call(architects);
    let arrNonArchitects = Array.prototype.slice.call(nonArchitects);

    return [arrArchitects, arrNonArchitects]
}

function getActive() {
    let ActiveClassicalArchitects = document.querySelectorAll(".classical.active")
    let nonActiveClassicalArchitects = document.querySelectorAll(".classical:not(.active)")
    let arrActiveClassicalArchitects = Array.prototype.slice.call(ActiveClassicalArchitects);
    let arrNonActiveClassicalArchitects = Array.prototype.slice.call(nonActiveClassicalArchitects);

    return [arrActiveClassicalArchitects, arrNonActiveClassicalArchitects]
}

function getBonannoPiscano() {
    let archWithIdBonannoPiscano = document.getElementById("BonannoPisano");
    let archWithOtherId = document.getElementById("a.classical.active:not(#BonannoPisano)")
    let arrArchWithOtherId = Array.prototype.slice.call(archWithOtherId)
    return archWithIdBonannoPiscano, arrArchWithOtherId

}


/*
The Array.prototype.slice.call() method is used to convert an 
array-like object (such as the NodeList returned by querySelectorAll()) into a proper array.
The slice() method of the Array prototype is called with this 
set to the array-like object that is being converted, 
and returns a new array that contains all the elements 
of the original array-like object. The call() method is then 
used to invoke the slice() method with the this value set to the array-like object.

So, in the given code, the variable arrArchs is being assigned 
the value returned by invoking slice() method on the archs 
array-like object using the call() method. This converts the array-like 
object archs into a proper array, which can then be manipulated 
using the various methods available on the Array prototype.
*/

/*
Both document.querySelectorAll and getElementsByTagName are methods 
that allow you to access elements in the DOM 
(Document Object Model) based on their tag name. 
However, there are some differences between them:

Use of CSS selectors:
document.querySelectorAll allows you to use CSS selectors to 
select elements based on their attributes, class, or ID, 
among other criteria. For example, you can select all the 
elements with the class "myClass" using document.querySelectorAll(".myClass").

getElementsByTagName only allows you to select elements based on their tag name.

Return value:
document.querySelectorAll returns a NodeList, which is a collection of 
nodes that match the specified CSS selector.

getElementsByTagName returns an HTMLCollection, which is a collection of 
elements that match the specified tag name.

Performance:
getElementsByTagName is generally faster than document.querySelectorAll 
because it only looks for elements with a specific tag name, 
whereas document.querySelectorAll has to evaluate a CSS selector.

Overall, document.querySelectorAll is more versatile because 
it allows you to select elements based on various criteria, 
but it may be slower than getElementsByTagName for simple tag name-based selections.
*/