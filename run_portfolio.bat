@echo off
echo ==============================================
echo Starting 3D Portfolio Setup...
echo ==============================================
echo Installing dependencies (this might take a minute)...
call npm install
echo.
echo Starting development server...
echo The browser will open automatically at http://localhost:3000
start http://localhost:3000
call npm run dev
pause
