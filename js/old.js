





/*
function getPosition(element)
{
    var bound = element.getBoundingClientRect();
    var html = document.documentElement;

    return {
        top: bound.top + window.pageYOffset - html.clientTop,
        left: bound.left + window.pageXOffset - html.clientLeft
    };
}
*/

/*
function generateBubbles(container){
    var svgns = "http://www.w3.org/2000/svg";
    for (var x = 0; x < container.clientWidth; x += 50) {
        for (var y = 0; y < container.clientHeight; y += 50) {
            let radius = Math.floor(Math.random() * 10);
            let xOffset = Math.floor(Math.random() * 50 - 25);
            let yOffset = Math.floor(Math.random() * 50 - 25);
            console.log(radius)
            var circle = document.createElementNS(svgns, 'circle');
            circle.setAttributeNS(null, 'cx', x + xOffset);
            circle.setAttributeNS(null, 'cy', y + yOffset);
            circle.setAttributeNS(null, 'r', radius);

            container.appendChild(circle);
        }
    }
}

create svg circles for bubbles
generateBubbles(container);

*/
