<template>
    <v-card class="item">
        <v-toolbar color="#696969" title="Chatgpt"> </v-toolbar>
        <!-- 侧边栏 -->
        <div class="d-flex flex-row">
            <v-tabs v-model="tab" direction="vertical" color="black">
                <v-tab value="option-gpt3">
                    <v-icon start> mdi-robot-excited </v-icon>
                    gpt 3
                </v-tab>

                <v-tab value="option-gpt4">
                    <v-icon start> mdi-robot-happy </v-icon>
                    gpt 4
                </v-tab>

                <v-tab value="setting">
                    <v-icon start> mdi-access-point </v-icon>
                    setting
                </v-tab>
            </v-tabs>

            <!-- 侧边栏内容 -->
            <v-window v-model="tab">
                <v-window-item value="option-gpt3">
                    <Content></Content>
                </v-window-item>

                <v-window-item value="option-gpt4">
                    <Content></Content>
                </v-window-item>

                <v-window-item value="setting">
                    <Setting></Setting>
                </v-window-item>
            </v-window>
        </div>

        <!-- 底下输入框和发送按钮 -->
        <Footer></Footer>
    </v-card>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import Content from "@/components/Content.vue";
import Setting from "@/components/Setting.vue";
import { ref, provide, computed } from "vue";

const tab = ref("option-gpt3");
const messageList_gpt3 = ref([]);
const messageList_gpt4 = ref([]);
const apikey = "";

//根据侧边栏的选中确定当前的messageList
const messageList = computed(() => {
    return tab.value === "option-gpt3" ? messageList_gpt3 : messageList_gpt4;
});

const pushMessage = (message) => {
    if (tab.value === "option-gpt3") {
        messageList_gpt3.value.push(message);
        console.log(...messageList_gpt3.value);
    } else {
        messageList_gpt4.value.push(message);
        console.log(...messageList_gpt4.value);
    }
};

provide("tab", tab);
provide("messageList", messageList);
provide("pushMessage", pushMessage);
</script>

<style>
body {
    background-color: #f6f6f6;
}
.item {
    margin: 5px;
    height: 85vh;
    width: 98vw;
    background-color: #f6f6f6;
}
</style>
