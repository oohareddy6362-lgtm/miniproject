@echo off
echo ========================================
echo   AI Career Coach - Quick Start
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [1/3] Installing dependencies...
    call npm install
    echo.
) else (
    echo [1/3] Dependencies already installed ✓
    echo.
)

REM Check if .env exists
if not exist ".env" (
    echo [ERROR] .env file not found!
    echo Please create a .env file with your configuration.
    echo See SETUP.md for instructions.
    pause
    exit /b 1
)

echo [2/3] Checking database connection...
call npx prisma db push
if errorlevel 1 (
    echo.
    echo [WARNING] Database connection failed!
    echo Please update your DATABASE_URL in .env file.
    echo See QUICK_START.md for instructions.
    echo.
    echo Press any key to continue anyway...
    pause > nul
)

echo.
echo [3/3] Starting development server...
echo.
echo ========================================
echo   Server will start at:
echo   http://localhost:3000
echo ========================================
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

