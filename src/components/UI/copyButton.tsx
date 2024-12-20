import { Copy, Check } from 'lucide-react';
import { useCopy } from '../../hooks/useCopy';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const { copied, copyToClipboard } = useCopy();

  return (
    <button
      onClick={() => copyToClipboard(text)}
      className={`p-2 rounded-lg transition-colors duration-200 
                 hover:bg-gray-100 dark:hover:bg-gray-700 
                 focus:outline-none focus:ring-2 
                 focus:ring-blue-500 ${className}`}
      title="Copy to clipboard"
    >
      {copied ? (
        <Check size={16} className="text-green-500 dark:text-green-400" />
      ) : (
        <Copy size={16} className="text-gray-500 dark:text-gray-400" />
      )}
    </button>
  );
}
