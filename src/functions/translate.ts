import i18next from '@/src/translations/i18n';
import * as en from '@/src/translations/en.json';

const { t } = i18next;

type ValidKeys = keyof typeof en;

// DISCLAIMER: The following type definitions have been generated with the help of ChatGPT.

// --- overloads with ValidKeys ---
export function translate<K extends ValidKeys>(key: K): string;
export function translate<K extends ValidKeys>(key: K, options: Parameters<typeof t>[1]): string;
export function translate<K extends ValidKeys>(key: K, defaultValue: string, options?: Parameters<typeof t>[2]): string;

// --- implementation (broad enough to satisfy all overloads) ---
export function translate(key: string, defaultValueOrOptions?: unknown, options?: unknown): string {
  // --- just forward to t ---
  return (t as any)(key, defaultValueOrOptions, options);
}
