<template>
    <v-text-field
        :label="apikey"
        variant="underlined"
        style="width: 90vh"
        v-model="apikey"
    >
    </v-text-field>
    <v-btn @click="click">确认</v-btn>
</template>

<script setup>
let apikey = localStorage.getItem("apikey");
const click = () => localStorage.setItem("apikey", apikey);
</script>
