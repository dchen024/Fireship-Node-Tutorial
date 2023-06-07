// console.log('hello world 👋');

// globalThis is a namespace in Node
/*
globalThis.luckyNum = '23';

console.log(globalThis.luckyNum);
*/

// one of the more important globals is 'process'
// gives you access to currently running process

// gives name of platform -> 'darwin'
//console.log(process.platform);
// gives name of environment variable -> 'daniel'
//console.log(process.env.USER);

/*
Step 5) Events
Node.js is an asynchronous event-driven JavaScript runtime
Node.js run-time has an event-loop like a web browser
*/

// Before a Node process finishes it emits an event named 'exit'
/*
//            event,    callback
process.on('beforeExit', () => {
    // Your code logic here
  });
*/

// you can create your own from scratch 
/*
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => {
    console.log('yum 🍣');
})

eventEmitter.emit('lunch');
*/

// Step 6 File System
// Node has built in File System Module called 'fs'

// const { readFile, readFileSync } = require('fs');
/*
// sync === blocking, it has to finish all its work before any other code can run
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);
console.log('do this ASAP');
*/

// using a promise (asynch + non-blocking)

/*
const { readFile } = require('fs').promises;

async function hello(){
    const file = await readFile('./hello.txt', 'utf8');
    console.log(file);
}

hello();
*/

// Step 7) Modules & npm
// a module is a JavaScript file that exports its code
// ex. 'fs' & 'events'
// traditional way (common JS) to import a module in Node.js is to use require()
// new way (ES Modules) import/export

/*
const myModule = require('./my-module');

console.log(myModule);
*/

// to use other's modules' you can use npm (node package manager)
// an express app allows us to create different URLs and Endpoints
// when a user navigates

// Full-Stack Web Application
const express = require('express');
const { readFile } = require('fs').promises;

const app = express();                        // request - user's incoming data
app.get('/', async (request, response) => {   // response - your outgoing data

    response.send(await readFile('./home.html', 'utf-8') );
});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable at http://localhost:3000`));

// Eventually figure out using Google Cloud
// https://youtu.be/ENrzD9HAZK4