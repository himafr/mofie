import '@testing-library/jest-dom';

// Minimal matchMedia mock for tests (some components use it)
if (typeof window !== 'undefined' && !window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}

// Polyfill TextEncoder/TextDecoder for environments where they are not available (Jest/node)
if (typeof (global as any).TextEncoder === 'undefined') {
  try {
    (global as any).TextEncoder = require('util').TextEncoder;
  } catch (e) {
    // ignore
  }
}
if (typeof (global as any).TextDecoder === 'undefined') {
  try {
    (global as any).TextDecoder = require('util').TextDecoder;
  } catch (e) {
    // ignore
  }
}
