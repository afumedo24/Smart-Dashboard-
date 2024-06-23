#!/bin/bash

# This scrpit is used to start and stop MongoDB on my local machine.

# Function to start MongoDB
start_mongodb() {
  echo "Starting MongoDB..."
  brew services start mongodb-community@7.0
}

# Function to stop MongoDB
stop_mongodb() {
  echo "Stopping MongoDB..."
  brew services stop mongodb-community@7.0
}

# Check if exactly one parameter is passed
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 {start|end}"
  exit 1
fi

# Check if the parameter is either "start" or "end"
case "$1" in
  start)
    start_mongodb
    ;;
  end)
    stop_mongodb
    ;;
  *)
    echo "Invalid option: $1"
    echo "Usage: $0 {start|end}"
    exit 1
    ;;
esac
