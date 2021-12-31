<template>
    <div>
        <div class="relative">
            <component
                v-if="_icon && showLeft"
                :is="_icon"
                size="16"
                class="absolute t-none b-none l-2 my-auto"
            ></component>
            <div
                v-if="textIcon && showLeft"
                class="absolute t-none b-none l-4 txt-s-6 my-auto flex align-center"
            >{{ textIcon }}</div>
            <input v-bind="$attrs" :class="__class" :type="type" v-model="value.value" />
            <component
                v-if="_icon && !showLeft"
                @click="iconClicked"
                :is="_icon"
                size="22"
                class="absolute t-none b-none my-auto r-4"
            ></component>
        </div>
        <p v-if="label && !value.error" class="txt-c-black-100 txt-s-3 mt-1 txt-bold">{{ label }}</p>
        <p v-if="value.error" class="txt-c-red txt-s-3 mt-1 txt-bold">{{ value.error }}</p>
    </div>
</template>

<script lang="ts">
// import EyeCloseIcon from "../icons/eye-close-icon.vue";
// import EyeOpenIcon from "../icons/eye-open-icon.vue";

export default {
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            default: () => ({
                error: null,
                value: null,
            }),
        },
        icon: {
            type: Object,
        },
        label: {
            type: String,
        },
        size: {
            type: String,
            default: "medium",
        },
        full: {
            type: Boolean,
            default: false,
        },
        bordered: {
            type: Boolean,
            default: false,
        },
        showLeft: {
            type: Boolean,
            default: false,
        },
        textIcon: {
            type: String,
        }
    },
    setup(props, context) {
        let base = "txt-bold bd-round-1 bg-white txt-c-grey-400 bd-none ";
        let sizes = {
            small: "py-2 px-4",
            medium: "py-4 px-6",
            big: "py-6 px-8",
            large: "py-6 px-10 txt-s-6 "
        };

        let __class = computed(() => {
            let __base = base + (sizes[props.size] ?? sizes["medium"]);
            if (props.full) {
                __base += ' w-full';
            }
            if (props.bordered) {
                __base += ' bd-px bd-c-light-grey '
            }
            if (props.showLeft) {
                __base += ' w-full min-w-70 pl-8 txt-light txt-c-li-grey'
            }

            return __base;
        });

        let { attrs } = context;

        let type = ref(attrs.type);
        let hidden = ref(false);

        let _icon = ref(null);

        if (type.value != "password") {
            _icon.value = props.icon;
        } else {
            _icon.value = EyeCloseIcon;
        }

        // let __class = ref("txt-bold bd-round-1 py-4 px-6 w-full bd-none bg-white txt-c-grey-400")

        watchEffect(() => {
            if (props.value.error)
                __class += "bd-c-red";
        });

        function iconClicked() {
            hidden.value = !hidden.value;
            if (hidden.value) {
                _icon.value = EyeOpenIcon;
                type.value = "text";
            } else {
                _icon.value = EyeCloseIcon;
                type.value = "password";
            }
        }

        return {
            type,
            __class,
            _icon,
            iconClicked,
        };
    },
};
</script>

<style scoped>
.align-center {
    align-items: center;
}
::placeholder{
    color: #AFB6B3;
    opacity: .8;
}
</style>
