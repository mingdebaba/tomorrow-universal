<template>
    <div style="margin:auto;">
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
<script>
  export default {
    data() {
      return {
        textarea1:"商品の存在価値を伝える、お客様の市場価値を高める役割を担います。",
        textarea2:"商品の存在価値を伝え、お客様の市場価値を高める役割を担います。",
        drawer: false,
        innerDrawer:false,
        form:{
          theme :'',
          content: ''
        },
        formLabelWidth:'80px',
        timer:null,
      };
    },
    method:{
      handleClose(done){
        if (this.loading){
          return;
        }
      },
      cancleForm(){
        this.loading = false;
        this.dialog = false;
        clearTimeout(this.timer);
      }
    }
  }
</script>
<style scoped>

</style>