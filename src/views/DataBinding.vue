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
    <select v-model="city">
      <option value="01">東京</option>
      <option value="02">大阪</option>
      <option value="03">福岡</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlString: '<p id="tomato">This is a tomato string.</p>',
      valueModel: 'South Korea',
      numberModel: 2420001,
      areaMessage: '離したいのがあるならすぐ　GO!',
      city: '03',
    };
  },
}
</script>
<style>
#tomato {
  color: tomato;
}
</style>
