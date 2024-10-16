import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "@services";

const schema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type FormData = z.infer<typeof schema>;

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  async function onSubmit(data: FormData) {
    console.log("Submitted", data);

    try {
      const { data: jwt } = await auth.login(data);
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
    } catch (error: any) {
      if (error.response.status === 400) {
        toast.error("Invalid email or password");
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center ">
      <h1 className="text-5xl font-bold mb-5">Login</h1>
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-error p-1">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-error p-1">{errors.password.message}</p>
            )}
          </div>
          <p>
            Don't have an account?{" "}
            <NavLink to="/register" className="hyperlink">
              <strong>Register</strong>
            </NavLink>
          </p>
          <div className="form-control mt-6">
            <button className="custom-button" disabled={!isValid}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
