const items = [
    "HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects",
  ];
  
  // Code for add a new list item in sequential order
  
  const list = document.getElementById("list");
  const button = document.getElementById("add-btn");
  let currentItemIndex = 0;
  
  button.addEventListener("click", () => {
    if (currentItemIndex < items.length) {
      const newItem = document.createElement("li");
      newItem.textContent = "=>" + items[currentItemIndex];
      list.appendChild(newItem);
      currentItemIndex++;
    } else {
      alert("All items have been added.");
    }
  });