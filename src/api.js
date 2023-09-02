import axios from "axios";

export const getChatResponses = async (messages_list, modelName) => {
  const response = await axios.post(
    "https://aigptx.top/v1/chat/completions",
    {
      model: modelName,
      temperature: 0.5,
      messages: messages_list.value,
    },
    {
      headers: {
        Authorization: `Bearer `,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.choices[0].message.content;
};
