document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'Light';
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = 'Dark';
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = 'Light';
            }
        });

        // Contact form
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent! I\'ll get back to you soon.');
            e.target.reset();
        });

        // Chatbot
        const chatBtn = document.getElementById('chatBtn');
        const chatBox = document.getElementById('chatBox');
        const closeChat = document.getElementById('closeChat');
        const chatInput = document.getElementById('chatInput');
        const sendBtn = document.getElementById('sendBtn');
        const chatMessages = document.getElementById('chatMessages');

        chatBtn.addEventListener('click', () => {
            chatBox.classList.toggle('open');
        });

        closeChat.addEventListener('click', () => {
            chatBox.classList.remove('open');
        });

        function addChatMessage(text, isUser) {
            const msg = document.createElement('div');
            msg.className = `chat-message ${isUser ? 'user' : 'bot'}`;
            msg.textContent = text;
            chatMessages.appendChild(msg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function getChatResponse(input) {
            const text = input.toLowerCase();
            
            if (text.includes('skill')) {
                return "I work with Python, Deep Learning , Data Analysis, SQL, AI Systems, and more.";
            } else if (text.includes('project') || text.includes('work')) {
                return "Check out the Work section to see my recent projects!";
            } else if (text.includes('contact') || text.includes('email')) {
                return "You can reach me via the contact form or email at jayantjangir@gmail.com";
            } else if (text.includes('experience')) {
                return "I have 1+ years of experience in AI and Data Science.";
            } else {
                return "I can help with questions about my skills, projects, or contact info!";
            }
        }

        function sendMessage() {
            const text = chatInput.value.trim();
            if (text) {
                addChatMessage(text, true);
                chatInput.value = '';
                
                setTimeout(() => {
                    const response = getChatResponse(text);
                    addChatMessage(response, false);
                }, 500);
            }
        }

        sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});