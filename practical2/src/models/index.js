const dataStore = {
  videos: [
    {
      id: 1,
      title: "My First TikTok",
      description: "Just testing this out!",
      url: "video1.mp4",
      userId: 1,
      likes: [2, 3],
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: 2,
      title: "Dance Challenge",
      description: "Try this dance!",
      url: "video2.mp4",
      userId: 2,
      likes: [1],
      createdAt: "2024-01-02T00:00:00.000Z"
    },
    {
      id: 3,
      title: "Cooking Tutorial",
      description: "How to make ema datshi",
      url: "video3.mp4",
      userId: 3,
      likes: [1, 2],
      createdAt: "2024-01-03T00:00:00.000Z"
    }
  ],

  users: [
    {
      id: 1,
      username: "karma_travels",
      email: "karma@example.com",
      name: "Karma",
      followers: [2, 3],
      following: [2],
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: 2,
      username: "tashi_dances",
      email: "tashi@example.com",
      name: "Tashi",
      followers: [1],
      following: [1, 3],
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: 3,
      username: "dorji_cooks",
      email: "dorji@example.com",
      name: "Dorji",
      followers: [1, 2],
      following: [],
      createdAt: "2024-01-01T00:00:00.000Z"
    }
  ],

  comments: [
    {
      id: 1,
      text: "Amazing video!",
      userId: 2,
      videoId: 1,
      likes: [1, 3],
      createdAt: "2024-01-02T00:00:00.000Z"
    },
    {
      id: 2,
      text: "Love this dance!",
      userId: 1,
      videoId: 2,
      likes: [2],
      createdAt: "2024-01-03T00:00:00.000Z"
    },
    {
      id: 3,
      text: "Can you share the recipe?",
      userId: 2,
      videoId: 3,
      likes: [],
      createdAt: "2024-01-04T00:00:00.000Z"
    }
  ],

  nextIds: {
    videos: 4,
    users: 4,
    comments: 4
  }
};

module.exports = dataStore;