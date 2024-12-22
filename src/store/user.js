import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    const setToken = (newToken) => {
      token.value = newToken;
    };
    const userName = ref("");
    const setUserName = (name) => {
      userName.value = name;
    };
    return {
      token,
      setToken,
      userName,
      setUserName,
    };
  },
  {
    persist: true,
  }
);
