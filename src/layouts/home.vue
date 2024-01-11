<template>
  <NavBar class="navbar" />
  <main>
    <div class="navbar-back"><span>добро пожаловать!</span></div>
    <div class="container">
      <RouterView />
    </div>
    <h1>home layout</h1>
  </main>
</template>

<style scoped lang="scss">
.navbar {
  background: inherit;
  position: absolute;
  z-index: 2;
  width: 100%;

  &-back {
    background-image: url('@/assets/lam.jpg');
    min-height: 640px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 68%;
    position: relative;
    color: #ffffff;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    }

    & span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      text-transform: uppercase;
      font-size: 46px;
      word-spacing: 6px;
    }
  }
}
</style>
