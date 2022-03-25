<template>
    <div
        class="TEMPLATE"
        :class="nightMode  ? 'theme-dark' : 'theme-light'"
        >
        <div
            class="container"
            >
            <Header
                style="flex: 0 0 auto"
                @night-mode='localNightMode'
                />
            <div class="TEMPLATE__wrapper">
                <transition name="fade">
                    <Nuxt style="flex: 1 0 auto"/>
                </transition>
                <Footer
                    v-if="$route.path == '/'"
                    style="flex: 0 0 auto"
                    />
            </div>
        </div>
    </div>
</template>


<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
    components: {
        Header,
        Footer,
    },
    data: () => {
        return {
            nightMode: true
        }
    },
    methods: {
        localNightMode(val) {
            this.nightMode = val
        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>

.TEMPLATE {
    height: 100vh;
    display: flex;
    justify-content: center;
    background: $gradient;
    overflow: auto;
    @include adaptive_value('padding', 30, 10, 1, 681);
    &__wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        overflow-y: auto;
        height: calc(100% - 75px);
        @include scroll_dark;
        @include adaptive_value('padding-right', 10, 5, 1, 320);
        @media(max-width: 1400px) {
            height: calc(100% - calc(60px + 15 * ((100vw - 320px) / (1400 - 320))));
        }
    }
    .container {
        max-width: 1400px;
        width: 100%;
        height: 100%;
        min-height: 500px;
        background: $black;
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);
        overflow: hidden;
        @include adaptive_value('border-radius', 15, 10, 1, 320);
        @include adaptive_value('padding-bottom', 30, 10, 1, 681);
        @include adaptive_value('padding-right', 11, 3, 1, 681);
        @include adaptive_value('padding-left', 30, 10, 1, 681);
    }
}
@media(max-width: 680px) {
    .TEMPLATE {
        padding: 10px;
        .container {
            padding: 0 4px 10px 10px;
        }
    }
}
</style>
