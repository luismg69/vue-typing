<template>
  <div class="about">
    <h1>Información sobre el juego</h1>
    <nav>
      <ul>
        <router-link to="/info/objetivos">Objetivos</router-link>
        |
        <router-link to="/info/tiempo">Tiempo</router-link>
        |
        <router-link to="/info/fin">Fin</router-link>
        |
      </ul>
    </nav>
    <router-view />
  </div>
</template>