<template>
  <section>
    <h2>Crie a sua conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" @click="criar = true" class="btn">
        Criar conta
      </button>
      <UsuarioForm v-else>
        <button class="btn btn-form">Criar Usuário</button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
export default {
  name: "LoginCriar",
  components: {
    UsuarioForm,
  },
  data: () => ({
    criar: false,
  }),
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>