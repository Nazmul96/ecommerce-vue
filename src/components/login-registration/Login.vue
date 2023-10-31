<script setup>
import router from '../../router/index.js';
import Button from '../common/Button.vue';
import {ref} from 'vue'
import { authStore } from '../../store/authStore';
const auth = authStore;


const username = ref('')
const password =  ref('')

</script>

<template>
    <section class="page-spacing">
        <div class="custom-container">
            <div class="p-6 m-auto bg-grayLight rounded space-y-4 md:space-y-6 sm:p-8 sm:max-w-md">
                <h1 class="text-xl font-bold text-heading md:text-2xl">
                    Sign in to account
                </h1>
                <form class="space-y-4 md:space-y-6">
                    <div>
                        <label for="email" class="block mb-2 font-medium">Your email</label>
                        <input autocomplete="off" type="email" name="email" id="email"
                            class="bg-white border border-borderLight focus:border-borderDark rounded block w-full p-2.5"
                            placeholder="name@company.com" v-model="username">
                    </div>

                    <div>
                        <label for="password" class="block mb-2 font-medium">Password</label>
                        <input autocomplete="off" type="password" name="password" id="password" placeholder="••••••••"
                            class="bg-white border border-borderLight focus:border-borderDark rounded block w-full p-2.5" v-model="password">
                    </div>

                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-x-3">
                            <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
                                class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                required>
                            <label for="remember" class="font-medium">Remember this device</label>
                        </div>
                        <a href="#" class="font-medium text-blue-600 hover:underline">Lost Password?</a>
                    </div>
                    <button type="button" class="btn btn-secondary w-full" @click="auth.authenticate(username,password)">Login to your account</button>
                    <p> Not registered yet?
                        <router-link to="/registration" class="font-semibold text-secondary underline">
                            Create an account
                        </router-link>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>