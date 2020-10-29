const flowerHeader = document.querySelector(".js-generate-flowers--header");
const flowerSection = document.querySelectorAll(".js-generate-flowers--section");


let flowerSVG = `
    <svg width="40" height="40" viewBox="0 0 261 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="131" cy="60" r="53" fill="#5C322D" stroke="black" stroke-width="14"/>
    <circle cx="201" cy="126" r="53" fill="#5C322D" stroke="black" stroke-width="14"/>
    <circle cx="60" cy="126" r="53" fill="#5C322D" stroke="black" stroke-width="14"/>
    <circle cx="131" cy="190" r="53" fill="#5C322D" stroke="black" stroke-width="14"/>
    <circle cx="131" cy="126" r="46" fill="#5C322D"/>
    <circle cx="131" cy="126" r="36" fill="#5C322D"/>
    </svg>
`

let leafSVG = `
    <svg width="20" height="40" viewBox="0 0 126 239" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 103C7 177 64 231 64 231C64 231 119 178 119 103C119 28 64 8 64 8C64 8 7 29 7 103Z" fill="#153337" stroke="black" stroke-width="14"/>
    </svg>
`


// EVENT LISTENERS ****************************

window.addEventListener('load', () => {
    generateFlowers(10, flowerHeader);
    
    for (let i = 0; i < flowerSection.length; i++) {
     generateFlowers(2, flowerSection[i]);
    }

});



// FUNCTIONS **********************************


//generate flower with random color within certain hex values

function generateFlowers(number, location) {
    let html = "";

    for (let i = 0; i < number; i++) {
        uniqueFlowerSVG = flowerSVG.replaceAll("5C322D", "2d565b");
        html += uniqueFlowerSVG;
        for (let y = 0; y < 1; y++) {
            uniqueLeafSVG = leafSVG.replaceAll("153337", "153337")
            html += uniqueLeafSVG;
            html += flowerSVG;

        }
    }



    location.innerHTML = html;

}

