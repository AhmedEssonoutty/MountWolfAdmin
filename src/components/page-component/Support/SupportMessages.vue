<template>
    <div class="msgs-sup px-3">
        <div class="msg-header border-bottom">
            <div class="d-flex flex-row align-items-center gap-3 mb-3">
                <svg style="width: 3.7rem;height: 3.7rem;" viewBox="0 0 37 37" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18.5" cy="18.5" r="18.5" fill="#D9D9D9" />
                </svg>
                <div class="d-flex flex-column msg-info">
                    <span class="name">
                        Name vendor
                    </span>
                    <span class="categ">
                        Type Category
                    </span>
                    <span class="status">
                        Active
                    </span>
                </div>
            </div>
        </div>
        <!--  -->
        <div v-for="(msg, i) in msgs" :key="i">

            <div class=" d-flex flex-column mb-5" :class="msg.from == 'sup' ? 'msg-card-sup' : 'msg-card-user'">
                <span class="msg">
                    {{ msg.msg }}
                </span>
                <span class="msg-info">00:00 pm</span>
                <span class="msg-info">DD/MM/YYYY</span>
            </div>
        </div>
        <!--  -->
        <div class="send-msg ">

            <input type="text" style="width: 85%;" placeholder="Type a message">

            <svg style="margin-left: 3rem; width: 4.8rem; height: 4.8rem ;" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M45.4142 2.58578C45.9575 3.12906 46.1415 3.93552 45.8877 4.6607L31.8877 44.6607C31.6168 45.4347 30.9009 45.9649 30.0815 45.9983C29.2622 46.0318 28.5054 45.5616 28.1724 44.8123L20.4848 27.5152L3.18773 19.8276C2.43837 19.4946 1.96824 18.7378 2.00167 17.9185C2.0351 17.0991 2.56531 16.3832 3.33931 16.1123L43.3393 2.11228C44.0645 1.85847 44.8709 2.04251 45.4142 2.58578ZM24.3855 26.4429L29.7788 38.5778L39.2171 11.6114L24.3855 26.4429ZM36.3886 8.78294L9.42216 18.2212L21.5571 23.6145L36.3886 8.78294Z"
                    fill="#464A61" />
            </svg>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const msgs = ref([
    {
        from: 'sup',
        msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        from: 'user',
        msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        from: 'sup',
        msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
])
</script>

<style lang="scss" scoped></style>