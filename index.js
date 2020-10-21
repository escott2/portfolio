const flowerHeadingTop = document.querySelector(".js-generate-flowers--top");
const flowerHeadingBottom = document.querySelector(".js-generate-flowers--bottom");


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



// `
//     <svg width="20" height="40" viewBox="0 0 118 230" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M3 98C3 172 60 226 60 226C60 226 115 173 115 98C115 23 60 3 60 3C60 3 3 24 3 98Z" fill="#153337" stroke="black" stroke-width="5"/>
//     <line x1="61" y1="225.014" x2="60" y2="4.01357" stroke="black" stroke-width="6"/>
//     <line x1="59.423" y1="126.055" x2="33.423" y2="144.055" stroke="black" stroke-width="5"/>
//     <line y1="-2.5" x2="31.6228" y2="-2.5" transform="matrix(0.822192 0.56921 0.56921 -0.822192 63 124)" stroke="black" stroke-width="5"/>
//     <line y1="-2.5" x2="31.6228" y2="-2.5" transform="matrix(0.822192 0.56921 0.56921 -0.822192 63 70)" stroke="black" stroke-width="5"/>
//     <line x1="60.423" y1="72.0555" x2="34.423" y2="90.0555" stroke="black" stroke-width="5"/>
//     </svg>
// `




// EVENT LISTENERS ****************************

window.addEventListener('load', () => {
    generateFlowers(10, flowerHeadingTop);
    // generateFlowers(5, flowerHeadingBottom);

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

