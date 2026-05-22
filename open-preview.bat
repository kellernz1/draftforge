@echo off
cd /d "%~dp0"
npm run build
start "" "http://127.0.0.1:5182"
npm run preview -- --host 127.0.0.1 --port 5182
