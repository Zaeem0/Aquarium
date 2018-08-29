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

    //randomize whether bubble will be in front or behind fishImageList
    //z-index will either be 0 or 1
    bubble.style.zIndex = Math.round(Math.random());;

    return bubble;
}

app.createRandomFishElement = () => {
    let fishImageList = ["bluefish.png", "purplefish.png", "shark.png"];
    let newFish = document.createElement('div');
    newFish.className = "fish";

    //return 1 or 0, if 1 then flip fish
    let flipped = Math.round(Math.random());
    if (flipped == 0){
        console.log("flipped", flipped);
        newFish.className = "flippedFish";
        //0px will be the right side of the browser because of the scaleX property
        newFish.style.transform = `translate(0px) scaleX(-1)`
    }

    //get random fish image
    var randomFish = fishImageList[Math.floor(Math.random()*fishImageList.length)];
    newFish.style.backgroundImage = "url('img/" + randomFish +"')";

    let speed = Math.floor(Math.random() * 9 + 4);
    newFish.style.transition = "all " + speed + "s ease-in";
    //console.log(newFish);
    return newFish;
}

app.addFish = (newFish) => {
    app.dom.aquarium.appendChild(newFish);

    let top = Math.floor(Math.random() * 800);
    newFish.style.top = top +"px";

    let height = Math.floor(Math.random() * 50 + 60);
    newFish.style.height = height +"px";

    //set right/left value for css transition on .fish/.flippedFish
    if(newFish.className == "flippedFish"){
        setTimeout(function(){
            //moves fish from right to left
            //negative clientWidth will be the left side of the browser because of the scaleX property
            newFish.style.transform = `translate(-${app.dom.aquarium.clientWidth}px) scaleX(-1)`
        },100);
    } else {
        setTimeout(function(){
            //moves fish from left to right
            newFish.style.transform = `translate(${app.dom.aquarium.clientWidth}px)`
        },100);
    }

    //deletes fish node from DOM after it has finished moving across the screen
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
