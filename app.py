from flask import Flask, request, jsonify

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json() or {}
    msg = data.get('message', '')
    reply = simple_bot_reply(msg)
    return jsonify({'reply': reply})


def simple_bot_reply(msg: str) -> str:
    text = (msg or '').strip().lower()
    if not text:
        return "Please say something."
    if any(g in text for g in ('hi', 'hello', 'hey')):
        return "Hello! How can I help you today?"
    if 'help' in text:
        return "I can answer simple prompts: ask about my name, ask for a joke, or say hello."
    if 'name' in text:
        return "I'm a simple local chatbot you can run locally."
    if 'joke' in text:
        return "Why did the developer go broke? Because he used up all his cache."
    if '?' in text:
        return "That's an interesting question — I don't have a full answer yet."
    return "You said: " + msg


if __name__ == '__main__':
    app.run(debug=True, port=5000)
