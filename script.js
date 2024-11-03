// Display a greeting based on the time of day
window.onload = function() {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    const greetingMessage = currentHour < 12 ? "Good morning!" : (currentHour < 18 ? "Good afternoon!" : "Good evening!");
    greetingElement.textContent = greetingMessage;
};

// Button interaction to show a hidden message
document.getElementById("actionButton").onclick = function() {
    const surpriseMessage = document.getElementById("surpriseMessage");
    if (surpriseMessage.style.display === "none") {
        surpriseMessage.style.display = "block";
    } else {
        surpriseMessage.style.display = "none";
    }
};
