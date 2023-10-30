'use client';

import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
    return (
        <ReactMarkDown
            className='prose max-w-none'
            remarkPlugins={[remarkGfm]}
            components={{
                code(props) {
                    const { children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                        <SyntaxHighlighter language={match[1]} PreTag='div' {...rest} style={materialDark} ref={null}>
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    );
                },
                img: (image) => <Image className='w-full max-h-60 object-cover' src={image.src || ''} alt={image.alt || ''} width={500} height={500} />,
            }}
        >
            {content}
        </ReactMarkDown>
    );
}
