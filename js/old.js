
let app = {};

app.dom = {};

app.initDom = () => {
    app.dom.aquarium = document.getElementById('aquarium');
}

app.runAquarium = () => {
    //loop animations
    setInterval(function() {
      app.addFish(app.createRandomFishElement());
    }, 100);

    setInterval(function(){
        let singleBubble = app.createBubble();
        app.dom.aquarium.appendChild(singleBubble);
        setTimeout(function(){
            singleBubble.style.bottom = "800px";
        }, 100);
    }, 300)
}

app.createBubble = () => {
    let bubble = document.createElement('img');

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

app.createRandomFishElement = () => {
    let fishImageList = ["bluefish.png", "purplefish.png"];
    let newFish = document.createElement('div');
    newFish.className = "fish";


    let width = Math.floor(Math.random() * 50 + 60);
    newFish.style.width = width +"px";

    //return 1 or 0, if 1 then flip fish
    let flipped = Math.round(Math.random());
    if (flipped == 0){
        console.log("flipped", flipped);
        newFish.className = "flippedFish";
    }

    //get random fish image
    var randomFish = fishImageList[Math.floor(Math.random()*fishImageList.length)];
    newFish.style.backgroundImage = "url('img/" + randomFish +"')";

    //console.log(newFish);
    return newFish;
}

app.addFish = (newFish) => {
    app.dom.aquarium.appendChild(newFish);

    let top = Math.floor(Math.random() * 800);
    newFish.style.top = top +"px";

    let speed = Math.floor(Math.random() * 9 + 4);
    newFish.style.transition = "all " + speed + "s ease-in";

    //set right/left value for css transition on .fish/.flippedFish
    if(newFish.className == "flippedFish"){
        setTimeout(function(){
            newFish.style.right = 1280+"px";
            console.log(app.dom.aquarium.clientWidth);
        },100);
    } else {
        setTimeout(function(){
            newFish.style.left = app.dom.aquarium.clientWidth+"px";
            console.log(app.dom.aquarium.clientWidth);
        },100);
    }

    newFish.addEventListener('transitionend', function(e){
        e.target.parentNode.removeChild(e.target);
    })

    //click to remove fish
    newFish.addEventListener('click', function(e){
        e.target.parentNode.removeChild(e.target);
    })

}

app.init = () => {
    app.initDom();
    app.runAquarium()
}

app.init();





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
