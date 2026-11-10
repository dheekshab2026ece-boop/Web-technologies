const form = document.getElementById("issueForm");
const complaints = document.getElementById("complaints");

let issues = JSON.parse(
    localStorage.getItem("issues") || "[]"
);

function displayIssues() {
    complaints.innerHTML = "";

    issues.forEach((issue, index) => {
        complaints.innerHTML += `
            <div class="complaint">
                <h3>Complaint #${index + 1}</h3>
                <p>Name: ${issue.name}</p>
                <p>Category: ${issue.category}</p>
                <p>Location: ${issue.location}</p>
                <p>Description: ${issue.description}</p>
                <p>Status: ${issue.status}</p>
            </div>
        `;
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const issue = {
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description").value,
        status: "Pending"
    };

    issues.push(issue);

    localStorage.setItem(
        "issues",
        JSON.stringify(issues)
    );

    displayIssues();
    form.reset();

    alert("Complaint submitted successfully!");
});

displayIssues();