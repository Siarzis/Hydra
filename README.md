# Hydra
Hydra is a collection of RESTful APIs built with Node.js. Each API communicates with a particular software entity (a database server, another API, Python scripts, etc) in order to form the Back-End part of a web application. Ultimately, all the different APIs can be merged into one that will serve the purpose of communication broker between Python modules, database server, Front-End part or any other software unit.

## Node.js with Python
There a few ways of integrating Node with Python. In this implementation we included the following ones.

### Child Process

This method sets the API to spawn a child process which executes a Python script, upon receiving a GET request.

Pros:
* Straightforward implementation.
* No need for third-party software, e.g. RabbitMQ.

Cons:
* Both Node and Python processes have to run on the same machine. Thus, not a scalable solution.

### Message Broker

In this way Node can interact Python while running on different machines via TCP/IP sockets. To facilitate such communication we use ZeroMQ which is a high-performance asynchronous messaging library, according to Wikipedia.

Project Structure:
```
node-python/
           server.js        # Where magic happens!
           package.json     # The stantard Node.js file for package installation
           testpy.py        # Python script that just returns a JSON object
           Dockerfile       # Dockerfile containerizes our simple API

```

## Node.js with SQL Server

Communicating with SQL Server via Node.js API 
