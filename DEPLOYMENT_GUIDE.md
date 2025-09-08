# Deployment Guide: GitHub Pages with GoDaddy Domain

This guide will help you deploy your website using GitHub Pages and connect it with your GoDaddy domain (aarthioilandgas.com).

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account if you don't have one)
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "aarthioilandgas-website")
4. Make it public
5. Click "Create repository"

## Step 2: Upload Your Website Files to GitHub

### Option 1: Using Git Command Line
```bash
# Initialize Git in your project folder
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial website commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/aarthioilandgas-website.git

# Push to GitHub
git push -u origin main
```

### Option 2: Using GitHub Desktop
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Add your website folder as a repository
4. Commit the changes
5. Publish the repository to GitHub

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be published at `https://YOUR-USERNAME.github.io/aarthioilandgas-website/`

## Step 4: Configure Custom Domain in GitHub

1. In your repository settings, under "GitHub Pages"
2. Enter "aarthioilandgas.com" in the "Custom domain" field
3. Click "Save"
4. Check "Enforce HTTPS" (recommended for security)

## Step 5: Configure DNS Settings in GoDaddy

1. Log in to your GoDaddy account
2. Go to "My Products" > "DNS"
3. Find your domain (aarthioilandgas.com) and click "Manage DNS"
4. Add the following DNS records:

### A Records
Point your domain to GitHub Pages' IP addresses:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 1 hour

Type: A
Name: @
Value: 185.199.109.153
TTL: 1 hour

Type: A
Name: @
Value: 185.199.110.153
TTL: 1 hour

Type: A
Name: @
Value: 185.199.111.153
TTL: 1 hour
```

### CNAME Record
Add a CNAME record for the "www" subdomain:
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
TTL: 1 hour
```

## Step 6: Wait for DNS Propagation

DNS changes can take up to 48 hours to propagate globally, but often complete within a few hours.

## Step 7: Verify Your Setup

1. After DNS propagation, visit aarthioilandgas.com to verify your website is live
2. Also check that https://aarthioilandgas.com works correctly

## Troubleshooting

- If your site doesn't appear, check GitHub repository settings to ensure GitHub Pages is enabled
- Verify your DNS settings in GoDaddy are correct
- Check if the CNAME file exists in your repository with "aarthioilandgas.com" as its content
- GitHub Pages may take a few minutes to build your site after changes

## Maintenance

To update your website:
1. Make changes to your local files
2. Commit and push the changes to GitHub
3. GitHub Pages will automatically rebuild and deploy your site

For more detailed information, visit [GitHub Pages documentation](https://docs.github.com/en/pages).