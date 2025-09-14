"use client";

import React from "react";

type CodeBlockProps = {
  language: string;
  value: string;
  filename?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value, filename }) => {
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // noop
    }
  };

  return (
    <div className="code-container">
      <div className="code-header flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </span>
          {filename && <span className="text-slate-300">{filename}</span>}
          <span className="text-xs opacity-70">{language}</span>
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="px-2 py-1 text-xs rounded-md border border-slate-700/60 bg-slate-800/70 text-slate-200 hover:bg-blue-900/30 hover:text-blue-200 transition-colors"
          aria-label="Copy code"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre>
        <code className={language ? `language-${language}` : ""}>{value}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;


