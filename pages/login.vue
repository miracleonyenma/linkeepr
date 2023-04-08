<script setup lang="ts">
const supabase = useSupabaseClient();

const loading = ref<boolean>(false)
const email = ref<string>('')

</script>
<template>
  <main class="site-main">
    <header class="header-section site-section">
      <div class="wrapper">
        <h1>Login</h1>
      </div>
    </header>
    
  </main>
</template>