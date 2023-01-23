<!-- DATA BINDING -->
<template>
  <div>
    <!-- 문자열로 인식함! -->
    <div>{{ htmlString }}</div>
    <!-- 실제 HTML 출력을 위해선 v-html 사용! -->
    <div v-html="htmlString"></div>
  </div>
  <div>
    <input type="text" v-model="valueModel" /><br>
    <input type="number" v-model.number="numberModel"/>
  </div>
  <div>
    <textarea v-model="areaMessage"></textarea>
  </div>
  <div>
  <!-- checkBox를 v-model을 통해 사용할 경우, data()에서 초기값을 선언해야함.  -->
    <select v-model="city">
      <option value="01">東京</option>
      <option value="02">大阪</option>
      <option value="03">福岡</option>
    </select>
  </div>
  <div>
    <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no" />{{ checked }}</label>
  </div>
  <div>
    <label><input type="checkbox" value="沖縄" v-model="arrayChecked"/>沖縄</label>
    <label><input type="checkbox" value="長崎" v-model="arrayChecked"/>長崎</label>
    <label><input type="checkbox" value="京都" v-model="arrayChecked"/>京都</label><br>
    <span>行きたい場所：{{ arrayChecked }}</span>
  </div>
  <!-- ↑ v-model input value handler -->
  <!-- ↓ v-bind html 속성에 데이터 연결 -->
  <div>
    <label><input type="radio" v-bind:value="radioValue1" v-model="picked"/>大阪</label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="picked"/>京都</label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="picked"/>熊本</label>
    <br/>
    <span>行った場所: {{ picked }}</span>
  </div>
  <div>
    <img id="imgSrc" v-bind:src="imgSrc" alt="VUE IMAGE" />
  </div>
  <div>
    <input type="text" v-model="textValue" />
    <!-- textValue 값이 없다면(입력값이 없다면) disabled -->
    <button type="button" v-bind:disabled="textValue===''">Click</button>
  </div>
  <!-- 기본 클래스 + 데이터 바인딩 처리하는 클래스 -->
  <div class="container" v-bind:class="{
    // true면 해당 클래스 속성 true false면 해당 클래스 속성도 false
    'active' : isActive, 'text-red' : hasError
  }">Class Binding</div>
  <div v-bind:style="styleObject">Inline Style Binding</div>
</template>
<script>
export default {
  data() {
    return {
      htmlString: '<p id="tomato">This is a tomato string.</p>',
      valueModel: 'South Korea',
      numberModel: 2420001,
      areaMessage: '話たいのがあるならすぐ　GO!',
      city: '03',
      checked: true,
      arrayChecked: [],
      picked: '',
      radioValue1: '大阪',
      radioValue2: '京都',
      radioValue3: '熊本',
      imgSrc: "https://a.cdn-hotels.com/gdcs/production192/d1812/32248a11-67db-456b-b3b6-614350983c62.jpg",
      textValue: '',
      isActive: true,
      hasError: false,
      styleObject: {
        color: 'tomato',
        fontSize: '13px',
      },
    };
  },
}
</script>
<style scoped>
#tomato {
  color: tomato;
}
#imgSrc {
  width: 200px;
  height: 200px;
}
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
