import Highlighter from '../../../components/Highlighter'
import Section from '../components/Section'

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
                <h2 className='text-3xl font-bold'>Router</h2>

                <p className='py-2'>
                    A router object is an instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every NodePlace application has a built-in app router.
                </p>

                <p className='pb-2'>
                    A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument to another router’s use() method.
                </p>

                <p className='pb-2'>
                    The top-level nodeplace object has a Router() method that creates a new router object.
                </p>

                <p className='pb-2'>
                    Once you’ve created a router object, you can add middleware and HTTP method routes (such as get, put, post, and so on) to it just like an application. For example:
                </p>

                <Highlighter language='js'>
                    {
                        `// will handle any request that ends in /events \n// depends on where the router is "use()'d" \nrouter.route('/events').get((req, res, next) => { \n   // .. \n}) \n\n// you can also use this pattern \nrouter.get('/events', (req, res, next) => { \n   // .. \n})`
                    }
                </Highlighter>

                <p className='pb-2'>
                    You can then use a router for a particular root URL in this way separating your routes into files or even mini-apps.
                </p>

                <Highlighter language='js'>
                    {
                        `// only requests to /calendar/* will be sent to our "router" \napp.use('/calendar', router)`
                    }
                </Highlighter>

                {/* <p className='py-4'>
                    Keep in mind that any middleware applied to a router will run for all requests on that router’s path, even those that aren’t part of the router.
                </p> */}
            </Section>

            <Section
                id='router.route'
            >
                <h3 className='text-xl font-bold'>router.route(path)</h3>
                <p className='py-2'>
                    Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware. Use router.route() to avoid duplicate route naming and thus typing errors.
                </p>

                <p className='pb-2'>
                    Building on the router.param() example above, the following code shows how to use router.route() to specify various HTTP method handlers.
                </p>

                <Highlighter language='js'>
                    {
                        `const router = nodeplace.Router() \n    router.param('user_id', (req, res, next, id) => { \n    // sample user, would actually fetch from DB, etc... \n    req.user = { \n        id, \n        name: 'TJ' \n    } \n    next()  \n router.route('/users/:user_id') \n  .get((req, res, next) => {
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

                <p className='pb-2'>
                    You can then use a router for a particular root URL in this way separating your routes into files or even mini-apps.
                </p>

                <Highlighter language='js'>
                    {
                        `// only requests to /calendar/* will be sent to our "router" \napp.use('/calendar', router)`
                    }
                </Highlighter>

                {/* <p className='pb-2'>
                    Keep in mind that any middleware applied to a router will run for all requests on that router’s path, even those that aren’t part of the router.
                </p> */}
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