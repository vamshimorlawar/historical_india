import { diffChars } from "diff";

export const generateVisualDiff = (oldContent: string, newContent: string) => {
    const diff = diffChars(oldContent, newContent);
  
    return diff.map((part, index) => {
      const className = part.added
        ? "added bg-green-200 dark:bg-green-800"
        : part.removed
        ? "removed bg-red-200 dark:bg-red-800"
        : "unchanged";
      return (
        <span key={index} className={className}>
          {part.value}
        </span>
      );
    });
  };