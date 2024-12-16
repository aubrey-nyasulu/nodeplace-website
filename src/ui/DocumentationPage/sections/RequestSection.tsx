import Divider from '@/src/components/Divider'
import Highlighter from '../../../components/Highlighter'
import Note from '../../../components/Note'
import Section from '../components/Section'

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
                <div className='mb-8'></div>

                <Divider />

                <h2 className='text-3xl font-bold pt-8'>Request</h2>

                <p className='pt-2'>
                    The req object in NodePlace represents the HTTP request made by a client. It provides details about the request, such as headers, body, query parameters, and URL. This object is an enhanced version of Node.js' native request object, with additional properties and methods provided by NodePlace.
                </p>
            </Section>

            <Section
                id='req.body'
            >
                <div className='mt-8'></div>

                <Divider />

                <h2 className='text-2xl font-bold py-8'>Properties</h2>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    req.body
                </h3>

                <p className='pb-4 pt-2'>
                    Contains data submitted in the request body. Typically populated by body-parsing middleware, such as nodeplace.json() or nodeplace.urlencoded().
                </p>

                <Note className='bg-red-800/70 dark:bg-red-800/40'>
                    <p>As <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body</span>’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body.foo.toString()</span> may fail in multiple ways, for example <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>foo</span> may not be there or may not be a string, and <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>toString</span> may not be a function and instead a string or other user-input.</p>
                </Note>

                <p className='font-semibold pb-2 pt-4'>Example: Accessing req.body</p>

                <Highlighter language='js'>
                    {`app.post('/profile', (req, res) => {
    res.send(\`Name: \${req.body.name}\`)
})
`}
                </Highlighter>

                <p className='py-2'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>Data sent in the body (e.g., {`{"name": "John"}`}) is accessible via req.body.</li>
                </ul>
            </Section>

            <Section
                id='req.params'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    req.params
                </h3>

                <p className='text-base pt-2 pb-4'>
                    An object containing properties mapped to route parameters. For example, if the route defines /users/:id, the id parameter is available as req.params.id.
                </p>

                <Note className='bg-red-800/70 dark:bg-red-800/40'>
                    <p>As <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.params</span>’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.params.foo.toString()</span> may fail in multiple ways, for example <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>foo</span> may not be there or may not be a string, and <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>toString</span> may not be a function and instead a string or other user-input.</p>
                </Note>

                <p className='font-semibold pb-2 pt-4'>Example: Accessing Route Parameters</p>

                <Highlighter language='js'>
                    {`app.get('/users/:id', (req, res) => {
    res.send(\`User ID: \${req.params.id}\`)
})
`}
                </Highlighter>

                <p className='py-2'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>A request to /users/123 will respond with User ID: 123.</li>
                </ul>
            </Section>

            <Section
                id='req.query'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    req.query
                </h3>

                <p className='text-base pt-2 pb-4'>
                    An object containing the query string parameters from the URL.
                </p>

                <Note className='bg-red-800/70 dark:bg-red-800/40'>
                    <p>As <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.query</span>’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.query.foo.toString()</span> may fail in multiple ways, for example <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>foo</span> may not be there or may not be a string, and <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>toString</span> may not be a function and instead a string or other user-input.</p>
                </Note>

                <p className='font-semibold pb-2 pt-4'>Example: Accessing Query Parameters
                </p>

                <Highlighter language='js'>
                    {`app.get('/search', (req, res) => {
    res.send(\`Search term: \${req.query.q}\`)
})
`}
                </Highlighter>

                <p className='py-2'>
                    In this example:
                </p>

                <ul className='pl-8 list-disc space-y-2'>
                    <li>A request to /search?q=NodePlace will respond with Search term: NodePlace.</li>
                </ul>
            </Section>

            <Section
                id='req.res'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    req.res
                </h3>

                <p className='pt-2'>
                    This property holds a reference to the response object. The response is the extended version of the NodePlace response, which means it also have the extended properties and methods
                </p>
            </Section>
        </Section>
    )
}

export default RequestSection