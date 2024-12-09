import Highlighter from '../Highlighter'
import Section from './Section'

function RequestSection() {

    return (
        <Section
            id='request-route'
            isRoute={true}
            className="w-full flex flex-col gap-8"
        >
            <Section
                id='request'
            >
                <h1 className='text-3xl font-bold'>Request</h1>
                <p className='py-4'>
                    The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. In this documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.
                </p>

                <p className='font-bold py-2'>For Example:</p>

                <Highlighter language='js'>
                    {
                        `app.get('/user/:id', (req, res) => { \n    res.send(\`user \${req.params.id}\`) \n})`
                    }
                </Highlighter>

                <p className='py-2'>
                    But you could just as well have:
                </p>

                <Highlighter language='js'>
                    {
                        `app.get('/user/:id', (request, response) => { \n    response.send(\`user \${request.params.id}\`) \n})`
                    }
                </Highlighter>

                <p className='py-4'>
                    The req object is an enhanced version of Node’s own request object and supports all built-in fields and methods.
                </p>
            </Section>

            <Section
                id='req.body'
            >
                <h2 className='text-xl font-bold'>Properties</h2>
                <h3 className='text-lg font-bold py-2'>
                    req.body
                </h3>
                <p className='text-base'>
                    Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.
                </p>
                <p className='text-base py-2'>
                    The following example shows how to use body-parsing middleware to populate req.body.
                </p>

                <Highlighter language='js'>
                    {`const app = require('express')() \nconst bodyParser = require('body-parser') \nconst multer = require('multer') // v1.0.5 \nconst upload = multer() // for parsing multipart/form-data \n\napp.use(bodyParser.json()) // for parsing \n\napp.post('/profile', upload.array(), (req, res, next) => { \n    console.log(req.body) \n\n    res.json(req.body) \n})`}
                </Highlighter>
            </Section>

            <Section
                id='req.params'
            >
                <h3 className='text-lg font-bold py-2'>
                    req.params
                </h3>

                <p className='text-base pb-2'>
                    This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to { }.
                </p>

                <Highlighter language='js'>
                    {`// GET /user/tj \nconsole.dir(req.params.name) \n// => "tj"`}
                </Highlighter>

                <p className='text-base py-2'>
                    When you use a regular expression for the route definition, capture groups are provided in the array using req.params[n], where n is the nth capture group. This rule is applied to unnamed wild card matches with string routes such as /file/*:
                </p>

                <Highlighter language='js'>
                    {`// GET /file/javascripts/jquery.js \nconsole.dir(req.params[0]) \n// => "javascripts/jquery.js"`}
                </Highlighter>

                <p className='text-base py-2'>
                    If you need to make changes to a key in req.params, use the app.param handler. Changes are applicable only to parameters already defined in the route path.
                    <br /><br />
                    Any changes made to the req.params object in a middleware or route handler will be reset.
                </p>
            </Section>

            <Section
                id='req.query'
            >
                <h3 className='text-lg font-bold py-2'>
                    req.query
                </h3>

                <p className='pb-2'>
                    This property is an object containing a property for each query string parameter in the route. When query parser is set to disabled, it is an empty object { }, otherwise it is the result of the configured query parser.
                </p>

                <p className='pb-2'>
                    The value of this property can be configured with the query parser application setting to work how your application needs it. A very popular query string parser is the qs module, and this is used by default. The qs module is very configurable with many settings, and it may be desirable to use different settings than the default to populate req.query:
                </p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res) => { \n   res.send('GET request to homepage') \n})`}
                </Highlighter>
            </Section>

            <Section
                id='req.res'
            >
                <h3 className='text-lg font-bold py-2'>
                    req.res
                </h3>
                <p className='pb-2'>
                    This property holds a reference to the response object that relates to this request object.
                </p>
            </Section>
        </Section>
    )
}

export default RequestSection