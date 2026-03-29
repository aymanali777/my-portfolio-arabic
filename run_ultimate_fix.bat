@echo off
cd /d "%~dp0"
echo ==============================================
echo 🛠 ULTIMATE FIX ^& DIAGNOSTICS...
echo ==============================================
echo Checking Node version (Should be v18 or higher):
call node -v
echo Checking NPM version:
call npm -v

echo.
echo 🧹 Forcing Cache Cleanup (In case of corrupted files)...
call npm cache clean --force

echo 🗑 Cleaning old node_modules...
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del /q "package-lock.json"

echo.
echo 🚀 Installing dependencies in VERBOSE mode (so we can see where it stops)...
call npm install --legacy-peer-deps --no-audit --no-fund --verbose

echo.
echo Starting development server...
start http://localhost:3000
call npm run dev
pause
