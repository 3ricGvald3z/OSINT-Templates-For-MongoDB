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
