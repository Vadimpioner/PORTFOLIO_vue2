<template>
    <main class="Works">
        <section class="Works__block1 mt-130">
            <h1 class="fz-50 fw600 ttu tac white">Мои работы</h1>
            <div class="d-grid">
                <div
                    class="d-inline-f pos-r"
                    v-for="item in myWorks"
                    :key="item.img"
                    >
                    <a
                        :href="item.link"
                        class="w100 lh-0"
                        target="_blank"
                        >
                        <img
                            :src="require('@/static/img/page_works/' + item.img)"  alt="byfax_img"
                            >
                    </a>
                    <span
                        class="material-icons pos-a blue c-p"
                        @click="seeDescrMyWorks(item)"
                        >
                        help
                    </span>
                </div>
            </div>
        </section>
        <common-modal
            :active="showGlobalModal"
            :modalData="modalMyWorks"
            @close-modal="CloseGlobalModal(modalMyWorks[0])"
            >
            <template #body>
                <span
                    class="fz-16 white fw400"
                    v-html="modalMyWorks[0].descr"
                    >
                    </span>
            </template>
        </common-modal>
    </main>
</template>

<script>
    export default {
        name: 'Index',
        data: () => {
            return {
                showGlobalModal: false,
                modalMyWorks: [],
            }
        },
        methods: {
            seeDescrMyWorks(item) {
                this.showGlobalModal = true;
                this.modalMyWorks.push(item)
                // console.log(item);
                // console.log(this.modalMyWorks);
            },
            CloseGlobalModal(remove) {
                this.modalMyWorks = this.modalMyWorks.filter(item => item !== remove);
                this.showGlobalModal = false
                // console.log(remove);
            }
        },
        computed: {
            myWorks() {
                return [
                    {
                        img: 'byfax_biz_new.png',
                        link: 'http://beta-public.byfax.biz/',
                        descr: 'В текущий момент работаю над этим проектом. Данный проект является редизайном уже существующего сайта.<br>Основные работы - это: <br>1.Верстка страниц, <br>2.Написание фронтовой логики, <br>3.Перенос/рефакторинг кода со старого сайта(он на базе Vue.js) на новый <br><br>Логин / Пароль (beta / beta)'
                    },
                    {
                        img: 'portal_new.png',
                        link: 'http://beta-portal.byfax.biz/',
                        descr: 'Данный проект находиться в полу-замороженном состоянии из-за смены приоритетов в компании. Также является редизайном уже существующего сайта.<br>Основные работы - это: <br>1.Верстка страниц с использованием ui-библиотеки Vue Material, <br>2.Написание фронтовой логики <br><br>Логин / Пароль (beta / beta)'
                    },
                    {
                        img: 'byfax_biz_old.png',
                        link: 'https://byfax.biz/ru/for-windows',
                        descr: 'Это действующий сайт. Задачи были в основном по верстке новых страниц и изменение старых.'
                    },
                    {
                        img: 'byfax_by_old.png',
                        link: 'https://byfax.by/ru/for-windows',
                        descr: 'Это действующий сайт. Задачи были в основном по верстке новых страниц и изменение старых.'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Works {
        &__block1 {
            .d-grid {
                grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
                @include adaptive_value('grid-auto-rows', 370, 270, 1, 320);
                @include adaptive_value('gap', 25, 10, 1, 320);
                @include adaptive_value('margin-top', 80, 20, 1, 320);
                @media(max-width: 1400px) {
                    grid-template-columns: repeat(auto-fit, minmax(calc(270px + 100 * ((100vw - 320px) / (1400 - 320))), 1fr));
                }
                .d-inline-f.pos-r {
                    border: 5px solid $basic;
                    border-radius: 10px;
                    overflow: hidden;
                    &:first-child {
                        grid-row: 1 / 3;
                    }
                    &:nth-child(2) {
                        grid-column: 2 / 4;
                    }
                    img {
                        width: 100%;
                        opacity: .9;
                        transition: transform .3s;
                        height: 100%;
                        object-fit: cover;
                    }
                    .material-icons.pos-a.blue.c-p {
                        @include adaptive_value('font-size', 50, 40, 1, 320);
                        right: 10px;
                        top: 10px;
                        transition: opacity .3s, top .3s;
                    }
                    @media(min-width: 1201px) {
                        .material-icons.pos-a.blue.c-p {
                            opacity: 0;
                            pointer-events: none;
                            top: -10px;
                        }
                        &:hover {
                            img {
                                transform: scale(1.2);
                                transition: transform .3s;
                            }
                            .material-icons.pos-a.blue.c-p {
                                top: 10px;
                                pointer-events: initial;
                                opacity: 1;
                                transition: opacity .3s, top .3s, color .3s;
                                &:hover {
                                    color: $orange !important;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 1150px) {
        .Works {
            &__block1 {
                .d-grid {
                    .d-inline-f.pos-r {
                        &:first-child {
                            grid-row: initial;
                        }
                        &:nth-child(2) {
                            grid-column: initial;
                        }
                    }
                }
            }
        }
    }
</style>
