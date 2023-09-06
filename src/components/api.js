export const chat = async (messageList, modelName, output) => {
    // 在处理过程中可能会出现错误，因此使用try-catch结构
    try {
        const openai_url = "https://aigptx.top/v1/chat/completions";

        const response = await fetch(openai_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer `,
            },
            body: JSON.stringify({
                model: modelName,
                messages: messageList.value,
                temperature: 0.5,
                stream: true,
            }),
        });

        // 判断请求是否成功
        response.ok ? null : (output.value = response.text);

        // 设置一个流式读取器，用于读取返回的数据
        const reader = response.body.getReader();
        reader ? null : (output.value = "stream reader happens error");

        // 循环读取返回的数据，每读取一部分就处理一部分，直到读取完毕
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                console.log(output.value);
                return;
            }

            // 针对返回的每一行数据做处理
            const chunk = new TextDecoder("utf-8").decode(value);
            for (const line of chunk.split("\n")) {
                const trimmedLine = line.trim();
                if (!trimmedLine || trimmedLine === "data: [DONE]") continue;

                const json = trimmedLine.replace("data: ", "");
                const obj = JSON.parse(json);

                // 内容存在时，不断修改响应式变量达到流式输出效果
                const data = obj.choices[0].delta.content;
                obj.choices[0].delta.content ? (output.value += data) : null;
            }
        }
    } catch (error) {
        output.value = error;
    }
};
