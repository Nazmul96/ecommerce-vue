<script setup>
import ProductLabel from './ProductLabel.vue';
import ProductPrice from './ProductPrice.vue';
import StarRating from './StarRating.vue';
</script>

<template>
    <div class="relative border border-grayLight rounded group transition duration-300">
        <div class="product-card-img">
            <router-link to="/single-product">
                <img src="@/assets/images/home/top-sales/demo-product-img.png" alt="">
            </router-link>
            
            <div class="action-buttons">
                <div class="flex items-center justify-center">
                    <button class="overflow-hidden bg-white px-4 py-2 transition duration-300 group/btn">
                        <font-awesome-icon :icon="['far', 'heart']" class="group-hover/btn:animate-btnIconSlide" />
                    </button>
                    <button class="overflow-hidden bg-primary text-white px-4 py-2 grow transition duration-300 group/btn">
                        <font-awesome-icon :icon="['fas', 'cart-plus']" class="group-hover/btn:animate-btnIconSlide" />
                    </button>
                    <button class="overflow-hidden bg-white px-4 py-2 transition duration-300 group/btn">
                        <font-awesome-icon :icon="['far', 'eye']" class="group-hover/btn:animate-btnIconSlide" />
                    </button>
                </div>
            </div>
            <ProductLabel />
        </div>

        <div class="p-4">
            <h3 class="product-title__small">
                <router-link to="/single-product">
                    Sony VAIO E Series 14-Inch Laptop
                </router-link>
            </h3>
            <div class="mt-2 mb-3">
                <StarRating />
            </div>
            <ProductPrice />
        </div>
    </div>
</template>

<style scoped>
.product-card-img {
    @apply h-[250px] relative bg-grayLight border-b border-grayLight group-hover:bg-textGray p-4 flex items-center overflow-hidden transition duration-300
}

.action-buttons {
    @apply absolute -bottom-36 group-hover:bottom-0 left-0 sm:left-5 md:left-0 right-0 opacity-100 group-hover:opacity-100 transition-all duration-300
}
</style>