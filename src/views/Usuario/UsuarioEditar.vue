<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">
        Atualizar Usuário
      </button>
      <ErroNotificacao :erros="erros" />
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import { api } from "@/service.js";

export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm,
  },
  data: () => ({
    erros: [],
  }),
  methods: {
    atualizarUsuario() {
      this.erros = [];
      api
        .put(`/usuario/`, this.$store.state.usuario)
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch((error) => {
          this.erros.push(error.response.data.message);
        });
    },
  },
};
</script>

<style scoped></style>
