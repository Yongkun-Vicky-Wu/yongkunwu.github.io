document.getElementById("apply").onclick = function () {
    let fontSize = document.getElementById("fontSize").value;
    let fontFamily = document.getElementById("fontFamily").value;
    // I consulted ChatGPT for how I can get the results from users' input and found that value can be used to retrieve inputs

    let text = document.getElementById("english-text");
    text.style.fontSize = fontSize + 'px';
    text.style.fontFamily = fontFamily;
};
