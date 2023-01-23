<template>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{ product.productName }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.deliveryPrice }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      productList: [
        {"productName":"iPhone 14 pro", "price":1450000, "category":"iPhone", "deliveryPrice":2500},
        {"productName":"macBook Pro 16'", "price":3500000, "category":"mac", "deliveryPrice":30000},
        {"productName":"iPad Air 5Gen", "price":750000, "category":"iPad", "deliveryPrice":2000},
        {"productName":"watch SE 2", "price":250000, "category":"watch", "deliveryPrice":2000},
        {"productName":"airPods Pro 2", "price":350000, "category":"airPods", "deliveryPrice":0},
      ]
    }
  }
}
</script>

<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>
