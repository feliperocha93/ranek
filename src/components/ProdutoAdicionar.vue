<template>
  <form class="adicionar-produto">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="produto.nome" />
    <label for="preco">Preço (R$)</label>
    <input id="preco" name="preco" type="number" v-model="produto.preco" />
    <label for="fotos">Fotos</label>
    <input id="fotos" name="fotos" type="file" multiple ref="fotos" />
    <label for="descricao">Descrição</label>
    <textarea id="descricao" name="descricao" v-model="produto.descricao" />
    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="adicionarProduto"
    />
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { api } from "@/service.js";

export default Vue.extend({
  name: "ProdutoAdicionar",
  data: () => ({
    produto: {
      nome: "",
      preco: "",
      fotos: null,
      descricao: "",
      vendido: "false",
    },
  }),
  methods: {
    formatarProduto() {
      const form = new FormData();

      const files = this.$refs.fotos.files;
      for (let i = 0; i < files.length; i++) {
        form.append(files[i].name, files[i]);
      }

      form.append("nome", this.produto.nome);
      form.append("preco", this.produto.preco);
      form.append("descricao", this.produto.descricao);
      form.append("vendido", this.produto.vendido);
      form.append("usuario_id", this.produto.usuario_id);

      return form;
    },
    async adicionarProduto(event) {
      const produto = this.formatarProduto();

      const btn = event.currentTarget;
      btn.value = "Adicionando...";
      btn.setAtrtribute("disabled", "");
      await api.post("/produto", produto);
      await this.$store.dispatch("getUsuarioProdutos");
      btn.value = "Adicionar Produto";
      btn.removeAtrtribute("disabled");
    },
  },
});
</script>

<style scoped>
.adicionar-produto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
