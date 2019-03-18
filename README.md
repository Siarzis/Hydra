# Hydra
Hydra is a collection of RESTful APIs built with Node.js. Each API communicates with a particular software entity (a database server, another API, Python scripts, etc) in order to form the Back-End part of a web application. Ultimately, all the different APIs can be merged into one that will serve the purpose of communication broker between Python modules, database server, Front-End part or any other software unit.

## Node.js with Python
There a few ways of integrating Node.js with Python.

### Child Process

This method sets the API to spawn a child process which executes a Python script, upon receiving a GET request.

Pros:
* Straightforward implementation.
* No need for third-party software, e.g. RabbitMQ.

Cons:
* Both Node and Python processes have to run on the same machine. Thus, not a scalable solution.

### Message Broker
