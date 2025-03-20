document.addEventListener('DOMContentLoaded', function () {
    const fieldsContainer = document.getElementById('fields-container');
    const addFieldBtn = document.getElementById('add-field');

    // Function to add a new input field
    function addField() {
        const div = document.createElement('div');
        div.classList.add('content');

        // Create the label and input field
        const label = document.createElement('label');
        label.textContent = `Field ${fieldsContainer.children.length + 1}: `; // Keep the label
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('qr-input');
        input.placeholder = 'Enter value';
        input.name = `field ${fieldsContainer.children.length + 1}`;

        // Append label and input to the div
        div.appendChild(label);
        div.appendChild(input);
        fieldsContainer.appendChild(div);
    }

    // Add an initial field on page load
    addField();

    // Add field when button is clicked
    addFieldBtn.addEventListener('click', addField);

    // Handle form submission
    document.getElementById('qr-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const inputs = document.querySelectorAll('.qr-input');
        const data = [];

        // Collect only the input values, ignoring the labels
        inputs.forEach((input) => {
            if (input.value.trim()) {  // Only add non-empty values
                data.push(input.value);
            }
        });

        // Send data to backend
        fetch('http://localhost:3000/generate-qr', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        })
            .then(response => response.blob())
            .then(blob => {
                const qrImage = document.createElement('img');
                const qrImageUrl = URL.createObjectURL(blob);
                qrImage.src = qrImageUrl;

                const qrResultDiv = document.getElementById('qr-result');
                qrResultDiv.innerHTML = '';
                qrResultDiv.appendChild(qrImage);
            })
            .catch(error => console.error('Error generating QR code:', error));
    });
});
