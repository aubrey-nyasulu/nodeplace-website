import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markup'
import DOMPurify from 'isomorphic-dompurify'
import '@/src/styles/docStyles.css'
import Copy from './Copy'

const highlight = (code: string, language = 'markup') => {
    return Prism.highlight(code, Prism.languages[language], language)
}

function Highlighter({ children, language = 'markup' }: { children: string, language: string }) {

    const highlightedCode = highlight(children, language)

    return (
        <div className='w-full h-fit relative'>
            <Copy content={children} />
            <pre className='w-full'>
                <code dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(highlightedCode)
                }}></code>
            </pre>
        </div>
    )
}

export default Highlighter