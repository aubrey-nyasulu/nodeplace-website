import Highlighter from '../../../components/Highlighter'
import Section from '../components/Section'

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
                <h2 className='text-3xl font-bold'>Application()</h2>

                <p className='py-2'>
                    The app object conventionally denotes the Nodeplace application. Create it by calling the top-level nodeplace() function exported by the Nodeplace module:
                </p>

                <Highlighter language='js'>
                    {
                        `const nodeplace = require('nodeplace') \n\nconst app = nodeplace() \n\napp.get('/', (req, res) => { \n   res.send('hello world') \n}) \n\napp.listen(3000)`
                    }
                </Highlighter>

                {/* <p className=''>
                    The app object has methods for
                </p>
                <ul className='pt-2 pl-8'>
                    <li className='list-disc'>Routing HTTP requests; see for example, app.METHOD and app.param.</li>
                    <li className='list-disc'>Configuring middleware; see app.route.</li>
                    <li className='list-disc'>Rendering HTML views; see app.render.</li>
                    <li className='list-disc'>Registering a template engine; see app.engine.</li>
                </ul> */}

                {/* <p className='py-4'>
                    It also has settings (properties) that affect how the application behaves; for more information, see Application settings.
                </p> */}

            </Section>

            {/* <Section
                id='app.all'
            >
                <h2 className='text-xl font-bold'>Methods</h2>
                <h3 className='text-xl font-bold py-2'>
                    app.all(path, callback [, callback ...])
                </h3>
                <p className='text-base'>
                    This method is like the standard app.METHOD() methods, except it matches all HTTP verbs.
                </p>
                <h3 className='text-xl font-bold py-2'>
                    Examples
                </h3>
                <p className='text-base pb-2'>
                    The following callback is executed for requests to /secret whether using GET, POST, PUT, DELETE, or any other HTTP request method:
                </p>
                <Highlighter language='js'>
                    {`app.all('/secret', (req, res, next) => { \n   console.log('Accessing the secret section ...') \n\n   next() // pass control to the next handler
})`}
                </Highlighter>
                <p className='text-base pb-2'>
                    The app.all() method is useful for mapping “global” logic for specific path prefixes or arbitrary matches. For example, if you put the following at the top of all other route definitions, it requires that all routes from that point on require authentication, and automatically load a user. Keep in mind that these callbacks do not have to act as end-points: loadUser can perform a task, then call next() to continue matching subsequent routes.
                </p>
                <Highlighter language='js'>
                    {`app.all('(.*)', requireAuthentication, loadUser)`}
                </Highlighter>
                <p className='text-base pb-2'>
                    Or the equivalent:
                </p>
                <Highlighter language='js'>
                    {`app.all('(.*)', requireAuthentication) \napp.all('(.*)', loadUser)`}
                </Highlighter>
                <p className='text-base pb-2'>
                    Another example is white-listed “global” functionality. The example is similar to the ones above, but it only restricts paths that start with “/api”:
                </p>
                <Highlighter language='js'>
                    {`app.all('/api/(.*)', requireAuthentication)`}
                </Highlighter>
            </Section> */}

            <Section
                id='app.delete'
            >
                <h3 className='text-xl font-bold py-2'>
                    app.delete(path, callback [, callback ...])
                </h3>

                <p className='pb-2'>
                    Routes HTTP DELETE requests to the specified path with the specified callback functions.
                </p>

                <p className='pb-2'>
                    Example
                </p>

                <Highlighter language='js'>
                    {`app.delete('/', (req, res) => {  \n   res.send('DELETE request to homepage') \n})`}
                </Highlighter>
            </Section>

            <Section
                id='app.get'
            >
                <h3 className='text-xl font-bold py-2'>
                    app.get(path, callback [, callback ...])
                </h3>

                <p className='pb-2'>
                    Routes HTTP GET requests to the specified path with the specified callback functions.
                </p>

                <p className='pb-2'>
                    Example
                </p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res) => { \n   res.send('GET request to homepage') \n})`}
                </Highlighter>
            </Section>

            <Section
                id='app.listen'
            >
                <h3 className='text-xl font-bold py-2'>
                    app.listen(path, [callback])
                </h3>

                <p className='pb-2'>
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