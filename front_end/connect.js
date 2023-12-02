// Example API request
fetch('http://127.0.0.1:5000/api/sample')
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        // Use the data in your frontend
    })
    .catch(error => console.error('Error:', error));
