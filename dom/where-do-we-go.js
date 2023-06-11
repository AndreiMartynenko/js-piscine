// Import the 'places' variable from the 'where-do-we-go.data.js' file
import { places } from "./where-do-we-go.data.js";

// Export the 'explore' function as a module
export function explore() {
    // Sort the 'places' array based on the coordinates using a custom sorting function
    let orderedPlaces = places.sort((a, b) => {
        // Extract the coordinates for comparison
        let aCoord = a.coordinates;
        let bCoord = b.coordinates;

        // Convert the coordinates to decimal format for comparison
        let aDeg = +(aCoord.slice(0, aCoord.indexOf('°')));
        let bDeg = +(bCoord.slice(0, bCoord.indexOf('°')));

        // Extract the minutes from the coordinates
        let aMin = +(aCoord.slice(aCoord.indexOf('°') + 1, aCoord.indexOf('\'')));
        let bMin = +(bCoord.slice(bCoord.indexOf('°') + 1, bCoord.indexOf('\'')));

        // Extract the seconds from the coordinates
        let aSec = +(aCoord.slice(aCoord.indexOf('\'') + 1, aCoord.indexOf('\"')));
        let bSec = +(bCoord.slice(bCoord.indexOf('\'') + 1, bCoord.indexOf('\"')));

        // Extract the direction (N/S) from the coordinates
        let aDir = aCoord.split(" ")[0].slice(-1);
        let bDir = bCoord.split(" ")[0].slice(-1);

        // Adjust the coordinate values if the direction is 'S'
        if (aDir === 'S') {
            aDeg *= -1;
            aMin *= -1;
            aSec *= -1;
        }
        if (bDir === 'S') {
            bDeg *= -1;
            bMin *= -1;
            bSec *= -1;
        }

        // Compare the direction, degrees, minutes, and seconds of the coordinates
        if (aDir != bDir) {
            return aDir.charCodeAt(0) - bDir.charCodeAt(0);
        }
        if (aDeg != bDeg) {
            return bDeg - aDeg;
        }
        if (aMin != bMin) {
            return bMin - aMin;
        }
        return bSec - aSec;
    });

    // Create a 'div' element for the compass
    const compass = document.createElement('div');
    compass.className = 'direction';
    compass.innerHTML = 'N';
    document.body.append(compass);

    // Track scrolling to change the compass text
    let oldValue = 0;
    let newValue = 0;
    let scrolled = false;
    window.addEventListener('scroll', (e) => {
        newValue = window.pageYOffset;
        scrolled = true;
        if (oldValue < newValue) {
            compass.innerHTML = 'S';
        } else {
            compass.innerHTML = 'N';
        }
        oldValue = newValue;
    });

    // Create an anchor tag for the first ordered place
    const newA = document.createElement('a');
    newA.className = 'location';
    newA.innerHTML = `${orderedPlaces[0].name}\n${orderedPlaces[0].coordinates}`;
    newA.style.color = orderedPlaces[0].color;
    newA.href = `https://www.google.com/maps/place/${orderedPlaces[0].coordinates}`;
    newA.target = '_blank';
    document.body.append(newA);

    // Create section tags for each ordered place and set background images
    for (let i = 0; i < orderedPlaces.length; i++) {
        const newSect = document.createElement('section');
        newSect.id = i.toString();
        let imageLoc = orderedPlaces[i].name.toLowerCase().split(',')[0].split(' ').join('-');
        newSect.style.background = `URL('./where-do-we-go_images/${imageLoc}.jpg')`;
        document.body.append(newSect);
    }

    // Create an IntersectionObserver to track section intersections
    let observer = new IntersectionObserver(valChanger => {
        valChanger.forEach(entry => {
            if (entry.isIntersecting === true) {
                // Get the current scroll position and update the anchor tag accordingly
                let val = (Math.round(window.scrollY / window.innerHeight));
                newA.innerHTML = `${orderedPlaces[val].name}\n${orderedPlaces[val].coordinates}`;
                newA.style.color = orderedPlaces[val].color;
                newA.href = `https://www.google.com/maps/place/${orderedPlaces[val].coordinates}`;
                console.log(newA.href);
                console.log('TEST', newA.href.split('%C2%B0').join('°').split('%22').join('"').split('%20').join(' '));
            }
        });
    }, { threshold: [0.5] });

    // Observe all section elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
}
