# andry2327 Portfolio

This is the revamped personal portfolio website for andry2327 (Andrea Pellegrino).
The website has been redesigned for a modern, minimal look while retaining the original dark color scheme.
The code has been restructured to make it incredibly easy to extend and update manually.

## Project Structure

-   `index.html`: The main entry point of the website. It dynamically loads content for the Projects and Career sections.
-   `University.html`: A dedicated page displaying university notes and summaries.
-   `css/modern.css`: Contains all the modern, premium glassmorphism styling for the website.
-   `js/data.js`: This file holds all the data for your projects and career experiences. **This is the only file you need to edit to update your Home page content!**
-   `js/main.js`: Contains the JavaScript logic to read data from `js/data.js` and render it seamlessly into `index.html`.
-   `imgs/`: Contains all image assets used on the website.

---

## How to Extend the Website

Updating your portfolio is now incredibly simple. You do not need to touch any HTML to add new jobs or projects!

### 1. Add a New Project

To add a new project to your portfolio:

1. Open `js/data.js`.
2. Locate the `projects` array.
3. Add a new JavaScript object to the top (or anywhere) in the array. For example:

    ```javascript
    {
        title: "Your New Project Title",
        description: "A concise description of your project. Explain its purpose, technologies used, and your role.",
        imageUrl: "imgs/projects/your_project_image.png", // Path to your project's image
        link: "https://your-project-link.com" // Link to the live project or repository
    },
    ```

4. Make sure to drop an image for your project in the `imgs/projects/` directory and update `imageUrl` accordingly.
5. Save `js/data.js`. The changes will instantly appear on your Live website.

### 2. Add a New Career Experience

To add a new entry to your career timeline:

1. Open `js/data.js`.
2. Locate the `experiences` array.
3. Add a new JavaScript object to the array. For example:

    ```javascript
    {
        title: "Your Job Title or Educational Program",
        company: "Company Name or Institution",
        duration: "Start Date - End Date (e.g., Jan 2023 - Present)",
        description: "Key responsibilities, achievements, or academic focus points.",
        logoUrl: "imgs/company_logo.png" // Optional: path to company/institution logo
    },
    ```

4. Drop a logo for the company/institution in the `imgs/` directory and update `logoUrl` if desired. If no logo is provided or found, an elegant fallback icon will be used.
5. Save `js/data.js`.

### 3. Add to the University Page

To add new summaries to the University section:

1. Open `University.html`.
2. Scroll to the specific degree and year section (e.g., `<div class="pdf-section" id="1st">`).
3. Copy an existing `pdf-element` block and paste it where desired:

    ```html
    <div class="pdf-element">
        <div class="row">
            <div class="col-auto mr-auto">
                <div class="pdf-element-title">
                    <h5>New Course Summary 2024 (prof. Name)</h5>
                </div>
            </div>
            <div class="col-auto">
                <div class='middle-div'>
                    <a href="https://drive.google.com/your-link" target="_blank">
                        <button class="btn btn-primary btn-rounded2">Preview</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <hr class="solid2">
    ```

4. Save the file.

---

## Local Development (using Vite)

This project uses Vite for local development and lightning-fast building.

1. **Install Dependencies:**
   First time setup:
   ```bash
   npm install
   ```
2. **Start Development Server:**
   To run the website locally with hot-reloading:
   ```bash
   npm run dev
   ```
   This will start the server locally (usually at `http://localhost:5173/`).

3. **Build for Production:**
   To create an optimized production build:
   ```bash
   npm run build
   ```
   The build output will be placed in the `dist/` directory.

## Live Website

The website is hosted at: [https://andry2327.github.io/](https://andry2327.github.io/)
