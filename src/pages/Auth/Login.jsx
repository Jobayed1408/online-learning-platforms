import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import axiosInstance from "../../components/axiosInstance";
import toast from "react-hot-toast";
import { LogInIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext)

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
    .then( async (result) => {
      toast.success("login successfully!");
      const user = result.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        createdAt: new Date(),
      };
      await axiosInstance.post('/users', userData)
      navigate(location.state || "/");
    })
    .catch((error) => {
      toast.error(error.message, { id: "create-user" });
    });
      
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error)
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto m-1 max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
   
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
               className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn text-white mt-4 rounded-full btn-primary">
            <LogInIcon size={20} /> Login
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5]"
        >
          <FcGoogle />
          Login with Google
        </button>
        <p className="text-center">
          New to our website? Please  <Link
            className="text-blue-500 hover:text-blue-800"
            to="/auth/register"
          >
             Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
