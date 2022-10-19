const markAsRead = document.querySelector(".mark");
const unread = Array.from(document.querySelectorAll(".unread"));

markAsRead.addEventListener("click", () => {
  unread.forEach((un) => {
    un.classList.remove("unread");
  });
});
