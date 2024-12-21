import { useState, useCallback } from 'react';

export function useCopy(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(
    (text: string) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), resetDelay);
      });
    },
    [resetDelay]
  );

  return { copied, copyToClipboard };
}
