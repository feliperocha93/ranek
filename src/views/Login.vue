<template>
  <section class="login">
    <h1>Login</h1>
    <form action="">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha" />
      <button class="btn" @click.prevent="logar">Logar</button>
      <ErroNotificacao :erros="erros" />
    </form>

    <p class="perdeu">
      <a
        href="http://localhost:10004/wp-login.php?action=lostpassword"
        target="_blank"
        rel="noopener noreferrer"
        >Perdeu a senha? Clique aqui.</a
      >
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";
export default {
  name: "Login",
  data: () => ({
    login: {
      email: "",
      senha: "",
    },
    erros: [],
  }),
  components: {
    LoginCriar,
  },
  methods: {
    async logar() {
      this.erros = [];
      try {
        await this.$store.dispatch("logarUsuario", this.login);
        this.$store.dispatch("getUsuario");
        this.$router.push({ name: "usuario" });
      } catch (erro) {
        this.erros.push(erro.response.data.message);
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
