# AI Code Assistant

A simple web-based AI Code Assistant built with HTML, CSS (Tailwind), and JavaScript. It integrates with the OpenRouter API using the `stepfun/step-3.5-flash:free` model.

## Features

- Chat interface for interacting with AI
- Dark theme using Tailwind CSS
- External CSS and JS files
- Real-time responses from AI model

## Setup

1. Clone or download the files: `index.html`, `style.css`, `script.js`.

2. Get an API key from [OpenRouter](https://openrouter.ai/).

3. In `script.js`, replace `'YOUR_OPENROUTER_API_KEY_HERE'` with your actual API key.

## Running the App

Since this is a client-side web app, you need to serve it via a local HTTP server to avoid CORS issues.

### Using Python (if installed)

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Using Node.js (if installed)

Install `http-server` globally:

```bash
npm install -g http-server
```

Then run:

```bash
http-server
```

Open `http://localhost:8080` in your browser.

### Other Options

Use any static file server, like Apache, Nginx, or VS Code's Live Server extension.

## Usage

- Type your code or question in the input field.
- Press Enter or click Send.
- The AI response will appear in the chat.

## Troubleshooting

- If you get CORS errors, ensure you're running a local server, not opening `index.html` directly.
- Check your API key is correct and has credits.
- For network issues, ensure internet connection.

## Dependencies

- Tailwind CSS (via CDN)
- OpenRouter API