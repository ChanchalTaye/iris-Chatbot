import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message = async (req, res) => {
  console.log("Controller reached");

   try {
    const { text } = req.body || {};
 
    if(!text?.trim()){
        return res.status(400).json({error:"Text cannot be empty"});
    }

    const user=await User.create({
        sender:"user",
        text
    })


    // Data
    const botResponses={
  "hello": "Hello! How can I help you today?",
"hi": "Hi there 👋 What can I do for you?",
"how are you": "I'm doing great! How can I assist you today?",
"what is your name": "I’m Iris, your virtual assistant.",
"who are you": "I’m an AI chatbot designed to help answer your questions.",
"thank you": "You're welcome 😊 Let me know if you need anything else.",
"bye": "Goodbye! Have a great day ahead 👋",
"good morning": "Good morning! Hope you have a wonderful day ☀️",
"good night": "Good night 🌙 Take care and rest well.",


 "what is programming": "Programming is the process of writing instructions that a computer can execute to perform tasks.",
"what is python": "Python is a high-level programming language known for simplicity and wide usage in AI, web, and data science.",
"what is javascript": "JavaScript is a programming language mainly used to build interactive websites and web applications.",
"what is react": "React is a JavaScript library used to build user interfaces, especially single-page applications.",
"what is node js": "Node.js allows JavaScript to run on the server instead of the browser.",
"what is api": "An API (Application Programming Interface) allows different software systems to communicate with each other.",
"what is backend": "Backend handles server logic, databases, authentication, and APIs.",
"what is frontend": "Frontend is the part of an app users see and interact with, built using HTML, CSS, and JavaScript.",
"what is mongodb": "MongoDB is a NoSQL database that stores data in JSON-like documents.",

"how to become a software engineer": "Learn programming basics, build projects, practice problem-solving, and keep improving consistently.",
"what skills are needed for a developer": "Programming, problem-solving, communication, and understanding frameworks and tools.",
"what is full stack developer": "A full stack developer works on both frontend and backend of applications.",
"what is data science": "Data science involves analyzing data to extract insights using statistics and programming.",
"what is machine learning": "Machine learning allows systems to learn from data without explicit programming.",
"how to prepare for interviews": "Practice coding, revise fundamentals, build projects, and mock interviews.",

"what is time": "I can’t see the clock, but your device should show the current time.",
"what is internet": "The internet is a global network that connects computers worldwide.",
"what is cloud computing": "Cloud computing provides computing services over the internet instead of local servers.",
"what is ai": "Artificial Intelligence is the simulation of human intelligence in machines.",
"what can you do": "I can answer questions, help with learning, and assist you with tasks.",

"tell me a joke": "Why don’t programmers like nature? Too many bugs 🐛",
"are you human": "No, I’m an AI — but I try my best to sound friendly!",
"do you sleep": "I don’t sleep — I’m always here when you need me.",
"can you think": "I don’t think like humans, but I can process information quickly.",


}

const normalizedText = text.toLowerCase().trim();

const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
   } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});
   }
}