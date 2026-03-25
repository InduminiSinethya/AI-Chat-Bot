const API_KEY = ""; // 🔑 Put your API key here

let fixedCode = "";

document.getElementById("analyzeBtn").addEventListener("click", analyzeCode);
document.getElementById("copyBtn").addEventListener("click", copyCode);

async function analyzeCode() {
    const code = document.getElementById("codeInput").value;
    const output = document.getElementById("output");

    if (!code.trim()) {
        output.innerText = "⚠️ Please enter some code.";
        return;
    }

    output.innerText = "⏳ Analyzing with AI...";

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "stepfun/step-3.5-flash:free",
                messages: [
                    {
                        role: "system",
                        content: "You are an AI code assistant. Fix errors, correct syntax, and clearly provide the corrected code inside a code block."
                    },
                    {
                        role: "user",
                        content: `Analyze and fix this code:\n\n${code}`
                    }
                ]
            })
        });

        const data = await response.json();

        if (data.error) {
            output.innerText = "❌ Error: " + data.error.message;
            return;
        }

        const result = data.choices[0].message.content;
        output.innerText = result;

        // Extract code block
        const match = result.match(/```[\s\S]*?```/);

        if (match) {
            fixedCode = match[0]
                .replace(/```[a-z]*\n?/i, "")
                .replace(/```$/, "")
                .trim();
        } else {
            fixedCode = result;
        }

    } catch (error) {
        output.innerText = "❌ Network error: " + error.message;
    }
}

function copyCode() {
    if (!fixedCode) {
        alert("⚠️ No fixed code to copy!");
        return;
    }

    navigator.clipboard.writeText(fixedCode)
        .then(() => {
            alert("✅ Code copied to clipboard!");
        })
        .catch(err => {
            alert("❌ Copy failed: " + err);
        });
}