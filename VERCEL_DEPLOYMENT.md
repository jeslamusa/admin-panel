# 🚀 Vercel Deployment Guide - Zanzpalm Admin Panel

This guide will walk you through deploying your Zanzpalm admin panel to Vercel.

## 📋 Prerequisites

- [GitHub account](https://github.com) with your admin panel repository
- [Vercel account](https://vercel.com) (free tier available)
- Your Supabase credentials ready

## 🎯 Quick Deploy (Recommended)

### 1. **Connect to Vercel**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository: `jeslamusa/admin-panel`
4. Click **"Import"**

### 2. **Configure Project Settings**
- **Project Name**: `zanzpalm-admin-panel` (or your preferred name)
- **Framework Preset**: Select **"Other"** (since we're using static HTML)
- **Root Directory**: Leave as `/` (root)
- **Build Command**: Leave empty
- **Output Directory**: Leave empty

### 3. **Set Environment Variables**
Click **"Environment Variables"** and add:

```env
NEXT_PUBLIC_SUPABASE_URL=https://zaqodpokacrvkitqlsam.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphcW9kcG9rYWNydmtpdHFsc2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMzU4OTQsImV4cCI6MjA3MTcxMTg5NH0.bSDJfgnfJGYTrQrrmuQJj2J_2IVex4UrQeTNYYKbIt0
```

### 4. **Deploy**
Click **"Deploy"** and wait for the build to complete!

## 🔧 Manual Deployment

### 1. **Install Vercel CLI**
```bash
npm install -g vercel
```

### 2. **Login to Vercel**
```bash
vercel login
```

### 3. **Deploy from Project Directory**
```bash
cd "C:\Users\vladas\Desktop\websites\admin pannel"
vercel
```

### 4. **Follow the Prompts**
- Set up and deploy? → **Y**
- Which scope? → Select your account
- Link to existing project? → **N**
- Project name? → `zanzpalm-admin-panel`
- In which directory is your code located? → **./** (current directory)
- Want to override the settings? → **N**

## 🌐 Your Deployed URLs

After deployment, you'll get:

- **Main Site**: `https://your-project-name.vercel.app`
- **Admin Panel**: `https://your-project-name.vercel.app/admin`
- **Property Form**: `https://your-project-name.vercel.app/property-form`
- **Supabase Test**: `https://your-project-name.vercel.app/test`

## 🔄 Automatic Deployments

Vercel automatically deploys when you:
- Push to `main` branch → **Production deployment**
- Create a pull request → **Preview deployment**
- Push to other branches → **Preview deployment**

## 📱 Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click **"Domains"**
3. Add your custom domain (e.g., `admin.zanzpalm.com`)
4. Update your DNS settings as instructed

## 🛠️ Troubleshooting

### **Build Errors**
- Check that all HTML files are in the root directory
- Verify `vercel.json` syntax is correct
- Ensure environment variables are set

### **404 Errors**
- Verify `vercel.json` routes are correct
- Check file paths and names
- Ensure files are committed to Git

### **Supabase Connection Issues**
- Verify environment variables in Vercel dashboard
- Check Supabase project is active
- Test with the connection test page

## 📊 Monitoring & Analytics

Vercel provides:
- **Real-time Analytics**: Page views, performance
- **Function Logs**: Serverless function execution
- **Performance Monitoring**: Core Web Vitals
- **Error Tracking**: Automatic error detection

## 🔒 Security Features

Your deployment includes:
- **HTTPS**: Automatic SSL certificates
- **Security Headers**: XSS protection, content type validation
- **DDoS Protection**: Built-in protection
- **Edge Network**: Global CDN distribution

## 📈 Performance Optimization

Vercel automatically:
- **Compresses** static assets
- **Caches** content globally
- **Optimizes** images and fonts
- **Minifies** CSS/JS files

## 🎉 Success!

Once deployed, your Zanzpalm admin panel will be:
- **Globally accessible** via Vercel's edge network
- **Automatically updated** on every Git push
- **Performance optimized** with CDN caching
- **Secure** with HTTPS and security headers

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **GitHub Issues**: Report bugs in your repository

---

**Happy Deploying! 🚀**
Your Zanzpalm admin panel will be live and accessible worldwide!
