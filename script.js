// Select elements
const questionForm = document.getElementById('questionForm');
const questionInput = document.getElementById('questionInput');
const responsesList = document.getElementById('responsesList');

// Event listener for form submission
questionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Get the question text
    const questionText = questionInput.value.trim();

    if (questionText) {
        // Add the question to the responses list
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Question:</strong> ${questionText} <br><strong>Advice:</strong> Your question has been noted! Stay tuned for advice.`;
        responsesList.appendChild(listItem);

        // Clear the textarea
        questionInput.value = '';
    } else {
        alert('Please enter a question before submitting.');
    }
});
