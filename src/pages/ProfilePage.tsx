import { useForm } from "react-hook-form";
import authService from "../services/authService";
import { UserUpdate } from "../types";
import { updateUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<UserUpdate>({
    defaultValues: authService.getCurrentUser() || {},
  });

  function onSubmit(data: UserUpdate) {
    console.log("submitted", data);
    updateUser(data);
    navigate("/login");
  }

  return (
    <div className="grid justify-items-center ">
      <h1>Profile</h1>

      <div className="card shadow-xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div>
            <label className="input input-bordered flex items-center mb-3 gap-2">
              Name
              <input {...register("name")} type="text" className="input-500" />
            </label>
            <label className="input input-bordered flex items-center mb-3 gap-2">
              Email
              <input
                {...register("email")}
                type="email"
                className="input-500"
              />
            </label>
            <label className="input input-bordered flex items-center mb-3 gap-2">
              Password
              <input
                {...register("password")}
                type="password"
                className="input-500"
              />
            </label>
          </div>
          <button className="custom-button">Save</button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
