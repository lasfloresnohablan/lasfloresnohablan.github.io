// Your Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyCjQ0bA4lVhBmPrpU41uqnWfwjmLMihzYk",
        authDomain: "kmxsalud-database.firebaseapp.com",
        projectId: "kmxsalud-database",
        storageBucket: "kmxsalud-database.appspot.com",
        messagingSenderId: "216946537560",
        appId: "1:216946537560:web:02019702598e3571bc062d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Handle form submission
document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const sum = num1 + num2 + num3;

    // Save data to Firestore
    db.collection('numbers').add({
        num1: num1,
        num2: num2,
        num3: num3,
        sum: sum
    }).then(() => {
        window.location.href = 'results.html';
    }).catch((error) => {
        console.error('Error adding document: ', error);
    });
});

// Reset button functionality
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('numberForm').reset();
});

// Load data into results.html
window.onload = function() {
    const tableBody = document.getElementById('tableBody');

    db.collection('numbers').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const row = `<tr>
                            <td>${data.num1}</td>
                            <td>${data.num2}</td>
                            <td>${data.num3}</td>
                            <td>${data.sum}</td>
                         </tr>`;
            tableBody.innerHTML += row;
        });
    });
};
