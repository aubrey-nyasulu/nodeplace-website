import Divider from '@/src/components/Divider'
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
                <div className='mb-8'></div>

                <Divider />

                <h2 className='text-3xl font-bold pt-8'>Router</h2>

                <p className='py-2'>
                    The Router object in NodePlace is an instance of middleware and routing functionality. It acts as a "mini-application" that can have its own middleware, routes, and error-handling logic. Routers are particularly useful for modularizing your application by separating concerns and grouping related routes.
                </p>

                <p className='font-semibold pb-2'>Syntax</p>

                <Highlighter language='js'>
                    const router = nodeplace.Router()
                </Highlighter>

                <p className='pb-1'>Features of Router</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>Modular and mountable, allowing for clean separation of application logic.</li>

                    <li>Can handle its own middleware, routes, and error handlers.</li>

                    {/* <li>Works seamlessly with app.use() or another router's .use() method.</li> */}
                </ul>

            </Section>

            <Section
                id='creating.router'
            >
                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    Creating a Router
                </h3>

                <p className='font-semibold py-2'>
                    Example: Basic Router Setup
                </p>

                <Highlighter language='js'>
                    {`const router = nodeplace.Router()

router.get('/', (req, res) => {
    res.send('Welcome to the Router!')
})

app.use('/router', router)
`}
                </Highlighter>

                <p className='pb-1'>Features of Router</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>A router is created using nodeplace.Router().</li>

                    <li>The router handles requests to /router and responds to /router/ with a welcome message.</li>
                </ul>
            </Section>

            <Section
                id='handling.routes'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    Handling Routes with Router
                </h3>

                <p className='font-semibold py-2'>
                    Dynamic Routes
                </p>

                <p className="pb-2">You can define dynamic routes with parameters directly in the router.</p>

                <Highlighter language='js'>
                    {`router.get('/user/:id', (req, res) => {
    res.send(\`User ID: \${req.params.id}\`)
})
`}
                </Highlighter>

                <p className='pb-1'>Explanation:</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>The router handles requests to /user/:id, where :id is a dynamic parameter.</li>

                    <li>Use req.params.id to access the dynamic value.</li>
                </ul>

                <p className='font-semibold py-2'>
                    Using Middleware in Routers
                </p>

                <p className="pb-2">Routers can have middleware specific to their routes.</p>

                <Highlighter language='js'>
                    {`router.use((req, res, next) => {
    console.log('Router-specific middleware')
    next()
})

router.get('/dashboard', (req, res) => {
    res.send('Router-specific Dashboard')
})
`}
                </Highlighter>

                <p className='pb-1'>Explanation:</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>Middleware added to the router applies only to routes defined within that router.</li>
                </ul>

                <p className='font-semibold py-2'>
                    Combining Middleware and Routes
                </p>

                <Highlighter language='js'>
                    {`router.get(
    '/example',
    (req, res, next) => {
        console.log('Middleware before response')
        next()
    },
    (req, res) => {
        res.send('Hello from Example!')
    }
)
`}
                </Highlighter>

                <p className='pb-1'>Explanation:</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>Middleware added to the router applies only to routes defined within that router.</li>
                </ul>
            </Section>

            <Section
                id='mounting.routers'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    Mounting Routers
                </h3>

                <p className="pb-2">Routers can be mounted on specific paths in the main application.</p>

                <p className='pb-2'>
                    Example: Mounting a Router
                </p>

                <Highlighter language='js'>
                    {`const adminRouter = nodeplace.Router()

adminRouter.get('/settings', (req, res) => {
    res.send('Admin Settings')
})

app.use('/admin', adminRouter)
`}
                </Highlighter>

                <p className='pb-1'>Explanation:</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>The adminRouter handles routes prefixed with /admin.</li>

                    <li>Requests to /admin/settings are served by the router.</li>
                </ul>
            </Section>

            <Section
                id='router.level.middleware'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    Router-Level Middleware
                </h3>

                <p className="pb-2">Middleware specific to a router can be added using router.use().</p>

                <p className='pb-2'>
                    Example: Router Middleware
                </p>

                <Highlighter language='js'>
                    {`const loggingMiddleware = (req, res, next) => {
    console.log(\`Request Method: \${req.method}, Path: \${req.path}\`)

    next()
}

router.use(loggingMiddleware)

router.get('/profile', (req, res) => {
    res.send('Profile Page')
})
`}
                </Highlighter>

                <p className='pb-1'>Explanation:</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>The middleware logs each request method and path before the route handler is executed.</li>
                </ul>
            </Section>

            {/* <Section
                id='nested.routers'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    Nested Routers
                </h3>

                <p className="pb-2">Middleware specific to a router can be added using router.use().</p>

                <p className='pb-2'>
                    Example: Router Middleware
                </p>

                <Highlighter language='js'>
                    {`const loggingMiddleware = (req, res, next) => {
    console.log(\`Request Method: \${req.method}, Path: \${req.path}\`)
                    next()
}

                    router.use(loggingMiddleware)

router.get('/profile', (req, res) => {
                        res.send('Profile Page')
                    })
`}
                </Highlighter>

                <p className='pb-1'>Explanation:</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>The middleware logs each request method and path before the route handler is executed.</li>
                </ul>
            </Section> */}

            <Section
                id='router.route.method'
            >
                <div className='mb-8'></div>

                <Divider />

                <h3 className='text-xl font-bold pt-8'>
                    Method: router.route(path)
                </h3>

                <p className="pb-2">Defines multiple HTTP method handlers for a single route.</p>

                <p className='pb-2'>
                    Example: Handling Multiple Methods
                </p>

                <Highlighter language='js'>
                    {`router.route('/items')
    .get((req, res) => {
        res.send('List of Items')
    })
    .post((req, res) => {
        res.send('Create a New Item')
    })
    .put((req, res) => {
        res.send('Update an Item')
    })
    .delete((req, res) => {
        res.send('Delete an Item')
    })
`}
                </Highlighter>

                <p className='pb-1'>Explanation:</p>

                <ul className='pl-8 space-y-2 list-disc'>
                    <li>Use router.route() to define GET, POST, PUT, and DELETE handlers for /items.</li>
                </ul>
            </Section>

        </Section>
    )
}

export default RouterSection