const tabsHeader = document.getElementById("tabsHeader");
const tabsContent = document.getElementById("tabsContent");
const addTabBtn = document.getElementById("addTabBtn");
let tabCount = 1;

// Function to handle tab switching (Event Delegation)
tabsHeader.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("[data-tab-target]");
  if (!clickedTab) return;

  const targetPanel = document.querySelector(clickedTab.dataset.tabTarget);

  // Remove active classes
  document
    .querySelectorAll(".tab-btn")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".tab-panel")
    .forEach((p) => p.classList.remove("active"));

  // Set new active
  clickedTab.classList.add("active");
  targetPanel.classList.add("active");
});

// Function to add a new tab
addTabBtn.addEventListener("click", () => {
  tabCount++;
  const newId = `tab-${tabCount}`;

  // 1. Create the Button
  const newBtn = document.createElement("button");
  newBtn.classList.add("tab-btn");
  newBtn.setAttribute("data-tab-target", `#${newId}`);
  newBtn.innerText = `Tab ${tabCount}`;

  // Insert button before the "plus" button
  tabsHeader.insertBefore(newBtn, addTabBtn);

  // 2. Create the Panel
  const newPanel = document.createElement("div");
  newPanel.id = newId;
  newPanel.classList.add("tab-panel");
  newPanel.innerHTML = `<h3>Tab ${tabCount} Content</h3><p>Dynamic content for tab ${tabCount}.</p>`;

  tabsContent.appendChild(newPanel);
});
