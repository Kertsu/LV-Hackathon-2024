import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const signUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
  role: z.enum(["student", "provider"], { message: "Role must be either Provider or Student" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
