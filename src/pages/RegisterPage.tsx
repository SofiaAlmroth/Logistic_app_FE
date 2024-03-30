function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center ">
      <h1 className="text-5xl font-bold mb-5">Register</h1>
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input placeholder="name" className="input input-bordered" />
            </div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
