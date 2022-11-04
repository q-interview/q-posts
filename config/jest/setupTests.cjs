require("@testing-library/jest-dom/extend-expect");
jest.setTimeout(10 * 1000);

class MockIntersectionObserver {
  constructor() {
    this.root = null;
    this.rootMargin = "";
    this.thresholds = [];
    this.disconnect = () => null;
    this.observe = () => null;
    this.takeRecords = () => [];
    this.unobserve = () => null;
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});
