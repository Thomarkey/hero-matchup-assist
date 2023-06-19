#!/bin/bash

# Install frontend dependencies and build
cd Frontend
npm install
npm run build --prod
cd ..

# Build backend
./mvnw clean install

# Run the application
java -Dserver.port=$PORT $JAVA_OPTS -jar target/dotaApplicationTool-0.0.1-SNAPSHOT.jar