
<template>
    <section class="section-padding">
        <div class="relative max-w-4xl m-auto">
            <input type="radio" name="tabs" value="1" id="tab-one" class="peer/tab-one" checked />
            <input type="radio" name="tabs" value="2" id="tab-two" class="peer/tab-two" />
            <input type="radio" name="tabs" value="3" id="tab-three" class="peer/tab-three" />

            <div class="tabs-buttons flex justify-center gap-4 mb-5">
                <label for="tab-one">Description</label>
                <label for="tab-two">Specification</label>
                <label for="tab-three">Reviews (0)</label>
            </div>

            <div class="hidden peer-checked/tab-one:block">
                <p>
                    A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash
                    storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a
                    revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine,
                    MacBook Pro with Retina display gives you the power to create.
                </p>
                <p class="mt-5">
                    A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast
                    flash storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a
                    revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine,
                    MacBook Pro with Retina display gives you the power to create.
                </p>
            </div>
            <div class="hidden peer-checked/tab-two:block">
                <p>
                    A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash
                    storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a
                    revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine,
                    MacBook Pro with Retina display gives you the power to create.
                </p>
            </div>
            <div class="hidden peer-checked/tab-three:block">
                <p>Reviews will be add here!</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
input[type="radio"] {
    @apply absolute opacity-0 transition-all
}

label {
    @apply px-5 py-2 bg-transparent text-heading border border-borderLight rounded-full font-medium cursor-pointer transition-all duration-300
}

#tab-one:checked~.tabs-buttons label:first-child,
#tab-two:checked~.tabs-buttons label:nth-child(2),
#tab-three:checked~.tabs-buttons label:last-child {
    @apply bg-heading text-white border-heading
}
</style>