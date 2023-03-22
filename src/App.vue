<template>
  <nav>
    <router-link :to = "{name: 'home'}">My Tasks</router-link>
    <router-link :to = "{name: 'add-Task'}">Add Tasks</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a, button {
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #005519;
  width: 150px;
  color: black;
  font-weight: bold;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
a:hover, button:hover{
  cursor: pointer;
  box-shadow: inset 200px 0 0 0 #005519;
  color: white;
}
nav{
  margin-bottom: 10px;
  padding: 10px;
  background-color: #005519;
}
nav a, .router-link-active{
  color: rgb(197, 197, 197);
  margin: 5px 10px 5px 10px;
  padding: 10px;
}
</style>
