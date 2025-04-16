const postForm = document.getElementById('postForm');
const postContent = document.getElementById('postContent');
const feed = document.getElementById('feed');

// Dummy initial posts
const posts = [
  { content: "Hello world! 👋", likes: 0 },
  { content: "Just made a coffee ☕", likes: 2 },
];

// Render posts
function renderPosts() {
  feed.innerHTML = "";
  posts.forEach((post, index) => {
    const postEl = document.createElement('div');
    postEl.className = 'post';
    postEl.innerHTML = `
      <p>${post.content}</p>
      <button class="like-btn" onclick="likePost(${index})">❤️ ${post.likes} Likes</button>
    `;
    feed.appendChild(postEl);
  });
}

// Like a post
function likePost(index) {
  posts[index].likes++;
  renderPosts();
}

// Handle new post
postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const content = postContent.value.trim();
  if (content) {
    posts.unshift({ content, likes: 0 });
    postContent.value = "";
    renderPosts();
  }
});

// Initial render
renderPosts();
