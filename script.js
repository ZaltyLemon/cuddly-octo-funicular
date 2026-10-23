const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const chatForm = document.getElementById("chat-form");

addMessage("Hello! I’m BuggyBot. Ask me about your name or the weather.", false);

function addMessage(text, isUser = false) {
  const messageEl = document.createElement("div");
  messageEl.className = isUser ? "message user" : "message bot";
  messageEl.textContent = text;
  chatMessages.appendChild(messageEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getReply(message) {
  const cleaned = message.toLowerCase().trim();

  if (cleaned.includes("hello") || cleaned.includes("hi")) {
    return "Hi there! What can I help you with?";
  }

  if (cleaned.includes("name")) {
    return "I’m BuggyBot, and I’m still learning.";
  }

  if (cleaned.includes("weather")) {
    return "The weather is sunny and warm today.";
  }

  return "I’m still learning. Try asking about your name or the weather.";
}

function handleSubmit(event) {
  event.preventDefault();

  const message = userInput.value.trim();
  if (!message) {
    return;
  }

  addMessage(message, true);
  userInput.value = message;

  const response = getBotReply(message);
  addMessage(response, false);
}

chatForm.addEventListener("submit", handleSubmit);
