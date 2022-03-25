<template>
    <main class="About">

        <section class="About__block1 mt-130">
            <div class="d-flex fd-r aic">
                <div class="d-flex jcc flex-1">
                    <div class="circle pos-r">
                        <img class="pos-a" src="@/static/img/vadik.png" alt="vadik">
                    </div>
                </div>
                <div class="flex-1">
                    <img src="@/static/img/about_block1_1.svg" alt="about_block1_1">
                    <h1 class="fz-50 fw600 ttu white">Обо мне</h1>
                    <span class="fz-18 fw400 white">
                        Привет! Меня зовут Вадим и я программист 🙃 Родился в маленьком городе Марьина Горка, жил там до 18 лет. Самостоятельную жизнь начал в Минске, параллельно учась и работая. Сейчас являюсь действующим программистом в одной минской компании, занимаясь разработкой, поддержкой SPA приложений. В свободное время люблю играть в футбол, ездить на велосипеде, ходить в тренажерный зал.
                    </span>
                    <div class="d-flex fd-r flex-w">
                        <span
                            class="fz-16 fw400 white"
                            v-for="item in mySkills"
                            :key="item"
                            >
                            {{ item }}
                        </span>
                    </div>
                    <a href="resume.pdf" download>
                        <common-button>
                            <div class="d-flex aic c-gap-6">
                                <span class="material-icons-outlined fz-20 white">
                                    vertical_align_bottom
                                </span>
                                <span class="fz-16 white">RESUME</span>
                            </div>
                        </common-button>
                    </a>
                </div>
            </div>
        </section>

        <section class="About__block2 mt-130">
            <div class="d-flex fd-r jcc">
                <div class="flex-1 d-flex jcfe">
                    <span class="fz-30 fw600 white">Образование</span>
                </div>
                <div class="flex-1 d-flex jcfs">
                    <span class="fz-30 fw600 white">Опыт</span>
                </div>
            </div>
            <div class="d-flex fd-c pos-r w100">
                <div
                    class="d-flex fd-r m-0-auto"
                    :class="item.type == 'education' ? 'jcfs' : 'jcfe'"
                    v-for="item in myDescription"
                    :key="item.descr"
                    >
                    <div class="d-flex fd-c pos-r">
                        <span class="fz-14 fw400 white" v-html="item.date"></span>
                        <span class="fz-20 white" v-html="item.profession"></span>
                        <span
                            class="fz-16 fw400"
                            :class="item.type == 'education' ? 'blue' : 'orange'"
                            v-html="item.location"
                            ></span>
                        <span class="fz-14 white" v-html="item.descr">
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'Index',
        data: () => {
            return {

            }
        },
        computed: {
            mySkills() {
                return [
                    'HTML5',
                    'CSS3',
                    'Sass',
                    'JavaScript',
                    'Git',
                    'Vue.js',
                    'Vuex',
                    'NUXT.js',
                    'Vue Material',
                    'Vuetify',
                    'Vue Bootstrap'
                ]
            },
            myDescription() {
                return [
                    {
                        type: 'education',
                        date: '2021 год',
                        profession: 'Посадка верстки и создание тем на CMS WordPress',
                        location: 'Udemy',
                        descr: `Освоил работу с WordPress на примере 'посадки' многостраничного сайта на данную CMS. Познакомился немного с языком PHP.`
                    },
                    {
                        type: 'experience',
                        date: 'с 2021 года',
                        profession: 'Инженер-программист',
                        location: 'ЧУП ВалКонсалтБай',
                        descr: `Кроссбраузерная и адаптивная верстка.<br>
                        Разработка веб-сервисов с использованием Nuxt.js, Vue.js, Vuex.<br>
                        Поддержка и рефакторинг существующих проектов.
                        `
                    },
                    {
                        type: 'education',
                        date: '2021 год',
                        profession: 'Полный курс по JavaScript + React - с нуля по результата',
                        location: 'Udemy',
                        descr: `На курсе закрепил уже имеющиеся знания по JS и компонентный подход в разработке. Начал знакомство с React.`
                    },
                    {
                        type: 'experience',
                        date: '2019-2021',
                        profession: 'Сервис-менеджер',
                        location: '21vek',
                        descr: `Работа заключалась обработке поступающей на склад техники и передаче ее в соответсвующие сервисные центры для ремонта.`
                    },
                    {
                        type: 'education',
                        date: '2020 год',
                        profession: 'Курс Web-разработчик',
                        location: 'Udemy',
                        descr: `Окончил базовый курс по Web-разработке. Освоил адаптивную верстку и нативный JS. +попрактиковался с версткой HTML-писем. Курс дал хорошие базовые знания и навыки`
                    },
                    {
                        type: 'experience',
                        date: '2015-2018',
                        profession: 'Оператор видеокодирования',
                        location: 'РУП "Белпочта"',
                        descr: `Работа заключалась в обработке почтовых писем с помощью специальной программы. Под обработкой понимается считывание(физическое) содержимого письма и отправка по существующей базе данных.`
                    },
                    {
                        type: 'education',
                        date: '2013 - 2017 год',
                        profession: 'Техник-технолог',
                        location: 'Филиал БНТУ "МГПК" (Минск)',
                        descr: `Окончил колледж по специальности: "Технология машиностроения (по направлениям)". Получил крепкие знания по техническим наукам, а так же практику работы на крупных государственных предприятиях.`
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .About {
        &__block1 {
            .d-flex.fd-r.aic {
                .d-flex.jcc.flex-1 {
                    @include adaptive_value('margin-top', 0, 40, 1, 320);
                    .circle.pos-r {
                        border-radius: 50%;
                        background: $gradient;
                        @include adaptive_value('width', 350, 260, 1, 320);
                        @include adaptive_value('height', 350, 260, 1, 320);
                        .pos-a {
                            top: -60px;
                            left: 15px;
                            @include adaptive_value('max-width', 310, 226, 1, 320);
                        }
                    }
                }
                .flex-1 {
                    .fz-50 {
                        @include adaptive_value('margin-bottom', 10, 5, 1, 320);
                    }
                    .d-flex.fd-r.flex-w {
                        @include adaptive_value('margin-top', 25, 15, 1, 320);
                        @include adaptive_value('gap', 15, 10, 1, 320);
                        .fz-16.fw400.white {
                            padding: 4px 10px;
                            border: 1px solid $blue;
                            border-radius: 5px;
                            user-select: none;
                        }
                    }
                    .CommonButton {
                        @include adaptive_value('margin-top', 30, 25, 1, 320);
                    }
                }
            }
        }
        &__block2 {
            .d-flex.fd-r.jcc {
                @include adaptive_value('column-gap', 80, 30, 1, 320);
                .flex-1.d-flex {
                    .fz-30.fw600.white {
                        position: relative;
                        &::after {
                            content: '';
                            position: absolute;
                            bottom: -3px;
                            left: 0;
                            width: 40px;
                            height: 3px;
                            border-radius: 1px;
                            background: $blue;
                        }
                    }
                    &:nth-child(2) {
                        .fz-30.fw600.white {
                            &::after {
                                background: $orange;
                            }
                        }
                    }
                }
            }
            .d-flex.fd-c.pos-r.w100 {
                @include adaptive_value('margin-top', 40, 20, 1, 681);
                @include adaptive_value('row-gap', 25, 15, 1, 320);
                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-2px);
                    width: 4px;
                    height: 100%;
                    background: white;
                    border-radius: 2px;
                }
                .d-flex.fd-r.m-0-auto {
                    width: 70%;
                    .d-flex.fd-c.pos-r {
                        width: calc(50% - 40px);
                        @media(max-width: 1400px) {
                            width: calc(50% - calc(15px + 25 * ((100vw - 320px) / (1400 - 320))));
                        }
                        &:after {
                            content: '';
                            position: absolute;
                            top: 0;
                            border-radius: 50%;
                            border: 3px solid white;
                            z-index: 1;
                            @include adaptive_value('width', 20, 15, 1, 320);
                            @include adaptive_value('height', 20, 15, 1, 320);
                        }
                        .fz-16.fw400 {
                            margin: 5px 0;
                        }
                    }
                }
                .d-flex.fd-r.m-0-auto.jcfs {
                    .d-flex.fd-c.pos-r {
                        text-align: right;
                        &::after {
                            background: $blue;
                            @include adaptive_value('right', -53, -35, 1, 681);
                        }
                    }
                }
                .d-flex.fd-r.m-0-auto.jcfe {
                    .d-flex.fd-c.pos-r {
                        text-align: left;
                        &::after {
                            background: $orange;
                            @include adaptive_value('left', -53, -35, 1, 681);
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 860px) {
        .About {
            &__block1 {
                .d-flex.fd-r.aic {
                    flex-direction: column;
                    @include adaptive_value('row-gap', 80, 50, 4, 320);
                    .flex-1 {
                        text-align: center;
                        img[alt=about_block1_1] {
                            display: none;
                        }
                        .d-flex.fd-r.flex-w {
                            justify-content: center;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 680px) {
        .About {
            &__block2 {
                .d-flex.fd-r.jcc {
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        background: white;
                        border-radius: 2px;
                        bottom: -30px;
                        left: 0;
                        height: 4px;
                        width: 100%;
                    }
                    .flex-1.d-flex {
                        flex: unset;
                    }
                }
                .d-flex.fd-c.pos-r.w100 {
                    flex-direction: row;
                    overflow: hidden;
                    overflow-x: auto;
                    margin: 0;
                    @include scroll_dark;
                    @include adaptive_value('column-gap', 30, 20, 4, 320);
                    @include adaptive_value('padding-top', 30, 20, 4, 320);
                    @include adaptive_value('padding-bottom', 10, 5, 4, 320);
                    &::after {
                        content: unset;
                    }
                    .d-flex.fd-r.m-0-auto {
                        width: 100%;
                        @include adaptive_value('min-width', 300, 200, 4, 320);
                        @include adaptive_value('margin-top', 30, 35, 4, 320);
                        .d-flex.fd-c.pos-r {
                            width: 100%;
                        }
                    }
                    .d-flex.fd-r.m-0-auto.jcfs {
                        .d-flex.fd-c.pos-r {
                            text-align: left;
                            &::after {
                                right: unset;
                                @include adaptive_value('top', -42, -38, 4, 320);
                            }
                        }
                    }
                    .d-flex.fd-r.m-0-auto.jcfe {
                        .d-flex.fd-c.pos-r {
                            &::after {
                                left: unset;
                                @include adaptive_value('top', -42, -38, 4, 320);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
