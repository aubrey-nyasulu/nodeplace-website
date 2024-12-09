import Highlighter from '../Highlighter'
import Section from './Section'

function RouterSection() {

    return (
        <Section
            id='router-route'
            isRoute={true}
            className="w-full flex flex-col gap-8"
        >
            <Section
                id='router'
            >
                <h1 className='text-3xl font-bold'>Router</h1>
                <p className='py-4'>
                    A router object is an instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.
                    <br /><br />
                    A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument to another router’s use() method.
                    <br /><br />
                    The top-level express object has a Router() method that creates a new router object.
                    <br /><br />
                    Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application. For example:
                </p>

                <Highlighter language='js'>
                    {
                        `// invoked for any requests passed to this router \nrouter.use((req, res, next) => { /n    // .. some logic here .. like any other middleware \n   next() \n}) \n\n// will handle any request that ends in /events \n// depends on where the router is "use()'d" \nrouter.get('/events', (req, res, next) => { \n   // .. \n})`
                    }
                </Highlighter>

                <p className='py-2'>
                    You can then use a router for a particular root URL in this way separating your routes into files or even mini-apps.
                </p>

                <Highlighter language='js'>
                    {
                        `// only requests to /calendar/* will be sent to our "router" \napp.use('/calendar', router)`
                    }
                </Highlighter>

                <p className='py-4'>
                    Keep in mind that any middleware applied to a router will run for all requests on that router’s path, even those that aren’t part of the router.
                </p>
            </Section>

            <Section
                id='router.route'
            >
                <h1 className='text-3xl font-bold'>router.route(path)</h1>
                <p className='py-4'>
                    Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware. Use router.route() to avoid duplicate route naming and thus typing errors.
                    <br /><br />
                    Building on the router.param() example above, the following code shows how to use router.route() to specify various HTTP method handlers.
                </p>

                <Highlighter language='js'>
                    {
                        `const router = express.Router() \n    router.param('user_id', (req, res, next, id) => { \n    // sample user, would actually fetch from DB, etc... \n    req.user = { \n        id, \n        name: 'TJ' \n    } \n    next()  \n router.route('/users/:user_id') \n    .all((req, res, next) => { \n    // runs for all HTTP verbs first \n    // think of it as route specific middleware!
    next()
  })
  .get((req, res, next) => {
    res.json(req.user)
  })
  .put((req, res, next) => {
  // just an example of maybe updating the user
    req.user.name = req.params.name
    // save user ... etc
    res.json(req.user)
  })
  .post((req, res, next) => {
    next(new Error('not implemented'))
  })
  .delete((req, res, next) => {
    next(new Error('not implemented'))
  })`
                    }
                </Highlighter>

                <p className='py-2'>
                    You can then use a router for a particular root URL in this way separating your routes into files or even mini-apps.
                </p>

                <Highlighter language='js'>
                    {
                        `// only requests to /calendar/* will be sent to our "router" \napp.use('/calendar', router)`
                    }
                </Highlighter>

                <p className='py-4'>
                    Keep in mind that any middleware applied to a router will run for all requests on that router’s path, even those that aren’t part of the router.
                </p>
            </Section>

            <Section
                id='router.delete'
            >
                <h2 className='text-xl font-bold'>Methods</h2>
                <h3 className='text-lg font-bold py-2'>
                    router.delete()
                </h3>

            </Section>

            <Section
                id='router.get'
            >
                <h2 className='text-xl font-bold'>Methods</h2>
                <h3 className='text-lg font-bold py-2'>
                    router.get()
                </h3>

            </Section>

            <Section
                id='router.patch'
            >
                <h2 className='text-xl font-bold'>Methods</h2>
                <h3 className='text-lg font-bold py-2'>
                    router.patch()
                </h3>

            </Section>

            <Section
                id='router.post'
            >
                <h2 className='text-xl font-bold'>Methods</h2>
                <h3 className='text-lg font-bold py-2'>
                    router.post()
                </h3>

            </Section>

            <Section
                id='router.put'
            >
                <h2 className='text-xl font-bold'>Methods</h2>
                <h3 className='text-lg font-bold py-2'>
                    router.put()
                </h3>

            </Section>
        </Section>
    )
}

export default RouterSection