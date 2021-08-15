console.log("That Work!");

$(function() {

    const parentElm = $("#loading");

    const childs = parentElm.find('span');
    console.log(childs);

    let delayAnimation = 0;
    childs.map((child) => {
        const elm = childs[child];
        $(elm).css({"animation-name": "loadingAnimation", "animation-delay": delayAnimation + "s"});
        delayAnimation+= 0.3;
    })

})
