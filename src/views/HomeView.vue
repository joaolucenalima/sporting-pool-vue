<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import ProjectLogo from '@/components/ProjectLogo.vue';
</script>

<template>
  <header>
    <ProjectLogo />
    <button class="login-button">
      <span>Login</span>
    </button>
  </header>

  <main>
    <section>
      <p class="main-text">
        Crie um <span style="color: #4CAF50">bolão</span>
        <br />
        Compartilhe com <span style="color: #6ED472">amigos</span>
        <br />
        <span style="color: #63c766">Joguem</span> juntos!
      </p>

      <div class="buttons">
        <PrimaryButton :onClick="() => { console.log('botão clicado!') }" text="Entrar com código" />
        <PrimaryButton :onClick="() => { console.log('botão clicado!') }" text="Criar bolão" />
      </div>
    </section>

    <img src="@/assets/fans.png" alt="Soccer fans image">
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.buttons {
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
}

.login-button {
  border: 2px solid #4CAF50;
  border-radius: 8px;
  background: transparent;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s;
}

.login-button span {
  color: #4CAF50;
  font-size: 22px;
  text-align: center;
}

.login-button:hover {
  color: #63c766;
  border-color: #63c766;
}

main {
  display: flex;
  justify-content: space-between;
  margin-top: 9rem;
}

.main-text {
  font-size: 56px;
  font-weight: 600;
}
</style>