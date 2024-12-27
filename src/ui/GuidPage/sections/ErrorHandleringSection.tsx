import Divider from '@/src/components/Divider'
import Highlighter from '../../../components/Highlighter'
import Section from '../components/Section'

function ErrorHandleringSection() {

  return (
    <Section
      id='error-handlering-route'
      isRoute={true}
      className="w-full flex flex-col gap-8 z-10"
    >
      <Section
        id='using-middleware'
      >
        <div className='mt-8'></div>

        <Divider />

        <h3 className='text-2xl font-bold pt-8 '>
          Error Handling
        </h3>

        <p className='pt-2'>
          Error handling in NodePlace ensures your application gracefully handles unexpected issues, both synchronously and asynchronously. NodePlace provides a built-in error handler, so you don't need to start from scratch. However, customizing error handling allows for tailored responses and better debugging.
        </p>
      </Section>
      <Section
        id='catching.errors'
      >
        <div className='mt-2'></div>

        <Divider />

        <h3 className='text-2xl font-bold pt-8 '>
          Catching Errors
        </h3>

        <p className='py-2'>
          Errors in your application can occur during route handling or middleware execution. NodePlace offers robust mechanisms to catch both synchronous and asynchronous errors.
        </p>

        <p className='font-semibold pb-2'>Synchronous Errors</p>

        <p className='pb-2'>
          Synchronous code errors are automatically caught by NodePlace without additional configuration. For instance:
        </p>

        <Highlighter language='js'>
          {`app.get('/', (req, res) => {
    throw new Error('Something went wrong!') // Automatically handled.
})
`}
        </Highlighter>

        <p className='font-semibold pb-2'>Asynchronous Errors</p>

        <p className='pb-2'>
          For asynchronous errors, explicitly pass the error to the next() function:
        </p>

        <Highlighter language='js'>
          {`import fs from 'fs'

app.get('/', (req, res, next) => {
    fs.readFile('/non-existent-file', (err, data) => {
        if (err) {
            next(err) // Passes the error to the handler.
        } else {
            res.send(data)
        }
    })
})
`}
        </Highlighter>

        <p className='pb-2'>
          In modern JavaScript, you can also rely on async/await for cleaner error handling:
        </p>

        <Highlighter language='js'>
          {`app.get('/user/:id', async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id)
        res.send(user)
    } catch (error) {
        next(error) // Automatically passes the error to NodePlace's error handler.
    }
})
`}
        </Highlighter>

        <p className='font-semibold pb-2'>
          Promises and Errors
        </p>

        <p className='pb-2'>
          Promises make error handling easier by catching both synchronous and asynchronous errors:
        </p>

        <Highlighter language='js'>
          {`app.get('/', (req, res, next) => {
    Promise.resolve().then(() => {
        throw new Error('Promise error!')
    }).catch(next) // Automatically handles the error.
})
`}
        </Highlighter>

        <p className='font-semibold pb-2'>
          Common Patterns
        </p>

        <p className='pb-2'>
          You can chain middleware functions to simplify error handling in complex workflows:
        </p>

        <Highlighter language='js'>
          {`app.get('/', [
    (req, res, next) => {
        fs.writeFile('/path', 'data', next) // Passes errors to the next function.
    },
    (req, res) => {
        res.send('Operation succeeded!')
    }
])
`}
        </Highlighter>

        <p className='pb-2'>
          Even in asynchronous code, you can use try...catch or promise chains to ensure NodePlace receives the error:
        </p>

        <Highlighter language='js'>
          {`app.get('/', (req, res, next) => {
    setTimeout(() => {
        try {
            throw new Error('Timeout error!')
        } catch (err) {
            next(err)
        }
    }, 100)
})
`}
        </Highlighter>
      </Section>

      {/* <Section
                id='default.error-handler'
            >
                <div className='mt-2'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8 '>
                    The default error handler
                </h3>

                <p className='pb-2'>
                    Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.
                </p>

                <p className='pb-2'>
                    If you pass an error to next() and you do not handle it in a custom error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace. The stack trace is not included in the production environment.
                </p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})`}
                </Highlighter>

                <p className='pb-2'>
                    For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function, where Express will catch and process them. For example:
                </p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})`}
                </Highlighter>

                <p className='pb-2'>
                    Starting with Express 5, route handlers and middleware that return a Promise will call next(value) automatically when they reject or throw an error. For example:
                </p>

                <Highlighter language='js'>
                    {`app.get('/user/:id', async (req, res, next) => {
  const user = await getUserById(req.params.id)
  res.send(user)
})`}
                </Highlighter>

                <p className='pb-2'>
                    If getUserById throws an error or rejects, next will be called with either the thrown error or the rejected value. If no rejected value is provided, next will be called with a default Error object provided by the Express router.
                </p>

                <p className='pb-2'>
                    If you pass anything to the next() function (except the string 'route'), Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.
                </p>

                <p className='pb-2'>
                    If the callback in a sequence provides no data, only errors, you can simplify this code as follows:
                </p>

                <Highlighter language='js'>
                    {`app.get('/', [
  function (req, res, next) {
    fs.writeFile('/inaccessible-path', 'data', next)
  },
  function (req, res) {
    res.send('OK')
  }
])`}
                </Highlighter>

                <p className='pb-2'>
                    In the above example, next is provided as the callback for fs.writeFile, which is called with or without errors. If there is no error, the second handler is executed, otherwise Express catches and processes the error.
                </p>

                <p className='pb-2'>
                    You must catch errors that occur in asynchronous code invoked by route handlers or middleware and pass them to Express for processing. For example:
                </p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      throw new Error('BROKEN')
    } catch (err) {
      next(err)
    }
  }, 100)
})`}
                </Highlighter>

                <p className='pb-2'>
                    The above example uses a try...catch block to catch errors in the asynchronous code and pass them to Express. If the try...catch block were omitted, Express would not catch the error since it is not part of the synchronous handler code.
                </p>

                <p className='pb-2'>
                    Use promises to avoid the overhead of the try...catch block or when using functions that return promises. For example:
                </p>

                <Highlighter language='js'>
                    {`app.get('/', (req, res, next) => {
  Promise.resolve().then(() => {
    throw new Error('BROKEN')
  }).catch(next) // Errors will be passed to Express.
})`}
                </Highlighter>

                <p className='pb-2'>
                    Since promises automatically catch both synchronous errors and rejected promises, you can simply provide next as the final catch handler and Express will catch errors, because the catch handler is given the error as the first argument.
                </p>

                <p className='pb-2'>
                    You could also use a chain of handlers to rely on synchronous error catching, by reducing the asynchronous code to something trivial. For example:
                </p>

                <Highlighter language='js'>
                    {`app.get('/', [
  function (req, res, next) {
    fs.readFile('/maybe-valid-file', 'utf-8', (err, data) => {
      res.locals.data = data
      next(err)
    })
  },
  function (req, res) {
    res.locals.data = res.locals.data.split(',')[1]
    res.send(res.locals.data)
  }
])`}
                </Highlighter>

                <p className='pb-2'>
                    The above example has a couple of trivial statements from the readFile call. If readFile causes an error, then it passes the error to Express, otherwise you quickly return to the world of synchronous error handling in the next handler in the chain. Then, the example above tries to process the data. If this fails, then the synchronous error handler will catch it. If you had done this processing inside the readFile callback, then the application might exit and the Express error handlers would not run.
                </p>

                <p className='pb-2'>
                    Whichever method you use, if you want Express error handlers to be called in and the application to survive, you must ensure that Express receives the error.
                </p>
            </Section> */}

      <Section
        id='writing.error.handlers'
      >
        <div className='mt-2'></div>

        <Divider />

        <h3 className='text-2xl font-bold pt-8 '>
          Writing error handlers
        </h3>

        <p className='pb-2'>
          Error-handling middleware functions in NodePlace follow the same structure as regular middleware but must include four arguments: (err, req, res, next).
        </p>

        <p className='pb-2 font-semibold'>Basic Error Handler</p>

        <p className='pb-2'>Here's a simple error-handling middleware:</p>

        <Highlighter language='js'>
          {`app.use((err, req, res, next) => {
    console.error(err.stack) // Logs the error.
    res.status(500).send('Something went wrong!')
})
`}
        </Highlighter>

        <p className='pb-2 font-semibold'>Defining Error Handlers</p>

        <p className='pb-2'>Define error-handling middleware after all other middleware and routes:</p>

        <Highlighter language='js'>
          {`app.use(bodyParser.json())
app.use(methodOverride())

// Error handler
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message })
})
`}
        </Highlighter>

        <p className='pb-2 font-semibold'>
          Custom Error Handlers
        </p>

        <p className='pb-2'>
          Custom error handlers allow tailored responses:
        </p>

        <p className='pb-2'>
          XHR Request Error:
        </p>

        <Highlighter language='js'>
          {`const clientErrorHandler = (err, req, res, next) => {
    if (req.xhr) {
        res.status(500).send({ error: 'XHR failed!' })
    } else {
        next(err)
    }
}
app.use(clientErrorHandler)
`}
        </Highlighter>

        <p className='pb-2'>
          Logging Errors:
        </p>

        <Highlighter language='js'>
          {`const logErrors = (err, req, res, next) => {
    console.error(err.stack)
    next(err)
}
app.use(logErrors)
`}
        </Highlighter>

        <p className='pb-2'>
          Catch-All Handler:
        </p>

        <Highlighter language='js'>
          {`const errorHandler = (err, req, res) => {
    res.status(500).render('error', { error: err })
}
app.use(errorHandler)
`}
        </Highlighter>

        <p className='pb-2 font-semibold'>
          Skipping Handlers
        </p>

        <p className='pb-2'>
          Skip specific route handlers by passing 'route' to next():
        </p>

        <Highlighter language='js'>
          {`app.get('/restricted', (req, res, next) => {
    if (!req.user.isAuthenticated) {
        next('route') // Skips to the next route handler.
    } else {
        res.send('Welcome!')
    }
})
`}
        </Highlighter>

        <p className='pb-4'>
          Effective error handling is crucial for robust applications. NodePlace simplifies this with built-in support for synchronous and asynchronous errors, along with customizable error-handling middleware. Whether logging errors, handling API-specific issues, or providing user-friendly messages, NodePlace empowers you to manage errors gracefully.
        </p>
      </Section>
    </Section>
  )
}

export default ErrorHandleringSection