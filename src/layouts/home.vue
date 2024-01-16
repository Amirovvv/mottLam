<template>
  <NavBar class="navbar" />
  <main>
    <div class="navbar-back">
      <span class="animated animated-fade-in-up">добро пожаловать!</span>
    </div>
    <div class="container">
      <RouterView />
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="scss">
.navbar {
  position: absolute;
  z-index: 2;
  width: 100%;

  &-back {
    background-image: url('@/assets/lam.jpg');
    min-height: 480px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 52%;
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
      width: 100%;
      display: flex;
      text-transform: uppercase;
      font-size: 46px;
      font-weight: 900;
      word-spacing: 6px;
      justify-content: center;
      top: 50%;
      position: absolute;
      user-select: none;
    }
  }
}
</style>
