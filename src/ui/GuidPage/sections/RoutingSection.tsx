import Highlighter from '../Highlighter'
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
            className="w-full flex flex-col gap-8"
        >
            <Section
                id=''
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8 '>Routing</h3>

                <p className='py-2'>
                    Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
                </p>

                <p className='pb-2'>
                    Each route can have one or more handler functions, which are executed when the route is matched.
                </p>

                <p className='pb-2'>
                    Route definition takes the following structure:
                </p>

                <Highlighter language='js'>
                    app.METHOD(PATH, HANDLER)
                </Highlighter>

                <p className=''>Where:</p>

                <ul className='pl-8 pb-4'>
                    <li className='list-disc'>app is an instance of express.</li>
                    <li className='list-disc'>METHOD is an HTTP request method, in lowercase.</li>
                    <li className='list-disc'>PATH is a path on the server.</li>
                    <li className='list-disc'>HANDLER is the function executed when the route is matched.</li>
                </ul>

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
                    The following examples illustrate defining simple routes.
                </p>

                <p className='pb-2'>
                    Respond with Hello World! on the homepage:
                </p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res) => {
  res.send('Hello World!')
})`}
                </Highlighter>

                <p className='pb-2'>
                    Respond to POST request on the root route (/), the application’s home page:
                </p>

                <Highlighter language='js'>
                    {`app.post('/', (req, res) => {
  res.send('Got a POST request')
})`}
                </Highlighter>

                <p className='pb-2'>
                    Respond to a PUT request to the /user route:
                </p>

                <Highlighter language='js'>
                    {`app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})`}
                </Highlighter>

                <p className='pb-2'>
                    Respond to a PATCH request to the /user route:
                </p>

                <Highlighter language='js'>
                    {`app.patch('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})`}
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
                    Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
                </p>

                <Highlighter language='js'>
                    {`Route path: /users/:userId/books/:bookId

Request URL: http://localhost:3000/users/34/books/8989

req.params: { "userId": "34", "bookId": "8989" }`}
                </Highlighter>

                <p className='pb-2'>
                    To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
                </p>

                <Highlighter language='js'>
                    {`app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})`}
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
                    You can provide multiple callback functions that behave like middleware to handle a request. The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks. You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.
                </p>

                <p className='pb-2'>
                    Route handlers can be in the form of a function, an array of functions, or combinations of both, as shown in the following examples.
                </p>

                <p className='pb-2'>
                    A single callback function can handle a route. For example:
                </p>

                <Highlighter language='js'>
                    {`app.get('/example/a', (req, res) => {
  res.send('Hello from A!')
})`}
                </Highlighter>

                <p className='pb-2'>
                    More than one callback function can handle a route (make sure you specify the next object). For example:
                </p>

                <Highlighter language='js'>
                    {`app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})`}
                </Highlighter>

                <p className='pb-2'>
                    An array of callback functions can handle a route. For example:
                </p>

                <Highlighter language='js'>
                    {`const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])`}
                </Highlighter>

                <p className='pb-2'>
                    A combination of independent functions and arrays of functions can handle a route. For example:
                </p>
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
                    Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
                </p>

                <p className='pb-2'>
                    The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.
                </p>

                <p className='pb-2'>
                    Create a router file named birds.js in the app directory, with the following content:
                </p>

                <Highlighter language='js'>
                    {`const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
  })
  // define the about route
  router.get('/about', (req, res) => {
    res.send('About birds')
    })
    
    module.exports = router`}
                </Highlighter>

                <p className='pb-2'>
                    Then, load the router module in the app:
                </p>

                <Highlighter language='js'>
                    {`const birds = require('./birds')

// ...

app.use('/birds', birds)`}
                </Highlighter>

                <p className='pb-2'>
                    The app will now be able to handle requests to /birds and /birds/about, as well as call the timeLog middleware function that is specific to the route.
                </p>
            </Section>
        </Section>
    )
}

export default RoutingSection