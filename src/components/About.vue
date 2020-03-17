<template>
  <div class="about">
    <h2>About</h2>
    <table>
      <tr>
        <th>名前</th>
        <td>西中 嘉徳</td>
      </tr>
      <tr>
        <th>年齢</th>
        <td>三十歳</td>
      </tr>
      <tr>
        <th>居住</th>
        <td>神奈川県横浜市</td>
      </tr>
      <tr>
        <th>出身</th>
        <td>愛知県名古屋市</td>
      </tr>
      <tr>
        <th>経歴</th>
        <td>中京大学心理学部</td>
      </tr>
      <tr>
        <th></th>
        <td>(2008年4月〜2012年3月)</td>
      </tr>
      <tr>
        <th></th>
        <td>株式会社ウッドワン</td>
      </tr>
      <tr>
      <tr>
        <th></th>
        <td>(2012年4月〜2020年1月)</td>
      </tr>
      <tr>
        <th></th>
        <td>TECH::EXPERT</td>
      </tr>
      <tr>
      <tr>
        <th></th>
        <td>(2019年12月〜2020年2月)</td>
      </tr>
      <tr>
        <th>Git Hub</th>
        <td>nydev2020</td>
      </tr>
      <tr>
        <th>Twitter</th>
        <td>@lk_keet</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .about {
    padding: 0 20%;
  }
  h2 {
    font-size: 40px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
    text-align: center;
    border-bottom: 2px solid darkblue;
  }
  table {
    width: 100%;
    padding: 0 30%;
  }
  tr {
    line-height: 2rem;
  }
  td {
    padding-left: 10%;
    overflow: hidden;
  }
</style>