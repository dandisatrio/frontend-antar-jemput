import { render, screen } from "@testing-library/react";

import Dashboard from "./component/Dashboard/Dashboard";
import TransactionNew from "./component/Transaction/TransactionNew";

test("renders teks", () => {
    
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

  render(<Dashboard />);
  const linkElement = screen.getByText("Halo, Customer !");
  expect(linkElement).toBeInTheDocument();
});

describe("Check containt on Dashboard", () => {
  test("checking Card", () => {
    Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
    });

    render(<Dashboard />);

    expect(screen.getByTestId("checkCard")).toContainElement(screen.getByTestId("checkRow"));
  });
});

describe("Check class on container", () => {
  test("checking class", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<Dashboard />);

    expect(screen.getByTestId("dashboardContainer")).toHaveClass("container", { exact: true });
  });
});

describe("Check have text this content", () => {
  test("checking text content", () => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
        })),
    });

    render(<Dashboard />);

    expect(screen.getByTestId("textContent")).toHaveTextContent("transaksi");
  });
});

describe("Check have value input", () => {
  test("checking value input", () => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
        })),
    });

    render(<TransactionNew />);

    expect(screen.getByTestId("inputNumber")).toHaveValue(0);
  });
});