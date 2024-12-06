<template>
  <div>
    <layout-header></layout-header> 
    <nav>
      <ul>
        <li>
        <NuxtLink to="/japanese_major/japanese_grammer/check">文法修正</NuxtLink>
        </li>
        <li>
        <NuxtLink to="/japanese_major/japanese_grammer/write">作文</NuxtLink>
        </li>
        <li>
        <NuxtLink to="/japanese_major/japanese_grammer/complete">埋め込み</NuxtLink>
        </li>
      </ul>
    </nav>
  <NuxtChild  />
  
  </div>
</template>
<style scoped>
:root {
  --primary-color: #00c58e;
}
body {
  font-family :

    system-ui,

    -apple-system,

    BlinkMacSystemFont,

    Segoe UI,

    Roboto,

  Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
  Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
nav a{
  margin:30px;
  font-size: 26px;
  text-decoration: underline;
}
a:hover {
  text-decoration: underline;
}
main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}
img {
  margin-bottom: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}
nav {
  padding: 0 1rem;
}
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
