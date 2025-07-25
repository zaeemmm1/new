import  { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-indigo-600 text-white rounded-lg text-lg font-semibold transition-all hover:bg-indigo-700 focus:outline-none mb-4"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between mb-6">
          <hr className="w-full border-t border-gray-300" />
          <span className="text-gray-500 px-2">or</span>
          <hr className="w-full border-t border-gray-300" />
        </div>

        {/* OAuth Buttons */}
        <div className="flex gap-4">
          <button className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 bg-white text-gray-800 hover:bg-gray-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" className="w-5" />
            <span>Login with Google</span>
          </button>
          <button className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 bg-white text-gray-800 hover:bg-gray-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" className="w-5" />
            <span>Login with GitHub</span>
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {"Don't"} have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
