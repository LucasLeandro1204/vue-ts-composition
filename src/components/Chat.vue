<template>
  <aside
    class="chat"
  >
    <p
      class="chat__message"
    >
      <span
        class="chat__timestamp"
      >
        1:30m
      </span>

      some random message here
    </p>
  </aside>
</template>

<style lang="postcss">
.chat {
  display: flex;
  overflow-y: auto;
  padding: 16px 24px;
  flex-direction: column;
  color: var(--color-white);
  border: 1px solid var(--color-gray-darker);

  &__message {
    display: flex;
    margin: 8px 0;
    flex-direction: column;
  }

  &__timestamp {
    opacity: .7;
    font-size: 14px;
  }
}
</style>
