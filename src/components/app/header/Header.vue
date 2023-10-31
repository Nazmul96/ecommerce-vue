<script setup>

</script>

<template>
    <header class="sticky top-0 z-50 hidden md:block">
        <div class="bg-secondary p-4">
            <div class="custom-container">
                <div class="flex justify-between items-center">
                    <div>
                        <router-link to="/" class="text-white font-semibold text-2xl"><span
                                class="font-bold text-primary">E</span>com.</router-link>
                    </div>

                    <div class="flex w-[400px] lg:w-[600px]">
                        <input class="block rounded-l w-full p-2 pl-4 outline-none bg-grayLight"
                            placeholder="Search your products" autocomplete="off" value="">
                        <button class="bg-grayLight rounded-r border border-borderLight border-l-white px-4 py-2 text-base">
                            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </button>
                    </div>

                    <ul class="flex items-center gap-7 text-white text-base">
                        <li>
                            <router-link to="/login">
                                <font-awesome-icon :icon="['fas', 'user']" />
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/wishlist" class="relative">
                                <font-awesome-icon :icon="['far', 'heart']" />
                                <span class="count-number">1</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/cart" class="relative">
                                <font-awesome-icon :icon="['fas', 'cart-plus']" />
                                <span class="count-number">2</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="bg-secondary p-4 border-t border-borderDark">
            <div class="custom-container">
                <div class="flex justify-between items-center gap-4">
                    <div class="text-white flex gap-3 items-center">
                        <font-awesome-icon :icon="['fas', 'bars']" />
                        <a class="font-bold uppercase" href="#">Shop By Categories</a>
                    </div>
                    <nav class="flex items-center gap-4 lg:gap-7 font-semibold text-white">
                        <router-link to="/">Home</router-link>
                        <a href="#">Shop</a>
                        <a href="#">Categories</a>
                        <a href="#">About</a>
                        <router-link to="/contact">Contact</router-link>
                    </nav>
                    <div class="text-grayLight text-xs flex gap-2 items-center">
                        <font-awesome-icon :icon="['fas', 'mobile-screen-button']" />
                        <a href="#">(+84) 777 890 999</a>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>