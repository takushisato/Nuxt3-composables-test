<script lang="ts" setup>
    const counterStore = useCounterStore();
    const { state } = counterStore;
</script>
    
<template>
    <div>
        <h1>サンプルページ</h1>
        <div>{{ state.count }}</div>
        <button @click="counterStore.countUp">countUp</button>

        <button @click="counterStore.setCount(0)">reset</button>
    </div>
</template>