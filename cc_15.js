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
