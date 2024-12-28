export const documentationNavLinks = {
    nodeplace: [
        { id: 'nodeplace.json', name: 'nodeplace.json()' },
        { id: 'nodeplace.static', name: 'nodeplace.static()' },
        { id: 'nodeplace.urlencoded', name: 'nodeplace.urlencoded()' },
    ],
    application: [
        { id: 'app.all', name: 'app.all()' },
        { id: 'app.delete', name: 'app.delete()' },
        { id: 'app.disable', name: 'app.disable()' },
        { id: 'app.enable', name: 'app.enable()' },
        { id: 'app.get', name: 'app.get()' },
        { id: 'app.listen', name: 'app.listen()' },
        { id: 'app.patch', name: 'app.patch()' },
        { id: 'app.post', name: 'app.post()' },
        { id: 'app.put', name: 'app.put()' },
        { id: 'app.settings', name: 'app.settings()' },
        { id: 'app.use', name: 'app.use()' },
    ],
    request: [
        { id: 'req.body', name: 'req.body' },
        // { id: 'req.cookies', name: 'req.cookies' },
        { id: 'req.params', name: 'req.params' },
        { id: 'req.query', name: 'req.query' },
        { id: 'req.res', name: 'req.res' },
    ],
    response: [
        { id: 'res.cookie', name: 'res.cookie()' },
        { id: 'res.clearCookie', name: 'res.clearCookie()' },
        { id: 'res.json', name: 'res.json()' },
        { id: 'res.redirect', name: 'res.redirect()' },
        { id: 'res.send', name: 'res.send()' },
        { id: 'res.sendFile', name: 'res.sendFile()' },
        { id: 'res.set', name: 'res.set()' },
        { id: 'res.status', name: 'res.status()' },
        { id: 'res.type', name: 'res.type()' },
    ],
    router: [
        { id: 'creating.router', name: 'Creating a Router' },
        { id: 'handling.routes', name: 'Handling Routes with Router' },
        { id: 'mounting.routers', name: 'Mounting Routers' },
        { id: 'router.level.middleware', name: 'Router-Level Middleware' },
        { id: 'router.route.method', name: 'Method: router.route(path)' },
        { id: 'nested.routers', name: 'Nested Routers' },
    ],
}

export const GuideNavLinks = {
    nodeplace: [
        { id: 'introduction', name: 'Introduction' },
        { id: 'installing', name: 'installion' },
        { id: 'hello-world', name: 'Hello World' },
    ],
    Routing: [
        { id: 'route-methods', name: 'route methods' },
        { id: 'route-parameters', name: 'route parameters' },
        { id: 'route-handlers', name: 'route handlers' },
        { id: 'nodeplace-router', name: 'NodePlace Router' },
    ],
    Middleware: [
        { id: 'using-middleware', name: 'Using Middleware' },
        { id: 'writing-middleware', name: 'Writing Middleware' },
    ],
    "Error Handling": [
        { id: 'catching.errors', name: 'Catching Errors' },
        // { id: 'Default.error-handler', name: 'Default Error Handler' },
        { id: 'writing.error.handlers', name: 'Writing Error Handlers' },
    ],
    Miscellaneous: [
        { id: 'settings', name: 'Application Settings' },
    ],
}

export const tableData = {
    nodeplaceJsonOptions: [
        {
            Option: 'limit',
            Description: 'Maximum size of the incoming JSON payload.',
            Type: 'String or Number',
            Default: '100kb'
        },
        {
            Option: 'strict',
            Description: 'Ensures only objects and arrays are parsed (if set to true).',
            Type: 'Boolean',
            Default: 'true'
        },
        {
            Option: 'reviver',
            Description: 'A function passed to JSON.parse to transform the parsed JSON.',
            Type: 'Function',
            Default: 'undefined'
        },
    ],
    nodeplaceStatic: [
        {
            Option: 'dotfiles',
            Description: "	Determines how dotfiles (files starting with .) are treated ('allow' or 'ignore').",
            Type: 'String',
            Default: 'ignore'
        },
        {
            Option: 'etag',
            Description: 'Enables or disables ETag generation for caching.',
            Type: 'Boolean',
            Default: 'true'
        },
        {
            Option: 'extensions',
            Description: 'File extensions to try when the requested file is not found.',
            Type: 'Array<String>',
            Default: '[]'
        },
        {
            Option: 'maxAge',
            Description: 'Sets the max-age directive in the Cache-Control header (in milliseconds).',
            Type: 'Number',
            Default: '0'
        },
        {
            Option: 'lastModified',
            Description: 'Sets the Last-Modified header to the file’s modification time.',
            Type: 'Boolean',
            Default: 'true'
        },
        {
            Option: 'immutable',
            Description: 'Adds the immutable directive to Cache-Control for long-lived caching. Requires maxAge.',
            Type: 'Boolean',
            Default: 'false'
        },
        {
            Option: 'setHeaders',
            Description: 'A custom function for setting headers on the response.',
            Type: 'Function(res, path, stat)',
            Default: 'undefined'
        }
    ],
    nodeplaceUrlEncodedOptions: [
        {
            Option: 'parameterLimit',
            Description: "Limits the number of parameters parsed to prevent potential denial-of-service attacks.",
            Type: 'Number',
            Default: '1000'
        },
        {
            Option: 'limit',
            Description: 'Maximum size of the incoming JSON payload.',
            Type: 'String or Number',
            Default: '100kb'
        },
    ],
    nodeplaceCookieOptions: [
        {
            Option: 'domain',
            Description: "Specifies the domain for the cookie.",
            Type: 'string',
            Default: 'null'
        },
        {
            Option: 'expires',
            Description: 'Sets the cookie’s expiration date in GMT format.',
            Type: 'Date',
            Default: 'null'
        },
        {
            Option: 'encode',
            Description: 'A synchronous function used for cookie value encoding.',
            Type: 'Function',
            Default: 'encodeURIComponent'
        },
        {
            Option: 'httpOnly',
            Description: 'Marks the cookie as accessible only via HTTP(S), not JavaScript.',
            Type: 'boolean',
            Default: 'false'
        },
        {
            Option: 'maxAge',
            Description: 'Specifies the time in milliseconds until the cookie expires.',
            Type: 'number',
            Default: 'null'
        },
        {
            Option: 'path',
            Description: 'Specifies the path for the cookie.',
            Type: 'string',
            Default: '/'
        },
        {
            Option: 'secure',
            Description: 'Marks the cookie to be sent only over HTTPS.',
            Type: 'boolean',
            Default: 'false'
        },
        {
            Option: 'sameSite',
            Description: 'Controls whether the cookie is sent with cross-site requests (Strict, Lax, or None).',
            Type: 'string',
            Default: 'null'
        },
        {
            Option: 'signed',
            Description: '	Indicates if the cookie should be signed.',
            Type: 'boolean',
            Default: 'false'
        },
    ],
    nodeplaceSendFileOptions: [
        {
            Option: 'maxAge',
            Description: "Specifies the Cache-Control max-age in milliseconds.",
            Type: 'number',
            Default: '0'
        },
        {
            Option: 'root',
            Description: 'The root directory for resolving the relative file path.',
            Type: 'string',
            Default: 'null'
        },
        {
            Option: 'headers',
            Description: 'Allows you to set additional HTTP headers. This can be useful for security or metadata requirements.',
            Type: 'Object',
            Default: 'null'
        },
        {
            Option: 'dotfiles',
            Description: 'Determines how dotfiles (hidden files starting with .) are handled. Can be one of "allow", "deny", or "ignore".',
            Type: 'string',
            Default: '"ignore"'
        },
        {
            Option: 'acceptRanges',
            Description: 'Enables or disables support for range requests.',
            Type: 'Boolean',
            Default: 'true'
        },
        {
            Option: 'cacheControl',
            Description: 'Enables or disables the Cache-Control header in the response. When enabled, use maxAge to specify the cache duration.',
            Type: 'Boolean',
            Default: 'true'
        },
        {
            Option: 'immutable',
            Description: 'Adds the immutable directive to the Cache-Control header. This is useful for static files that will never change. If enabled, maxAge should also be set to allow caching.',
            Type: 'Boolean',
            Default: 'false'
        },
        {
            Option: 'lastModified',
            Description: 'Automatically sets the Last-Modified header based on the file’s last modified timestamp on the file system. Setting this to false disables the header.',
            Type: 'Boolean',
            Default: 'true'
        },
        {
            Option: 'disposition',
            Description: 'Controls the Content-Disposition header for the file. Can be "inline" (display in-browser) or "attachment" (download file). If unspecified, it defaults to "inline" for most files and "attachment" for certain MIME types like archives.',
            Type: 'String',
            Default: '"inline" / "attachment" based on file type'
        },
    ],
}

export const features = {
    coreFeatures: [
        { feature: "Routing", Description: "Intuitive system to define how HTTP requests are handled based on URL paths and methods." },
        { feature: "Middleware", Description: "Handles request/response interception, enabling flexible functionality and modular design." },
        { feature: "Error Handling", Description: "Provides robust error-catching and custom error-handler support for consistent responses." },
        { feature: "Static File Serving", Description: "Efficiently serves static files with options for caching, custom headers, and file extension fallbacks." },
    ],
    additionalFeatures: [
        { feature: "Zero dependency ", Description: "Lightweight and simple, with no external dependencies to minimize peer dependency issues." },
        { feature: "Flexible Event System", Description: "Easily manage custom events to streamline workflows for real-time and asynchronous tasks." },
        { feature: "Seamless Integration with Node.js", Description: "Designed to integrate effortlessly with the Node.js ecosystem." },
        { feature: "Performance-Optimized Architecture", Description: "Built with high performance and scalability in mind." },
        { feature: "Comprehensive API Support", Description: "Equipped with modern HTTP utilities for JSON parsing, cookie management, and more." },
    ],
}

export const appMethods = [
    {
        Method: "app.listen(port[, callback])",
        Description: "Starts the server, binding it to the specified port.",
    },
    {
        Method: "app.use([path], callback)",
        Description: "Mounts middleware functions at the specified path (default is /).",
    },
    {
        Method: "app.get(path, callback)",
        Description: "Handles HTTP GET requests to the specified path.",
    },
    {
        Method: "app.post(path, callback)",
        Description: "Handles HTTP POST requests to the specified path.",
    },
    {
        Method: "app.put(path, callback)",
        Description: "Handles HTTP PUT requests to the specified path.",
    },
    {
        Method: "app.delete(path, callback)",
        Description: "Handles HTTP DELETE requests to the specified path.",
    },
]

export const responseMethods = [
    { method: "resizeBy.json()", Description: "Send a JSON response with JSONP support." },
    { method: "res.redirect()", Description: "Redirect a request." },
    { method: "res.sendFile()", Description: "Send a file as an octet stream." },
]