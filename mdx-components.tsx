import React, { ComponentPropsWithoutRef } from 'react';
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markup'
import DOMPurify from 'isomorphic-dompurify'
import '@/src/styles/docStyles.css'
import Copy from './src/components/Copy';

const highlight = (code: string, language = 'markup') => {
  return Prism.highlight(code, Prism.languages[language], language)
}

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="text-3xl font-medium pt-16 pb-2 block fade-in" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-2xl text-gray-800 font-medium " {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-xl text-gray-800 font-medium pb-4" {...props} />
  ),
  h4: (props: HeadingProps) => <h4 className="text-lg font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="text-gray-800 leading-snug pb-4" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="text-gray-800 list-decimal pl-5 pb-4 space-y-2" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-gray-800 list-none pl-2 pb-4 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-[dodgerblue] hover:text-[dodgerblue]/30';
    if (href?.startsWith('/')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children }: { children: string }) => {
    const highlightedCode = highlight(children, 'js')

    return (
      <>
        <Copy content={children} />
        <code dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(highlightedCode)
        }}></code>
      </>
    )
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
