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
	</div>
</template>

<script>
export default {
    data() {
      return {
        input1:'研究課題や技術課題をご提案いただき、別途ワーキンググループ等を設置して研究開発課題に＿＿ことができます。',
        input2:'研究課題や技術課題をご提案いただき、別途ワーキンググループ等を設置して研究開発課題に取り組むことができます。',
        drawer:false,
        direction:'ltr',
        innerDrawer:false,
        form:{
          theme :'',
          content: ''
        },
        formLabelWidth:'80px',
        timer:null,
      }
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

<style>
 #write-b {margin:20px}
</style>