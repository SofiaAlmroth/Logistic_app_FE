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
    <div className="grid grid-rows-2 w-full h-full justify-items-center items-center">
      <h1 className="text-4xl">Profile</h1>
      <div className="avatar mb-2">
        <div className="w-28 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <div className="card-shrink-0 shadow-xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-base text-center mb-3">Personal information</h1>
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
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
