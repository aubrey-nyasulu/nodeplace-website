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
            nodeplace section
        </Section>
    )
}

export default NodePlaceSection