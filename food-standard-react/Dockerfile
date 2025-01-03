FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
