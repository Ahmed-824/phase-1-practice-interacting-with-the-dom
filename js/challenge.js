document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let minusButton = document.getElementById("minus");
    let plusButton = document.getElementById("plus");
    let pauseButton = document.getElementById("pause");
    let likeList = document.querySelector(".likes");
    let commentForm = document.getElementById("comment-form");
    let commentList = document.getElementById("comment-list");
    
    let timer;
    let isPaused = false;
  
    function startTimer() {
      timer = setInterval(() => {
        counter.textContent = parseInt(counter.textContent) + 1;
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(timer);
    }
  
    startTimer();
  
    plusButton.addEventListener("click", () => {
      counter.textContent = parseInt(counter.textContent) + 1;
    });
  
    minusButton.addEventListener("click", () => {
      counter.textContent = parseInt(counter.textContent) - 1;
    });
  
    pauseButton.addEventListener("click", () => {
      if (isPaused) {
        startTimer();
        pauseButton.textContent = "pause";
        isPaused = false;
        plusButton.disabled = false;
        minusButton.disabled = false;
      } else {
        stopTimer();
        pauseButton.textContent = "resume";
        isPaused = true;
        plusButton.disabled = true;
        minusButton.disabled = true;
      }
    });
  
    document.addEventListener("click", (event) => {
      if (event.target && event.target.matches("#heart")) {
        let likeItem = document.createElement("li");
        likeItem.textContent = `Number ${counter.textContent} has been liked`;
        likeList.appendChild(likeItem);
      }
    });
  
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let comment = document.getElementById("comment-input").value;
      let commentItem = document.createElement("p");
      commentItem.textContent = comment;
      commentList.appendChild(commentItem);
      commentForm.reset();
    });
  });
  