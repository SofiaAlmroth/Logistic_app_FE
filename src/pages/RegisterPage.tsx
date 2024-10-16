import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { user } from "@services";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(3, { message: "Name is too short" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(5, { message: "Password is too short" }),
});

type FormData = z.infer<typeof schema>;

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  async function onSubmit(data: FormData) {
    console.log("Submitted", data);
    try {
      const { headers } = await user.register(data);

      const token = headers["x-auth-token"];
      localStorage.setItem("token", token);
      navigate("/inventory");
    } catch (error: any) {
      if (error.response.status === 400) {
        toast.error("User already exists");
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center ">
      <h1 className="text-5xl font-bold mb-5">Register</h1>
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-error p-1">{errors.name.message}</p>
              )}
            </div>
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
            Already have an account?{" "}
            <NavLink to="/login" className="hyperlink">
              <strong>Login</strong>
            </NavLink>
          </p>

          <div className="form-control mt-6">
            <button className="custom-button" disabled={!isValid}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
