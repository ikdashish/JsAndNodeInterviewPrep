
## FAQ of Node.js
### 1. What is Node.js? Where can you use it?
Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.

Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model. You can use  I/O intensive web applications like video streaming sites. You can also use it for developing: Real-time web applications, Network applications, General-purpose applications, and Distributed systems.

### 2. Why use Node.js?
Node.js makes building scalable network programs easy. Some of its advantages include:

* It is generally fast
* It rarely blocks
* It offers a unified programming language and data type
* Everything is asynchronous 
* It yields great concurrency

### 3. How does Node.js work?
A web server using Node.js typically has a workflow that is quite similar to the diagram illustrated below. Let’s explore this flow of operations in detail.

Node.js Architecture Workflow
![image](https://user-images.githubusercontent.com/26089829/131538586-4dd57d26-30a9-4dde-bdb0-fb16e7f61be0.png)



Node is completely event-driven. Basically the server consists of one thread processing one event after another.

![image](https://github.com/learning-zone/nodejs-interview-questions/blob/master/assets/event-loop.png)

A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.

So the server never needs to create additional threads or switch between threads, which means it has very little overhead. If you want to make full use of multiple hardware cores, you just start multiple instances of node.js

Node JS Platform does not follow Request/Response Multi-Threaded Stateless Model. It follows Single Threaded with Event Loop Model. Node JS Processing model mainly based on Javascript Event based model with Javascript callback mechanism.

Single Threaded Event Loop Model Processing Steps:

* Clients Send request to Web Server.
* Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
* Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”.
* Node JS Web Server internally has a Component, known as “Event Loop”. Why it got this name is that it uses indefinite loop to receive requests and process them.
* Event Loop uses Single Thread only. It is main heart of Node JS Platform Processing Model.
* Even Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.
* If yes, then pick up one Client Request from Event Queue
 a. Starts process that Client Request
 b. If that Client Request Does Not requires any Blocking IO Operations, then process everything, prepare response and send it back to client.
 c. If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach:
  * Checks Threads availability from Internal Thread Pool
  * Picks up one Thread and assign this Client Request to that thread.
  * That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
  * Event Loop in turn, sends that Response to the respective Client.

### 4. Why is Node.js Single-threaded?
Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved instead of the typical thread-based implementation.

### 5. Explain callback in Node.js.
A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.  Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.

### 6. How would you define the term I/O? 
The term I/O is used to describe any program, operation, or device that transfers data to or from a medium and to or from another medium
Every transfer is an output from one medium and an input into another. The medium can be a physical device, network, or files within a system

### 7. Why is Node.js preferred over other backend technologies like Java and PHP?
Some of the reasons why Node.js is preferred include:

Node.js is very fast
Node Package Manager has over 50,000 bundles available at the developer’s disposal
Perfect for data-intensive, real-time web applications, as Node.js never waits for an API to return data
Better synchronization of code between server and client due to same code base
Easy for web developers to start using Node.js in their projects as it is a JavaScript library

### 8. What does event-driven programming mean?
An event-driven programming approach uses events to trigger various functions. An event can be anything, such as typing a key or clicking a mouse button. A call-back function is already registered with the element executes whenever an event is triggered.

### 9. What is an Event Loop in Node.js?
Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.

### 10. What is an EventEmitter in Node.js?
EventEmitter is a class that holds all the objects that can emit events
Whenever an object from the EventEmitter class throws an event, all attached functions are called upon synchronously
/eventemitter
![image](https://www.simplilearn.com/ice9/free_resources_article_thumb/eventemitter.JPG)

### 11. What are the two types of API functions in Node.js?
The two types of API functions in Node.js are:

Asynchronous, non-blocking functions
Synchronous, blocking functions

### 12. What is the package.json file?
The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module

This is what a package.json file looks like immediately after creating a Node.js project using the command: npm init
You can edit the parameters when you create a Node.js project.
![image](https://www.simplilearn.com/ice9/free_resources_article_thumb/node-npm.JPG)

### 13. Explain asynchronous and non-blocking APIs in Node.js.
All Node.js library APIs are asynchronous, which means they are also non-blocking
A Node.js-based server never waits for an API to return data. Instead, it moves to the next API after calling it, and a notification mechanism from a Node.js event responds to the server for the previous API call.

### 14. How do we implement async in Node.js?
As shown below, the async code asks the JavaScript engine running the code to wait for the request.get() function to complete before moving on to the next line for execution.
![image](https://www.simplilearn.com/ice9/free_resources_article_thumb/async.JPG)

What is the purpose of module.exports?
A module in Node.js is used to encapsulate all the related codes into a single unit of code, which can be interpreted by shifting all related functions into a single file. You can export a module using the module.exports, which allows it to be imported into another file using a required keyword.

### 15. What is a callback function in Node.js?
A callback is a function called after a given task. This prevents any blocking and enables other code to run in the meantime.

### 16.  What is REPL in Node.js?
REPL stands for Read Eval Print Loop, and it represents a computer environment. It’s similar to a Windows console or Unix/Linux shell in which a command is entered. Then, the system responds with an output
![image](https://www.simplilearn.com/ice9/free_resources_article_thumb/repl2.JPG)

### 17. What is the difference between fork() and spawn() methods in Node.js?
fork() is a particular case of spawn() that generates a new instance of a V8 engine.Multiple workers run on a single node code base for multiple tasks.

Spawn() launches a new process with the available set of commands.
This method doesn’t generate a new V8 instance, and only a single copy of the node module is active on the processor.

### 18. What is the buffer class in Node.js?
Buffer class stores raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data

### 19. What is piping in Node.js?
Piping is a mechanism used to connect the output of one stream to another stream. It is normally used to retrieve data from one stream and pass output to another stream.

### 20. What is callback hell?
* Callback hell, also known as the pyramid of doom, is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug.
* improper implementation of the asynchronous logic causes callback hell.

### 21. What is a reactor pattern in Node.js?
A reactor pattern is a concept of non-blocking I/O operations. This pattern provides a handler that is associated with each I/O operation. As soon as an I/O request is generated, it is then submitted to a demultiplexer.

### 22. Explain the concept of middleware in Node.js.
Middleware is a function that receives the request and response objects. Most tasks that the middleware functions perform are:  

* Execute any code
* Update or modify the request and the response objects
* Finish the request-response cycle
* Invoke the next middleware in the stack
### 23. What are the different types of HTTP requests?
HTTP defines a set of request methods used to perform desired actions. The request methods include:

* GET: Used to retrieve the data
* POST: Generally used to make a change in state or reactions on the server
* HEAD: Similar to the GET method, but asks for the response without the response body
* DELETE: Used to delete the predetermined resource

### 24. What is the purpose of NODE_ENV?
![image](https://www.simplilearn.com/ice9/free_resources_article_thumb/node-env.JPG)

### 25. How Node.js overcomes the problem of blocking of I/O operations?
Node.js solves this problem by putting the event based model at its core, using an event loop instead of threads.

### 26. What is the difference between Node.js vs Ajax?
The difference between Node.js and Ajax is that, Ajax (short for Asynchronous Javascript and XML) is a client side technology, often used for updating the contents of the page without refreshing it. While,Node.js is Server Side Javascript, used for developing server software. Node.js does not execute in the browser but by the server.

### 27. What does it mean “non-blocking” in node.js?
In node.js “non-blocking” means that its IO is non-blocking. Node uses “libuv” to handle its IO in a platform-agnostic way. On windows, it uses completion ports for unix it uses epoll or kqueue etc. So, it makes a non-blocking request and upon a request, it queues it within the event loop which call the JavaScript ‘callback’ on the main JavaScript thread.

### 28. Differentiate between readFile vs createReadStream in Node.js?
Node.js provides two ways to read and execute files which are using readFile and CreateStream. readFile() is a fully buffered process which returns the response only when the complete file is pushed into the buffer and is read. It is a memory intensive process and in case of large files, the processing can be very slow. Whereas createReadStream is a partially buffered which treats the entire process as an event series. The entire file is split into chunks which are then processed and sent back as a response one by one. Once done, they are finally removed from the buffer. Unlike readFile, createReadStream is really effective for the processing of the large files.

### 29. List down the various timing features of Node.js.
Node.js provides a Timers module which contains various functions for executing the code after a specified period of time. Below I have listed down the various functions provided by this module:

* setTimeout/clearTimeout – Used to schedule code execution after a designated amount of milliseconds
* setInterval/clearInterval – Used to execute a block of code multiple times
* setImmediate/clearImmediate – Used to execute code at the end of the current event loop cycle
* process.nextTick – Used to schedule a callback function that needs to be invoked in the next iteration of the Event Loop

### 30. Explain the concept of Punycode in Node.js?
In Node.js, Punycode is an encoding syntax that is used for converting Unicode (UTF-8) string of characters into a basic ASCII string of characters. It is important as the hostnames can only understand the ASCII characters. Thus, Node.js version 0.6.2 onwards, it was bundled up with the default Node package.

### 31. Describe the exit codes of Node.js.
In Node.js, exit codes are a set of specific codes which are used for finishing a specific process. These processes can include the global object as well. Below are some of the exit codes used in Node.js:

* Uncaught fatal exception
* Unused
* Fatal Error
* Internal Exception handler Run-time failure
* Internal JavaScript Evaluation Failure

### 32. What does the runtime environment mean in Node.js?
The Node.js runtime is the software stack responsible for installing your web service's code and its dependencies and running your service.
The runtime environment is literally just the environment your application is running in. This can be used to describe both the hardware and the software that is running your application. How much RAM, what version of node, what operating system, how much CPU cores, can all be referenced when talking about a runtime environment.

### 33. What is an error-first callback?
The pattern used across all the asynchronous methods in Node.js is called Error-first Callback. Here is an example:

```
fs.readFile( "file.json", function ( err, data ) {
  if ( err ) {
    console.error( err );
  }
  console.log( data );
});
```
Any asynchronous method expects one of the arguments to be a callback. The full callback argument list depends on the caller method, but the first argument is always an error object or null. When we go for the asynchronous method, an exception thrown during function execution cannot be detected in a try/catch statement. The event happens after the JavaScript engine leaves the try block.

In the preceding example, if any exception is thrown during the reading of the file, it lands on the callback function as the first and mandatory parameter.

### 34. What are Promises in Node.js?
It allows to associate handlers to an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise for the value at some point in the future.

Promises in node.js promised to do some work and then had separate callbacks that would be executed for success and failure as well as handling timeouts. Another way to think of promises in node.js was that they were emitters that could emit only two events: success and error.The cool thing about promises is you can combine them into dependency chains (do Promise C only when Promise A and Promise B complete).

The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of three different states:

pending - The initial state of a promise.
fulfilled - The state of a promise representing a successful operation.
rejected - The state of a promise representing a failed operation. Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).
Creating a Promise

```
var myPromise = new Promise(function(resolve, reject){
   ....
});
```

### 35. How does Node.js handle child threads?
Node.js is a single threaded language which in background uses multiple threads to execute asynchronous code. Node.js is non-blocking which means that all functions ( callbacks ) are delegated to the event loop and they are ( or can be ) executed by different threads. That is handled by Node.js run-time.

* Nodejs Primary application runs in an event loop, which is in a single thread.
* Background I/O is running in a thread pool that is only accessible to C/C++ or other compiled/native modules and mostly transparent to the JS.
* Node v11/12 now has experimental worker_threads, which is another option.
* Node.js does support forking multiple processes ( which are executed on different cores ).
* It is important to know that state is not shared between master and forked process.
* We can pass messages to forked process ( which is different script ) and to master process from forked process with function send.

### 36. What is the preferred method of resolving unhandled exceptions in Node.js?
Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.
```
process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});
```
Process is a global object that provides information about the current Node.js process. Process is a listener function that is always listening to events.

Few events are :

* Exit
* disconnect
* unhandledException
* rejectionHandled

### 37. How does Node.js support multi-processor platforms, and does it fully utilize all processor resources?
Since Node.js is by default a single thread application, it will run on a single processor core and will not take full advantage of multiple core resources. However, Node.js provides support for deployment on multiple-core systems, to take greater advantage of the hardware. The Cluster module is one of the core Node.js modules and it allows running multiple Node.js worker processes that will share the same port.

The cluster module helps to spawn new processes on the operating system. Each process works independently, so you cannot use shared state between child processes. Each process communicates with the main process by IPC and pass server handles back and forth.

Cluster supports two types of load distribution:

* The main process listens on a port, accepts new connection and assigns it to a child process in a round robin fashion.
* The main process assigns the port to a child process and child process itself listen the port.

### 38. What is JIT and how is it related to Node.js?
Node.js has depended on the V8 JavaScript engine to provide code execution in the language. The V8 is a JavaScript engine built at the google development center, in Germany. It is open source and written in C++. It is used for both client side (Google Chrome) and server side (node.js) JavaScript applications. A central piece of the V8 engine that allows it to execute JavaScript at high speed is the JIT (Just In Time) compiler. This is a dynamic compiler that can optimize code during runtime. When V8 was first built the JIT Compiler was dubbed FullCodegen. Then, the V8 team implemented Crankshaft, which included many performance optimizations that FullCodegen did not implement.

The ```V8``` was first designed to increase the performance of the JavaScript execution inside web browsers. In order to obtain speed, V8 translates JavaScript code into more efficient machine code instead of using an interpreter. It compiles JavaScript code into machine code at execution by implementing a JIT (Just-In-Time) compiler like a lot of modern JavaScript engines such as SpiderMonkey or Rhino (Mozilla) are doing. The main difference with V8 is that it doesn’t produce bytecode or any intermediate code.

### 39. How V8 compiles JavaScript code?
The V8 engine gets its speed from the Just in Time (JIT) compilation of JS code to native machine code. The ignition interpreter, a key component of V8, compiles the JS code and generates non-optimized machine code. On runtime, the machine code is analyzed and re-compiled for optimal performance.

### 40. Why is LIBUV needed in Node JS?
libuv is a C library originally written for Node.js to abstract non-blocking I/O operations. 

* Event-driven asynchronous I/O model is integrated.
* It allows the CPU and other resources to be used simultaneously while still performing I/O operations, thereby resulting in efficient use of resources and network.
* It facilitates an event-driven approach wherein I/O and other activities are performed using callback based notifications.
Example: If a program is querying the database, the CPU sits idle until the query is processed and the program stays at a halt, thereby causing wastage of system resources. To prevent this, libuv is used in Node.js which facilitate a non-blocking I/O.

It also has mechanisms to handle services like File System, DNS, network, child processes, pipes, signal handling, polling and streaming.
To perform blocking operations that can’t be done asynchronously at OS level, libuv also includes a thread pool to distribute CPU loads. 

#### What is a thread pool?
Libuv assigns tasks to a pool of worker threads. However, all callbacks that occur on task completion are executed on the main thread.

Note: After Node 10.5 worker threads can also be used to execute JavaScript in parallel. Libuv uses 4 threads by default, but can be changed using the UV_THREADPOOL_SIZE 

### 41. Since node is a single threaded process, how to make use of all CPUs?
A single instance of Node.js runs in a single thread. To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load. The cluster module allows easy creation of child processes that all share server ports.

### 42. What do you understand by Reactor Pattern in Node.js?
Reactor Pattern is an idea of non-blocking I/O operations in Node.js. This pattern provides a handler(in case of Node.js, a callback function) that is associated with each I/O operation. When an I/O request is generated, it is submitted to a demultiplexer.

This demultiplexer is a notification interface that is used to handle concurrency in non-blocking I/O mode and collects every request in form of an event and queues each event in a queue. Thus, the demultiplexer provides the Event Queue, which we often hear. When a request is collected by the demultiplexer, it returns the control back to the system and does not blocks the I/O. At the same time, there is an Event Loop which iterates over the items in the Event Queue. Every event has a callback function associated with it, and that callback function is invoked when the Event Loop iterates.

The callback function further mostly have other callbacks associated within representing some asynchronous operations. These operations are inserted in the Event Queue by the demultiplexer and are ready to be processed once the Event Loop iterates over them. That is why calls to other operations must be asynchronous.

When all the items in the Event Queue are processed and there are no pending operations left, Node.js terminates the application automatically.

![image](https://github.com/learning-zone/nodejs-interview-questions/raw/master/assets/reactor-pattern.jpg)

The application generates a new I/O operation by submitting a request to the Event Demultiplexer. The application also specifies a handler, which will be invoked when the operation completes. Submitting a new request to the Event Demultiplexer is a non-blocking call and it immediately returns the control back to the application.
When a set of I/O operations completes, the Event Demultiplexer pushes the new events into the Event Queue.
At this point, the Event Loop iterates over the items of the Event Queue.
For each event, the associated handler is invoked.
The handler, which is part of the application code, will give back the control to the Event Loop when its execution completes (5a). However, new asynchronous operations might be requested during the execution of the handler (5b), causing new operations to be inserted in the Event Demultiplexer (1), before the control is given back to the Event Loop.
When all the items in the Event Queue are processed, the loop will block again on the Event Demultiplexer which will then trigger another cycle.

### 43. How Node.js overcomes the problem of blocking of I/O operations?
Node.js solves this problem by putting the event based model at its core, using an event loop instead of threads.

Node.js uses an event loop for this. An event loop is “an entity that handles and processes external events and converts them into callback invocations”. Whenever data is needed nodejs registers a callback and sends the operation to this event loop. Whenever the data is available the callback is called.

### 44. What is the difference between process.nextTick() and setImmediate()?
The difference between process.nextTick() and setImmediate() is that process.nextTick() defers the execution of an action till the next pass around the event loop or it simply calls the callback function once the ongoing execution of the event loop is finished whereas setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations.
