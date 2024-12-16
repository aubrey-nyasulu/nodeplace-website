import Divider from '@/src/components/Divider'
import Highlighter from '../../../components/Highlighter'
import Section from '../components/Section'
import GeneralTable from '../../GuidPage/components/GeneralTable'
import { tableData } from '@/src/lib/constants'

function ResponseSection() {

    return (
        <Section
            id='response-route'
            isRoute={true}
            className="w-full flex flex-col gap-8"
        >
            <Section
                id='response'
            >
                <div className='mb-8'></div>

                <Divider />

                <h2 className='text-3xl font-bold pt-8'>Response</h2>

                <p className='pt-2'>
                    The res object in NodePlace represents the HTTP response that your application sends to a client. It provides methods for sending data, setting headers, and controlling the HTTP status of the response. This object extends Node.js' native response object with additional methods and properties provided by NodePlace.
                </p>
            </Section>

            <Section
                id='res.cookie'
            >
                <Divider />

                <h2 className='text-2xl font-bold py-8'>Methods</h2>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.cookie(name, value [, options])
                </h3>

                <p className='py-2'>
                    Sets a cookie in the response.
                </p>

                <p className='font-semibold py-2'>
                    Example: Setting a Cookie
                </p>

                <Highlighter language='js'>
                    {`app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'john_doe', { httpOnly: true, maxAge: 3600000 })
    res.send('Cookie set')
})
`}
                </Highlighter>

                <p className='pt-4 pb-2'>Options</p>

                <GeneralTable tableData={tableData.nodeplaceCookieOptions} />
            </Section>

            <Section
                id='res.clearCookie'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.clearCookie(name, value [, options])
                </h3>

                <p className='py-2'>
                    Clears a cookie in the response.
                </p>

                <p className='font-semibold py-2'>
                    Example: Clearing a Cookie
                </p>

                <Highlighter language='js'>
                    {`app.get('/clear-cookie', (req, res) => {
    res.clearCookie('username')
    res.send('Cookie cleared')
})
`}
                </Highlighter>
            </Section>

            <Section
                id='res.json'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.json([body])
                </h3>

                <p className='py-2'>
                    Sends a JSON response. This method sets the Content-Type header to application/json automatically.
                </p>

                <p className='font-semibold py-2'>
                    Example: Sending JSON
                </p>

                <Highlighter language='js'>
                    {`app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])
})
`}
                </Highlighter>
            </Section>

            <Section
                id='res.redirect'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.redirect([status,] path)
                </h3>

                <p className='py-2'>
                    Redirects the client to a specified path or URL. Optionally accepts an HTTP status code (default is 302).
                </p>

                <p className='font-semibold py-2'>
                    Example: Redirecting to a URL
                </p>

                <Highlighter language='js'>
                    {`app.get('/old-page', (req, res) => {
    res.redirect('/new-page')
})
`}
                </Highlighter>

                <p className='font-semibold py-2'>
                    Example: Redirecting with a Custom Status Code
                </p>

                <Highlighter language='js'>
                    {`app.get('/moved-permanently', (req, res) => {
    res.redirect(301, '/new-page')
})
`}
                </Highlighter>
            </Section>

            <Section
                id='res.send'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.send([body])

                </h3>

                <p className='py-2'>
                    Sends a response to the client. The body parameter can be a string, buffer, array, or object.
                </p>

                <p className='font-semibold py-2'>
                    Example: Sending Text Response
                </p>

                <Highlighter language='js'>
                    {`app.get('/welcome', (req, res) => {
    res.send('Welcome to NodePlace!')
})
`}
                </Highlighter>

                <p className='font-semibold py-2'>
                    Example: Sending JSON Response
                </p>

                <Highlighter language='js'>
                    {`app.get('/api/data', (req, res) => {
    res.send({ id: 1, name: 'NodePlace' })
})
`}
                </Highlighter>
            </Section>

            <Section
                id='res.sendFile'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.sendFile(path [, options] [, callback])
                </h3>

                <p className='py-2'>
                    Sends a file as the response.
                </p>

                <p className='font-semibold py-2'>
                    Example: Serving a Static File
                </p>

                <Highlighter language='js'>
                    {`app.get('/download', (req, res) => {
    res.sendFile('/path/to/file.zip')
})
`}
                </Highlighter>

                <p className='pt-4 pb-2'>Options</p>

                <GeneralTable tableData={tableData.nodeplaceSendFileOptions} />
            </Section>

            <Section
                id='res.set'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.set(field [, value])
                </h3>

                <p className='py-2'>
                    Sets the HTTP header field to a specific value.
                </p>

                <p className='font-semibold py-2'>
                    Example: Setting a Header
                </p>

                <Highlighter language='js'>
                    {`app.get('/custom-header', (req, res) => {
    res.set('X-Custom-Header', 'NodePlace')
    res.send('Header set')
})
`}
                </Highlighter>
            </Section>

            <Section
                id='res.status'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.status(code)
                </h3>

                <p className='py-2'>
                    Sets the HTTP status code for the response. Returns the res object for chaining.
                </p>

                <p className='font-semibold py-2'>
                    Example: Setting Status Code
                </p>

                <Highlighter language='js'>
                    {`app.get('/not-found', (req, res) => {
    res.status(404).send('Page not found')
})
`}
                </Highlighter>
            </Section>

            <Section
                id='res.type'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.type(type)
                </h3>

                <p className='py-2'>
                    Sets the Content-Type HTTP header to the specified MIME type.
                </p>

                <p className='font-semibold py-2'>
                    Example: Setting Content Type
                </p>

                <Highlighter language='js'>
                    {`app.get('/text', (req, res) => {
    res.type('text/plain')
    res.send('This is plain text')
})
`}
                </Highlighter>

                <p className='font-semibold py-2'>
                    Example: Setting JSON Type
                </p>

                <Highlighter language='js'>
                    {`app.get('/json', (req, res) => {
    res.type('application/json')
    res.send({ message: 'This is JSON' })
})
`}
                </Highlighter>
            </Section>
        </Section>
    )
}

export default ResponseSection