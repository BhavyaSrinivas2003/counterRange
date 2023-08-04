function startBtn() {
    let paraElement = document.getElementById("counterText");
    let startInputElement = document.getElementById("fromUserInput");
    let endInputElement = document.getElementById("toUserInput");
    let startInputElementValue = startInputElement.value;
    let endInputElementValue = endInputElement.value;
    let i = parseInt(startInputElementValue);
    if ((startInputElementValue === "") || (endInputElementValue === "")) {
        alert("Enter a valid input");
    } else {
        paraElement.textContent = i;
        let uniqueId = setInterval(function() {
            if (i < parseInt(endInputElementValue)) {
                i = i + 1;
                paraElement.textContent = i;
            } else if (i === parseInt(endInputElementValue)) {
                clearInterval(uniqueId);
            }
        }, 1000);
    }
}