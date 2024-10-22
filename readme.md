# Node.js Dockerized Application with Nginx Load Balancer

## Overview

This application is a simple Node.js web server that demonstrates the use of Docker to containerize multiple instances of the app. Nginx serves as a reverse proxy and load balancer, distributing incoming HTTP requests to the various Node.js instances. This setup allows for better scalability and redundancy, making it suitable for real-world web applications.

## Features

- **Multiple Node.js Instances**: Runs two instances of a Node.js application to handle incoming requests.
- **Nginx Load Balancer**: Distributes traffic evenly between the Node.js instances.
- **Development-Friendly**: Utilizes Docker volumes for live code updates without the need to rebuild images.

## Technologies Used

- **Node.js**: The backend framework for the web application.
- **Nginx**: Serves as a reverse proxy and load balancer.
- **Docker**: Containerization platform to run the application in isolated environments.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/) installed (included with Docker Desktop).

### Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

Project Structure
your-repo-name/
│
├── docker-compose.yml
├── nginx/
│   └── nginx.conf
└── web/
    ├── Dockerfile
    └── app.js

How to Run the Application
Navigate to the project directory:

bash
Copy code
cd your-repo-name
Start the Docker containers:

bash
Copy code
docker-compose up --build
Access the Application:

Open your web browser and navigate to http://localhost:80. You should see responses alternating between "Web 1" and "Web 2".

How It Works
Docker Compose: This project uses Docker Compose to define and run multi-container Docker applications. The docker-compose.yml file specifies the services, networks, and volumes.

Nginx Configuration: The Nginx server is configured to act as a reverse proxy and load balancer. Incoming HTTP requests are distributed to the web1 and web2 instances based on a round-robin strategy.

Live Code Updates: The use of Docker volumes allows for real-time updates to the application code without the need to rebuild the Docker image. Any changes made to the local files in the web/ directory are immediately available in the running containers.

Summary
This setup provides a scalable and resilient architecture for a Node.js web application. By using Docker and Nginx, you can easily manage multiple instances of your app and handle increased traffic efficiently. The development process is streamlined with Docker volumes, making it easy to update the application code without downtime.

Feel free to customize the application further and explore more advanced configurations for both Node.js and Nginx to suit your needs!

License
This project is licensed under the MIT License - see the LICENSE file for details.


