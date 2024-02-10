import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { diffChars } from "diff";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calculateTimeDifference = (updatedAt: Date) => {
  const now: any = new Date();
  const updated: any = new Date(updatedAt);

  const diffInMilliseconds: number = now - updated;

  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Note: This is a simple approximation
  const years = Math.floor(days / 365); // Note: This is a simple approximation

  if (years >= 1) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months >= 1) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (days >= 1) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours >= 1) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes >= 1) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  }
};


export const generateVisualDiff = (oldContent: string, newContent: string) => {
    const diff = diffChars(oldContent, newContent);
  
    let result = '';
    diff.forEach(part => {
        if (part.added || part.removed) {
            result += `<span class="${part.added ? 'added bg-green-200 dark:bg-green-800' : 'removed bg-red-200 dark:bg-red-800'}">${part.value}</span>`;
        } else {
            result += part.value;
        }
    });

    return result;
};

export const pointsTo = {
  createAccount: 50,
  editArticle: 5,
  createArticle: 10,
}