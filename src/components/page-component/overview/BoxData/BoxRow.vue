<template>
    <div class="info-row mt-5">
        <div>
            <h3 v-if="props.rowTitle" class="management-title">{{ props.rowTitle }}</h3>
            <div class="row">
                <div class="my-2 col" v-for="(item, i) in props.btnsData" :key="i">
                    <button class="squ-btn   d-flex my-auto flex-column h-100 ">
                        <p>{{ item.name }}</p>
                        <p class="info">{{ item.data }}</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    rowTitle: {
        type: String,
    },
    btnsData: {
        type: Array,
    },
});
</script>

<style lang="scss" scoped></style>
