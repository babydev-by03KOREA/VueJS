<!-- v-on == @ -->
<template>
  <div>
    <button type="button" v-on:click="increaseCounter">Add 1</button>
    <p>The counter is : {{ counter }}</p>
    <button type="button" @click="one(), two()">2 Function</button>
  </div>
  <div>
    <select v-model="selectedValue" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="인천">인천</option>
      <option value="부산">부산</option>
    </select>
  </div>
  <div>
    <h1>Full Name Computed : {{ fullNameComputed }}</h1>
  </div>
  <div>
    <h1>Full Name Watch : {{ fullNameWatch }}</h1>
    <button type="button" @click="changeName">Watch Change</button>
  </div>
</template>

<script>
export default {
  name: "OnClick",
  data() {
    return {
      counter: 0,
      selectedValue: '',
      firstName: 'park',
      lastName: 'hyeonju',
      fullNameWatch: '',
    };
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    one() {
      alert('ALERT ONE');
    },
    two() {
      alert('ALERT TWO');
    },
    changeSelect() {
      alert(this.selectedValue);
    },
    changeName() {
      this.firstName = 'lee';
    }
  },
  // computed: 데이터 값에 변경이 일어나는지 감시 / Flutter: WebViewController
  computed: {
    fullNameComputed() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  // 값이 변경되어야만 watch가 실행된다.
  watch: {
    firstName() {
      this.fullNameWatch = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullNameWatch = this.firstName + " " + this.lastName;
    }
  }
}
</script>

<style scoped>

</style>
