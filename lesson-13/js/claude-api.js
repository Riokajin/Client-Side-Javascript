// HELPER: Available API Endpoints
// Base URL: https://georgian.polaristechservices.com

/* CLAUDE API ENDPOINTS */
// 1. POST /api/claude/messages - Send message to Claude
//    Headers: X-Student-API-Key: your_student_id, Content-Type: application/json
//    Body: { model: "claude-3-5-sonnet-20241022", max_tokens: 100, messages: [{ role: "user", content: "your message" }] }
//    Response: { content: [{ text: "Claude's response" }], usage: { input_tokens: 10, output_tokens: 20 } }

// 2. GET /api/claude/status - Check token usage
//    Headers: X-Student-API-Key: your_student_id
//    Response: { student_id: "12345", student_name: "John Doe", tokens_used: 500, tokens_allocated: 10000, tokens_remaining: 9500, is_enabled: true }

// STEP 1: Store the API configuration
// STEP 2: Set the base URL for the Claude API
const baseURL = "https://georgian.polaristechservices.com";
// STEP 3: Set your student API key (student ID)
const studentApiKey = "100142217";
// STEP 4: Set the maximum tokens for API requests
const maxTokens = 1000;

/* STEP 5: Reference the DOM elements you'll need to access */
const userMessage = document.querySelector("#user-message");
const sendMessageBtn = document.querySelector("#send-message");
const checkUsageBtn = document.querySelector("#check-usage");
const results = document.querySelector("#results");
const followUpMessage = document.querySelector("#follow-up-message");
const sendFollowUpBtn = document.querySelector("#send-follow-up");

sendFollowUpBtn.addEventListener("click", sendFollowup);

/* STEP 6: Add event listeners for all interactive elements */
// STEP 6a: Send message button
sendMessageBtn.addEventListener("click", sendChatMessage);

// STEP 6b: Check usage button
checkUsageBtn.addEventListener("click", checkTokenUsage);

// Conversation History
let conversationHistory = [];



/* STEP 7: Create the checkTokenUsage function */
function checkTokenUsage(){
    // STEP 7a: Create complete url
    let url = `${baseURL}/api/claude/status`;
    // STEP 7b: Request status from the API
    fetch(url, {
        headers: {
            "X-Student-API-Key": studentApiKey
        }
    })
    // STEP 7c: Handle the response
    .then(response => {
        return response.json();
    })
    // STEP 7d: Display to user
    .then(json => {
        displayStatus(json);
    })
}
    
function displayStatus(json){
    console.log(json);
    let pre = document.createElement("pre"); // <pre></pre>
    pre.textContent = `Is Enabled: ${json.is_enabled}
    Last Used At: ${json.last_used_at}
    Student Id: ${json.student_id}
    Tokens Used: ${json.tokens_used}
    Tokens Allocated: ${json.tokens_allocated}
    Tokens Remaining: ${json.tokens_remaining}`;
    results.appendChild(pre);
}


/* STEP 8: Create the sendChatMessage function for Claude API interaction */

//Updating sendChatMessage to support conversation history

function sendChatMessage(){

    // STEP 8a: Get form values
    let userInput = userMessage.value;
    // STEP 8b: Create complete url
    let url = `${baseURL}/api/claude/messages`;
    // STEP 8c: Prepare the request body according to Claude API format
    // { model: "claude-3-5-sonnet-20241022", max_tokens: 100, messages: [{ role: "user", content: "your message" }] }
    let body = {
        model: "claude-sonnet-5",
        max_tokens: maxTokens,
        messages: [
            {
                role: "user",
                content: userInput
            }
        ]
    }
    // STEP 8d: Make the API request using fetch()
    fetch(url, {
        method: "POST",
        headers: {
            "X-Student-API-Key": studentApiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    // STEP 8e: Handle the response
    .then(response => {
        return response.json();
    })
    .then(json => {
        displayMessage(json);
    })
}
    
// STEP 8f: Extract the message content from Claude's response
function displayMessage(json){
    console.log(json);


    let para = document.createElement("p"); // <p></p>
    para.textContent = json.content[0].text;
    results.appendChild(para);

    window.firstClaudeResponse = json.content[0].text;

    document.querySelector("#follow-up-section").style.display = "block";
}

// Follow-Up Request
function sendFollowup(){
    let followUpText = followUpMessage.value;

    // Build full conversation history (3 messages)
    let messages = [
        {
            role: "user",
            content: userMessage.value
        },
        {
            role: "assistant",
            content: window.firstClaudeResponse
        },
        {
            role: "user",
            content: followUpText
        }
    ];

    let url = `${baseURL}/api/claude/messages`;
    let body = {
        model: "claude-sonnet-5",
        max_tokens: maxTokens,
        messages: messages
    };

    fetch(url, {
        method: "POST",
        headers: {
            "X-Student-API-Key": studentApiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => {
        displayFollowup(json);
    });
}

// Display follow-up response differently
function displayFollowup(json){
    let box = document.createElement("div");
    box.style.backgroundColor = "#eef";
    box.style.padding = "10px";
    box.style.marginTop = "10px";
    box.style.borderLeft = "4px solid #66f";

    box.textContent = "Clause (Follow-Up): " + json.content[0].text;
    results.appendChild(box);
}

// LAB EXTENSION: Multi-Message Chat Feature
// After completing the basic implementation, extend the functionality to support conversation history:

/* LAB STEP 1: Modify sendChatMessage to use conversation history */
// - Add the user's message to conversationHistory
// - Send the entire conversation to the API instead of just the current message
// - Add Claude's response to conversationHistory

/* LAB STEP 2: Update the displayResult function for chat-like appearance */
// - Show messages in a conversation format
// - Display user and Claude messages differently
// - Show conversation flow clearly
