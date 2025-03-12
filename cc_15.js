// Task 2 - Dynamically adding risky items
document.addEventListener('DOMContentLoaded', () => {
  // Cache DOM elements for later use
  const riskForm = document.getElementById('riskForm'); // The form element
  const riskItemsContainer = document.getElementById('riskItemsContainer'); // Container where risk cards will be added

  // Function to add a new risk item
  function addRiskItem(riskName, riskLevel, department) {
    // Create a new div element to represent the risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard'); // Add a class to style the card

    // Add content to the risk card dynamically
    riskCard.innerHTML = `
      <h3>${riskName}</h3>
      <p>Risk Level: ${riskLevel}</p>
      <p>Department: ${department}</p>
    `;

    // Append the newly created risk card to the container
    riskItemsContainer.appendChild(riskCard);
  }

  // Event listener for form submission
  riskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the values entered in the form
    const riskName = document.getElementById('riskName').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('department').value;

    // Add the risk item to the dashboard by calling the function
    addRiskItem(riskName, riskLevel, department);

    // Reset the form fields after submitting
    riskForm.reset();
  });

  // Test Case: Add two risk items dynamically
  addRiskItem('Data Breach', 'High', 'IT'); // Test case 1
  addRiskItem('Supply Chain Disruption', 'Medium', 'Operations'); // Test case 2
});

// Task 3 - Removing risk items
function addRiskItem(riskName, riskLevel, department) {
    const riskDashboard = document.getElementById('riskDashboard');
  
    // Create a new div element to represent the risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');
  
    // Create elements for risk name, level, and department
    const riskNameElem = document.createElement('h3');
    riskNameElem.textContent = riskName;
  
    const riskLevelElem = document.createElement('p');
    riskLevelElem.textContent = `Risk Level: ${riskLevel}`;
  
    const departmentElem = document.createElement('p');
    departmentElem.textContent = `Department: ${department}`;
  
    // Create the Resolve button
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.classList.add('resolveButton');
  
    // Add an event listener to remove the card when Resolve button is clicked
    resolveButton.addEventListener('click', () => {
        riskDashboard.removeChild(riskCard);
    });
  
    // Append elements to the risk card
    riskCard.appendChild(riskNameElem);
    riskCard.appendChild(riskLevelElem);
    riskCard.appendChild(departmentElem);
    riskCard.appendChild(resolveButton);
  
    // Append the risk card to the dashboard
    riskDashboard.appendChild(riskCard);
}
  
// Example Test Case
addRiskItem("Market Fluctuations", "High", "Finance");

// Tsk 4 - Categorizing risk
// Select the riskDashboard container and the form
const riskDashboard = document.getElementById('riskDashboard');
const riskForm = document.getElementById('riskForm');

// Function to add a new risk item
function addRiskItem(riskName, riskLevel, department) {
    // Create a new div element for the risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');

    // Apply different background colors based on the risk level
    if (riskLevel === 'Low') {
        riskCard.style.backgroundColor = 'green';
    } else if (riskLevel === 'Medium') {
        riskCard.style.backgroundColor = 'yellow';
    } else if (riskLevel === 'High') {
        riskCard.style.backgroundColor = 'red';
    }

    // Create and add content to the risk card
    const nameElement = document.createElement('h3');
    nameElement.textContent = riskName;
    riskCard.appendChild(nameElement);

    const levelElement = document.createElement('p');
    levelElement.textContent = `Risk Level: ${riskLevel}`;
    riskCard.appendChild(levelElement);

    const departmentElement = document.createElement('p');
    departmentElement.textContent = `Department: ${department}`;
    riskCard.appendChild(departmentElement);

    // Create and add "Resolve" button to the card
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', () => {
        riskDashboard.removeChild(riskCard); // Remove the card when resolved
    });
    riskCard.appendChild(resolveButton);

    // Append the risk card to the dashboard
    riskDashboard.appendChild(riskCard);
}

// Event listener for form submission
riskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get values from the form
    const riskName = document.getElementById('riskName').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('department').value;

    // Add the new risk item to the dashboard
    addRiskItem(riskName, riskLevel, department);

    // Clear the form fields after submitting
    riskForm.reset();
});

// Example test cases to add risks programmatically
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// Task 5 - Applying mass updates
// Cache DOM elements
const riskItemsContainer = document.getElementById('riskItemsContainer');
const increaseRiskButton = document.getElementById('increaseRiskButton');
const riskForm = document.getElementById('riskForm');
const riskNameInput = document.getElementById('riskName');
const riskLevelInput = document.getElementById('riskLevel');
const riskDepartmentInput = document.getElementById('riskDepartment');

// Function to add a new risk item
function addRiskItem(name, level, department) {
  const riskCard = document.createElement('div');
  riskCard.classList.add('riskCard');
  
  // Set background color based on risk level
  switch(level) {
    case 'Low':
      riskCard.style.backgroundColor = 'green';
      break;
    case 'Medium':
      riskCard.style.backgroundColor = 'yellow';
      break;
    case 'High':
      riskCard.style.backgroundColor = 'red';
      break;
  }

  // Add content to the risk card
  const riskName = document.createElement('h2');
  riskName.textContent = name;

  const riskLevel = document.createElement('p');
  riskLevel.textContent = `Level: ${level}`;

  const riskDepartment = document.createElement('p');
  riskDepartment.textContent = `Department: ${department}`;

  const resolveButton = document.createElement('button');
  resolveButton.textContent

  // Task 6 - Managing event propagation
// Cache DOM elements
const riskItemsContainer = document.getElementById('riskItemsContainer');

// Function to add a new risk item
function addRiskItem(name, level, department) {
  const riskCard = document.createElement('div');
  riskCard.classList.add('riskCard');
  
  // Set background color based on risk level
  switch(level) {
    case 'Low':
      riskCard.style.backgroundColor = 'green';
      break;
    case 'Medium':
      riskCard.style.backgroundColor = 'yellow';
      break;
    case 'High':
      riskCard.style.backgroundColor = 'red';
      break;
  }

  // Add content to the risk card
  const riskName = document.createElement('h2');
  riskName.textContent = name;

  const riskLevel = document.createElement('p');
  riskLevel.textContent = `Level: ${level}`;

  const riskDepartment = document.createElement('p');
  riskDepartment.textContent = `Department: ${department}`;

  const resolveButton = document.createElement('button');
  resolveButton.textContent = 'Resolve';
  
  // Event listener for resolve button
  resolveButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click event from propagating to the container
    riskItemsContainer.removeChild(riskCard);
  });

  // Append elements to risk card
  riskCard.appendChild(riskName);
  riskCard.appendChild(riskLevel);
  riskCard.appendChild(riskDepartment);
  riskCard.appendChild(resolveButton);

  // Append risk card to the container
  riskItemsContainer.appendChild(riskCard);
}

// Example Test Case: Adding a risk item
addRiskItem('Cybersecurity Threat', 'High', 'IT');
}