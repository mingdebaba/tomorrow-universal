<template>
  <layout-wrapper>
    <layout-header></layout-header> 
    <nav>
      <ul>
        <li>
          <NuxtLink class="text-decoration-underline" to="/japanese_major/japanese_grammer">
            文法チェック
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-decoration-underline" to="/japanese_major/emotion_classification">
            表情対応ロボット
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-decoration-underline" to="/japanese_major/drama_simulator">
            ドラマシャドーイング
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-decoration-underline" to="/japanese_major/japanese_classicalchinese">
            古漢語-日本語翻訳モデル
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </layout-wrapper>
</template>
<style>
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

h1 {
  text-align: center;
}
</style>
