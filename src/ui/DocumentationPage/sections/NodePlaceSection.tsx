import { tableData } from '@/src/lib/constants'
import Highlighter from '../../../components/Highlighter'
import Note from '../../../components/Note'
import Section from '../components/Section'
import Divider from '@/src/components/Divider'
import GeneralTable from '../../GuidPage/components/GeneralTable'

function NodePlaceSection() {

    return (
        <Section
            id='nodeplace-route'
            isRoute={true}
            className="w-full flex flex-col gap-8"
        >
            <Section
                id='nodeplace'
            >
                <h1 className='text-4xl font-bold pb-8'>API Documentation</h1>

                <Divider />

                <h2 className='text-3xl font-bold pt-8'>nodeplace()</h2>

                <p className='py-2'>
                    The nodeplace() function initializes and returns a new NodePlace application instance.
                </p>

                <Highlighter language='js'>
                    {
                        `const nodeplace = require('nodeplace')

const app = nodeplace()
`
                    }
                </Highlighter>

                <p className='font-bold pb-1'>Description</p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li><span className='font-semibold'>Purpose:</span> Initializes the core application instance for defining routes, mounting middleware, and configuring the framework.</li>
                    <li><span className='font-semibold'>Return Value:</span> Returns an application object with methods for handling requests, managing middleware, and starting the server.</li>
                </ul>
            </Section>

            <Section
                id='nodeplace.json'
            >

                <div className='mt-8'></div>

                <Divider />

                <h2 className='text-2xl font-bold py-8'>Methods</h2>

                <Divider />

                <h3 className='text-xl font-bold pb-2 pt-8'>
                    nodeplace.json([options])
                </h3>

                <p className='pb-2'>
                    nodeplace.json is a built-in middleware function that parses incoming requests with JSON payloads. It populates the req.body property with the parsed data.
                </p>

                <p className='pb-1 pt-4 font-semibold'>
                    Features
                </p>

                <ul className='pl-8 list-disc space-y-2 pb-4'>
                    <li><span className='font-semibold'>Content-Type Matching:</span> Only processes requests where the Content-Type header matches application/json.</li>

                    <li><span className='font-semibold'>Unicode Support:</span> Accepts any Unicode encoding of the body.</li>

                    <li><span className='font-semibold'>Error Handling:</span> Automatically handles malformed JSON or empty bodies.</li>
                </ul>

                <Highlighter language='js'>
                    app.use(nodeplace.json(options))
                </Highlighter>

                <p className='pb-2 pt-4 font-semibold'>Options</p>

                <GeneralTable tableData={tableData.nodeplaceJsonOptions} />

                <p className='pb-1 pt-4 font-semibold'>
                    Behavior
                </p>

                <ul className='pl-8 list-decimal pb-4 space-y-2'>
                    <li><span className='font-semibold'>Successful Parsing:</span> Populates req.body with the parsed JSON object.</li>

                    <li>
                        <span className='font-semibold'>Invalid JSON:</span> Responds with:
                        <ul className='pl-8 list-disc space-y-1'>
                            <li><span className='font-semibold'>Status:</span> 400</li>
                            <li><span className='font-semibold'>Content-Type:</span> Application/Json</li>
                            <li>
                                <span className='font-semibold'>Body:</span>
                                {`{"message": "Unexpected token <input> is not valid JSON" }`}
                            </li>
                        </ul>
                    </li>

                    <li>
                        <span className='font-semibold'>Empty Body:</span> Responds with:
                        <ul className='pl-8 list-disc space-y-1'>
                            <li><span className='font-semibold'>Status:</span> 400</li>
                            <li><span className='font-semibold'>Content-Type:</span> Application/Json</li>
                            <li>
                                <span className='font-semibold'>Body:</span>
                                {`{ "message": "Failed to process empty body" }`}
                            </li>
                        </ul>
                    </li>

                    <li>
                        <span className='font-semibold'>Internal Errors:</span> Responds with:
                        <ul className='pl-8 list-disc space-y-1'>
                            <li><span className='font-semibold'>Status:</span> 500</li>
                            <li><span className='font-semibold'>Content-Type:</span> Application/Json</li>
                            <li>
                                <span className='font-semibold'>Body:</span>
                                {`{ "message": some server error }`}
                            </li>
                        </ul>
                    </li>
                </ul>

                <p className='pb-2 pt-4'>Example</p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace')

const app = nodeplace()

// Middleware to parse JSON payloads
app.use(nodeplace.json())

app.post('/data', (req, res) => {
    console.log(req.body)
    res.json({ message: 'Data received', data: req.body })
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
`}
                </Highlighter>

                <div className='mb-8'></div>

                <Note className='bg-red-800/70 dark:bg-red-800/40'>
                    <p>As <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body</span>’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body.foo.toString()</span> may fail in multiple ways, for example <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>foo</span> may not be there or may not be a string, and <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>toString</span> may not be a function and instead a string or other user-input.</p>
                </Note>
            </Section>

            <Section
                id='nodeplace.static'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pb-2 pt-8'>
                    nodeplace.static(root, [options])
                </h3>

                <p className='pb-4'>
                    nodeplace.static is a built-in middleware function for serving static files. It maps incoming requests to file paths within a specified root directory.
                </p>

                <Note className='bg-purple-800/50'>
                    <p>
                        For best results, use a reverse proxy cache to improve performance of serving static assets.
                    </p>
                </Note>

                <p className='pb-1 pt-4 font-semibold'>
                    Features
                </p>

                <ul className='pl-8 list-disc space-y-2 pb-4'>
                    <li>
                        <span className='font-semibold'>File Serving:</span>
                        Serves static files such as HTML, png, and pdf.
                    </li>

                    <li>
                        <span className='font-semibold'>Cache Control:</span>
                        Supports options like maxAge and immutable for optimized client-side caching.
                    </li>

                    <li>
                        <span className='font-semibold'>Extension Fallbacks:</span>
                        Automatically serves files with specified extensions if the requested file is not found.
                    </li>

                    <li>
                        <span className='font-semibold'>Custom Headers:</span>
                        Allows setting custom HTTP headers for responses.
                    </li>
                </ul>

                <Highlighter language='js'>
                    app.use(nodeplace.static(root, options))
                </Highlighter>

                <p className='pt-2 pb-1 font-semibold'>Arguments</p>

                <ul className='pl-8 list-decimal space-y-2'>
                    <li>root: (Optional) The directory from which to serve static assets. Defaults to 'public'.</li>

                    <li>options: (Optional) An object specifying configuration options for serving static files.</li>
                </ul>

                <p className='pb-2 pt-4 font-semibold'>Options (Optional) </p>

                <GeneralTable {...{ tableData: tableData.nodeplaceStatic }} />

                <p className='pb-1 pt-8 font-bold'>Behavior</p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>
                        If a file is found:
                        <ul className='pl-8 list-disc space-y-1'>
                            <li>Responds with the file contents.</li>
                            <li>Automatically sets headers like Content-Type, ETag, and Last-Modified if enabled.</li>
                        </ul>
                    </li>

                    <li>
                        If a file is not found:
                        <ul className='pl-8 list-disc space-y-1'>
                            <li>If extensions are specified, attempts to resolve the file by appending each extension in the list.</li>
                            <li>If still not found, invokes next() to pass control to the next middleware.</li>
                        </ul>
                    </li>
                </ul>

                <p className='pb-2 pt-4'>
                    Example with Options
                </p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace')

const options = {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['html', 'htm'],
    maxAge: 86400000, // 1 day in milliseconds
    immutable: true,
    setHeaders: (res, path, stat) => {
        res.setHeader('X-Custom-Header', 'NodePlace-Static')
    }
}

const app = nodeplace()

app.use(nodeplace.static('assets', options))

app.listen(3000, () => {
    console.log('Static file server running on http://localhost:3000')
})
`}
                </Highlighter>

                <div className='mb-8'></div>

                <Note>
                    {`
Dotfiles by default are ignored for security purposes, Use 'allow' to serve them.
Combine maxAge and immutable for efficient client-side caching of static assets.
Use setHeaders to add headers like X-Timestamp for debugging or tracking.`
                    }
                </Note>
            </Section>

            <Section
                id='nodeplace.urlencoded'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pb-2 pt-8'>
                    nodeplace.urlencoded([options])
                </h3>

                <p className='pb-2'>
                    nodeplace.urlencoded is a built-in middleware function for parsing incoming requests with URL-encoded payloads. It is commonly used to parse form submissions.
                </p>

                <p className='pb-1 font-semibold'>
                    Features
                </p>

                <ul className='pl-8 pb-4 space-y-2 list-disc'>
                    <li>
                        <span>Form Data Parsing:</span>
                        application/x-www-form-urlencoded payloads into a JavaScript object.
                    </li>

                    <li>
                        <span>Customizable Parsing:</span>
                        Supports configuration options to adjust how payloads are handled.
                    </li>

                    <li>
                        <span>Unicode Support:</span>
                        Fully compatible with Unicode-encoded bodies.
                    </li>
                </ul>

                <Highlighter language='js'>
                    app.use(nodeplace.urlencoded(options))
                </Highlighter>

                <p className='pb-2 pt-4 font-semibold'>
                    Arguments (Optional)
                </p>

                <GeneralTable tableData={tableData.nodeplaceUrlEncodedOptions} />

                <p className='p1-2 pt-4'>Behavior</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>Parses the request body and populates req.body with a key-value object.</li>
                    <li>If the Content-Type does not match application/x-www-form-urlencoded, the middleware skips parsing.</li>
                    <li>Validates the structure of the payload to ensure compatibility with the specified options.</li>
                </ul>

                <p className='pt-8 pb-2 font-semibold'>Example</p>

                <p className='pb-2'>Basic Form Parsing</p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace')

const app = nodeplace()

app.use(nodeplace.urlencoded({}))

app.post('/submit', (req, res) => {
    console.log(req.body)
    res.send('Form submitted!')
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
`}
                </Highlighter>

                <div className='mb-8'></div>

                <Note className='bg-red-800/70 dark:bg-red-800/40'>
                    <p>As <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body</span>’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body.foo.toString()</span> may fail in multiple ways, for example <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>foo</span> may not be there or may not be a string, and <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>toString</span> may not be a function and instead a string or other user-input.</p>
                </Note>
            </Section>
        </Section>
    )
}

export default NodePlaceSection