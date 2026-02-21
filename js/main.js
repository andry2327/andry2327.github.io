// js/main.js
import { projects, experiences, education } from './data.js';

// Render University
const universityContainer = document.getElementById('university-container');
if (universityContainer) {
    education.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.classList.add('col-md-6', 'mb-4');
        
        let logoHtml = '';
        if (edu.logoUrl) {
            logoHtml = `<img src="${edu.logoUrl}" alt="${edu.institution} logo" class="edu-logo" onerror="this.onerror=null; this.outerHTML='<div class=\\'edu-logo-placeholder\\'><i class=\\'fa-solid fa-university\\'></i></div>';">`;
        } else {
            logoHtml = `<div class="edu-logo-placeholder"><i class="fa-solid fa-university"></i></div>`;
        }

        eduElement.innerHTML = `
            <div class="edu-card">
                <div class="edu-logo-wrapper">
                    ${edu.institutionUrl ? `<a href="${edu.institutionUrl}" target="_blank">${logoHtml}</a>` : logoHtml}
                </div>
                <div class="edu-content">
                    <h5 class="edu-title">${edu.degree}</h5>
                    <p class="edu-institution">${edu.institutionUrl ? `<a href="${edu.institutionUrl}" target="_blank">${edu.institution}</a>` : edu.institution}</p>
                    <span class="edu-duration">${edu.duration}</span>
                    <p class="edu-description">${edu.description}</p>
                </div>
            </div>
        `;
        universityContainer.appendChild(eduElement);
    });
}
const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-4'); // Bootstrap grid classes
        projectElement.innerHTML = `
            <div class="project-card">
                <a href="${project.link}" target="_blank">
                    <div class="project-img-wrapper">
                        <img src="${project.imageUrl}" alt="${project.title}">
                    </div>
                    <div class="project-card-body">
                        <h5 class="project-title">${project.title}</h5>
                        <p class="project-description">${project.description}</p>
                    </div>
                </a>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Render Career
const careerContainer = document.getElementById('career-container');
if (careerContainer) {
    experiences.forEach(exp => {
        const experienceElement = document.createElement('div');
        experienceElement.classList.add('career-item');
        
        let logoHtml = '';
        if (exp.logoUrl) {
            // To avoid breaking if the src is missing or 404s, we have a fallback
            logoHtml = `<img src="${exp.logoUrl}" alt="${exp.company} logo" class="career-logo" onerror="this.onerror=null; this.outerHTML='<div class=\\'career-logo-placeholder\\'><i class=\\'fa-solid fa-building\\'></i></div>';">`;
        } else {
            logoHtml = `<div class="career-logo-placeholder"><i class="fa-solid fa-building"></i></div>`;
        }

        experienceElement.innerHTML = `
            <div class="career-logo-wrapper">
                ${exp.companyUrl ? `<a href="${exp.companyUrl}" target="_blank">${logoHtml}</a>` : logoHtml}
            </div>
            <div class="career-content">
                <h5 class="career-title">${exp.title}</h5>
                <p class="career-company">${exp.companyUrl ? `<a href="${exp.companyUrl}" target="_blank">${exp.company}</a>` : exp.company}</p>
                <span class="career-duration"><i class="fa-regular fa-calendar mr-2"></i>${exp.duration}</span>
                <p class="career-description">${exp.description}</p>
            </div>
        `;
        careerContainer.appendChild(experienceElement);
    });
}

// Add scroll tracking for navbar
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 13, 15, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.borderBottom = '1px solid transparent';
        }
    });
}
