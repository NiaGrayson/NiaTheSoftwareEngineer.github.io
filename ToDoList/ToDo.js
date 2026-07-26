const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addItem() {
    if (inputBox.value.trim() === "") {
        alert("Please enter a name.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputBox.value;

    listContainer.appendChild(li);

    inputBox.value = "";
}

// Press Enter to add item
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});