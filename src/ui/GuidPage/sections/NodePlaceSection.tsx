
import Highlighter from '../../../components/Highlighter'
import Note from '../../../components/Note'
import Section from '../components/Section'
import { features } from '@/src/lib/constants'
import Divider from '@/src/components/Divider'
import GeneralTable from '../components/GeneralTable'

function NodePlaceSection() {

    return (
        <Section
            id='nodeplace-route'
            isRoute={true}
            className="w-full flex flex-col gap-8 z-40"
        >
            <Section
                id='introduction'
            >
                <h2 className='text-4xl font-bold pb-8'>Introduction</h2>

                {/* <p className='text-lg font-bold pt-2'>Welcome to the NodePlace Guide</p> */}

                <Divider />

                <h3 className='text-2xl font-bold pt-8'>What is NodePlace.js?</h3>

                <p className='pt-2 pb-8'>
                    NodePlace is a lightweight, zero-dependency Node.js framework designed for building fast, scalable server-side applications. With a strong focus on simplicity and performance, NodePlace is ideal for creating APIs, microservices, or server-driven applications. Its intuitive design makes it a perfect drop-in replacement for Express.js, sharing familiar syntax and structure while introducing additional features tailored for modern development.
                </p>

                <Divider />

                <h4 className='text-xl font-bold pt-8 pb-2'>Pre-Requisites</h4>

                <p className='pb-8'>
                    To get the most out of NodePlace, it’s recommended that you have a foundational understanding of Node.js. While not strictly required, prior experience with Express.js can accelerate the learning curve, as this framework have a similar syntax and structure.
                </p>

                <Divider />

                <h4 className='text-xl font-bold pt-8 pb-2'>Features</h4>

                <p className='pb-2 font-bold'>Core Features</p>

                <GeneralTable {...{ tableData: features.coreFeatures }} />

                <p className='pb-2 pt-8 font-bold'>Additional Features</p>

                <GeneralTable {...{ tableData: features.additionalFeatures }} />
            </Section>

            <Section
                id='installing'
            >
                <div className='mt-8'></div>
                <Divider />

                <h3 className='text-2xl font-bold pt-8'>Installing</h3>

                <h4 className='text-lg font-bold pt-8'>Installation via NPM</h4>

                <p className='py-2'>
                    To start using NodePlace, install it using your preferred package manager. We recommend using npm or yarn for simplicity:
                </p>

                <Highlighter language='bash'>
                    npm install nodeplace
                </Highlighter>

                <p className='pb-2'>
                    or if you use yarn:
                </p>

                <Highlighter language='bash'>
                    yarn add nodeplace
                </Highlighter>

                <h4 className='text-lg font-bold py-2'>Requirements</h4>

                <ul className="list-disc space-y-2 pl-8">
                    <li>
                        <span className='font-semibold'>Node.js 16 or higher:</span> NodePlace leverages modern JavaScript features, so ensure your environment is up to date.</li>
                    <li><span className='font-semibold'>Package Manager:</span> Ensure you have npm or yarn installed to manage dependencies effectively.</li>
                </ul>
            </Section>

            <Section
                id='hello-world'
            >
                <div className='mt-8'></div>

                <Divider />

                <h3 className='text-2xl font-bold pt-8'>Hello World</h3>

                <p className='py-2'>
                    Getting started with NodePlace is simple. Here's a quick example to set up a basic server:
                </p>

                <Highlighter language='js'>
                    {`import nodeplace from 'nodeplace'

const app = nodeplace()

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
`}
                </Highlighter>

                <h4 className='text-lg font-bold py-2'>Explanation</h4>

                <ul className="pl-8">
                    <li className='list-decimal font-semibold'>Import the Framework:</li>
                    <p className='pb-2'>Use the nodeplace package to access all the core functionalities.</p>

                    <li className='list-decimal font-semibold'>Create an Application Instance:</li>
                    <p className='pb-2'>nodeplace() initializes a new app, similar to other Node.js frameworks.</p>

                    <li className='list-decimal font-semibold'>Define a Route:</li>
                    <p className='pb-2'>The app.get() method specifies an HTTP GET handler for the root URL (/).</p>

                    <li className='list-decimal font-semibold'>Start the Server:</li>
                    <p className='pb-2'>The app.listen() method starts the server on port 3000 and listens for incoming requests.</p>
                </ul>

                <Note>
                    <p>
                        "The <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req</span> (request) and <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>res</span> (response)  objects in NodePlace are built on the native Node.js objects, with added methods and properties to simplify common tasks. You can still use native methods like <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.pipe()</span> or <span className='bg-black/80 text-white px-1 pb-[2px] rounded-md'>req.on('data', callback)</span> seamlessly, while benefiting from the extended capabilities provided by NodePlace."
                    </p>
                </Note>

                <h4 className='text-lg font-bold pt-4'>Running the Server</h4>

                <ul className="pl-8 pb-2">
                    <li className='list-decimal'>Create a file named server.js and paste the code above into it.</li>

                    <li className='list-decimal'>Run the app with:</li>
                </ul>

                <Highlighter language='js'>
                    node server.js
                </Highlighter>

                <p className=''>
                    Visit http://localhost:3000 in your browser or API testing tool (e.g., Postman or Insomnia). You should see the text "Hello, World!".
                </p>
            </Section>
        </Section>
    )
}

export default NodePlaceSection