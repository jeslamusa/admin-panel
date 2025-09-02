@echo off
echo 🚀 Zanzpalm Admin Panel - Vercel Deployment
echo =============================================
echo.

echo 📋 Checking prerequisites...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 Installing Vercel CLI...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo ❌ Failed to install Vercel CLI. Please try manually:
        echo    npm install -g vercel
        pause
        exit /b 1
    )
)

echo ✅ Prerequisites check passed!
echo.

echo 🔐 Logging into Vercel...
vercel login

echo.
echo 🚀 Deploying to Vercel...
vercel --prod

echo.
echo 🎉 Deployment completed!
echo.
echo 📱 Your admin panel is now live at:
echo    https://your-project-name.vercel.app
echo.
echo 🔗 Quick links:
echo    - Admin Panel: /admin
echo    - Property Form: /property-form
echo    - Supabase Test: /test
echo.
pause
