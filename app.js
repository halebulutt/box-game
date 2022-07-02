window.onkeydown = function changeBox(event) {
    const box = document.querySelector(".change-box");

    const leftPosition = box.offsetLeft;
    const topPosition = box.offsetTop;
    const currentWidth = box.getBoundingClientRect().width;
    const currentHeight = box.getBoundingClientRect().height;

    const code = event.keyCode;

    if (code == 70) {
        box.style.left = (getRandom(1, 1500)) + "px";
        box.style.top = (getRandom(1, 500)) + "px";
    }

    if (code == 37) {
        box.style.left = (leftPosition - 5)+ "px" ;
        box.style.backgroundColor = "cyan";
    }

    if (code == 38) {
        box.style.top = (topPosition - 5)+ "px" ;
        box.style.backgroundColor = "green";
    }

    if (code == 39) {
        box.style.left = (leftPosition + 5)+ "px" ;
        box.style.backgroundColor = "white";
    }

    if (code == 40) {
        box.style.top= (topPosition + 5)+ "px" ;
        box.style.backgroundColor = "red";
    }

    if (code == 32) {
        if (currentWidth + 10 < 300) {
            box.style.width = (currentWidth + 10) + "px";
            box.style.height = (currentHeight + 10) + "px";
        }
    }

    if (code == 13) {
        if (currentWidth - 10 > 180) {
            box.style.width = (currentWidth - 10) + "px";
            box.style.height = (currentHeight - 10) + "px";
        }
    }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
