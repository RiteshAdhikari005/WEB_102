# Practical 1: Social Media API

## Description
A RESTful API for a social media platform built with Node.js and Express.
Supports JSON and XML responses, pagination, and CRUD operations for Users and Posts.

## Setup

1. Install dependencies:
   npm install

2. Create .env file:
   PORT=3000

3. Run the server:
   npm run dev

4. Server runs at:
   http://localhost:3000

## Endpoints

### Users
- GET /users - Get all users
- GET /users/:id - Get user by ID
- POST /users - Create a user
- PUT /users/:id - Update a user
- DELETE /users/:id - Delete a user

### Posts
- GET /posts - Get all posts
- GET /posts/:id - Get post by ID
- POST /posts - Create a post
- PUT /posts/:id - Update a post
- DELETE /posts/:id - Delete a post

## Features
- JSON and XML content negotiation
- Pagination: /users?page=1&limit=2
- Error handling with proper status codes
- API documentation at http://localhost:3000/api-docs

## Status Codes
- 200 - Success
- 201 - Created
- 400 - Bad Request
- 401 - Unauthorized
- 404 - Not Found
- 500 - Server Error