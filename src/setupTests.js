import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import 'jest-environment-jsdom';

// Configure testing-library
configure({
  testIdAttribute: 'data-testid',
  // Set timeout for async events
  asyncUtilTimeout: 1000,
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Suppress console errors during tests
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

// Add any Jest setup code here if needed
// For example, importing custom matchers or configuring global settings