import Highlighter from '../Highlighter'
import Section from '../components/Section'

function HelloWorldSection() {

    return (
        <Section
            id='hello-world-route'
            isRoute={true}
            className="w-full flex flex-col gap-8"
        >
            hello-world-route
        </Section>
    )
}

export default HelloWorldSection