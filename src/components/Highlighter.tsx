import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markup'
import DOMPurify from 'isomorphic-dompurify'
import '@/src/styles/docStyles.css'

const highlight = (code: string, language = 'markup') => {
    return Prism.highlight(code, Prism.languages[language], language)
}

function Highlighter({ children, language = 'markup' }: { children: string, language: string }) {

    const highlightedCode = highlight(children, language)

    return (
        <pre className='w-full'>
            <code dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(highlightedCode)
            }}></code>
        </pre>
    )
}

export default Highlighter