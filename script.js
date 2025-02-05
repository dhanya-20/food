const preservationData = {
    "milk": {
        "methods": "Pasteurization, Freezing, UHT Treatment",
        "time": "Refrigeration: 5-7 days, Freezing: 3-6 months, UHT: 6-9 months (unopened)"
    },
    "cheese": {
        "methods": "Refrigeration, Wax Coating",
        "time": "Refrigeration: 2 weeks - 6 months (varies by type), Wax-Coated: Up to 1 year"
    },
    "fish": {
        "methods": "Freezing, Smoking, Drying, Canning",
        "time": "Refrigeration: 1-2 days, Freezing: 3-8 months, Canning: 1-2 years"
    },
    "meat": {
        "methods": "Freezing, Curing, Smoking",
        "time": "Refrigeration: 3-5 days, Freezing: 6-12 months, Cured: 1-2 months"
    },
    "apples": {
        "methods": "Refrigeration, Drying, Canning",
        "time": "Refrigeration: 1-2 months, Drying: 6-12 months, Canning: 1 year"
    },
    "tomatoes": {
        "methods": "Canning, Freezing, Drying",
        "time": "Refrigeration: 1-2 weeks, Freezing: 6-8 months, Canning: 1-2 years"
    },
    "bread": {
        "methods": "Freezing, Refrigeration, Dehydration",
        "time": "Refrigeration: 1-2 weeks, Freezing: 3-6 months, Dehydration: 6-12 months"
    },
    "carrots": {
        "methods": "Canning, Freezing, Refrigeration",
        "time": "Refrigeration: 3-4 weeks, Freezing: 10-12 months, Canning: 1-2 years"
    },
    "berries": {
        "methods": "Freezing, Canning, Dehydration",
        "time": "Refrigeration: 3-7 days, Freezing: 10-12 months, Dehydration: 6-12 months"
    },
    "lettuce": {
        "methods": "Refrigeration, Freezing",
        "time": "Refrigeration: 5-10 days, Freezing: Not Recommended"
    },
    "potatoes": {
        "methods": "Canning, Freezing, Drying",
        "time": "Refrigeration: Not Recommended, Freezing: 10-12 months, Drying: 6-12 months"
    }
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

    if (preservationData[userInput]) {
        botMessage.innerHTML = `🤖 Bot: <b>Methods:</b> ${preservationData[userInput].methods} <br> <b>Preservation Time:</b> ${preservationData[userInput].time}`;
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
