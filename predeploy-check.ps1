$ErrorActionPreference = "Stop"

Write-Host "`n=== Portfolio Pre-Deployment Check ===" -ForegroundColor Cyan

Write-Host "`n[1/5] Checking package.json..."
if (-not (Test-Path ".\package.json")) {
    throw "package.json is missing."
}

Write-Host "`n[2/5] Checking source entry point..."
if (-not (Test-Path ".\src\main.jsx")) {
    throw "src/main.jsx is missing. Update this check if your entry point differs."
}

Write-Host "`n[3/5] Checking dependencies..."
npm ls --depth=0
if ($LASTEXITCODE -ne 0) {
    throw "Dependency check failed."
}

Write-Host "`n[4/5] Building production bundle..."
npm run build
if ($LASTEXITCODE -ne 0) {
    throw "Production build failed."
}

Write-Host "`n[5/5] Checking generated output..."
if (-not (Test-Path ".\dist\index.html")) {
    throw "dist/index.html was not generated."
}

Write-Host "`nAll automated checks passed." -ForegroundColor Green
Write-Host "Note: This does not replace browser, mobile, or accessibility testing."