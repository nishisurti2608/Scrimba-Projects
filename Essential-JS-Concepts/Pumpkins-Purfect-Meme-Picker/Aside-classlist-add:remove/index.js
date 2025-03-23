document.addEventListener("click", function (e) {
  //we are checking if id exists eg: h1 element
  if (e.target.id) {
    document.getElementById(e.target.id).parentElement.classList.add("read"); // adding class
    document
      .getElementById(e.target.id)
      .parentElement.classList.remove("unread"); // removing class because you don't want to rely on css ordering
  }
});

//try to comment remove class line and just move .unread class of css at bottom your code will breake