import Highlighter from '../Highlighter'
import Note from '../../../components/Note'
import Section from '../components/Section'
import Link from 'next/link'

function RoutingSection() {

    return (
        <Section
            id='routing-route'
            isRoute={true}
            className="w-full flex flex-col gap-8"
        >
            <Section
                id=''
            >
                <div className='w-full h-[1px] mb-8 bg-stone-300 dark:bg-stone-800'></div>

                <h3 className='text-2xl font-bold '>Routing</h3>

                <p className='py-2'>
                    Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, see Basic routing.
                </p>

                <p className='pb-2'>
                    You define routing using methods of the NodePlace app object that correspond to HTTP methods; for example, app.get() to handle
                </p>

                <p className='pb-2'>
                    GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details).
                </p>

                <p className='pb-2'>
                    These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.
                </p>

                <p className='pb-2'>
                    In fact, the routing methods can have more than one callback function as arguments. With multiple callback functions, it is important to provide next as an argument to the callback function and then call next() within the body of the function to hand off control to the next callback.
                </p>

                <p className='pb-2'>
                    The following code is an example of a very basic route.
                </p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace')
const app = nodeplace()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})`}
                </Highlighter>

            </Section>

            <Section
                id='route-methods'
            >
                <h3 className='text-2xl font-bold '>
                    Route methods
                </h3>

                <p className='pb-2'>
                    A route method is derived from one of the HTTP methods, and is attached to an instance of the nodeplace class.
                </p>

                <p className='pb-2'>
                    The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.
                </p>

                <Highlighter language='js'>
                    {`// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})`}
                </Highlighter>

                <p className='pb-2'>
                    NodePlace supports methods that correspond to all HTTP request methods: get, post, and so on. For a full list, see app.METHOD.
                </p>

                <p className='pb-2'>
                    There is a special routing method, app.all(), used to load middleware functions at a path for all HTTP request methods. For example, the following handler is executed for requests to the route “/secret” whether using GET, POST, PUT, DELETE, or any other HTTP request method supported in the http module.
                </p>

                <Highlighter language='js'>
                    {`app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})`}
                </Highlighter>

            </Section>
            <Section
                id='route-paths'
            >

                <h3 className='text-2xl font-bold '>
                    Route paths
                </h3>

                <p className='pb-2'>
                    Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.
                </p>

                <p className='pb-2'>
                    The characters ?, +, *, and () are subsets of their regular expression counterparts. The hyphen (-) and the dot (.) are interpreted literally by string-based paths.
                </p>

                <p className='pb-2'>
                    If you need to use the dollar character ($) in a path string, enclose it escaped within ([ and ]). For example, the path string for requests at “/data/$book”, would be “/data/([\$])book”.
                </p>

                <p className='pb-2'>
                    Here are some examples of route paths based on strings.
                </p>

                <p className='pb-2'>
                    This route path will match requests to the root route, /.
                </p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res) => {
  res.send('root')
})`}
                </Highlighter>

                <p className='pb-2'>
                    This route path will match requests to /about.
                </p>

                <Highlighter language='js'>
                    {`app.get('/about', (req, res) => {
  res.send('about')
})`}
                </Highlighter>

            </Section>
        </Section>
    )
}

export default RoutingSection