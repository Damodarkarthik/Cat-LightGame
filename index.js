function offButton(){
    document.getElementById("brightLightImg").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImg").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchOn").style.backgroundColor = "#22c55e"
    document.getElementById("switchOff").style.backgroundColor = "#cbd2d9"
    document.getElementById("switchStatus").textContent = "Switched Off"
}
function onButton(){
    document.getElementById("brightLightImg").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImg").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchOn").style.backgroundColor = "#cbd2d9"
    document.getElementById("switchOff").style.backgroundColor = "#22c55e"
    document.getElementById("switchStatus").textContent = "Switched On"
}