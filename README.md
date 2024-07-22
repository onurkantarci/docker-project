This project consists of a Vue.js frontend and an Express.js backend, both containerized using Docker.
<br>
The frontend and backend communicate with each other through Docker's networking capabilities.

2. Build and Start Containers

Run the following command to build and start both the frontend and backend containers:

docker-compose up --build

This command will:
<br>
Build Docker images for both the API and the web frontend.
<br>
Start containers for both services.
<br>
Create a network that allows the frontend to communicate with the backend.
<br>

3. Access the Application
   <br>
   Frontend: Open your browser and navigate to http://localhost:5173
   <br>
   Backend: The API should be accessible at http://localhost:3000
   <br>
