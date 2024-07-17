<template>
    <div class="msgs-side">

        <div v-for="(msg, i) in mesgs" :key="i" class="msg-card">
            <div class="d-flex flex-row align-items-center gap-3 mb-3">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18.5" cy="18.5" r="18.5" fill="#D9D9D9" />
                </svg>
                <div class="d-flex flex-column msg-info">
                    <span class="name">
                        {{ msg.name }}
                    </span>
                    <span class="categ">
                        {{ msg.categ }}
                    </span>
                </div>
            </div>
            <span class="msg">
                {{ msg.msg }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const mesgs = ref([
    { name: "Name vendor", categ: "Type Category", msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: "Name vendor", categ: "Type Category", msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: "Name vendor", categ: "Type Category", msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: "Name vendor", categ: "Type Category", msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: "Name vendor", categ: "Type Category", msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: "Name vendor", categ: "Type Category", msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: "Name vendor", categ: "Type Category", msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
])
</script>

<style lang="scss" scoped></style>