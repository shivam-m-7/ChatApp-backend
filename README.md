# Tak Tik

> A Realtime Chat Application

A simple realtime chat apoplication made using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/).

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to _transpile_ all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

Back end is implemented using [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the _Cloud_ version of [MongoDB](https://docs.mongodb.com/) is used. Real time communication is done using [Socket.io](https://www.npmjs.com/package/socket.io).


## Features

- Latest features of JavaScript i.e. ES6, ES7, ES8 is used
- [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
- ES8 `async/await` is used
- Responsive Design

<br/>

<ul>
 <li> This is Simple Chat Application </li>
 <li> It is a Full Stack Application </li>
</ul>

- All the user details, group chats and conversations are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

<ul>
 <li>Login/Signup as well as Logout feature is added </li>
 <li>Error will be shown for validations</li>
</ul>

- Real time communication & notification is supported using <a href="https://www.npmjs.com/package/socket.io">Socket.io</a>

<ul>
 <li> Realtime One on One chats and group chats </li>
 <li> Functionality and features like Search for chats, create a group, add or remove partricipants. </li>   
 <li> typing... animation. </li>
 <li> Notifications
 <li> All the conversation are stored in the database i.e. <i>persistant</i>
</ul>


## Tech Stack

MongoDB, Express, React, Node, Socket.IO, Chakra-UI

## Hosted/Deployed

https://taktik.onrender.com


## Usage
Signup for chat with with our users

### Clone the repository:
```
git clone https://github.com/shivam-m-7/ChatApp-backend.git
```

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = <yourMongoDbUri>
JWT_SECRET = <yourSecret>
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run
Run frontend (:3000) & backend (:5000)
```
# Run frontend only
cd frontend
npm start 

# Run backend only
npm start
```

## Build & Deploy

```
# Create frontend production build
cd frontend
npm run build
```


