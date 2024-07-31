/* 
DOM Manipulation and Event Listeners 
1. Create a single page with two boxes at the bottom of the page; 
2. These boxes should be styled as chat windows, as described below. 
3. ➢ Chat windows let the user input a name and send a message. 
4. ➢ They include a recent messages area, and a submit button. 
5. ➢ Once submitted, the message, along with the name, should be displayed in both chat windows. 
Requirements:
 ➢ Do not manually create any HTML elements in your page; 
 ➢ Instead, use the document.createElement() and element.appendChild() or similar methods to add elements to your page. 
 ➢ Your page should only consist of the html, head, and body tags before executing your script.
*/



//scope  variable   = <div></div>
const chatContainer = document.createElement('div');


chatContainer.className = 'chat-container';

//es6 arrow function anonymous fuction
const createChatWindow = () => {
    const chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window';

    const messagesDiv = document.createElement('div');
    messagesDiv.className = 'messages';
    chatWindow.appendChild(messagesDiv);

    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';


    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter your name';
    inputGroup.appendChild(nameInput);

    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.placeholder = 'Enter your message';
    inputGroup.appendChild(messageInput);


    const submitButton = document.createElement('button');
    submitButton.textContent = 'Send';
    inputGroup.appendChild(submitButton);

    chatWindow.appendChild(inputGroup);

    //Put each chatWindow into the chatContainer
    //Later on we will append the chatContainer to the body
    chatContainer.appendChild(chatWindow);

    return {
        messagesDiv,
        nameInput,
        messageInput,
        submitButton
    };
};

const chatWindow1 = createChatWindow();
const chatWindow2 = createChatWindow();

//here we are appending the cht container to the DOM
//above in the method we append everything to the container
document.body.appendChild(chatContainer);


const addMessageToBothChats = (name, message) => {

    const messageElement1 = document.createElement('div');
    messageElement1.textContent = `${name}: ${message}`;
    chatWindow1.messagesDiv.appendChild(messageElement1);

    const messageElement2 = document.createElement('div');
    messageElement2.textContent = `${name}: ${message}`;
    chatWindow2.messagesDiv.appendChild(messageElement2);
};

const handleMessageSubmit = (nameInput, messageInput) => {

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name && message) {
        addMessageToBothChats(name, message);
        nameInput.value = '';
        messageInput.value = '';
    }
};

chatWindow1.submitButton.addEventListener('click', () => {
    handleMessageSubmit(chatWindow1.nameInput, chatWindow1.messageInput);
});

chatWindow2.submitButton.addEventListener('click', () => {
    handleMessageSubmit(chatWindow2.nameInput, chatWindow2.messageInput);
});
