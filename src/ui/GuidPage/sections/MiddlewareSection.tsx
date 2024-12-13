import Divider from '@/src/components/Divider'
import Highlighter from '../../../components/Highlighter'
import Section from '../components/Section'
import Note from '@/src/components/Note'
import Color from '@/src/components/Color'
import Link from 'next/link'

function MiddlewareSection() {

    return (
        <Section
            id='middleware-route'
            isRoute={true}
            className="w-full flex flex-col gap-8 z-20"
        >
            <Section
                id='using-middleware'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8 '>
                    Using Middleware
                </h3>

                <p className='py-2'>
                    Middleware in NodePlace is a key part of the request-response lifecycle. It allows you to execute code, make changes to request and response objects, end the request-response cycle, or pass control to the next middleware function in the stack. Middleware functions typically receive three parameters: req, res, and next.
                </p>

                <p className='pb-2 pt-2'>
                    Middleware functions can:
                </p>

                <ul className='pl-8'>
                    <li className='list-disc'>Execute any code.</li>
                    <li className='list-disc'>Modify req or res objects.</li>
                    <li className='list-disc'>End the request-response cycle.</li>
                    <li className='list-disc'>Call the next middleware in the stack using next().</li>
                </ul>

                <h4 className='text-xl pb-2 pt-4 font-bold'>
                    Types of Middleware
                </h4>

                <p className='pb-2'>
                    <span className='font-semibold'>Application-Level Middleware:</span> Application-level middleware applies to the entire application and can be mounted using app.use() or app.METHOD(). Here's an example:
                </p>

                <p className='font-semibold pb-2'>Global Middleware (No Mount Path)</p>

                <p className='pb-2'>This middleware runs for every incoming request:</p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace')
const app = nodeplace()

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})
`}
                </Highlighter>

                <p className='font-semibold pb-2'>Middleware with a Mount Path</p>

                <p className='pb-2'>This middleware runs for requests to /user/:id:</p>

                <Highlighter language='js'>
                    {`app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})
`}
                </Highlighter>

                <p className='font-semibold pb-2'>Route-Level Middleware</p>

                <p className='pb-2'>Middleware can be tied to specific HTTP methods and routes:</p>

                <Highlighter language='js'>
                    {`app.get('/user/:id', (req, res, next) => {
    console.log('User ID:', req.params.id)
    next()
}, (req, res) => {
    res.send('User Info')
})`}
                </Highlighter>

                <p className='font-semibold pb-2'>Middleware Sub-Stacks</p>

                <p className='pb-2'>You can group multiple middleware functions to create a middleware stack:</p>

                <Highlighter language='js'>
                    {`app.use('/user/:id', [
    (req, res, next) => {
        console.log('Request URL:', req.originalUrl)
        next()
    },
    (req, res, next) => {
        console.log('Request Type:', req.method)
        next()
    }
])
`}
                </Highlighter>
            </Section>

            <Section
                id='writing-middleware'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8 '>
                    Writing Middleware
                </h3>

                <p className='py-2'>
                    Creating custom middleware is straightforward in NodePlace. Middleware is simply a function that accepts req, res, and next parameters. Here's how you can write middleware.
                </p>

                <p className='pb-2'>This middleware logs request information:</p>

                <Highlighter language='js'>
                    {`const logRequest = (req, res, next) => {
    console.log(\`Request URL: \${req.url}\`)
    console.log(\`Request Method: \${req.method}\`)
    next() // Pass control to the next middleware
}

app.use(logRequest)
`}
                </Highlighter>

                <p className='font-semibold pb-2'>Middleware that Ends the Response</p>

                <p className='pb-2'>If the middleware completes the request-response cycle, it doesn’t need to call next():</p>

                <Highlighter language='js'>
                    {`const blockAccess = (req, res) => {
    res.status(403).send('Access Denied')
}

app.use(blockAccess)
`}
                </Highlighter>

                <p className='font-semibold pb-2'>Middleware with Parameters</p>

                <p className='pb-2'>Middleware can be dynamic by accepting parameters:</p>

                <Highlighter language='js'>
                    {`const setCustomHeader = (headerName, headerValue) => (req, res, next) => {
    res.setHeader(headerName, headerValue)
    next()
}

app.use(setCustomHeader('X-Custom-Header', 'MyValue'))
`}
                </Highlighter>

                <p className='font-semibold pb-2'>Error-Handling Middleware</p>

                <p className='pb-2'>Error-handling middleware has four parameters: (err, req, res, next):</p>

                <Highlighter language='js'>
                    {`const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
}

app.use(errorHandler)
`}
                </Highlighter>

                <p className='pt-4'>Middleware in NodePlace is versatile and allows you to build modular, reusable logic for handling requests. By understanding how to use and write middleware, you can easily create powerful applications that handle complex workflows with ease.</p>
            </Section>
        </Section>
    )
}

export default MiddlewareSection