export const documentationNavLinks = {
    nodeplace: [
        { id: 'nodeplace.json', name: 'nodeplace.json()' },
        { id: 'nodeplace.static', name: 'nodeplace.static()' },
        { id: 'nodeplace.urlencoded', name: 'nodeplace.urlencoded()' },
    ],
    application: [
        // { id: 'app.all', name: 'app.all()' },
        { id: 'app.delete', name: 'app.delete()' },
        { id: 'app.get', name: 'app.get()' },
        { id: 'app.listen', name: 'app.listen()' },
        { id: 'app.post', name: 'app.post()' },
        { id: 'app.put', name: 'app.put()' },
        // { id: 'app.patch', name: 'app.patch()' },
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
        // { id: 'res.type', name: 'res.type()' },
    ],
    router: [
        { id: 'router.route', name: 'router.route()' },
        { id: 'router.delete', name: 'router.delete()' },
        { id: 'router.get', name: 'router.get()' },
        { id: 'router.patch', name: 'router.patch()' },
        { id: 'router.post', name: 'router.post()' },
        { id: 'router.put', name: 'router.put()' },
    ],
}

export const GuideNavLinks = {
    nodeplace: [
        { id: 'introduction', name: 'Introduction' },
        { id: 'installing', name: 'installing' },
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
        // { id: 'default.error-handler', name: 'Default Error Handler' },
        { id: 'writing.error.handlers', name: 'Writing Error Handlers' },
    ],
}

export const tableData = {
    nodeplaceStatic: [
        {
            property: 'dotfiles',
            description: 'Determines how dotfiles (files or directories that begin with a dot “.”) are treated.',
            type: 'String',
            default: 'ignore'
        },
        {
            property: 'etag',
            description: 'Enable or disable etag generation. NodePlace.static always sends weak ETags.',
            type: 'Boolean',
            default: 'true'
        },
        {
            property: 'extensions',
            description: 'Sets file extension fallbacks: If a file is not found, search for files with the specified extensions and serve the first one found.',
            type: 'Array of strings',
            default: '[]'
        },
        {
            property: 'lastModified',
            description: 'Set the Last-Modified header to the last modified date of the file on the OS.',
            type: 'Boolean',
            default: 'true'
        },
        {
            property: 'maxAge',
            description: 'Set the max-age property of the Cache-Control header in milliseconds or a string in ms format.',
            type: 'Number',
            default: '0'
        },
        {
            property: 'immutable',
            description: 'Enable or disable the immutable directive in the Cache-Control response header. If enabled, maxAge must be specified.',
            type: 'Boolean',
            default: 'false'
        },
        {
            property: 'setHeaders',
            description: 'Function for setting HTTP headers to serve with the file. It receives the response, file path, and stats.',
            type: 'Function',
            default: 'undefined'
        }
    ]
}

export const features = {
    coreFeatures: [
        { feature: "Routing", description: "Intuitive system to define how HTTP requests are handled based on URL paths and methods." },
        { feature: "Middleware", description: "Handles request/response interception, enabling flexible functionality and modular design." },
        { feature: "Error Handling", description: "Provides robust error-catching and custom error-handler support for consistent responses." },
        { feature: "Static File Serving", description: "Efficiently serves static files with options for caching, custom headers, and file extension fallbacks." },
    ],
    additionalFeatures: [
        { feature: "Zero dependency ", description: "Lightweight and simple, with no external dependencies to minimize peer dependency issues." },
        { feature: "Flexible Event System", description: "Easily manage custom events to streamline workflows for real-time and asynchronous tasks." },
        { feature: "Seamless Integration with Node.js", description: "Designed to integrate effortlessly with the Node.js ecosystem." },
        { feature: "Performance-Optimized Architecture", description: "Built with high performance and scalability in mind." },
        { feature: "Comprehensive API Support", description: "Equipped with modern HTTP utilities for JSON parsing, cookie management, and more." },
    ],
}

export const responseMethods = [
    { method: "resizeBy.json()", description: "Send a JSON response with JSONP support." },
    { method: "res.redirect()", description: "Redirect a request." },
    { method: "res.sendFile()", description: "Send a file as an octet stream." },
]