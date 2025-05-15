
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleFormError(error: any) {
  console.error("Form submission error:", error);
  return error;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function formatPhoneNumber(phone: string): string {
  // Basic phone formatting for Malaysian numbers
  if (!phone) return '';
  
  // Remove non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format for Malaysian numbers (+60 prefix)
  if (cleaned.startsWith('60') && cleaned.length >= 10) {
    return `+${cleaned.substring(0, 2)} ${cleaned.substring(2)}`;
  }
  
  // Format for Malaysian numbers without prefix
  if (cleaned.startsWith('1') && cleaned.length >= 9) {
    return `+60 ${cleaned}`;
  }
  
  // Return the original cleaned number if it doesn't match patterns
  return cleaned;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

