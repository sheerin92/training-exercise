const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');
const limitEl = document.getElementById('limit');

let page = 1;

filter.addEventListener('input', filterPosts);
limitEl.addEventListener('input', limitNoOfPostsShown);

function limitNoOfPostsShown() {
  let limit = limitEl.value;
  if(limit == ""){
     fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      return showLimitedPosts(data)
     });
    return;
  }
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      data = data.splice(0, limit);
      showLimitedPosts(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function showLimitedPosts(posts){
  postsContainer.innerHTML = "";
  posts.forEach(post => {
    postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;
    postsContainer.appendChild(postEl);
  });
}
// Filter posts by input
function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  });
}

// Show loader & fetch more posts
function showLoading() {
  loading.classList.add('show');

  setTimeout(() => {
    loading.classList.remove('show');

    setTimeout(() => {
      page++;
    }, 300);
  }, 1000);
}
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

limitNoOfPostsShown();