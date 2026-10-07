# Student Career Guidance

The learning site is a static HTML/CSS prototype with browser-side JavaScript for exam scoring and printable certificate results.

## Project structure

- `index.html`: landing page
- `login.html`, `register.html`: static account-flow previews
- `dashboard.html`, `courses.html`, `curriculum.html`: student learning pages
- `curriculum.html`: separate course directory
- `python-curriculum.html`, `python-course.html`: Python roadmap and its 29 detailed lessons
- `java-course.html`: Java Full Stack, 14 modules
- `mern-course.html`: MERN Stack, 14 modules
- `genai-course.html`: Python Full Stack + GenAI, 16 modules
- `java-grand-test.html`, `mern-grand-test.html`, `genai-grand-test.html`: separate 100-question final assessments for each course (40/100 pass mark)
- `java-certificate.html`, `mern-certificate.html`, `genai-certificate.html`: matching course-specific result and printable certificate pages
- `js/course-assessment.js`: shared assessment rendering, answer scoring, and certificate eligibility logic
- `css/course-assessment.css`: assessment and certificate presentation
- `quiz.html`, `course-test.html`: CSS-only assessment demos
- `final-test.html`: 100-question GET form (25 Frontend, 25 Python, 25 Django/Backend, 25 Database)
- `certificate.html`: browser-side score check; passes at 40/100 and displays a named printable certificate
- `placement.html`: general campus placement guidance
- `css/`: shared and page-specific stylesheets
- `images/logo.svg`: project mark

## Run

Open `index.html` in a modern browser. The pages link to each other and do not require a local server.

## Learning pathways

- Python Full Stack: 29 modules across frontend (5), Python + backend (13), and database (11), followed by course assessments and a Grand Final.
- Java Full Stack: 14 modules from Java fundamentals through Spring Boot, SQL/JPA, React, testing, security, deployment, and capstone.
- MERN Stack: 14 modules covering MongoDB, Express, React, Node, API integration, security concepts, testing, deployment, and capstone.
- Python Full Stack + GenAI: 16 modules spanning Python web foundations, model APIs, prompt design, embeddings, RAG, evaluation, safety, and capstone.
- Java Full Stack, MERN Stack, and Python Full Stack + GenAI each have a separate 100-question Grand Test and printable course certificate; the passing score is 40/100.

The Python syllabus includes concept outlines, practice tasks, project assessments, and a Grand Final. The 100-question final is split evenly across Frontend, Python, Django/Backend, and Database.

## Static prototype limits

Scores are calculated in the browser from GET parameters and are not tamper-proof or stored on a server. Certificates are printable learning-demo artifacts, not official credentials. Secure verified certificates, saved attempts, real accounts, or protected admin roles require a backend. Sign-in and registration remain mockups.
