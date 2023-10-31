<script setup>
import Button from '../common/Button.vue';


</script>

<template>
    <section class="page-spacing">
        <div class="custom-container">
            <div class="p-6 m-auto bg-grayLight rounded space-y-4 md:space-y-6 sm:p-8 sm:max-w-md">
                <h1 class="text-xl font-bold text-heading md:text-2xl">
                    Create a new account
                </h1>
                <form class="space-y-4 md:space-y-6">
                    <div>
                        <label for="email" class="block mb-2 font-medium">Your email</label>
                        <input autocomplete="off" type="email" name="email" id="email"
                            class="bg-white border border-borderLight focus:border-borderDark rounded  block w-full p-2.5"
                            placeholder="name@company.com" required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 font-medium">Password</label>
                        <input autocomplete="off" type="password" name="password" id="password" placeholder="••••••••"
                            class="bg-white border border-borderLight focus:border-borderDark rounded  block w-full p-2.5"
                            required="">
                    </div>
                    <div>
                        <label for="confirm-password" class="block mb-2 font-medium">Confirm
                            password</label>
                        <input autocomplete="off" type="confirm-password" name="confirm-password" id="confirm-password"
                            placeholder="••••••••"
                            class="bg-white border border-borderLight focus:border-borderDark rounded  block w-full p-2.5"
                            required="">
                    </div>
                    <button class="btn btn-secondary w-full">Register</button>
                    <p> Already have an account?
                        <router-link to="/login" class="font-semibold text-secondary underline">
                            Login here
                        </router-link>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>