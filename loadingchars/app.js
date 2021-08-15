console.log("That Work!");

$(function() {

    const parentElm = $("#loading2");
    const animationName = "fadeText";
    const increamentOfCounter = 0.5;

    const childs = parentElm.find('span');

    let delayAnimation = 0;
    childs.map((child) => {
        const elm = childs[child];
        $(elm).css({"animation-name": animationName, "animation-delay": delayAnimation + "s"});
        delayAnimation+= increamentOfCounter;
    });

})
