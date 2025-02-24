📌 Indian Recipe Web App Using Kind and Helm

A simple recipe listing website built using HTML, CSS, and JavaScript, featuring 10 Indian recipes with images, ingredients, and cooking instructions. The app is containerized with Docker & Nginx and deployed on Kubernetes (Kind) using Helm.
🚀 Features

✅ 10 Indian Recipes with images and detailed steps
✅ Interactive UI with a modern and responsive design
✅ Dockerized Application using Nginx as a web server
✅ Kubernetes Deployment using Kind and Helm
✅ Service Exposure using NodePort for external access
🛠️ Tech Stack

    Frontend: HTML, CSS, JavaScript
    Containerization: Docker, Nginx
    Orchestration: Kubernetes (Kind)
    Deployment: Helm

📂 Project Structure

Indian-Recipe-Web-App-Using-Kind-and-Helm/
│── recipe-chart/                 # Helm Chart for Kubernetes Deployment
│   ├── templates/                # YAML templates for Kubernetes resources
│   ├── values.yaml                # Configuration values for Helm
│── src/                           # Web App Source Code
│   ├── index.html                  # Main HTML file
│   ├── styles.css                   # CSS styles
│   ├── script.js                     # JavaScript functionality
│── Dockerfile                      # Docker build instructions
│── README.md                        # Project Documentation

📦 Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/YOUR-USERNAME/Indian-Recipe-Web-App-Using-Kind-and-Helm.git
cd Indian-Recipe-Web-App-Using-Kind-and-Helm

2️⃣ Build and Run with Docker

docker build -t recipe-website:latest .
docker run -p 8080:80 recipe-website

Now, open http://localhost:8080 in your browser.
🚀 Kubernetes Deployment (Kind & Helm)
1️⃣ Create a Kind Cluster

kind create cluster --name recipe-cluster

2️⃣ Load Docker Image into Kind

kind load docker-image recipe-website:latest --name recipe-cluster

3️⃣ Deploy with Helm

cd recipe-chart
helm install recipe-app . --namespace default

4️⃣ Check the Services

kubectl get svc

Find the NodePort and access your web app at:

http://localhost:<NodePort>

📜 License

This project is open-source and available under the MIT License.
🎯 Future Improvements

✅ Add a database to store recipes dynamically
✅ Implement user authentication and recipe submissions
✅ Automate deployment with CI/CD pipelines
📩 Have Feedback?

Feel free to fork this repository, open issues, or submit pull requests! 😊🚀
