# Hydra
Hydra is a collection of RESTful APIs built on Node.js. Each API communicates with a particular software entity (a database server, another API, Python scripts, etc) in order to form the backend part of a web application. Ultimately, all the different APIs can be merged into one that will serve the purpose of communication broker between Python modules, database server and frontend part (and anything else if needed).


## Node.js with Python
There a few ways of integrating Node.js with Python. Here we have set the API to spawn a child process upon receiving a GET request. Advantages: Straightforward for implementation. No need for extra software Disadvantages: Node.js process is binded to its child process. It waits for it untill completion.
