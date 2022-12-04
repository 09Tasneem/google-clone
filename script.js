const search_box = document.getElementById("search-box");

search_box.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    window.location.href = `https://www.google.com/search?q=${search_box.value}`;
  }
});
