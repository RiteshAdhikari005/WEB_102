const users = [
  {
    id: "1",
    username: "traveler",
    email: "traveler@example.com",
    full_name: "Karma",
    profile_picture: "traveler.jpg",
    bio: "Travel photographer",
    created_at: "2023-01-15",
  },
  {
    id: "2",
    username: "foodie",
    email: "foodie@example.com",
    full_name: "Tashi",
    profile_picture: "foodie.jpg",
    bio: "Food lover and chef",
    created_at: "2023-02-10",
  },
  {
    id: "3",
    username: "techguru",
    email: "techguru@example.com",
    full_name: "Dorji",
    profile_picture: "techguru.jpg",
    bio: "Software engineer and tech enthusiast",
    created_at: "2023-03-05",
  },
];

const posts = [
  {
    id: "1",
    caption: "Beautiful sunset in the mountains!",
    image: "sunset.jpg",
    user_id: "1",
    likes_count: 120,
    comments_count: 15,
    created_at: "2023-04-01",
  },
  {
    id: "2",
    caption: "Trying out this amazing new recipe!",
    image: "food.jpg",
    user_id: "2",
    likes_count: 85,
    comments_count: 10,
    created_at: "2023-04-05",
  },
  {
    id: "3",
    caption: "Just launched my new open-source project!",
    image: "code.jpg",
    user_id: "3",
    likes_count: 200,
    comments_count: 30,
    created_at: "2023-04-10",
  },
];

const comments = [
  {
    id: "1",
    text: "Stunning view!",
    user_id: "2",
    post_id: "1",
    created_at: "2023-04-02",
  },
  {
    id: "2",
    text: "Where is this place?",
    user_id: "3",
    post_id: "1",
    created_at: "2023-04-03",
  },
  {
    id: "3",
    text: "Can you share the recipe?",
    user_id: "1",
    post_id: "2",
    created_at: "2023-04-06",
  },
];

const likes = [
  { id: "1", user_id: "2", post_id: "1", created_at: "2023-04-02" },
  { id: "2", user_id: "3", post_id: "1", created_at: "2023-04-03" },
  { id: "3", user_id: "1", post_id: "2", created_at: "2023-04-06" },
];

const followers = [
  { id: "1", follower_id: "2", following_id: "1", created_at: "2023-03-01" },
  { id: "2", follower_id: "3", following_id: "1", created_at: "2023-03-05" },
  { id: "3", follower_id: "1", following_id: "3", created_at: "2023-03-10" },
];

module.exports = { users, posts, comments, likes, followers };
