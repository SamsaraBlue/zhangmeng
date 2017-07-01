<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './assets/css/reset.css';
.visible {
  animation: fadeRight .5s ease;
  animation-fill-mode: forwards;
}
@keyframes fadeRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(82%);
  }
}
.mistake {
	width: 100%;
	height: 50rem;
	background-color: #ffffff;
	& .content {
		padding-top: 5rem;
		& img {
			display: block;
			width: 8rem;
			height: 10rem;
			margin: 0 auto;
		}
		& p {
			color: #909090;
			text-align: center;
		}
	}
}
</style>
