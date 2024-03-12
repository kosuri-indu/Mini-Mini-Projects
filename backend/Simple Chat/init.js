const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main()
    .then(() => {
        console.log('Connection succesfull');
    })
    .catch(err => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats = [
    {
        from : "neha",
        to : "priya",
        message: "send me your email address",
        created_at: new Date()
    },
    {
        from : "rohit",
        to : "priya",
        message: "what are you doing?",
        created_at: new Date()
    },
    {
        from : "kumar",
        to : "anil",
        message: "had lunch?",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);