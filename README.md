# OSINT Investigation Templates

This repository contains a collection of templates for various OSINT (Open Source Intelligence) investigations. The templates are designed to provide a structured framework for data collection and analysis, ensuring thoroughness and consistency in your work.

## Files Included

-   `templates/`: This directory contains all the markdown-based investigation templates.
    
-   `mongo_setup.js`: A Node.js script to automatically populate a MongoDB database with the templates.
    
-   `.gitignore`: A standard file to ignore `node_modules`.
    

## Getting Started with MongoDB

### Prerequisites

-   Node.js installed on your system.
    
-   A running instance of MongoDB.
    

### Setup

1.  **Clone the repository:**
    
    ```
    git clone [https://github.com/your-username/osint-templates.git](https://github.com/your-username/osint-templates.git)
    cd osint-templates
    
    ```
    
2.  **Install the MongoDB Node.js driver:**
    
    ```
    npm install mongodb
    
    ```
    
3.  **Configure the MongoDB connection:** Open `mongo_setup.js` and update the `mongoUri` variable with your MongoDB connection string.
    
4.  **Run the setup script:**
    
    ```
    node mongo_setup.js
    
    ```
    

This script will read the markdown files from the `templates` directory and insert them as documents into a new collection named `osint_templates` in your MongoDB database. Each document will have a `title`, `filepath`, and `content` field.

## Templates

Template Name

Filepath

General OSINT Investigation Plan

`templates/general_osint_investigation_plan.md`

Social Media Profile Analysis

`templates/social_media_analysis.md`

Website & Domain Reconnaissance

`templates/website_domain_recon.md`

Person of Interest Profile

`templates/person_of_interest_profile.md`

Digital Asset Analysis

`templates/digital_asset_analysis.md`

Corporate Investigation Plan

`templates/corporate_investigation_plan.md`

Cyber Threat Intelligence Report

`templates/cyber_threat_intelligence_report.md`

These templates can be used directly or customized to fit your specific needs.

# **🚧 Project Roadmap: The OSINT Aggregator Tool 🚧**

We are excited to announce the development of a powerful new tool designed to leverage the MongoDB schema templates provided in this repository for real-time data aggregation.

This tool will act as a **Backend for Frontend (BFF)** service, providing a unified, performant, and secure API layer over multiple external OSINT data sources.

## **🎯 Project Goal**

To build a serverless API that accepts a target input (e.g., an image URL, a username, or an email) and returns a single, comprehensive, and standardized JSON result, storing the raw and processed data in a structured MongoDB collection. This tool specifically utilizes the OSINT APIs documented in the [**cipher387/API-s-for-OSINT**](https://github.com/cipher387/API-s-for-OSINT) repository, ensuring data is mapped directly to the schemas provided here. This eliminates the need for client applications (like a web dashboard or mobile app) to manage multiple API calls, deal with inconsistent data formats, or worry about persistence.

## **⚙️ Technology Stack**

The tool will be built on a robust, scalable, and cost-effective **Serverless Architecture** on AWS:

| Layer | AWS Service / Technology | Role in the Tool |
| :---- | :---- | :---- |
| **API Entry Point** | **AWS API Gateway** | Acts as the public-facing URL and enforces security, rate limiting, and authentication. |
| **Orchestration & Logic** | **AWS Lambda (Python)** | The core BFF logic. This function will call external APIs concurrently and perform data transformation. |
| **Persistence** | **MongoDB Atlas (via PyMongo)** | Used to store all raw API responses and the final standardized OSINT documents, leveraging the schemas found in this repository. |
| **Source Data** | **External OSINT APIs** | The raw data sources, specifically leveraging the tool list provided in [**cipher387/API-s-for-OSINT**](https://github.com/cipher387/API-s-for-OSINT). |

## **📝 Key Features**

1. **Multi-API Aggregation:** A single endpoint will simultaneously query multiple specialized APIs (e.g., Google, Yandex, TinEye) to ensure maximum coverage.  
2. **Standardized Output:** All raw, inconsistent responses will be converted into a single, predictable JSON format that directly matches the MongoDB schemas defined in this repository (e.g., the image\_result template).  
3. **Persistence Layer:** Every search performed will be immediately stored in MongoDB for history, audit, and long-term analysis.  
4. **Optimized Client Response:** The tool will return a fast, summarized response to the client while the complete, detailed analysis is securely saved in the MongoDB database.

## **⏳ Estimated Timeline**

Development is scheduled to begin in **Q1 2026**. Updates on progress, initial code drafts, and architecture diagrams will be posted here regularly.
