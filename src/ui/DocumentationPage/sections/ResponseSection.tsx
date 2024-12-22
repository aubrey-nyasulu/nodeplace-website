import Divider from '@/src/components/Divider'
import Highlighter from '../../../components/Highlighter'
import Section from '../components/Section'
import GeneralTable from '../../GuidPage/components/GeneralTable'
import { tableData } from '@/src/lib/constants'
import Note from '@/src/components/Note'
import Link from 'next/link'

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

                <h2 className='text-2xl font-bold py-8'>Additional Methods</h2>

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

                <div className='mb-8'></div>
            </Section>

            <Section
                id='res.clearCookie'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    res.clearCookie(name [, options])
                </h3>

                <p className='py-2'>
                    Clears the cookie specified by name. For the cookie to be cleared properly, the options provided to res.clearCookie must match those used when setting the cookie with res.cookie(), excluding expires and maxAge.
                </p>

                <p className='font-semibold py-2'>
                    Example: Clearing a Cookie
                </p>

                <Highlighter language='js'>
                    {`app.get('/clear-cookie', (req, res) => {
    res.cookie('username', 'john_doe', { path: '/user', httpOnly: true })
    res.clearCookie('username', { path: '/user', httpOnly: true })
    res.send('Cookie cleared')
})
`}
                </Highlighter>

                <p className='pt-2 pb-1 font-semibold'>
                    Parameters
                </p>

                <ul className='pl-8 pb-4 list-disc space-y-2'>
                    <li>
                        <span>name:</span>
                        (string, required) The name of the cookie to clear.
                    </li>

                    <li>
                        <span>options (optional):</span>
                        (optional) An object specifying attributes of the cookie to match when clearing it. See <Link href="/documentation#res.cookie" className='text-[dodgerblue]'>res.cookie()</Link> for the available options.
                    </li>
                </ul>

                <p className='font-semibold pb-2 pt-4'>
                    Behavior:
                </p>
                <p className='pb-2'>If options like path, domain, or secure were specified when the cookie was set using res.cookie(), they must be included in res.clearCookie() to match the original cookie. For example:</p>

                <Highlighter language='js'>
                    {`res.cookie('key', 'value', { path: '/api' })
res.clearCookie('key', { path: '/api' }) // Matches and clears the cookie.
`}
                </Highlighter>

                <Note>
                    Options like httpOnly and sameSite will also be preserved when clearing the cookie if they were used during the original res.cookie() call. The options parameter is optional but strongly recommended to ensure the cookie is properly matched and cleared.
                </Note>

                <div className='mb-8'></div>
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
                    Transfers the file at the given path to the client. Sets the Content-Type response HTTP header field based on the file’s extension. If the root option is set, the path argument can be a relative path; otherwise, it must be an absolute path.
                </p>

                <p className='pb-2'>
                    The method supports caching, range requests, and additional headers to fine-tune the response. Use it to serve static files or dynamically generated paths.
                </p>

                <p className='font-semibold py-2'>
                    Example: Serving a Static File
                </p>

                <Highlighter language='js'>
                    {`app.get('/download', (req, res) => {
    res.sendFile('/absolute/path/to/file.zip', {
        cacheControl: true,
        maxAge: 3600, // 1 hour
    })
})
`}
                </Highlighter>

                <p className='font-semibold pb-2 pt-4'>
                    Example: Serving with Options
                </p>

                <Highlighter language='js'>
                    {`app.get('/file/:name', (req, res, next) => {
    const options = {
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
        maxAge: '1d',
        cacheControl: true,
        immutable: true,
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true,
        },
    }

    const fileName = req.params.name
    res.sendFile(fileName, options, (err) => {
        if (err) {
            next(err) // Pass control to error handling middleware
        } else {
            console.log('File sent:', fileName)
        }
    })
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