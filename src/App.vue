<template>
  <v-card class="item">
    <v-toolbar color="primary">
      <v-toolbar-title>Chatgpt</v-toolbar-title>
    </v-toolbar>
    <!-- 侧边栏 -->
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <v-tab value="option-gpt3">
          <v-icon start> mdi-robot-excited </v-icon>
          gpt 3
        </v-tab>

        <v-tab value="option-2">
          <v-icon start> mdi-robot-happy </v-icon>
          gpt 4
        </v-tab>

        <v-tab value="option-3">
          <v-icon start> mdi-access-point </v-icon>
          Option 3
        </v-tab>
      </v-tabs>

      <!-- 侧边栏内容 -->
      <v-window v-model="tab">
        <v-window-item class="overflow-auto" value="option-gpt3">
          <Content></Content>
        </v-window-item>

        <v-window-item value="option-2">
          <v-card elevation="2"><Content></Content></v-card>
        </v-window-item>

        <v-window-item value="option-3">
          <v-card>
            <v-card-text> <Content /> </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>

    <!-- 底下部分 -->
    <Footer></Footer>
  </v-card>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Content from "@/components/Content.vue";
import { ref, provide } from "vue";

const tab = ref("option-gpt3");

const messageList = ref([]);
provide("messageList", messageList);
</script>

<style scoped>
.item {
  margin: 5px;
  height: 88vh;
  width: 98vw;
}
</style>
