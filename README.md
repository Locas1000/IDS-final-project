# FixIt Campus 

##  About the Project
FixIt Campus resolves the problem of decentralization and the lack of tracking in campus fault reports. Currently, incidents are lost in informal communications, causing slow response times. This software centralizes the entire lifecycle of a defect, from the initial report with photographic evidence to its audited resolution. 

The solution allows maintenance managers to assign tasks based on real workload and technician specialty. By implementing a strict state flow and an automatic escalation system (SLA), it ensures no report is forgotten, transforming reactive maintenance into a data-driven operation. It features a mobile-friendly interface for capturing evidence on-site, an immutable audit log, and multichannel notifications to ensure total transparency.

##  Scope and System Limits
To ensure the project is delivered on time with high technical quality, the following features are strictly **out of scope**:
* **Physical Inventory Management:** The system allows users to comment if parts are missing (setting the ticket to a "Blocked" state), but it will not manage stock, warehouse purchases, or suppliers.
* **Automated Preventive Maintenance:** The system is purely corrective (based on current fault tickets). It will not generate automatic work orders based on calendars or IoT sensors.
* **Payroll and Payments:** Although it measures technician efficiency, it will not calculate salaries, overtime, or process electronic payments to personnel.

##  Tech Stack
* **Frontend:** React (Vite)
* **Backend:** Node.js (Express)
* **Database:** PostgreSQL
* **Infrastructure:** Docker & Docker Compose

##  Quickstart Guide
You do not need to install Node.js or PostgreSQL locally to run this project. Everything is containerized.

### Prerequisites
* [Docker Engine](https://docs.docker.com/engine/install/) and Docker Compose installed on your machine.

### Running the Application
1. Clone the repository:
   ```bash
   git clone [https://github.com/Locas1000/IDS-final-project.git](https://github.com/Locas1000/IDS-final-project.git)
   cd IDS-final-project
Lift the environment using Docker Compose:

Bash
docker compose up --build
(Note: You can use docker compose up -d to run it in the background).

Access the services in your browser:

Frontend (React UI): http://localhost:5173

Backend API: http://localhost:5000

Database: localhost:5432 (User: admin, Password: password123, DB: sgm_db)

Shutting Down
To stop the containers gracefully, press Ctrl + C in your terminal. If you ran it in detached mode (-d), run:

Bash
docker compose down
 Contributing
Please review our CONTRIBUTING.md file for strict guidelines on our GitHub Flow branching strategy, Conventional Commits, and file naming conventions. All code must pass a Pull Request review before merging into main.

