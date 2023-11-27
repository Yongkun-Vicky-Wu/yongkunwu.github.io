function changeLanguage() {
    const select = document.getElementById("language-select");
    const englishText = document.getElementById("english-text");
    const chineseText = document.getElementById("chinese-text");
    const frenchText = document.getElementById("french-text");

    // Get the selected value from the dropdown
    const selectedLanguage = select.value;

    // Hide all paragraphs
    englishText.style.display = "none";
    chineseText.style.display = "none";
    frenchText.style.display = "none";

    // Show the selected paragraph
    switch (selectedLanguage) {
        case "english":
            englishText.style.display = "block";
            break;
        case "chinese":
            chineseText.style.display = "block";
            break;
        case "french":
            frenchText.style.display = "block";
            break;
    }
}

// Attach the event listener to the dropdown
document.getElementById("language-select").addEventListener("change", changeLanguage);