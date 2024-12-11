import Highlighter from '../Highlighter'
import Section from '../components/Section'

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
                <h2 className='text-3xl font-bold'>Response</h2>
                <p className='py-2'>
                    The res object represents the HTTP response that a NodePlace app sends when it gets an HTTP request.

                    In this documentation and by convention, the object is always referred to as res (and the HTTP request is req) but its actual name is determined by the parameters to the callback function in which you’re working.
                </p>

                <p className='pb-2'>For Example</p>

                <Highlighter language='js'>
                    {
                        `app.get('/user/:id', (req, res) => { \n    res.send(\`user \${req.params.id}\`) \n})`
                    }
                </Highlighter>

                <p className='pb-2'>
                    But you could just as well have:
                </p>

                <Highlighter language='js'>
                    {
                        `app.get('/user/:id', (request, response) => { \n    response.send(\`user \${request.params.id}\`) \n})`
                    }
                </Highlighter>

                <p className='pt-2'>
                    The res object is an enhanced version of Node’s own response object and supports all built-in fields and methods.
                </p>
            </Section>

            <Section
                id='res.cookie'
            >
                <h2 className='text-2xl font-bold'>Methods</h2>

                <h3 className='text-xl font-bold py-2'>
                    res.cookie(name, value [, options])
                </h3>

                <p className='pb-2'>
                    Sets cookie name to value. The value parameter may be a string or object converted to JSON.
                </p>

                <p className='text-base pb-2'>
                    For Example
                </p>

                <Highlighter language='js'>
                    {`res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true }) \nres.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })`}
                </Highlighter>

                {/* <p className='pb-2'>
                    The encode option allows you to choose the function used for cookie value encoding. Does not support asynchronous functions.
                </p>

                <p className='pb-2'>
                    Example use case: You need to set a domain-wide cookie for another site in your organization. This other site (not under your administrative control) does not use URI-encoded cookie values.
                </p>

                <Highlighter language='js'>
                    {`// Default encoding \nres.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com', { domain: 'example.com' }) \n// Result: 'some_cross_domain_cookie=http%3A%2F%2Fmysubdomain.example.com; Domain=example.com; Path=/' \n\n// Custom encoding \nres.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com', { domain: 'example.com', encode: String }) \n// Result: 'some_cross_domain_cookie=http://mysubdomain.example.com; Domain=example.com; Path=/;'`}
                </Highlighter> */}

                <p className='text-base pb-2'>
                    The maxAge option is a convenience option for setting “expires” relative to the current time in milliseconds.
                </p>

                <Highlighter language='js'>
                    {`res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })`}
                </Highlighter>

                {/* <p className='text-base pb-2'>
                    You can pass an object as the value parameter; it is then serialized as JSON and parsed by bodyParser() middleware.
                </p>

                <Highlighter language='js'>
                    {`res.cookie('cart', { items: [1, 2, 3] }) \nres.cookie('cart', { items: [1, 2, 3] }, { maxAge: 900000 })`}
                </Highlighter> */}

                {/* <p className='text-base pb-2'>
                    When using cookie-parser middleware, this method also supports signed cookies. Simply include the signed option set to true. Then, res.cookie() will use the secret passed to cookieParser(secret) to sign the value.
                </p>

                <Highlighter language='js'>
                    {`res.cookie('name', 'tobi', { signed: true })`}
                </Highlighter> */}

                {/* <p className='text-base pt-2'>
                    Later, you may access this value through the req.signedCookies object.
                </p> */}
            </Section>

            <Section
                id='res.clearCookie'
            >
                <h3 className='text-xl font-bold py-2'>
                    res.clearCookie(name [, options])
                </h3>

                <p className='text-base pb-2'>
                    Clears all cookies.
                </p>

                <Highlighter language='js'>
                    {`res.cookie('name', 'tobi', { path: '/admin' }) \nres.clearCookie('name')`}
                </Highlighter>
            </Section>

            <Section
                id='res.json'
            >
                <h3 className='text-xl font-bold py-2'>
                    res.json([body])
                </h3>

                <p className='pb-2'>
                    Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().
                </p>

                <p className='pb-2'>
                    The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.
                </p>

                <Highlighter language='js'>
                    {`res.json(null) \nres.json({ user: 'tobi' }) \nres.status(500).json({ error: 'message' })`}
                </Highlighter>
            </Section>

            <Section
                id='res.redirect'
            >
                <h3 className='text-xl font-bold py-2'>
                    res.redirect([status,] path)
                </h3>

                <p className='pb-2'>
                    Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code. If not specified, status defaults to 302.
                </p>

                <Highlighter language='js'>
                    {`res.redirect('/foo/bar') \nres.redirect('http://example.com') \nres.redirect(301, 'http://example.com') \nres.redirect('../login')`}
                </Highlighter>

                <p className='pb-2'>
                    Redirects can be a fully-qualified URL for redirecting to a different site:
                </p>

                <Highlighter language='js'>
                    {`res.redirect('http://google.com')`}
                </Highlighter>

                <p className='pb-2'>
                    Redirects can be relative to the root of the host name. For example, if the application is on http://example.com/admin/post/new, the following would redirect to the URL http://example.com/admin:
                </p>

                <Highlighter language='js'>
                    {`res.redirect('/admin')`}
                </Highlighter>

                <p className='pb-2'>
                    Redirects can be relative to the current URL. For example, from http://example.com/blog/admin/ (notice the trailing slash), the following would redirect to the URL http://example.com/blog/admin/post/new.
                </p>

                <Highlighter language='js'>
                    {`res.redirect('post/new')`}
                </Highlighter>
            </Section>

            <Section
                id='res.send'
            >
                <h3 className='text-xl font-bold py-2'>
                    res.send([body])
                </h3>
                <p className='pb-2'>
                    Sends the HTTP response.
                </p>
                <p className='pb-2'>
                    The body parameter can be a Buffer object, a String, an object, Boolean, or an Array. For example:
                </p>

                <Highlighter language='js'>
                    {`res.send(Buffer.from('whoop')) \nres.send({ some: 'json' }) \nres.send('<p>some html</p>') \nres.status(404).send('Sorry, we cannot find that!') \nres.status(500).send({ error: 'something blew up' })`}
                </Highlighter>

                <p className='pb-2'>
                    This method performs many useful tasks for simple non-streaming responses: For example, it automatically assigns the Content-Length HTTP response header field and provides automatic HEAD and HTTP cache freshness support.
                    <br /><br />
                    When the parameter is a Buffer object, the method sets the Content-Type response header field to “application/octet-stream”, unless previously defined as shown below:
                </p>

                <Highlighter language='js'>
                    {`res.set('Content-Type', 'text/html') \nres.send(Buffer.from('<p>some html</p>'))`}
                </Highlighter>

                <p className='pb-2'>
                    When the parameter is a String, the method sets the Content-Type to “text/html”:
                </p>

                <Highlighter language='js'>
                    {`res.send('<p>some html</p>')`}
                </Highlighter>

                <p className='pb-2'>
                    When the parameter is an Array or Object, NodePlace responds with the JSON representation:
                </p>

                <Highlighter language='js'>
                    {`res.send({ user: 'tobi' }) \nres.send([1, 2, 3])`}
                </Highlighter>
            </Section>

            <Section
                id='res.sendFile'
            >
                <h3 className='text-xl font-bold py-2'>
                    res.sendFile(path [, options] [, fn])
                </h3>

                <p className='pb-2'>
                    Transfers the file at the given path. Sets the Content-Type response HTTP header field based on the filename’s extension. Unless the root option is set in the options object, path must be an absolute path to the file.
                </p>

                {/* <p className='pb-2'>
                    The method invokes the callback function fn(err) when the transfer is complete or when an error occurs. If the callback function is specified and an error occurs, the callback function must explicitly handle the response process either by ending the request-response cycle, or by passing control to the next route.
                    <br />
                    Here is an example of using res.sendFile with all its arguments.
                </p> */}

                {/* <Highlighter language='js'>
                    {`app.get('/file/:name', (req, res, next) => { \n   const options = { \n    root: path.join(__dirname, 'public'), \n    dotfiles: 'deny', \n    headers: { \n       'x-timestamp': Date.now(), \n       'x-sent': true \n   } \n}

  const fileName = req.params.name
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})`}
                </Highlighter>

                <p className='pb-2'>
                    The following example illustrates using res.sendFile to provide fine-grained support for serving files:
                </p>

                <Highlighter language='js'>
                    {`app.get('/user/:uid/photos/:file', (req, res) => { \n   const uid = req.params.uid \n   const file = req.params.file \n\n   req.user.mayViewFilesFrom(uid, (yes) => { \n       if (yes) { \n          res.sendFile(\`/uploads/\${uid}/\${file}\`) \n       } else { \n          res.status(403).send("Sorry! You can't see that.") \n       } \n   }) \n})`}
                </Highlighter> */}
            </Section>

            <Section
                id='res.set'
            >
                <h3 className='text-xl font-bold py-2'>
                    res.set(field [, value])
                </h3>
                <p className='pb-2'>
                    Sets the response’s HTTP header field to value.
                </p>

                <Highlighter language='js'>
                    {`res.set('Content-Type', 'text/plain')`}
                </Highlighter>
            </Section>

            <Section
                id='res.set'
            >
                <h3 className='text-xl font-bold py-2'>
                    res.status(code)
                </h3>
                <p className='pb-2'>
                    Sets the HTTP status for the response. It is a chainable alias of Node’s response.statusCode.
                </p>

                <Highlighter language='js'>
                    {`res.status(403).end() \nres.status(400).send('Bad Request') \nres.status(404).sendFile('/absolute/path/to/404.png')`}
                </Highlighter>
            </Section>

            {/* <Section
                id='res.type'
            >
                <h3 className='text-xl font-bold py-2'>
                    res.type(type)
                </h3>
                <p className='pb-2'>
                    Sets the Content-Type HTTP header to the MIME type as determined by the specified type. If type contains the “/” character, then it sets the Content-Type to the exact value of type, otherwise it is assumed to be a file extension and the MIME type is looked up in a mapping using the express.static.mime.lookup() method.
                </p>

                <Highlighter language='js'>
                    {`res.type('.html') // => 'text/html' \nres.type('html') // => 'text/html' \nres.type('json') // => 'application/json' \nres.type('application/json') // => 'application/json' \nres.type('png') // => image/png:`}
                </Highlighter>
            </Section> */}
        </Section>
    )
}

export default ResponseSection