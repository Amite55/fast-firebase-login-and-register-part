import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Register = () => {


    const {createUser} = useContext(AuthContext);
    // console.log(createUser)

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error)
        })
    }

    return (
        <div className="hero min-h-[600px] bg-base-200">
        <div className="hero-content w-full flex-col bg-gradient-to-r rounded-lg from-green-500 to-blue-700">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary">Registraition now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SingUp</button>
              </div>
            </form>
            <p className="text-center">Already have an account? please <Link className="underline" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;