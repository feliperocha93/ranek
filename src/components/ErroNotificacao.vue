<template>
  <transition>
    <ul class="erro" v-if="erros.length > 0">
      <li v-for="erro in erros" :key="erro" v-html="erro"></li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "ErroNotificacao",
  props: {
    erros: Array,
  },
};
</script>

<style scoped>
.erro {
  margin: 20px auto;
}

.erro {
  color: #e80;
  text-align: center;
}
</style>
