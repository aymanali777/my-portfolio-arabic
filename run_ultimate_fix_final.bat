@echo off
cd /d "%~dp0"
echo ==============================================
echo DIAGNOSTICS AND CLEANUP (PURE TEXT)
echo ==============================================
echo Checking Node version:
call node -v
echo Checking NPM version:
call npm -v

echo.
echo Forcing Cache Cleanup...
call npm cache clean --force

echo Cleaning old node_modules...
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del /q "package-lock.json"

echo.
echo Installing dependencies in VERBOSE mode...
call npm install --legacy-peer-deps --no-audit --no-fund --verbose

echo.
echo Starting development server...
start http://localhost:3000
call npm run dev
pause
