import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/FormSchema/registerschema";

function Register() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit1(data) {
        console.log(data);
        alert("register succes");
        navigate("/", { state: data });
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Create Account
                </h1>

                <form onSubmit={handleSubmit(onSubmit1)} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Name
                        </label>

                        <input placeholder="Enter your name" type="text" {...register("name")} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                        <p className="text-red-500 text-sm mt-1">
                            {errors.name?.message}
                        </p>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>

                        <input placeholder="Enter your email" type="email" {...register("email")} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.email?.message}
                        </p>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>

                        <input placeholder="Enter your password" type="password" {...register("password")} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                        <p className="text-red-500 text-sm mt-1">
                            {errors.password?.message}
                        </p>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Age
                        </label>

                        <input placeholder="Enter your age" type="number" {...register("age")} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        <p className="text-red-500 text-sm mt-1">
                            {errors.age?.message}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Register
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Register;