<template>
  <div v-for="user in users" :key="user.id">
    <h3>Name:</h3>
    <h1>{{ user.name }}</h1>
    <h3>Surname:</h3>
    <h1>{{ user.surname }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const users = ref<any[]>([]);

const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};

onMounted(fetchUsers);
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
