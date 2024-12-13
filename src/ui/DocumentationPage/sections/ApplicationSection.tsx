import Divider from '@/src/components/Divider'
import Highlighter from '../../../components/Highlighter'
import Section from '../components/Section'
import GeneralTable from '../../GuidPage/components/GeneralTable'
import { appMethods } from '@/src/lib/constants'

function ApplicationSection() {

    return (
        <Section
            id='application-route'
            isRoute={true}
            className="w-full flex flex-col gap-8"
        >
            <Section
                id='application'
            >
                <div className='mb-8'></div>

                <Divider />

                <h2 className='text-3xl font-bold pt-8'>Application()</h2>

                <p className='py-2'>
                    The app object in NodePlace serves as the foundation of your application. It is created by calling the nodeplace() function and provides methods for defining routes, managing middleware, and controlling how your app handles HTTP requests.
                </p>

                <p className='pb-2 font-semibold'>Creating an Application</p>

                <Highlighter language='js'>
                    {
                        `const nodeplace = require('nodeplace')

const app = nodeplace()
`
                    }
                </Highlighter>

                <p>This initializes a new NodePlace application.</p>

                <p className='py-4'>The app object comes with several methods and properties for managing application behavior, including route handling, middleware mounting, and configuration.</p>

                <p className='pb-2 font-semibold'>Methods</p>

                <GeneralTable tableData={appMethods} />

                <p className='font-semibold pt-4 pb-2'>Examples</p>

                <p className='pb-2'>Starting a Server</p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace')

const app = nodeplace()

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
`}
                </Highlighter>

                <p>Adding Routes</p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.post('/submit', (req, res) => {
    res.send('Form submitted!')
})
`}
                </Highlighter>

                <p>Mounting Middleware</p>

                <Highlighter language='js'>
                    {`app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})
`}
                </Highlighter>

            </Section>

            <Section
                id='app.all'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold py-b pt-8'>
                    app.all(path, callback [, callback ...])
                </h3>

                <p className='py-2'>
                    The app.all() method routes all HTTP methods to the specified path. This is useful for applying middleware or handling requests regardless of the HTTP method.
                </p>


                <Highlighter language='js'>
                    app.all(path, callback [, callback ...])
                </Highlighter>

                <p className='pb-2 font-semibold'>
                    Parameters
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        <span>path:</span>
                        The path to match for the route.
                    </li>

                    <li>
                        <span>callback:</span>
                        One or more callback functions that handle the request. These follow the standard (req, res, next) signature.
                    </li>
                </ul>

                <p className='font-semibold pb-2'>Example: Logging All HTTP Methods</p>

                <Highlighter language='js'>
                    {`app.all('/logs', (req, res) => {
    console.log(\`\${req.method} request to \${req.path}\`)
                    res.send('This route handles all HTTP methods')
})
`}
                </Highlighter>

                <p className='py-2'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>A single route /logs is defined to handle any HTTP method (GET, POST, PUT, DELETE, etc.).</li>

                    <li>The server logs the method used for each request.</li>
                </ul>

                <p className='pt-4 pb-2'>Example: Middleware Application</p>

                <Highlighter language='js'>
                    {`app.all('/secure/*', (req, res, next) => {
    if (!req.isAuthenticated) {
        res.status(401).send('Unauthorized')
    } else {
        next()
    }
})
`}
                </Highlighter>

                <p className='pt-2'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>Middleware ensures that all requests to paths under /secure/ are authenticated.</li>

                    <li>If the user is authenticated, the next handler is called.</li>
                </ul>
            </Section>

            <Section
                id='app.delete'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    app.delete(path, callback [, callback ...])
                </h3>

                <p className='py-2'>
                    The app.delete() method routes HTTP DELETE requests to the specified path and handles them with the provided callback(s). It is commonly used to remove resources on the server.
                </p>

                <Highlighter language='js'>
                    app.delete(path, callback [, callback ...])
                </Highlighter>

                <p className='pb-2'>Parameters</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>
                        <span>path:</span>
                        The route path where the handler should apply.
                    </li>

                    <li>
                        <span>callback:</span>
                        The route path where the handler should apply.
                    </li>
                </ul>

                <p className='pb-2 pt-4 font-semibold'>Example: Deleting a Resource</p>

                <Highlighter language='js'>
                    {`app.delete('/users/:id', (req, res) => {
    const userId = req.params.id
    // Logic to delete user by ID
    res.send(\`User with ID \${userId} deleted\`)
})
`}
                </Highlighter>

                <p className='pb-2'>In this example:</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>
                        The route /users/:id accepts DELETE requests.
                    </li>

                    <li>
                        The req.params.id retrieves the user ID from the URL, and a confirmation response is sent.
                    </li>
                </ul>

                <p className='pb-2 pt-4 font-semibold'>Example: Middleware with DELETE</p>

                <Highlighter language='js'>
                    {`app.delete('/resources/:id', authenticate, (req, res) => {
    const resourceId = req.params.id
    // Logic to delete the resource
    res.status(200).json({ message: \`Resource \${resourceId} removed\` })
})
`}
                </Highlighter>

                <p className='pb-2'>In this example:</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>
                        Middleware authenticate ensures only authorized users can delete resources.
                    </li>

                    <li>
                        A JSON response confirms the deletion.
                    </li>
                </ul>
            </Section>

            <Section
                id='app.get'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    app.get(path, callback [, callback ...])
                </h3>

                <p className='py-2'>
                    The app.get() method routes HTTP GET requests to the specified path and handles them with the provided callback(s). This method is typically used to retrieve and display data or serve static pages.
                </p>

                <p className='pt-4 pb-2'>Syntax</p>

                <Highlighter language='js'>
                    app.get(path, callback [, callback ...])
                </Highlighter>

                <p className='pt-2 font-semibold'>
                    Parameters
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        <span>path:</span>
                        The route path where the handler should apply.
                    </li>

                    <li>
                        <span>callback:</span>
                        One or more callback functions to handle the request, with the standard (req, res, next) signature.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Basic GET Handler</p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res) => {
    res.send('Welcome to the Homepage')
})
`}
                </Highlighter>

                <p className='font-semibold p-2'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The route / accepts GET requests.
                    </li>

                    <li>
                        A simple text response is sent to the client.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Dynamic Routes</p>

                <Highlighter language='js'>
                    {`app.get('/users/:id', (req, res) => {
    const userId = req.params.id
    res.send(\`User ID: \${userId}\`)
})
`}
                </Highlighter>

                <p className='font-semibold p-2'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The route /users/:id dynamically handles GET requests for user IDs.
                    </li>

                    <li>
                        The req.params.id retrieves the dynamic portion of the URL.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Middleware with GET</p>

                <Highlighter language='js'>
                    {`app.get('/dashboard', authenticate, (req, res) => {
    res.send('Welcome to your dashboard')
})
`}
                </Highlighter>

                <p className='font-semibold p-2'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        Middleware authenticate ensures only logged-in users can access the dashboard.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: JSON Response</p>

                <Highlighter language='js'>
                    {`app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Phone', price: 800 }
    ])
})
`}
                </Highlighter>

                <p className='font-semibold p-2'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The route /api/products serves a JSON array of products.
                    </li>

                    <li>
                        Use this for API endpoints.
                    </li>
                </ul>
            </Section>

            <Section
                id='app.listen'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    app.listen(path, [callback])
                </h3>

                <p className='py-2'>
                    Starts a UNIX socket and listens for connections on the given path. This method is identical to Node’s http.Server.listen().
                </p>

                <p className='pb-2'>
                    Example
                </p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace') \n\nconst app = nodeplace() \n\napp.listen('/tmp/sock')`}
                </Highlighter>

                <h4 className='text-2xl font-bold py-2'>
                    app.listen([port[, host[, backlog]]][, callback])
                </h4>

                <p className='pb-2'>
                    Binds and listens for connections on the specified host and port. This method is identical to Node’s http.Server.listen().
                </p>
                <p className='pb-2'>
                    If port is omitted or is 0, the operating system will assign an arbitrary unused port, which is useful for cases like automated tasks (tests, etc.).
                </p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace') \n\nconst app = nodeplace() \n\napp.listen(3000)`}
                </Highlighter>

                <p className='pb-2'>
                    The app returned by nodeplace() is in fact a JavaScript Function, designed to be passed to Node’s HTTP servers as a callback to handle requests. This makes it easy to provide both HTTP and HTTPS versions of your app with the same code base, as the app does not inherit from these (it is simply a callback):
                </p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace') \nconst https = require('https') \nconst http = require('http') \nconst app = nodeplace() \n\nhttp.createServer(app).listen(80) \n\nhttps.createServer(options, app).listen(443)`}
                </Highlighter>
            </Section>

            <Section
                id='app.post'
            >
                <h3 className='text-xl font-bold py-2'>
                    app.post(path, callback [, callback ...])
                </h3>

                <p className='pb-2'>
                    Routes HTTP POST requests to the specified path with the specified callback functions. For more information, see the routing guide.
                </p>

                <p className='pb-2'>Example</p>

                <Highlighter language='js'>
                    {`app.post('/', (req, res) => { \n   res.send('POST request to homepage') \n})`}
                </Highlighter>
            </Section>

            <Section
                id='app.put'
            >
                <h3 className='text-xl font-bold py-2'>
                    app.put(path, callback [, callback ...])
                </h3>

                <p className='pb-2'>
                    Routes HTTP PUT requests to the specified path with the specified callback functions.
                </p>

                <p className='pb-2'>Example</p>

                <Highlighter language='js'>
                    {`app.put('/', (req, res) => { \n   res.send('PUT request to homepage') \n})`}
                </Highlighter>
            </Section>

            <Section
                id='app.use'
            >
                <h3 className='text-xl font-bold py-2'>
                    app.use([path,] callback [, callback...])
                </h3>

                <p className='pb-2'>
                    Mounts a middleware, an error handler or a router depending on the call signature
                </p>

                {/* <p className='pb-2'>
                    Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
                </p>

                <h4 className='text-lg pb-0 font-bold'>Description</h4>

                <p className='pb-2'>
                    A route will match any path that follows its path immediately with a “/”. For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.
                </p>
                <p className='pt-1 pb-2'>
                    Since path defaults to “/”, middleware mounted without a path will be executed for every request to the app. For example, this middleware function will be executed for every request to the app:
                </p> */}

                {/* <Highlighter language='js'>
                    {`app.use('/', (req, res, next) => { \n   console.log('Time: %d', Date.now()) \n\n   next() \n})`}
                </Highlighter> */}
            </Section>
        </Section>
    )
}

export default ApplicationSection