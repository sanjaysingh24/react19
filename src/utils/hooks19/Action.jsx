import { useActionState } from "react";

export default function Action() {
  const [state, login] = useActionState(
    async (prevState, formData) => {
      const email = formData.get("email");
      const password = formData.get("password");

      // Fake delay
      await new Promise((res) => setTimeout(res, 5000));

      // Validations
      if (!email) throw new Error("Email is required");
      if (password !== "123") throw new Error("Invalid password");

      // SUCCESS RESPONSE must be returned
      return {
        success: true,
        message: "Login successful",
        email,
        time: new Date().toLocaleTimeString(),
      };
    },
    null
  );

  return (
    <>
      <h2>Login Form</h2>

      <form action={login}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />

        <button type="submit" disabled={state?.pending}>
          {state?.pending ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* ERROR UI */}
      {state?.error && (
        <p style={{ color: "red" }}>
          ❌ {state.error.message}
        </p>
      )}

      {/* SUCCESS UI */}
      {state?.data?.success && (
        <p style={{ color: "green" }}>
          ✅ {state.data.message}! Welcome {state.data.email}  
          <br />
          Logged in at: {state.data.time}
        </p>
      )}
    </>
  );
}
