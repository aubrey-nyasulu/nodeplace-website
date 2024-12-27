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
                        `import nodeplace from 'nodeplace'

const app = nodeplace()
`
                    }
                </Highlighter>

                <p className='pt-2'>This initializes a new NodePlace application.</p>

                <p className='pb-4 pt-2'>The app object comes with several methods and properties for managing application behavior, including route handling, middleware mounting, and configuration.</p>

                <p className='pb-2 font-semibold'>Methods</p>

                <GeneralTable tableData={appMethods} />

                <p className='font-semibold pt-4 pb-2'>Examples</p>

                <p className='pb-2'>Starting a Server</p>

                <Highlighter language='js'>
                    {`import nodeplace from 'nodeplace'

const app = nodeplace()

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
`}
                </Highlighter>

                <p className='pb-2'>Adding Routes</p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.post('/submit', (req, res) => {
    res.send('Form submitted!')
})
`}
                </Highlighter>

                <p className='pb-2'>Mounting Middleware</p>

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
                <div className='mt-8'></div>

                <Divider />

                <h2 className='text-2xl font-bold py-8'>Methods</h2>

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

                <p className='pt-2 pb-1 font-semibold'>
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

                <p className='font-semibold pb-2 pt-4'>Example: Logging All HTTP Methods</p>

                <Highlighter language='js'>
                    {`app.all('/logs', (req, res) => {
    console.log(\`\${req.method} request to \${req.path}\`)

    res.send('This route handles all HTTP methods')
})
`}
                </Highlighter>

                <p className='pt-1'>
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

                <p className='py-2'>Parameters</p>

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

                <p className='py-2'>In this example:</p>

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

                <p className='py-2'>In this example:</p>

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
                id='app.disable'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    app.disable(setting)
                </h3>

                <p className='py-2'>
                    The app.disable method disables a specific setting.
                </p>

                <p className='pb-2 font-semibold'>
                    Parameters:
                </p>

                <ul className='pl-8 mb-4 list-disc'>
                    <li>setting (String): The name of the setting to disable.</li>
                </ul>

                <p className='pb-2 font-semibold'>
                    Example:
                </p>

                <Highlighter language='js'>
                    {`app.disable('poweredBy')`}
                </Highlighter>

                <p className='pt-2 font-semibold'>
                    This disables the poweredBy header.
                </p>
            </Section>

            <Section
                id='app.settings'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    app.enable(setting)
                </h3>

                <p className='py-2'>
                    The app.enable method explicitly enables a specific setting.
                </p>

                <p className='pb-2 font-semibold'>
                    Parameters:
                </p>

                <ul className='pl-8 mb-4 list-disc'>
                    <li>setting (String): The name of the setting to enable.</li>
                </ul>

                <p className='pb-2 font-semibold'>
                    Example:
                </p>

                <Highlighter language='js'>
                    {`app.enable('poweredBy');`}
                </Highlighter>

                <p className='pt-2 font-semibold'>
                    This enables the poweredBy header.
                </p>
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
                    The app.listen() method binds and listens for connections on the specified port or path. It is typically the final step in starting your NodePlace application, making it ready to handle incoming requests.
                </p>

                <p className='pb-2 font-semibold'>
                    Syntax
                </p>

                <Highlighter language='js'>
                    {`app.listen([port[, host[, backlog]]][, callback])
app.listen(path, [callback])
`}
                </Highlighter>

                <p className='pt-2 pb-1 font-semibold'>
                    Parameters
                </p>

                <ul className='pl-8 pb-4 list-disc space-y-2'>
                    <li>
                        <span>Port</span>
                        (optional): The port number for the server to listen on.
                    </li>

                    <li>
                        <span>host</span>
                        (optional): The hostname or IP address to bind the server to. Defaults to "0.0.0.0".
                    </li>

                    <li>
                        <span>backlog</span>
                        (optional): The maximum number of pending connections the server will allow.
                    </li>

                    <li>
                        <span>path</span>
                        (optional): A Unix domain socket path or Windows named pipe for server connections.
                    </li>

                    <li>
                        <span>callback</span>
                        (optional): A function that executes once the server starts successfully.
                    </li>
                </ul>

                <p className='pb-2'>
                    If port is omitted or is 0, the operating system will assign an arbitrary unused port, which is useful for cases like automated tasks (tests, etc.).
                </p>

                <Highlighter language='js'>
                    {`import nodeplace from 'nodeplace' \n\nconst app = nodeplace() \n\napp.listen(3000)`}
                </Highlighter>


                <p className='pt-4 pb-2'>Example: Listening on a Port</p>

                <Highlighter language='js'>
                    {`app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The server listens on port 3000.
                    </li>

                    <li>
                        A success message is logged to the console.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Listening on a Unix Socket</p>

                <Highlighter language='js'>
                    {`app.listen('/tmp/app.sock', () => {
    console.log('Server is listening on /tmp/app.sock')
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The server listens on a Unix domain socket at /tmp/app.sock.
                    </li>

                    <li>
                        Suitable for inter-process communication on Unix-like systems.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Dynamic Port Assignment</p>

                <Highlighter language='js'>
                    {`app.listen('/tmp/app.sock', () => {
    console.log('Server is listening on /tmp/app.sock')
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The operating system assigns an unused port dynamically.
                    </li>

                    <li>
                        Use this for scenarios like test automation.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Using HTTPS and HTTP Together</p>

                <Highlighter language='js'>
                    {`import http from 'http'
import https from 'https'

const app = nodeplace()

http.createServer(app).listen(80, () => {
    console.log('HTTP server running on port 80')
})

https.createServer({ key: privateKey, cert: certificate }, app).listen(443, () => {
    console.log('HTTPS server running on port 443')
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The same app handles both HTTP and HTTPS requests using Node.js' http and https modules.
                    </li>

                    <li>
                        Use this for scenarios like test automation.
                    </li>
                </ul>
            </Section>

            <Section
                id='app.patch'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    app.patch(path, callback [, callback ...])
                </h3>

                <p className='py-2'>
                    The app.patch() method routes HTTP PATCH requests to the specified path and handles them with the provided callback(s). This method is typically used for partially updating resources.
                </p>

                <p className='pb-2 font-semibold'>
                    Syntax
                </p>

                <Highlighter language='js'>
                    app.patch(path, callback [, callback ...])
                </Highlighter>

                <p className='pb-1 font-semibold'>
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

                <p className='pt-4 pb-2'>Example: Basic PATCH Handler</p>

                <Highlighter language='js'>
                    {`app.patch('/user', (req, res) => {
    res.send('User updated')
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The route /user accepts PATCH requests.
                    </li>

                    <li>
                        A simple confirmation message is sent to the client.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Dynamic Routes</p>

                <Highlighter language='js'>
                    {`app.patch('/users/:id', (req, res) => {
    const userId = req.params.id
    res.send(\`User with ID \${userId} has been updated\`)
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The route /users/:id dynamically handles PATCH requests for specific user IDs.
                    </li>

                    <li>
                        req.params.id retrieves the dynamic portion of the URL to identify the user.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Middleware with PATCH</p>

                <Highlighter language='js'>
                    {`app.patch('/settings', verifyToken, (req, res) => {
    res.send('Settings have been updated')
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        Middleware verifyToken ensures that only authorized users can access the /settings route.
                    </li>

                    <li>
                        The response confirms the successful update of settings.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: JSON Payload</p>

                <Highlighter language='js'>
                    {`app.patch('/api/products/:id', (req, res) => {
    const { id } = req.params
    const { name, price } = req.body

    res.json({ id, updated: { name, price } })
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The route /api/products/:id accepts PATCH requests with a JSON payload.
                    </li>

                    <li>
                        The response includes the updated product details.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Chained Middleware</p>

                <Highlighter language='js'>
                    {`app.patch(
    '/profile',
    validateProfileUpdate,
    saveChanges,
    (req, res) => {
        res.send('Profile updated successfully')
    }
)
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        Multiple middleware functions are chained together:
                        <ul className='pl-8 list-disc space-y-1'>
                            <li>validateProfileUpdate ensures incoming data is valid.</li>
                            <li>saveChanges persists updates to the database.</li>
                        </ul>
                    </li>

                    <li>
                        The final callback sends a success message to the client.
                    </li>
                </ul>
            </Section>

            <Section
                id='app.put'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    app.put(path, callback [, callback ...])
                </h3>

                <p className='py-2'>
                    The app.put() method routes HTTP PUT requests to the specified path and handles them with the provided callback(s). This method is generally used to update or replace existing resources on the server.
                </p>

                <p className='pb-2 font-semibold'>
                    Syntax
                </p>

                <Highlighter language='js'>
                    app.put(path, callback [, callback ...])
                </Highlighter>

                <p className='pb-1 font-semibold'>
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

                <p className='pt-4 pb-2'>Example: Basic PUT Handler</p>

                <Highlighter language='js'>
                    {`app.put('/profile', (req, res) => {
    res.send('Profile updated successfully')
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The route /profile accepts PUT requests.
                    </li>

                    <li>
                        A success message is sent to the client.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Updating Resource Data</p>

                <Highlighter language='js'>
                    {`app.put('/users/:id', (req, res) => {
    const userId = req.params.id
    const updatedData = req.body
    res.json({ message: \`User \${userId} updated\`, updatedData })
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The route /users/:id dynamically handles PUT requests for specific users.
                    </li>

                    <li>
                        req.params.id retrieves the user ID from the URL.
                    </li>

                    <li>
                        req.body contains the updated user data sent in the request payload.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Middleware with PUT</p>

                <Highlighter language='js'>
                    {`app.put('/settings', authenticate, (req, res) => {
    res.send('Settings updated successfully')
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        Middleware authenticate ensures only authorized users can update settings.
                    </li>

                    <li>
                        The final callback confirms the update.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Handling Partial Updates with PUT</p>

                <Highlighter language='js'>
                    {`app.put('/orders/:orderId', (req, res) => {
    const orderId = req.params.orderId
    const changes = req.body
    res.json({ message: \`Order \${orderId} updated\`, changes })
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The route /orders/:orderId accepts PUT requests for modifying order details.
                    </li>

                    <li>
                        The server responds with the applied changes.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Chained Middleware for Validation</p>

                <Highlighter language='js'>
                    {`app.put(
    '/posts/:id',
    validatePostData,
    updatePostInDatabase,
    (req, res) => {
        res.send('Post updated successfully')
    }
)
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        Middleware functions validatePostData and updatePostInDatabase are chained together:
                        <ul className='pl-8 list-disc space-y-1'>
                            <li>validatePostData ensures the submitted data is valid.</li>
                            <li>updatePostInDatabase applies the updates in the database.</li>
                        </ul>
                    </li>

                    <li>
                        The final callback sends a success response to the client.
                    </li>
                </ul>
            </Section>

            <Section
                id='app.settings'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    app.settings(options)
                </h3>

                <p className='py-2'>
                    The app.settings method allows you to configure application-level settings, enabling or disabling specific features.
                </p>

                <p className='pb-2 font-semibold'>
                    Parameters:
                </p>

                <ul className='pl-8 mb-4 list-disc'>
                    <li>options (Object): An object containing key-value pairs for settings.</li>
                </ul>

                <p className='pb-2 font-semibold'>
                    Example:
                </p>

                <Highlighter language='js'>
                    {`app.settings({poweredBy: false })`}
                </Highlighter>

                <p className='pt-2 font-semibold'>
                    In this example, the poweredBy header is disabled.
                </p>
            </Section>

            <Section
                id='app.use'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    app.use([path,] callback [, callback ...])
                </h3>

                <p className='py-2'>
                    The app.use() method mounts middleware, error handlers, or routers onto your NodePlace application. It is a versatile method that allows you to enhance your application’s functionality by adding reusable components to the request-response cycle.
                </p>

                <p className='pb-2 font-semibold'>
                    Syntax
                </p>

                <Highlighter language='js'>
                    app.use([path,] callback [, callback ...])
                </Highlighter>

                <p className='pb-1 font-semibold'>
                    Parameters
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        <span>path</span>
                        (optional): The base path at which the middleware or router is mounted. Defaults to /, applying the middleware globally.
                    </li>

                    <li>
                        <span>callback:</span>
                        One or more middleware functions, error handlers, or routers to process requests.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Global Middleware</p>

                <Highlighter language='js'>
                    {`app.use((req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`)

    next()
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        A middleware logs each incoming request’s method and URL.
                    </li>

                    <li>
                        It applies globally to all routes.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Path-Specific Middleware</p>

                <Highlighter language='js'>
                    app.use('/admin', authenticate)
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The authenticate middleware is applied to all routes under /admin.
                    </li>

                    <li>
                        Only authenticated users can access these routes.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Mounting a Router</p>

                <Highlighter language='js'>
                    {`const userRouter = nodeplace.Router()

userRouter.get('/', (req, res) => {
    res.send('User Home')
})

userRouter.get('/:id', (req, res) => {
    res.send(\`User ID: \{req.params.id}\`)
})

app.use('/users', userRouter)
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        A userRouter handles requests to /users and its subpaths.
                    </li>

                    <li>
                        The routes /users/ and /users/:id are defined within the router.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Serving Static Files</p>

                <Highlighter language='js'>
                    app.use(nodeplace.static('public'))
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        The static middleware serves files from the public directory.
                    </li>

                    <li>
                        Requests for files like /images/logo.png are automatically handled.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Middleware Chain</p>

                <Highlighter language='js'>
                    {`app.use(
    '/dashboard',
    authenticate,
    logActivity,
    (req, res) => {
        res.send('Welcome to the Dashboard')
    }
)
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        Multiple middleware functions (authenticate and logActivity) process requests to /dashboard.
                    </li>

                    <li>
                        The final callback sends a success response.
                    </li>
                </ul>

                <p className='pt-4 pb-2'>Example: Error Handling</p>

                <Highlighter language='js'>
                    {`app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
})
`}
                </Highlighter>

                <p className='pb-1'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        An error-handling middleware catches unhandled errors in the application.
                    </li>

                    <li>
                        It sends a 500 status code along with an error message.
                    </li>
                </ul>
            </Section>
        </Section>
    )
}

export default ApplicationSection