# Practical 2: TikTok API

## Description
A RESTful API for a TikTok-like platform built with Node.js and Express.
Supports Videos, Users, Comments, Likes and Followers with CRUD operations.

## Setup

1. Install dependencies:
   npm install

2. Create .env file:
   PORT=3000
   NODE_ENV=development

3. Run the server:
   npm run dev

4. Server runs at:
   http://localhost:3000

## Endpoints

### Videos
- GET /api/videos - Get all videos
- GET /api/videos/:id - Get video by ID
- POST /api/videos - Create a video
- PUT /api/videos/:id - Update a video
- DELETE /api/videos/:id - Delete a video
- GET /api/videos/:id/comments - Get video comments
- GET /api/videos/:id/likes - Get video likes
- POST /api/videos/:id/likes - Like a video
- DELETE /api/videos/:id/likes - Unlike a video

### Users
- GET /api/users - Get all users
- GET /api/users/:id - Get user by ID
- POST /api/users - Create a user
- PUT /api/users/:id - Update a user
- DELETE /api/users/:id - Delete a user
- GET /api/users/:id/videos - Get user's videos
- GET /api/users/:id/followers - Get user's followers
- POST /api/users/:id/followers - Follow a user
- DELETE /api/users/:id/followers - Unfollow a user

### Comments
- GET /api/comments - Get all comments
- GET /api/comments/:id - Get comment by ID
- POST /api/comments - Create a comment
- PUT /api/comments/:id - Update a comment
- DELETE /api/comments/:id - Delete a comment
- POST /api/comments/:id/likes - Like a comment
- DELETE /api/comments/:id/likes - Unlike a comment

## Features
- Full CRUD for Videos, Users and Comments
- Like and Unlike system for videos and comments
- Follow and Unfollow system for users
- Error handling with proper status codes

## Status Codes
- 200 - Success
- 201 - Created
- 204 - Deleted successfully
- 400 - Bad Request
- 404 - Not Found
- 409 - Conflict
- 500 - Server Error