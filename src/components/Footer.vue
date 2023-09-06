<template>
    <div class="footer">
        <v-row>
            <v-text-field
                class="textField"
                v-model="userInput"
                variant="solo-inverted"
                @keyup.enter="click"
            ></v-text-field>

            <v-btn class="button" size="small" color="red" @click="click"
                >发送</v-btn
            >
        </v-row>
    </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { api } from "@/components/api.js";

const tab = inject("tab");
const messageList = inject("messageList");
const pushMessage = inject("pushMessage");
const userInput = ref();

const click = async () => {
    pushMessage({ role: "user", content: userInput.value });
    userInput.value = "";

    const output = ref("");
    pushMessage({ role: "assistant", content: output });

    api(
        messageList.value,
        tab.value === "option-gpt3" ? "gpt-3.5-turbo-0613" : "gpt-4-0314",
        output
    );
};
</script>

<style scoped>
.footer {
    position: fixed; /* 使用 fixed 定位 */
    bottom: 0;
    width: 95vw;
}
.button {
    margin-top: 5vh;
    margin-right: 2vw;
}
.textField {
    margin: 15px;
}
</style>
