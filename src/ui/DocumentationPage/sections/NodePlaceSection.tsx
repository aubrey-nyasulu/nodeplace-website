import { tableData } from '@/src/lib/constants'
import Highlighter from '../Highlighter'
import Note from '../components/Note'
import Section from '../components/Section'
import Table from '../components/Table'

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
                <h2 className='text-3xl font-bold'>nodeplace()</h2>

                <p className='py-2'>
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
                <h2 className='text-2xl font-bold'>Methods</h2>

                <h3 className='text-xl font-bold py-2'>
                    nodeplace.json([options])
                </h3>

                <p className='pb-2'>
                    This is a built-in middleware function in NodePlace. It parses incoming requests with JSON payloads.
                </p>

                <p className='pb-2'>
                    Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body but <span className='px-1 bg-black/70 text-white dark:bg-white/70 dark:text-black'>does not currently support automatic inflation of gzip or deflate encodings.</span>
                </p>

                <p className='pb-2'>
                    A new body object containing the parsed data is populated on the request object.
                </p>

                <Note className='bg-red-800/70 dark:bg-red-800/40'>
                    <p>As <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body</span>’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body.foo.toString()</span> may fail in multiple ways, for example <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>foo</span> may not be there or may not be a string, and <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>toString</span> may not be a function and instead a string or other user-input.</p>
                </Note>

                <p className='pt-4'>
                    The middleware Returns right away if one of the following happens:
                </p>

                <ul className='pl-8 pt-2'>
                    <li className='list-disc'>
                        If the body received is not valid json, returns right away with a status of <span className='bg-red-900/30 px-1'>400</span>, <span className='bg-yellow-900/30 px-1'>"content-type": "application/json" </span> and a body of <span className='bg-purple-900/30 px-1'>{`{ "message": \`Unexpected token \${body} is not valid JSON\` }`}</span>
                    </li>

                    <li className='list-disc pt-2'>
                        If the body received is empty, returns right away with a status of <span className='bg-red-900/30 px-1'>400</span>, <span className='bg-yellow-900/30 px-1'>"content-type": "application/json" </span> and a body of <span className='bg-purple-900/30 px-1'>{`{ "message": "failed to process empty body"}`}</span>
                    </li>

                    <li className='list-disc pt-2'>
                        If any error occures, returns right away with a status of <span className='bg-red-900/30 px-1'>500</span>, <span className='bg-yellow-900/30 px-1'>"content-type": "application/json" </span> and a body of <span className='bg-purple-900/30 px-1'>{`{ message: error.message}`}</span>
                    </li>
                </ul>
            </Section>

            <Section
                id='nodeplace.static'
            >
                <h3 className='text-xl font-bold pb-2'>
                    nodeplace.static(root, [options])
                </h3>

                <p className='pb-2'>
                    This is a built-in middleware function in NodePlace. It serves static files.
                </p>

                <Note className='bg-purple-800/50'>
                    <p className='pb-2'>
                        For best results, use a reverse proxy cache to improve performance of serving static assets.
                    </p>
                </Note>

                <p className='pb-2 pt-4'>
                    The root argument specifies the root directory from which to serve static assets. If no root folder is not explicitly sset, it defaults to public. The function determines the file to serve by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, it instead calls next() to move on to the next middleware, allowing for stacking and fall-backs.
                </p>

                <p className='pb-2'>
                    The following table describes the properties of the options object. See also the example below.
                </p>

                <Table {...{ tableData: tableData.nodeplaceStatic }} />

                <p className='py-2 pt-8 font-bold'>dotfiles</p>
                <p className='pb-2'>
                    Possible values for this option are:
                </p>

                <ul className='pl-8'>
                    <li className='list-disc'>
                        “allow” - No special treatment for dotfiles.
                    </li>
                    <li className='list-disc pt-2'>
                        “ignore” - Act as if the dotfile does not exist, respond with 404, then call next().
                    </li>
                </ul>

                <p className='py-2 pt-8 font-bold'>fallthrough</p>

                <p className='pb-2'>
                    When this option is true, client errors such as a bad request or a request to a non-existent file will cause this middleware to simply call next() to invoke the next middleware in the stack. When false, these errors (even 404s), will invoke next(err).
                </p>

                <p className='pb-2'>
                    Set this option to true so you can map multiple physical directories to the same web address or for routes to fill in non-existent files.
                </p>

                <p className='pb-2'>
                    Use false if you have mounted this middleware at a path designed to be strictly a single file system directory, which allows for short-circuiting 404s for less overhead. This middleware will also reply to all methods.
                </p>

                <p className='py-2 pt-8 font-bold'>setHeaders</p>

                <p className='pb-2'>
                    For this option, specify a function to set custom response headers. Alterations to the headers must occur synchronously.
                </p>

                <p className='pb-2'>
                    The signature of the function is:
                </p>

                <Highlighter language='js'>
                    fn(res, path, stat)
                </Highlighter>

                <p className='pb-2'>
                    Arguments:
                </p>

                <ul className='pl-8'>
                    <li className='list-disc'>
                        res, the response object.
                    </li>
                    <li className='list-disc pt-2'>
                        path, the file path that is being sent.
                    </li>
                    <li className='list-disc pt-2'>
                        stat, the stat object of the file that is being sent.
                    </li>
                </ul>

                <h3 className='text-xl font-bold pt-8'>Example of nodeplace.static</h3>
                <p className='pt-3 pb-2'>Here is an example of using the nodeplace.static middleware function with an elaborate options object:</p>

                <Highlighter language='js'>
                    {`const options = {\n   dotfiles: 'ignore',\n   etag: false,\n   extensions: ['htm', 'html'],\n   maxAge: '1d',\n   setHeaders (res, path, stat) {\n      res.set('x-timestamp', Date.now())\n   }\n   // more options... \n}\n\napp.use(nodeplace.static('public', options))
                    `
                    }
                </Highlighter>
            </Section>

            <Section
                id='nodeplace.urlencoded'
            >
                <h3 className='text-xl font-bold pb-2'>
                    nodeplace.urlencoded([options])
                </h3>

                <p className='pb-2'>
                    This is a built-in middleware function in NodePlace. It parses incoming requests with urlencoded payloads.
                </p>

                <p className='pb-2'>
                    Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body but <span className='px-1 bg-black/70 text-white dark:bg-white/70 dark:text-black'>does not currently support automatic inflation of gzip or deflate encodings.</span>
                </p>

                <p className='pb-2'>
                    A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array.
                </p>

                <Note className='bg-red-800/70 dark:bg-red-800/40'>
                    <p>As <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body</span>’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.body.foo.toString()</span> may fail in multiple ways, for example <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>foo</span> may not be there or may not be a string, and <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>toString</span> may not be a function and instead a string or other user-input.</p>
                </Note>

                <p className='pt-4'>
                    The middleware Returns right away if one of the following happens:
                </p>

                <ul className='pl-8 pt-2'>
                    <li className='list-disc'>
                        If the body received is not valid, returns right away with a status of <span className='bg-red-900/30 px-1'>400</span>, <span className='bg-yellow-900/30 px-1'>"content-type": "application/json" </span> and a body of <span className='bg-purple-900/30 px-1'>{`{ "message": \`Unexpected token \${body} is not valid urlEncodedData\` }`}</span>
                    </li>

                    <li className='list-disc pt-2'>
                        If the body received is empty, returns right away with a status of <span className='bg-red-900/30 px-1'>400</span>, <span className='bg-yellow-900/30 px-1'>"content-type": "application/json" </span> and a body of <span className='bg-purple-900/30 px-1'>{`{ "message": "failed to process empty body"}`}</span>
                    </li>

                    <li className='list-disc pt-2'>
                        If any error occures, returns right away with a status of <span className='bg-red-900/30 px-1'>500</span>, <span className='bg-yellow-900/30 px-1'>"content-type": "application/json" </span> and a body of <span className='bg-purple-900/30 px-1'>{`{ message: error.message}`}</span>
                    </li>
                </ul>
            </Section>
        </Section>
    )
}

export default NodePlaceSection