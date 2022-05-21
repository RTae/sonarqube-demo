# 🚀 SAST Demonstration
This repository is a SAST demonstration with ***SonarQube*** and ***Gitlab CICD***. First of all, This repository has `docker-compose` to start the SonarQube software for integrating with the CICD framework. In addition,   there are some configurations to use with GitLabCICD and SonarQube in `deployment/pipeline`. Last, this repository is part of ***CPE393 KMUTT***

## ⚙️ How to install software
1. Create a `.env` file 

    To start the SAST service, it should have a list of environment variables that config service. It's shown below.
```
# Persistence Layer
DB_DATABASE=<DB_NAME>
DB_USERNAME=<DB_USERNAME>
DB_PASSWORD=<DB_PASSWORD>
DB_URL=jdbc:postgresql://database.<DOMAIN>:5432/<DB_NAME>
DB_PORT=<PORT>

# ETC
DOMAIN=<DOMAIN> # This variable can be anything, but not empty
```

Next, you can create `.env` file by following script below.

```
cd ~/sonarqube-demo

nano nano deployment/.env
```
2. Generate self-certificate for proxy server

   Following that, this repository has a proxy server with SSL, so you need to generate a certificate which you can do by following the command below.

```
cd ~/sonarqube-demo/deployment/scripts
bash generate_nginx_server_ssl.sh

mv nginx-server.key ~/sonarqube-demo/deployment/proxy/certs
mv nginx-server.crt ~/sonarqube-demo/deployment/proxy/certs
```

1. Start the service

    In this step, you need to install [Docker](https://docs.docker.com/engine/install/ubuntu/) and [Docker compose](https://docs.docker.com/compose/install/) before running the script that shows below.
```
cd ~/sonarqube-demo

sudo docker-compose -f deployment/docker-compose.yaml -p cpe393-sonarqube-demo up -d
```
4. Configuration

    Finally, after starting a service, you can check the result in `https://<IP_OF_YOUR_MACHINE>`. Now you can use SonarQube !!