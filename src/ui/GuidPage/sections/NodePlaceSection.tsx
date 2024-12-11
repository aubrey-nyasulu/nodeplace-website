
import Highlighter from '../Highlighter'
import Note from '../../../components/Note'
import Section from '../components/Section'
import Link from 'next/link'

function NodePlaceSection() {

    return (
        <Section
            id='nodeplace-route'
            isRoute={true}
            className="w-full flex flex-col gap-8"
        >
            <Section
                id='introduction'
            >
                <h2 className='text-4xl font-bold'>Introduction</h2>

                {/* <p className='text-lg font-bold pt-2'>Welcome to the NodePlace Guide</p> */}
                <div className='w-full h-[1px] bg-stone-300 dark:bg-stone-800 mt-8'></div>

                <h3 className='text-2xl font-bold pt-8'>What is NodePlace.js?</h3>


                <p className='pt-2'>
                    Nodeplace is a lightweight and intuitive Node.js framework designed for building fast and scalable server applications. It provides all the power of a robust framework with a refined focus on API development. Whether you're creating APIs, microservices, or server-driven applications, Nodeplace ensures a smooth development experience.
                </p>
            </Section>

            <Section
                id='installing'
            >
                <div className='w-full h-[1px] mb-8 bg-stone-300 dark:bg-stone-800'></div>

                <h3 className='text-2xl font-bold '>Installing</h3>

                <p className='py-2'>
                    Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.
                </p>

                <Highlighter language='js'>
                    {`$ mkdir myapp \n$ cd myapp`}
                </Highlighter>

                <p className='pb-2'>
                    Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.
                </p>

                <Highlighter language='js'>
                    {`$ npm init -y`}
                </Highlighter>

                <p className='pb-2'>
                    Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.
                </p>

                <p className='pb-2'>
                    Now, install NodePlace in the myapp directory and save it in the dependencies list. For example:
                </p>

                <Highlighter language='js'>
                    {`$ npm install nodeplace`}
                </Highlighter>
            </Section>

            <Section
                id='hello-world'
            >
                <div className='w-full h-[1px] mb-8 bg-stone-300 dark:bg-stone-800'></div>

                <h3 className='text-2xl font-bold '>Hello World</h3>

                <p className='py-2'>
                    This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
                </p>

                <Highlighter language='js'>
                    {`const nodeplace = require('nodeplace')
const app = nodeplace()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(\`Example app listening on port \${port}\`)
})`}
                </Highlighter>

                <p className='pb-2'>
                    Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.
                </p>

                <Highlighter language='js'>
                    {`$ npm init -y`}
                </Highlighter>

                <h4 className='pb-2 text-lg font-bold'>
                    Running Locally
                </h4>

                <p className='pb-2'>
                    Follow the <Link className='text-[dodgerblue]' href="#installing">installation guide</Link> to Install the package. In the myapp directory, create a file named app.js and copy the code from the example above.
                </p>

                <Note>
                    <p>
                        The <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req</span> (request) and <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>res</span> (response) are the exact same objects that Node provides, so you can invoke <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.pipe()</span>, <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.on('data', callback)</span>, and anything else you would do without NodePlace involved.
                    </p>
                </Note>

                <p className='py-2'>
                    Run the app with the following command:
                </p>

                <Highlighter language='js'>
                    {`$ node app.js`}
                </Highlighter>
            </Section>
        </Section>
    )
}

export default NodePlaceSection