console.log(
  `%c __      __  ______   __  __   ______     
/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    
\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    
 \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    
  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\'\\\   \\_\\ \\__ 
   \\ \`\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ 
    '/__//__/  /_____/ \\/_/\\/_/ /_____/`,
  'color: #d81b60; font-size: 16px; font-weight: bold;'
);

console.log('알맞은 스크립트를 작성하세요');

document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.querySelector('.comment-from');
  const commentList = document.querySelector('.comment-list');
  const commentInput = commentForm.querySelector('input[type="text"]');
  const submitButton = commentForm.querySelector('.btn-submit');

  const addComment = () => {
    const commentText = commentInput.value.trim();
    if (!commentText) {
      return;
    }

    const commentItem = `
      <li>
        <div class="comment-item">
          <div class="comment-author">
            <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
            <span>방문자</span>
          </div>
          <div class="comment-content">
            ${commentText}
          </div>
        </div>
      </li>
    `;
    commentList.insertAdjacentHTML('beforeend', commentItem);
    commentForm.reset();
    alert('댓글이 등록되었습니다');
  };

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    addComment();
  });

  commentInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  });
});
