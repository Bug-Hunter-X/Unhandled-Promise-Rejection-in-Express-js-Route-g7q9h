# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Node.js Express.js applications: improper error handling within asynchronous route handlers.  The `bug.js` file showcases the problematic code, where an asynchronous operation might throw an error but the error isn't properly handled, resulting in a silent failure and no informative response to the client.

The `bugSolution.js` file provides a corrected version, showing best practices for handling promise rejections and sending appropriate error responses to the client.