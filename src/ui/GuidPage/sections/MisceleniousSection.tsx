import Divider from '@/src/components/Divider'
import Highlighter from '../../../components/Highlighter'
import Section from '../components/Section'
import Note from '@/src/components/Note'
import Color from '@/src/components/Color'

function MisceleniousSection() {

  return (
    <Section
      id='miscellenious-route'
      isRoute={true}
      className="w-full flex flex-col gap-8 z-10"
    >
      <Section
        id='settings'
      >
        <div className='mt-8'></div>

        <Divider />

        <h3 className='text-2xl font-bold pt-8 '>
          Application Settings
        </h3>

        <p className='py-2'>
          NodePlace allows you to manage application settings using the app.settings method:
        </p>

        <Highlighter language='js'>
          {`app.settings({poweredBy: false });`}
        </Highlighter>

        <p className='py-2'>
          You can also enable or disable individual settings:
        </p>

        <Highlighter language='js'>
          {`app.enable('poweredBy');
app.disable('poweredBy');`}
        </Highlighter>
      </Section>
    </Section>
  )
}

export default MisceleniousSection