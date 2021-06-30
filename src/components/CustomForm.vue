<template>
  <div class="custom-form">
    <form>
      <h2 v-if="mensaje !== ''">{{ getMensaje }}</h2>
      <input
        v-bind:disabled="!iniciado"
        v-model="fraseEscrita"
        v-on:keyup="testValor"
        ref="campo"
      />
      <button v-on:click.prevent="empezar">Empezar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CustomForm",
  props: {
    frase: String,
  },
  data: function () {
    return {
      iniciado: false,
      fraseEscrita: "",
      mensaje: "",
      error: false,
      tiempoTranscurrido: 0,
      tiempoInicial: 0,
    };
  },
  methods: {
    empezar: function () {
      this.iniciado = !this.iniciado;
      this.fraseEscrita = "";
      this.tiempoInicial = Date.now();
    },
    testValor: function () {
      const ahora = Date.now();
      this.tiempoTranscurrido = (ahora - this.tiempoInicial) / 1000;
      if (this.fraseEscrita === this.frase) {
        //se ha terminado bien
        this.mensaje = "Enhorabuena, has terminado. Has tardado ";
        this.error = false;
        this.iniciado = false;
      } else if (this.frase.indexOf(this.fraseEscrita) === 0) {
        //va bien
        this.mensaje = "Vas bien, llevas ";
        this.error = false;
      } else {
        //vamos mal
        this.mensaje = "Vas mal, llevas ";
        this.error = true;
      }
    },
  },
  watch: {
    iniciado: function () {
      if (this.iniciado === true) {
        //sino metemos el focus dentro del setTimeout, al renderizar no "mantiene" el focus
        setTimeout(() => {
          this.$refs.campo.focus();
        });
      }
    },
  },
  computed: {
    getMensaje: function () {
      return this.mensaje + this.tiempoTranscurrido + " segundos";
    },
  },
};
</script>

<style>
</style>