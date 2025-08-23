import i18next from '@/src/translations/i18n';
import * as en from '@/src/translations/en.json';

const { t } = i18next;

// DISCLAIMER: The following type definitions have been generated with the help of ChatGPT.

// --- helper type: recursively flatten JSON object keys into "dot" notation ---
type DotPrefix<T extends string, U extends string> = U extends '' ? T : `${T}.${U}`;

type NestedKeys<T> = {
  [K in keyof T]: T[K] extends Record<string, any> ? DotPrefix<K & string, NestedKeys<T[K]>> : K & string;
}[keyof T];

type ValidKeys = NestedKeys<typeof en>;

// --- overloads with ValidKeys ---
export function translate<K extends ValidKeys>(key: K): string;
export function translate<K extends ValidKeys>(key: K, options: Parameters<typeof t>[1]): string;
export function translate<K extends ValidKeys>(key: K, defaultValue: string, options?: Parameters<typeof t>[2]): string;

// --- implementation (broad enough to satisfy all overloads) ---
export function translate(key: string, defaultValueOrOptions?: unknown, options?: unknown): string {
  // --- just forward to t ---
  return (t as any)(key, defaultValueOrOptions, options);
}
