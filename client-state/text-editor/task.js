let editor = document.getElementById("editor");

editor.addEventListener("input", function() {
    let text = editor.value;
    localStorage.setItem("text", text);
});

let storedText = localStorage.getItem("text");

if (storedText) {
    editor.value = storedText;
}





