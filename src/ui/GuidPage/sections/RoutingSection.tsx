import Highlighter from '../../../components/Highlighter'
import Note from '../../../components/Note'
import Section from '../components/Section'
import Link from 'next/link'
import Divider from '@/src/components/Divider'
import Color from '@/src/components/Color'
import GeneralTable from '../components/GeneralTable'
import { responseMethods } from '@/src/lib/constants'

function RoutingSection() {

    return (
        <Section
            id='routing-route'
            isRoute={true}
            className="w-full flex flex-col gap-8 z-30 "
        >
            <Section
                id=''
                className='z-40'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8 '>Routing</h3>

                <p className='py-2'>
                    Routing determines how your application responds to client requests for specific endpoints, defined by a URI (path) and an HTTP method (GET, POST, etc.).
                </p>

                <p className='pb-2'>
                    In NodePlace, each route can have one or more handler functions executed when the route matches an incoming request.
                </p>

                <p className='pb-2'>
                    Here’s the basic structure of a route:
                </p>

                <Highlighter language='js'>
                    app.METHOD(PATH, HANDLER)
                </Highlighter>

                <p className='pt-4'>Where:</p>

                <ul className='pl-8 pb-4'>
                    <li className='list-disc'>app is an instance of express.</li>
                    <li className='list-disc'>METHOD is an HTTP request method, in lowercase.</li>
                    <li className='list-disc'>PATH is a path on the server.</li>
                    <li className='list-disc'>HANDLER is the function executed when the route is matched.</li>
                </ul>

                <p className='pb-2'>For example:</p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res) => {
    res.send('Hello, World!')
})`}
                </Highlighter>

                <p className='py-4'>The req (request) and res (response) objects have enhanced properties, allowing seamless access to request data and sending responses.</p>

                <Note>
                    <p>
                        This tutorial assumes that an instance of <Color>express</Color> named <Color>app</Color> is created and the server is running. If you are not familiar with creating an app and starting it, see the <Link href='#hello-world' className='text-[dodgerblue] z-30'>Hello world</Link> example.
                    </p>
                </Note>
            </Section>

            <Section
                id='route-methods'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8 '>
                    Route methods
                </h3>

                <p className='py-2'>
                    A route method corresponds to an HTTP method. In NodePlace, you can define routes for various HTTP methods like get, post, put, etc.
                </p>

                <Highlighter language='js'>
                    {`// Define a GET route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

// Define a POST route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})
`}
                </Highlighter>

                <p className='pb-2 pt-4'>
                    NodePlace supports all standard HTTP methods. For instance:
                </p>

                <p className='pb-2'>
                    Respond to a PUT request:
                </p>

                <Highlighter language='js'>
                    {`app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})
`}
                </Highlighter>

                <p className='pb-2'>
                    Respond to a PATCH request:
                </p>

                <Highlighter language='js'>
                    {`app.patch('/user', (req, res) => {
    res.send('Got a PATCH request at /user')
})
`}
                </Highlighter>

                <p className='pb-2'>
                    Respond to a DELETE request to the /user route:
                </p>

                <Highlighter language='js'>
                    {`app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})`}
                </Highlighter>
            </Section>

            <Section
                id='route-parameters'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8 '>
                    Route Parameters
                </h3>

                <p className='py-2'>
                    Route parameters are dynamic segments of a URL. They allow you to capture values in the URL path and make them accessible in the req.params object.
                </p>

                <p className='pb-2'>
                    Example:
                </p>
                <Highlighter language='js'>
                    {`// Define a route with parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})

// Request URL: /users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
`}
                </Highlighter>
            </Section>

            <Section
                id='route-handlers'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8 '>
                    Route Handlers
                </h3>

                <p className='py-2'>
                    You can define multiple handlers for a single route to process requests in stages:
                </p>

                <p className='pb-2'>
                    Single handler function:
                </p>


                <Highlighter language='js'>
                    {`app.get('/example', (req, res) => {
    res.send('Hello from Example!')
})`}
                </Highlighter>

                <p className='pb-2 pt-4'>
                    Multiple handlers:
                </p>

                <Highlighter language='js'>
                    {`app.get('/example', (req, res, next) => {
    console.log('Handler 1 executed')
    next()
}, (req, res) => {
    res.send('Handler 2 executed')
})
`}
                </Highlighter>

                <p className='pb-2 pt-4'>
                    Array of handlers:
                </p>

                <Highlighter language='js'>
                    {`const middleware1 = (req, res, next) => { console.log('Middleware 1'); next() }
const middleware2 = (req, res, next) => { console.log('Middleware 2'); next() }

app.get('/example', [middleware1, middleware2, (req, res) => {
    res.send('Hello from Example!')
}])
`}
                </Highlighter>
            </Section>

            <Section
                id='nodeplace-router'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8 '>
                    NodePlace Router
                </h3>

                <p className='py-2'>
                    The Router class in NodePlace lets you modularize routes and middleware, treating them as mini-apps. This is helpful for organizing related routes.
                </p>

                <p className='pb-2'>
                    Example:
                </p>

                <Highlighter language='js'>
                    {`// birds.js
import nodeplace from 'nodeplace'

const router = nodeplace.Router()

// Middleware specific to this router
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

// Define routes
router.get('/', (req, res) => {
    res.send('Birds home page')
})

router.get('/about', (req, res) => {
    res.send('About birds')
})

export default router
`}
                </Highlighter>

                <p className='pb-2'>
                    Mount the router in your main app:
                </p>

                <Highlighter language='js'>
                    {`import birds from './birds'

app.use('/birds', birds)
`}
                </Highlighter>

                <p className='pb-2'>
                    The app can now handle requests to /birds and /birds/about.
                </p>
            </Section>
        </Section>
    )
}

export default RoutingSection