# GCP React App

Simple React app containerised with nginx, ready for GKE.

## Local development

```bash
npm install --legacy-peer-deps
npm start
```

## Build & push to Artifact Registry

Replace the values in caps with yours:

```bash
# 1. Authenticate Docker with GCP
gcloud auth configure-docker me-central1-docker.pkg.dev

# 2. Build the image
docker build -t me-central1-docker.pkg.dev/YOUR_PROJECT_ID/YOUR_REGISTRY_NAME/react-app:latest .

# 3. Push to Artifact Registry
docker push me-central1-docker.pkg.dev/YOUR_PROJECT_ID/YOUR_REGISTRY_NAME/react-app:latest
```

## Run locally with Docker

```bash
docker build -t react-app .
docker run -p 3000:80 react-app
# Open http://localhost:3000
```
