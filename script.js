// Function to mark items as completed in the bucket list
function markComplete(button) {
    const listItem = button.parentElement;
    listItem.classList.toggle('completed');
}

// Function to delete a goal from the bucket list
function deleteGoal(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

// Function to add a new goal to the bucket list
function addGoal() {
    const goalInput = document.getElementById("new-goal");
    const goalText = goalInput.value.trim();

    if (goalText === "") {
        alert("Please enter a valid goal.");
        return;
    }

    // Create a new list item
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `<span>⭐ ${goalText}</span><button onclick="markComplete(this)">✔</button><button onclick="deleteGoal(this)">Delete</button>`;

    // Append the new item to the bucket list
    document.getElementById("bucket-list").appendChild(newListItem);

    // Clear the input field
    goalInput.value = "";

    // Show an alert confirming that the new goal was added
    alert("New goal added successfully!");
}

// Function to toggle between blue and green themes
function toggleTheme() {
    const currentTheme = document.body.classList.contains('blue-theme') ? 'blue-theme' : 'green-theme';
    
    // Toggle theme classes
    document.body.classList.remove(currentTheme);
    const newTheme = currentTheme === 'blue-theme' ? 'green-theme' : 'blue-theme';
    document.body.classList.add(newTheme);
}