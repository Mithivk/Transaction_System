
<div class="max-w-7xl mx-auto mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden">

    <div class="grid lg:grid-cols-2">

        <!-- LEFT LOGIN SECTION -->
        <div class="flex flex-col justify-between p-8 lg:p-16">

            <!-- Login Form -->
            <div class="max-w-md mx-auto w-full">

                <h1 class="text-5xl font-bold text-center mb-3">
                    Welcome Back
                </h1>

                <p class="text-gray-500 text-center mb-10">
                    Sign in to access your banking account securely.
                </p>

                <form>

                    <!-- Email -->
                    <div class="mb-5">
                        <label class="block text-sm font-medium mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="john@example.com"
                            class="w-full h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                    </div>

                    <!-- Password -->
                    <div class="mb-5">
                        <label class="block text-sm font-medium mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            class="w-full h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-4 mb-6">

                        <button
                            type="submit"
                            class="flex-1 h-12 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                        >
                            Login
                        </button>

                        <button
                            type="reset"
                            class="flex-1 h-12 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
                        >
                            Clear
                        </button>

                    </div>
                </form>
            </div>
        </div>

        <!-- RIGHT BANKING DASHBOARD -->
        <div class="bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-600 relative overflow-hidden hidden lg:block">

            <!-- Decorative Shapes -->
            <div class="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/5"></div>
            <div class="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5"></div>

            <div class="relative z-10 p-8 text-white">

                <h2 class="text-5xl font-bold leading-tight mb-5">
                    Manage Your Finances
                    <br>
                    Anytime, Anywhere
                </h2>

                <p class="text-white/80 text-lg mb-10 max-w-xl">
                    Securely access your accounts, transfer funds,
                    pay bills, and monitor transactions from one place.
                </p>

                <!-- Banking Dashboard -->
                <div class="relative">

                    <!-- Cards -->
                    <div class="grid grid-cols-3 gap-4">

                        <div class="col-span-2 bg-white rounded-2xl p-5 shadow-xl text-gray-900">
                            <p class="text-gray-500 text-sm">
                                Available Balance
                            </p>

                            <h3 class="text-3xl font-bold mt-2">
                                ₹8,45,620
                            </h3>

                            <p class="text-green-600 text-sm mt-2">
                                +4.8% this month
                            </p>
                        </div>

                        <div class="bg-white rounded-2xl p-5 shadow-xl text-gray-900">
                            <p class="text-gray-500 text-sm">
                                Savings
                            </p>

                            <h3 class="text-2xl font-bold mt-2">
                                ₹2.1L
                            </h3>
                        </div>

                        <div class="bg-white rounded-2xl p-5 shadow-xl text-gray-900">
                            <p class="text-gray-500 text-sm">
                                Income
                            </p>

                            <h3 class="text-2xl font-bold mt-2">
                                ₹1.25L
                            </h3>

                            <p class="text-green-600 text-sm mt-2">
                                +12%
                            </p>
                        </div>

                        <div class="bg-white rounded-2xl p-5 shadow-xl text-gray-900">
                            <p class="text-gray-500 text-sm">
                                Expenses
                            </p>

                            <h3 class="text-2xl font-bold mt-2">
                                ₹48.2K
                            </h3>

                            <p class="text-red-500 text-sm mt-2">
                                -8%
                            </p>
                        </div>

                        <div class="bg-white rounded-2xl p-5 shadow-xl text-gray-900">
                            <p class="text-gray-500 text-sm">
                                Investments
                            </p>

                            <h3 class="text-2xl font-bold mt-2">
                                ₹3.75L
                            </h3>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>

</div>
