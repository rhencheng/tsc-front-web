<template>
  <div class="lg:flex">
    <Avatar :src="userinfo.avatar || headerImg" :size="72" class="!mx-auto !block" />
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
      <h1 class="md:text-lg text-md">Hi，  {{ userinfo.realName }}！</h1>
      <span class="text-secondary">  </span>
    </div>
    <div class="flex flex-1 justify-end md:mt-0 mt-4">
      <div class="flex flex-col justify-center text-right">
        <span class="text-secondary"> In Process </span>
        <span class="text-3xl">3</span>
      </div>

      <div class="flex flex-col justify-center text-right md:mx-16 mx-12">
        <span class="text-secondary"> Completed </span>
        <span class="text-3xl">10</span>
      </div>
      <div class="flex flex-col justify-center text-right md:mr-10 mr-4">
        <span class="text-secondary"> Total </span>
        <span class="text-3xl">13</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import { Avatar } from 'ant-design-vue';
  import { useUserStore } from '/@/store/modules/user';
  import headerImg from '/@/assets/images/header.jpg';

  const userStore = useUserStore();
  const userinfo = computed(() => userStore.getUserInfo);
</script>
