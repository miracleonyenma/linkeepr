<script setup>
const user = useSupabaseUser();
!user.value && router.push("/login");
</script>
<template>
  <NuxtPage />
</template>
