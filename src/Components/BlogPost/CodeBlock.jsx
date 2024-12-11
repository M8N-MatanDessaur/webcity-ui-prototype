import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import { CodeBlockWrapper, LanguageTag } from './CodeBlock.styles';

const SUPPORTED_LANGUAGES = {
  javascript: 'JavaScript',
  html: 'HTML',
  css: 'CSS',
  python: 'Python',
  java: 'Java',
  typescript: 'TypeScript',
  bash: 'Shell',
  json: 'JSON',
  markdown: 'Markdown',
  text: 'Plain Text'
};

const CodeBlock = ({ code, language }) => {
  const codeRef = useRef(null);
  const normalizedLanguage = language?.toLowerCase() || 'text';
  const displayLanguage = SUPPORTED_LANGUAGES[normalizedLanguage] || 'Plain Text';

  useEffect(() => {
    // Force a re-render of Prism highlighting
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current, false);
    }
  }, [code, normalizedLanguage]);

  return (
    <CodeBlockWrapper>
      <LanguageTag>{displayLanguage}</LanguageTag>
      <pre>
        <code
          ref={codeRef}
          className={`language-${normalizedLanguage}`}
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </pre>
    </CodeBlockWrapper>
  );
};

export default CodeBlock;
