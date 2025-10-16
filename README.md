# 🧠 Application Monitoring with Grafana, Prometheus & Docker Compose

---

## 🚀 Features
- Node.js Application (Express)
- MySQL Database
- Prometheus for Metrics Collection
- Node Exporter for CPU, RAM, Disk usage
- MySQL Exporter for DB metrics
- Grafana Dashboard for Visualization
- Docker Compose for full stack orchestration

---

## 🧱 Project Structure

```bash
application-monitoring-with-grafana/
│
├── app/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│
├── grafana/
│   └── provisioning/
│
├── prometheus/
│   └── prometheus.yml
│
├── docker-compose.yml
└── README.md


Run application Instruction::

docker compose up -d

Check Container
docker ps

Login → http://localhost:3000
  Username: admin
  Password: admin

| Service        | URL                                            | Description               |
| -------------- | ---------------------------------------------- | ------------------------- |
| Application    | [http://localhost:8080](http://localhost:8080) | Node.js web app           |
| MySQL          | localhost:3306                                 | Database                  |
| Prometheus     | [http://localhost:9090](http://localhost:9090) | Metrics endpoint          |
| Node Exporter  | [http://localhost:9100](http://localhost:9100) | System metrics            |
| MySQL Exporter | [http://localhost:9104](http://localhost:9104) | DB metrics                |
| Grafana        | [http://localhost:3000](http://localhost:3000) | Dashboard (admin / admin) |



