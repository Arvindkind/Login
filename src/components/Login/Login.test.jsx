
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, test, jest } from "@jest/globals";
import Login from "./Login";

describe("Login Component", () => {
  test("renders login form", () => {
    render(<Login />);
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign in with google/i })).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  test("shows error for invalid email", () => {
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "invalidemail" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "123456" } });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
  });

  test("shows error for short password", () => {
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "123" } });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument();
  });

  test("calls Google sign-in on button click", () => {
    window.alert = jest.fn();
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /sign in with google/i }));
    expect(window.alert).toHaveBeenCalledWith(expect.stringMatching(/google sign-in clicked/i));
  });
});