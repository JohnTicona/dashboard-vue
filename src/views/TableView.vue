<template>
  <div class="m-4">
    <h2 class="mb-3">TABLE</h2>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">UserName</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const users = ref([]);

    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        users.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getUsers();
    });

    return {
      users,
    };
  },
};
</script>
