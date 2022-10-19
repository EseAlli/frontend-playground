const markAsRead = document.querySelector(".mark");
const unread = Array.from(document.querySelectorAll(".unread"));
const count = document.querySelector(".count");

markAsRead.addEventListener("click", () => {
  unread.forEach((un) => {
    un.classList.remove("unread");
  });
  count.innerHTML = 0;
});
