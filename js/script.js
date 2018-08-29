function createBubbles(){
    var bubble = document.createElement('img');

    bubble.src = "./img/bubble.png";
    bubble.className = "bubble";

    let height = Math.floor(Math.random() * 62 + 4);
    bubble.style.height = height + "px";

    let left = Math.floor(Math.random() * 1000 + 200);
    bubble.style.left = left + "px";

    let speed = Math.floor(Math.random() * 12 + 4);
    bubble.style.transition = "all " + speed + "s ease-in";

    return bubble;
}

function createRandomFishElement(){
    var fishImageList = ["bluefish.png", "purplefish.png"];
    
    var newFish = document.createElement('div');
    newFish.className = "fish";

    //get random fish image
    var randomFish = fishImageList[Math.floor(Math.random()*fishImageList.length)];
    newFish.style.backgroundImage = "url('img/" + randomFish +"')";

    let speed = Math.floor(Math.random() * 9 + 4);
    newFish.style.transition = "all " + speed + "s ease-in";
    return newFish;
}

function addFish(newFish){
    var aquarium = document.getElementById('aquarium');
    aquarium.appendChild(newFish);

    //newFish.className += " active";
    let top = Math.floor(Math.random() * 800);
    newFish.style.top = top +"px";

    let height = Math.floor(Math.random() * 50 + 60);
    newFish.style.height = height +"px";

    setTimeout(function(){
        newFish.style.left = aquarium.clientWidth+"px";
    },100);

    newFish.addEventListener('transitionend', function(e){
        e.target.parentNode.removeChild(e.target);
    })

    //click to remove fish
    newFish.addEventListener('click', function(e){
        e.target.parentNode.removeChild(e.target);
    })

}

setInterval(function() {
  addFish(createRandomFishElement());
}, 100);

var container = document.getElementById('bubble-container');

setInterval(function(){
    let singleBubble = createBubbles();
    container.appendChild(singleBubble);
    setTimeout(function(){
        singleBubble.style.bottom = "800px";
    }, 100);
}, 300)

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
