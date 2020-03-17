<template>
  <div class="post">
    <h2>Post</h2>
    <p>Twitterを始めまして日々のアウトプットをつぶやいています。主にはアウトプットチャンネルになります。</p>
    <div class="post--container">
      <table>
        <tr>
          <th>Email</th>
          <td>ny.dev2020@gmail.com</td>
        </tr>
        <tr>
          <th>GitHub</th>
          <td>nydev2020</td>
        </tr>
        <tr>
          <th>Twitter</th>
          <td>@lk_keet</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @mixin sp {
    @media (max-width: (769px)) {
      @content;
    }
  }  
  .post {
    padding: 0 20%;
    @include sp{
      padding: 20px 5%;
    }
    h2 {
      font-size: 40px;
      filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
      text-align: center;
      border-bottom: 2px solid darkblue;
    }
    p {
      padding: 0 10%;
    }
    h4 {
      text-align: center;
    }
    &--container {
      padding: 0 30%;
      @include sp{
      padding: 20px 5%;
      }
      table {
        width: 100%;
        th {
          width: 40%;
        }
        td {
          width: 60%;
          padding-left: 5%;
        }
      }
    }
  }
</style>