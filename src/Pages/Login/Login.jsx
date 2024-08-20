import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Button from "../../Shared/Button";
import loginImage from '../../assets/login-img.png'
import Input from "../../Shared/Input";
import SocialButton from "../../Shared/SocialButton";
import googleLogin from '../../assets/google.svg'
import facebookLogin from '../../assets/facebook.svg'


const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Log in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-[#F3F3F3]">
                <div className="flex items-center">
                    <div className="flex-1">
                        <img className="lg:w-[800px]" src={loginImage} alt="" />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="w-4/5 lg:p-8 bg-white">
                            <h1 className="text-lg text-[#1D1D1B] font-bold">Welcome to xyz.com</h1>
                            <p className="text-[#1D1D1B] text-sm">Your Admin Dashboard</p>
                            <div className="divider my-8">or sign in with</div>
                            <div className="flex items-center justify-between my-4">
                                <SocialButton className={"text-[15px] font-[400] text-[#1D1D1B] px-4 py-2 flex items-center gap-2"}> <img className="w-5" src={googleLogin}></img> Sign in with Google</SocialButton>
                                <SocialButton className={"text-[15px] font-[400] text-[#1D1D1B] px-4 py-2 flex items-center gap-2"}><img className="w-5" src={facebookLogin}></img> Sign in with FB</SocialButton>
                            </div>
                            <form onSubmit={handleLogin}>
                                <div>
                                    <label className="label">
                                        <span className="text-[15px] font-medium text-[#1D1D1B]">Username</span>
                                    </label>
                                    <Input type="text" className="py-[7px]" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-[15px] font-medium text-[#1D1D1B]">Password</span>
                                    </label>
                                    <Input type="text" className="py-[7px]" />
                                </div>
                                <div className="my-5 flex justify-between items-center">
                                    <div className="flex items-center">
                                        <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                    <p><Link to='/register' className="text-blue-500">Forgot Password?</Link></p>
                                </div>
                                <div className="form-control mt-6">
                                    <Button className="px-4 py-[7px] text-white font-poppins">Login Now</Button>
                                </div>
                                <div>
                                    <p className="my-3"><span className="text-[15px] font-medium text-[#1D1D1B]">New to xyz.com?</span> <Link to='/register' className="text-blue-500">Create an account</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;