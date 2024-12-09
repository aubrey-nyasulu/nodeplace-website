import Highlighter from '../Highlighter'
import Section from './Section'

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
                <h1 className='text-3xl font-bold'>nodeplace()</h1>
                <p className='py-4'>
                    Creates a Nodeplace application. The nodeplace() function is a top-level function exported by the nodeplace module.
                </p>

                <Highlighter language='js'>
                    {
                        `const nodeplace = require('nodeplace') \n\nconst app = nodeplace()`
                    }
                </Highlighter>

            </Section>

            <Section
                id='nodeplace.json'
            >
                <h2 className='text-xl font-bold'>Methods</h2>
                <h3 className='text-lg font-bold py-2'>
                    nodeplace.json([options])
                </h3>
                <p className='text-base'>
                    This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
                    <br /><br />
                    Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.
                    <br /><br />
                    A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({ }) if there was no body to parse, the Content-Type was not matched, or an error occurred.
                </p>
            </Section>

            <Section
                id='nodeplace.static'
            >
                <h3 className='text-lg font-bold py-2'>
                    nodeplace.static(root, [options])
                </h3>
                <p className='text-base'>
                    This is a built-in middleware function in Express. It serves static files and is based on serve-static.
                    <br /><br />
                    NOTE: For best results, use a reverse proxy cache to improve performance of serving static assets.
                    <br /><br />
                    The root argument specifies the root directory from which to serve static assets. The function determines the file to serve by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, it instead calls next() to move on to the next middleware, allowing for stacking and fall-backs.
                </p>
                <p>
                    For more information, see Serving static files in Express. and Using middleware - Built-in middleware.
                    <br /><br />
                    dotfiles
                    Possible values for this option are:
                    <br /><br />
                    “allow” - No special treatment for dotfiles.
                    “deny” - Deny a request for a dotfile, respond with 403, then call next().
                    “ignore” - Act as if the dotfile does not exist, respond with 404, then call next().
                    fallthrough
                    When this option is true, client errors such as a bad request or a request to a non-existent file will cause this middleware to simply call next() to invoke the next middleware in the stack. When false, these errors (even 404s), will invoke next(err).
                    <br /><br />
                    Set this option to true so you can map multiple physical directories to the same web address or for routes to fill in non-existent files.
                    <br /><br />
                    Use false if you have mounted this middleware at a path designed to be strictly a single file system directory, which allows for short-circuiting 404s for less overhead. This middleware will also reply to all methods.
                    <br /><br />
                    setHeaders
                    For this option, specify a function to set custom response headers. Alterations to the headers must occur synchronously.
                    <br /><br />
                    The signature of the function is:
                </p>

                <Highlighter language='js'>
                    fn(res, path, stat)
                </Highlighter>

                <p>
                    Arguments:
                </p>
                <ul className='pl-4'>
                    <li>res, the response object.</li>
                    <li>path, the file path that is being sent.</li>
                    <li>stat, the stat object of the file that is being sent.</li>
                </ul>

                <h3 className='text-lg font-bold pt-8'>Example of nodeplace.static</h3>
                <p className='pt-3 pb-2'>Here is an example of using the nodeplace.static middleware function with an elaborate options object:</p>

                <Highlighter language='js'>
                    {`const options = {\n   dotfiles: 'ignore',\n   etag: false,\n   extensions: ['htm', 'html'],\n   index: false,\n   maxAge: '1d',\n   redirect: false,\n   setHeaders (res, path, stat) {\n      res.set('x-timestamp', Date.now())\n   }\n}\n\napp.use(nodeplace.static('public', options))
                    `
                    }
                </Highlighter>
            </Section>

            <Section
                id='nodeplace.urlencoded'
            >
                <h3 className='text-lg font-bold py-2'>
                    express.urlencoded([options])
                </h3>
                <p>
                    This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
                    <br /><br />
                    Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
                    <br /><br />
                    A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({ }) if there was no body to parse, the Content-Type was not matched, or an error occurred. This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
                </p>
            </Section>
        </Section>
    )
}

export default NodePlaceSection