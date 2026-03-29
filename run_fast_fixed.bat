@echo off
cd /d "%~dp0"
echo ==============================================
echo FAST 3D Portfolio Setup...
echo ==============================================
echo Cleaning up incomplete node_modules...
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del /q "package-lock.json"

echo.
echo Installing crucial dependencies efficiently...
call npm install --legacy-peer-deps --no-audit --no-fund --loglevel=error

echo.
echo Starting development server...
echo The browser will open automatically at http://localhost:3000
start http://localhost:3000
call npm run dev
pause
