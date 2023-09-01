<template>
  <v-virtual-scroll :items="messageList" height="80vh">
    <template v-slot:default="{ item }">
      <!-- 用户内容框 -->
      <v-card class="contentCard" elevation="3" v-if="isUserContent(item)">
        <v-card style="height: 60px">
          <v-chip class="userNameCard" variant="elevated">user</v-chip>
          <v-icon class="userImg" rouded-xl> mdi-account </v-icon>
        </v-card>

        <v-card-text>{{ item.content }}</v-card-text>
      </v-card>

      <!-- gpt内容框 -->
      <v-card class="contentCard" elevation="5" v-else>
        <v-card style="height: 60px">
          <v-img class="img" src="@/assets/chatgpt.svg" height="35"></v-img>
          <v-chip class="nameCard" variant="elevated">chatgpt</v-chip>
        </v-card>

        <v-card-text>{{ item.content }}</v-card-text>
      </v-card>
    </template>
  </v-virtual-scroll>
</template>

<script setup>
import { inject, ref } from "vue";

const messageList = ref(inject("messageList"));

const isUserContent = (item) => item.role == "user";
</script>

<style scoped>
.contentCard {
  margin: 5px;
  width: 85vw;
}
.img {
  margin: 10px;
  float: left;
}
.nameCard {
  margin-top: 15px;
}
.userImg {
  float: right;
  margin-top: 20px;
}
.userNameCard {
  float: right;
  margin: 15px;
}
</style>
