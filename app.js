const firstDrop = document.querySelector(".first-dropdown");

const aboutlDrop = document.querySelector(".about-dropdown");

const actionDrop = document.querySelector(".action-dropdown");

const first = document.querySelector(".first");

const about = document.querySelector(".about");

const action = document.querySelector(".action");

const menu = document.querySelector(".menu-icon");

const nav = document.getElementsByTagName("nav")[0];

menu.addEventListener("click", () => {
  nav.classList.toggle("display-visible");
});

first.addEventListener("click", () => {
    firstDrop.classList.toggle("visibility");
    firstDrop.classList.toggle("active")
});

about.addEventListener("click", () => {
  aboutlDrop.classList.toggle("visibility");
});

action.addEventListener("click", () => {
  actionDrop.classList.toggle("visibility");
});

document.addEventListener("click", (e) => {
  if (!firstDrop.contains(e.target) && !first.contains(e.target)) {
    firstDrop.classList.add("visibility");
  }
  if (!aboutlDrop.contains(e.target) && !about.contains(e.target)) {
    aboutlDrop.classList.add("visibility");
  }
  if (!actionDrop.contains(e.target) && !action.contains(e.target)) {
    actionDrop.classList.add("visibility");
  }

  if (!nav.contains(e.target) && !menu.contains(e.target)) {
    nav.classList.remove("display-visible");
  }
});

// Function to handle changes in viewport dimensions
function handleViewportChange(mq, e) {
  if (mq.matches) {
    first.addEventListener("click", () => {
      firstDrop.classList.toggle("display-visible");
      firstDrop.style.height = "auto";
    });

    about.addEventListener("click", () => {
      aboutlDrop.classList.toggle("display-visible");
      aboutlDrop.style.height = "auto";
    });

    action.addEventListener("click", () => {
      actionDrop.classList.toggle("display-visible");
      actionDrop.style.height = "auto";
    });

    //   close dropdown when focus is not inside
    document.addEventListener("click", (e) => {
      if (!firstDrop.contains(e.target) && !first.contains(e.target)) {
        firstDrop.classList.remove("display-visible");
      }
      if (!aboutlDrop.contains(e.target) && !about.contains(e.target)) {
        aboutlDrop.classList.remove("display-visible");
      }
      if (!actionDrop.contains(e.target) && !action.contains(e.target)) {
        actionDrop.classList.remove("display-visible");
      }
    });

    console.log("Viewport matches media query");
  }
}

// Define the media query string
const mediaQuery = "(max-width: 935px)";

// Create a MediaQueryList object
const mq = window.matchMedia(mediaQuery);

// Call the function to handle changes initially
handleViewportChange(mq);

// Add a listener for changes in viewport dimensions
mq.addEventListener("change", handleViewportChange);
