<script setup>

</script>

<template>
    <header class="header">
        <h1>My Notes App</h1>
    </header>

    <nav>
      <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/notes">Notes</router-link></li>
      </ul>
    </nav>

</template>


<style scoped>

.header {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
}
.nav {
    background-color: #f4f4f4;
    padding: 10px;
}
.nav-list {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 10px;
}
.nav-list li {    
    display: inline;
}
.nav-list li a {
    text-decoration: none;
    color: #333;
}
.nav-list li a.router-link-active {
    font-weight: bold;
    color: #007BFF;
}
</style>