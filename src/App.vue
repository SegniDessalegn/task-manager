<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a,button {
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #005519;;
  color: #005519;;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
a:hover, button:hover{
  cursor: pointer;
  box-shadow: inset 100px 0 0 0 #005519;
  color: white;
}
</style>
