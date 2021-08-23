console.log("That Work!");

$(function() {

    const parentElm = $("#loading3");
    const animationName = "bluredText";
    const increamentOfCounter = 0.3;

    const childs = parentElm.find('span');

    let delayAnimation = 0;
    childs.map((child) => {
        const elm = childs[child];
        $(elm).css({"animation-name": animationName, "animation-delay": delayAnimation + "s"});
        delayAnimation+= increamentOfCounter;
    });

})
