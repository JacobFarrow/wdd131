const projects = [
    {
        title: "Secure Auth API",
        tech: ["C#", ".NET"],
        description: "A robust authentication system using JWT and .NET Core."
    },
    {
        title: "Data Analysis Tool",
        tech: ["Python"],
        description: "Automated scripts for cleaning and visualizing complex datasets."
    },
    {
        title: "Task Manager",
        tech: ["JavaScript", "SQL"],
        description: "A full-stack application for managing team workflows."
    },
    {
        title: "System Monitor",
        tech: ["Python", "C#"],
        description: "Cross-platform utility for real-time hardware monitoring."
    }
];

const projectGrid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayProjects(filteredProjects) {
    projectGrid.innerHTML = "";
    
    if (filteredProjects.length === 0) {
        projectGrid.innerHTML = "<p>No projects found matching this criteria.</p>";
        return;
    }

    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="skills-chips">
                ${project.tech.map(t => `<span>${t}</span>`).join("")}
            </div>
        `;
        
        projectGrid.appendChild(card);
    });
}

function handleFilter(e) {
    const filterValue = e.target.getAttribute("data-filter");
    
    if (filterValue === "all") {
        displayProjects(projects);
    } else {
        const filtered = projects.filter(project => 
            project.tech.includes(filterValue)
        );
        displayProjects(filtered);
    }
}

filterButtons.forEach(button => {
    button.addEventListener("click", handleFilter);
});

displayProjects(projects);