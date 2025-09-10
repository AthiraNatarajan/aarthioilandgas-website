# Deployment Guide for Aarthi Oil and Gas Website

This guide provides step-by-step instructions for deploying the Aarthi Oil and Gas Exploration Services website.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- All website files and images ready

## Deployment Steps

### 1. Create a GitHub Repository

1. Log in to your GitHub account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name the repository (e.g., "aarthioilandgas-website")
4. Choose "Public" visibility
5. Click "Create repository"

### 2. Prepare Your Local Files

Ensure you have all the required files:
- index.html
- thank-you.html
- styles.css
- script.js
- All image files (logo1.png, logo2.png, etc.)
- CNAME file containing "aarthioilandgas.com"

### 3. Initialize Git and Push to GitHub

```bash
# Navigate to your website directory
cd path/to/website

# Initialize Git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial website commit"

# Add the remote repository
git remote add origin https://github.com/yourusername/aarthioilandgas-website.git

# Push to GitHub
git push -u origin main
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for the site to be published

### 5. Set Up Custom Domain

1. Log in to your GoDaddy account (or your domain registrar)
2. Navigate to the DNS settings for aarthioilandgas.com
3. Add the following DNS records:

   | Type  | Name | Value               | TTL    |
   |-------|------|---------------------|--------|
   | A     | @    | 185.199.108.153     | 1 hour |
   | A     | @    | 185.199.109.153     | 1 hour |
   | A     | @    | 185.199.110.153     | 1 hour |
   | A     | @    | 185.199.111.153     | 1 hour |
   | CNAME | www  | yourusername.github.io | 1 hour |

4. Wait for DNS propagation (can take up to 48 hours)

### 6. Verify Custom Domain in GitHub

1. Go back to your repository's "Settings" page
2. In the "GitHub Pages" section, enter "aarthioilandgas.com" in the "Custom domain" field
3. Click "Save"
4. Check the "Enforce HTTPS" option once the certificate is provisioned (may take up to 24 hours)

## Updating the Website

To make changes to the website after deployment:

1. Make your changes locally
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. GitHub Pages will automatically update the live site

## Troubleshooting

### Website Not Updating
- Ensure you've pushed your changes to the main branch
- Check if GitHub Actions shows any errors in the deployment
- Clear your browser cache

### Custom Domain Not Working
- Verify DNS settings are correct
- Check if the CNAME file exists in your repository
- Ensure the domain is correctly configured in GitHub Pages settings

### Contact Form Issues
- Verify the FormSubmit configuration in the HTML
- Check if the email address is correct
- Test the form submission

## Support

For additional help with deployment, contact GitHub support or consult the [GitHub Pages documentation](https://docs.github.com/en/pages).