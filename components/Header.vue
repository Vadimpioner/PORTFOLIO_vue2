<template>
    <header class="Header">
        <div class="d-flex fd-r">
            <img loading="eager" src="../static/img/logo.png" alt="logo">
            <span class="fz-20 fw600 font_bungee">Vadim<br>Kanash</span>
        </div>
        <div class="d-flex fd-r">
            <button
                class="this_button"
                :class="{active: toggleOnMobile}"
                @click="toggleOnMobile =! toggleOnMobile"
                >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <transition
                name="accordion"
                @enter="start"
                @after-enter="end"
                @before-leave="start"
                @after-leave="end"
                >
                <nav
                    class="d-flex fd-r"
                    v-if="toggleOnMobile"
                    @click="closeMobileMenu()"
                    >
                    <div
                        class="this_theme c-p u-select"
                        @click="nightMode = !nightMode"
                        >
                        <span
                            class="material-icons-outlined white"
                            v-show="nightMode"
                            >
                            dark_mode
                        </span>
                        <span
                            class="material-icons yellow"
                            v-show="!nightMode"
                            >
                            light_mode
                        </span>
                    </div>
                    <NuxtLink to="/" class="fz-20 white fw500 font_josefin" @click.native="closeMobileMenu()">About</NuxtLink>
                    <NuxtLink to="/works" class="fz-20 white fw500 font_josefin" @click.native="closeMobileMenu()">Works</NuxtLink>
                </nav>
            </transition>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data: () => {
            return {
                nightMode: true,
                toggleOnMobile: true,
            }
        },
        methods: {
            onResize() {
                this.toggleOnMobile = document.documentElement.clientWidth <= 680 ? false : true;
            },
            start(el) {
                el.style.height = el.scrollHeight + "px";
            },
            end(el) {
                el.style.height = '';
            },
            closeMobileMenu() {
                if(document.documentElement.clientWidth <= 680) {
                    this.toggleOnMobile = false
                }
            }
        },
        watch: {
            nightMode: function(val) {
                localStorage.setItem('nightMode', JSON.stringify(this.nightMode))
                this.$emit('night-mode', val)
            }
        },
        mounted() {
            this.nightMode = JSON.parse(localStorage.getItem('nightMode')),
            window.addEventListener('resize', this.onResize);
            this.onResize();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResize);
        },
    }
</script>

<style lang="scss" scoped>
    .Header {
        display: flex;
        background: $black;
        justify-content: space-between;
        align-items: center;
        z-index: 5;
        @include adaptive_value('height', 75, 60, 1, 320);
        @include adaptive_value('padding-right', 29, 16, 1, 320);
        img {
            @include adaptive_value('max-width', 60, 45, 1, 320);
        }
        .d-flex.fd-r {
            @include adaptive_value('column-gap', 20, 15, 1, 320);
            align-items: flex-start;
            .this_button {
                height: 30px;
                display: none;
                flex-direction: column;
                justify-content: center;
                row-gap: 6px;
                box-sizing: initial;
                cursor: pointer;
                span {
                    transition: transform .3s;
                    background: $gradient;
                    width: 34px;
                    height: 3px;
                    border-radius: 3px;
                    &:nth-child(2) {
                        transition: width, opacity, transform .3s;
                    }
                }
            }
            .this_button.active {
                span {
                    transition: transform .3s;
                    &:first-child {
                        transform: translateY(10px) rotate(45deg);
                    }
                    &:nth-child(2) {
                        width: 0;
                        opacity: 0;
                        transform: translateX(-50%);
                    }
                    &:last-child {
                        transform: translateY(-8px) rotate(-45deg);
                    }
                }
            }
            .fz-20.fw600 {
                color: transparent;
                user-select: none;
                background: linear-gradient(90deg, #ffffff 5%, #0095B7 42%, #008dc3 72%, #ffffff 90%);
                animation: 15s linear 10s infinite running gradient;
                background-size: 400%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                @keyframes gradient {
                    0% {
                        background-position: 80% 0%;
                    }
                    50% {
                        background-position: 20% 100%;
                    }
                    100% {
                        background-position: 80% 0%;
                    }
                }
            }
            a {
                position: relative;
                transition: color .3s;
                &::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    border-radius: 1px;
                    right: 50%;
                    bottom: 0;
                    background: $blue;
                    transition: width .3s, right .3s;
                }
                @media(min-width: 1201px) {
                    &:hover {
                        color: $blue;
                        transition: color .3s;
                        &::after {
                            width: 100%;
                            right: 0;
                            transition: width .3s, right .3s;
                        }
                    }
                }
            }
            .nuxtLinkActive {
                color: $blue;
                pointer-events: none;
                &::after {
                    right: 0;
                    width: 100%;
                }
            }
            .this_theme.c-p {
                .material-icons.yellow {
                    transition: transform .7s;
                    @media(min-width: 1201px) {
                        &:hover {
                            transform: rotate(90deg);
                            transition: transform .7s;
                        }
                    }
                }
                .material-icons-outlined.white {
                    transition: transform .7s;
                    @media(min-width: 1201px) {
                        &:hover {
                            transform: rotate(-15deg);
                            transition: transform .7s;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 680px) {
        .Header {
            .d-flex.fd-r {
                position: relative;
                .this_button {
                    display: flex;
                }
                .d-flex.fd-r {
                    position: absolute;
                    flex-direction: column;
                    align-items: center;
                    right: 0;
                    top: 45px;
                    z-index: 5;
                    padding: 20px 0;
                    @include adaptive_value('row-gap', 20, 15, 5, 320);
                    @include adaptive_value('width', 400, 272, 5, 320);
                    &::before {
                        content: "";
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: transparent;
                        background-image: $gradient;
                        opacity: 0.9;
                        z-index: -1;
                        @include adaptive_value('border-radius', 15, 10, 5, 320);
                    }
                    .this_theme {
                        .material-icons-outlined, .material-icons {
                            font-size: 50px;
                        }
                    }
                    .fz-20.white.fw500 {
                        font-size: 30px;
                        font-weight: 600;
                    }
                    a {
                        &::after {
                            background: white;
                        }
                    }
                    .nuxtLinkActive {
                        color: white;
                        &::after {
                            background: white;
                        }
                    }
                }
            }
        }
    }
</style>
