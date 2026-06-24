"use strict";

//require messages module (we can access the array)
const messageModule = require("./messages");

messageModule.messages.forEach(m => {
    let i = messageModule.messages.indexOf(m) + 1;
    console.log(i, m);
});
