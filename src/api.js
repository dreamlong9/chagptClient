import axios from "axios";

export const getChatResponses = async (messages_list) => {
    const response = await axios.post(
      "api",
      {
        model: "gpt-3.5-turbo",
        temperature: 0.5,
        messages: messages_list.value,
      },
      {
        headers: {
          Authorization: `Bearer sk-K0PfGDV4tINM5NiZTLFRCoiCZY9hkiBm5RcY9U5G002ztqwb`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  };