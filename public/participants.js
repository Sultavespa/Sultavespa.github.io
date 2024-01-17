document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/participants')
        .then(response => response.json())
        .then(data => {
            const listContainer = document.getElementById('participants-table');
            data.forEach(participant => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                nameCell.textContent = participant.name;
                const levelCell = document.createElement('td');
                levelCell.textContent = participant.level;
                row.appendChild(nameCell);
                row.appendChild(levelCell);
                listContainer.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});
