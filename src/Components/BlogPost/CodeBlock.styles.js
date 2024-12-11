import styled from 'styled-components';

export const CodeBlockWrapper = styled.div`
  margin: 1.5em 0;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #272822;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;

  pre {
    margin: 0 !important;
    padding: 1.5em !important;
    overflow-x: auto;
    font-family: 'Fira Code', 'Consolas', monospace !important;
    font-size: 0.9em !important;
    line-height: 1.6 !important;
    background: transparent !important;
    
    &::-webkit-scrollbar {
      height: 8px;
      background: #272822;
    }

    &::-webkit-scrollbar-thumb {
      background: #49483e;
      border-radius: 4px;

      &:hover {
        background: #75715e;
      }
    }

    code {
      background: none !important;
      padding: 0 !important;
      font-family: inherit !important;
      font-size: inherit !important;
      text-shadow: none !important;
      white-space: pre !important;
      word-spacing: normal !important;
      word-break: normal !important;
      word-wrap: normal !important;
      tab-size: 4 !important;
      hyphens: none !important;
    }
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }
`;

export const LanguageTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 8px;
  background: #49483e;
  color: #f8f8f2;
  font-size: 0.75em;
  border-bottom-left-radius: 4px;
  font-family: 'Fira Code', 'Consolas', monospace;
  opacity: 0.9;
  transition: opacity 0.2s ease;

  ${CodeBlockWrapper}:hover & {
    opacity: 1;
  }
`;
