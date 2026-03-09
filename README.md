# Scratch WebRTC Voice Chat

Real voice chat system for Scratch multiplayer games.

Uses:
- WebRTC for audio streaming
- Socket.io for signaling
- Browser microphone access

Scratch cannot directly use microphones, so this external webpage handles voice communication.

## Features

- Real-time voice chat
- Room system
- Unlimited players
- Works alongside Scratch multiplayer games

## Run the Server

Install dependencies:

npm install

Start the signaling server:

node server/server.js

Open:

client/index.html

## Usage

1. Start the server
2. Open index.html
3. Enter a room name
4. Players using the same room will hear each other
