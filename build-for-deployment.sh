#!/bin/bash

# Build script for Replit static deployment
# This script builds the application and moves static files to the correct location

echo "Starting build process for deployment..."

# Run the original build command
echo "Building application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed, exiting..."
    exit 1
fi

# Check if dist/public exists
if [ -d "dist/public" ]; then
    echo "Moving static files from dist/public to dist..."
    
    # Move all files from dist/public to dist
    mv dist/public/* dist/
    
    # Remove the empty public directory
    rmdir dist/public
    
    echo "Static files moved successfully!"
else
    echo "Warning: dist/public directory not found, build output may already be in correct location"
fi

echo "Build process completed!"