# Use an official Unity image as a base
FROM litespeedtech/openlitespeed:latest

# Copy the Unity WebGL build files to the web server directory
# for localsystem build
# COPY WebglBuild //usr/local/lsws/Example/html

# for server build
COPY build //var/www/vhosts/localhost/html

# Expose the web server port
EXPOSE 80