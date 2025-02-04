const messages = [
        "Vợ chắc hong ?",
    "Vợ từ chối đó hảaa ??",
    "không yêu dy àaaa ?",
    "vợ àaaaaa..",
    "Vợ nỡ đối với dy vậy saoooo",
    "vợ từ chối là dy buồn lắm aaaa..",
    "buồn buồn buồn nhiều như này nèe.",
    "nhiều cỡ này nuaa neeeeee.",
    "hoii vợ kì quá hog chịu hoi..",
    "GIỠN ÁHHHHH,NĂN NỈ AA",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
