function addSubject() {
    const subjectsContainer = document.getElementById('subjects-container');
    const newSubject = document.createElement('div');
    newSubject.className = 'row mb-3 subject';

    newSubject.innerHTML = `
        <div class="col">
            <label for="subjectName" class="form-label">Subject Name:</label>
            <input type="text" class="form-control subjectName" placeholder="e.g., Math">
        </div>
        <div class="col">
            <label for="grade" class="form-label">Grade:</label>
            <input type="text" class="form-control grade" placeholder="e.g., 1.5">
        </div>
        <div class="col">
            <label for="units" class="form-label">Units:</label>
            <input type="text" class="form-control units" placeholder="e.g., 3">
        </div>
        <div class="col-auto my-auto ml-2">
        <button class="btn btn-danger delete-btn">Delete</button>
        </div>
    `;

    subjectsContainer.appendChild(newSubject);

    // Attach the deleteSubject function to the newly created delete button
    const deleteButton = newSubject.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        deleteSubject(this);
    });
}

function deleteSubject(button) {
    const subjectsContainer = document.getElementById('subjects-container');
    const subjectToDelete = button.closest('.subject');
    subjectsContainer.removeChild(subjectToDelete);
}

// Rest of your existing code remains unchanged...

function calculateGWA() {
    const roundingOption = document.getElementById('rounding').value;

    const subjects = document.querySelectorAll('.subject');
    let totalPoints = 0;
    let totalUnits = 0;

    subjects.forEach(subject => {
        const grade = parseFloat(subject.querySelector('.grade').value) || 0;
        const units = parseFloat(subject.querySelector('.units').value) || 0;

        totalPoints += grade * units;
        totalUnits += units;
    });

    let gwa = totalPoints / totalUnits;

    // Round the GWA based on the selected option
    if (roundingOption === 'rounded') {
        gwa = gwa.toFixed(2);
    }

    // Display the result in a Bootstrap modal
    const resultModalBody = document.getElementById('resultModalBody');
    resultModalBody.textContent = `Your GWA is: ${gwa}`;
    $('#resultModal').modal('show');
}
