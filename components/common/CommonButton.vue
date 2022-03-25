<template>
    <button
        :disabled="disabled"
        class="CommonButton"
        >
        <slot name="default"></slot>
    </button>
</template>

<script>
    export default {
        name: 'CommonButton',
        methods: {
        },
        props: {
            disabled: {
                type: Boolean,
                required: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .CommonButton {
        user-select: none;
        background: $blue;
        box-shadow: 0 2px 5px $blue;
        transition: transform .3s, box-shadow .3s;
        @include adaptive_value('height', 48, 38, 1, 320);
        @include adaptive_value('padding-right', 32, 16, 1, 320);
        @include adaptive_value('padding-left', 32, 16, 1, 320);
        @include adaptive_value('border-radius', 8, 5, 1, 320);
        @media(min-width: 1201px) {
            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 3px 10px $blue;
                transition: transform .3s, box-shadow .3s;
            }
        }
    }
</style>
