const preservationMethods = {
    "milk": "Pasteurization, Freezing, UHT Treatment",
    "cheese": "Refrigeration, Wax Coating",
    "fish": "Freezing, Smoking, Drying, Canning",
    "meat": "Freezing, Curing, Smoking",
    "apples": "Refrigeration, Drying, Canning",
    "tomatoes": "Canning, Freezing, Drying",
    "bread": "Freezing, Refrigeration, Dehydration",
    "carrots": "Canning, Freezing, Refrigeration",
    "berries": "Freezing, Canning, Dehydration",
    "lettuce": "Refrigeration, Freezing",
    "potatoes": "Canning, Freezing, Drying"
};

// Function to handle sending messages
function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim().toLowerCase();
    let chatBox = document.getElementById("chat-box");

    if (userInput === "") return; // Ignore empty messages

    // Add user's message to chat
    let userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = "You: " + userInput;
    chatBox.appendChild(userMessage);

    // Get bot response
    let botMessage = document.createElement("p");
    botMessage.className = "bot-message";

    if (preservationMethods[userInput]) {
        botMessage.textContent = "🤖 Bot: " + preservationMethods[userInput];
    } else {
        botMessage.textContent = "🤖 Bot: Sorry, I don't have data for that food.";
    }

    chatBox.appendChild(botMessage);

    // Scroll chat to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";
}

// Function to send message when pressing "Enter"
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
