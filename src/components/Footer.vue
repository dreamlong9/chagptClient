<template>
  <div class="footer">
    <v-divider style="margin: 10px"></v-divider>
    <v-row>
      <v-text-field
        class="textField"
        v-model="userInput"
        variant="solo-inverted"
        @keyup.enter="click"
      ></v-text-field>

      <v-btn class="button" size="small" color="red" @click="click">发送</v-btn>
    </v-row>
  </div>
</template>

<script setup>
import { getChatResponses } from "@/api.js";
import { inject, ref } from "vue";

const messageList = inject("messageList");
const userInput = ref();

const click = async () => {
  messageList.value.push({ role: "user", content: userInput.value });

  const gptResponse = await getChatResponses(messageList);
  messageList.value.push({ role: "assistant", content: gptResponse });
  console.log(...messageList.value);
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
