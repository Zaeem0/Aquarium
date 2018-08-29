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

    //newFish.className += " active";
    let top = Math.floor(Math.random() * 800);
    newFish.style.top = top +"px";

    let height = Math.floor(Math.random() * 50 + 60);
    newFish.style.height = height +"px";

    setTimeout(function(){
        newFish.style.left = app.dom.aquarium.clientWidth+"px";
    },100);

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
