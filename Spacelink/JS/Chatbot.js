
const responses = {
    "hello": "👋 Hello! How can I assist you with space-related queries? 😊",
    "spacelink": "🌍 SpaceLink is a next-generation satellite communication network connecting space assets seamlessly. 🛰️",
    "satellites": "🛰️ Satellites are used for communication, navigation, weather monitoring, and space research. 🌎",
    "problem solve": "⚡ It eliminates data delays by enabling continuous satellite connectivity. 🚀",
    "tdrss": "📡 No, TDRSS (Tracking and Data Relay Satellite System) is not replaced by SpaceLink. It complements and expands its capabilities with higher capacity and commercial scalability. 🌐",
    "leo": "🛰️ Low Earth Orbit (LEO) satellites lack continuous connectivity with ground stations, impacting real-time data transfer. 📶",
    "bye": "👋 Goodbye! Have a great day exploring space! 🌠"
};

    function sendMessage() {
        const input = document.getElementById("userInput").value.trim().toLowerCase();
        const chatbox = document.getElementById("chatbox");

        if (input == "") return;

        const userMessage = `<div class="chat user">${input}</div>`;
        chatbox.innerHTML += userMessage;

        // Show typing effect
        const typingMessage = `<div class="chat bot typing">Typing...</div>`;
        chatbox.innerHTML += typingMessage;
        chatbox.scrollTop = chatbox.scrollHeight;

        setTimeout(() => {
            document.querySelector(".typing").remove();

            // Check for keywords instead of exact matches
            let response = "🤔 I'm not sure about that. Try asking something else!";
            for (let key in responses) {
                if (input.includes(key)) {
                    response = responses[key];
                    break;
                }
            }

            const botMessage = `<div class="chat bot">${response}</div>`;
            chatbox.innerHTML += botMessage;
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 1000);

        document.getElementById("userInput").value = "";
    }

