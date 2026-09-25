# Step 1: Use an official lightweight Node.js base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package files first for layer caching
COPY package*.json ./

# Step 4: Install application dependencies
RUN npm install --production

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Expose the application port (3000 as configured in app.js)
EXPOSE 3000

# Step 7: Define the command to run the application
CMD ["node", "app.js"]