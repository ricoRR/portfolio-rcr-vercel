<template>
  <section id="contact" class="bg-[#111] px-6 py-16 text-white">
    <div class="mx-auto max-w-3xl">
      <h2 class="text-2xl font-semibold text-[#ffdd00]">Me contacter</h2>
      <p class="mt-2 text-sm text-gray-300">
        Une idée de projet, une question ou l’envie d’échanger sur une
        opportunité ? Laissez-moi un message, je vous réponds rapidement.
      </p>
      <form class="mt-8 flex flex-col gap-4" @submit.prevent="submitForm">
        <div class="flex flex-col">
          <label for="name" class="mb-2 text-sm font-medium text-[#ffdd00]">Nom</label>
          <input
            v-model="formData.name"
            type="text"
            id="name"
            required
            class="rounded-lg border border-[#333] bg-[#1a1a1a] p-3 text-white focus:border-[#ffdd00] focus:outline-none"
            placeholder="Votre nom"
          />
        </div>

        <div class="flex flex-col">
          <label for="email" class="mb-2 text-sm font-medium text-[#ffdd00]">Email</label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            required
            class="rounded-lg border border-[#333] bg-[#1a1a1a] p-3 text-white focus:border-[#ffdd00] focus:outline-none"
            placeholder="vous@exemple.com"
          />
        </div>

        <div class="flex flex-col">
          <label for="message" class="mb-2 text-sm font-medium text-[#ffdd00]">Message</label>
          <textarea
            v-model="formData.message"
            id="message"
            rows="5"
            required
            class="rounded-lg border border-[#333] bg-[#1a1a1a] p-3 text-white focus:border-[#ffdd00] focus:outline-none"
            placeholder="Parlez-moi de votre projet ou de votre besoin"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full rounded-full bg-[#ffdd00] py-3 font-semibold text-black transition hover:bg-[#ffe44d] md:w-auto md:px-8"
          :disabled="loading"
        >
          <span v-if="loading">Envoi en cours...</span>
          <span v-else>Envoyer</span>
        </button>
      </form>

      <p v-if="successMessage" class="mt-4 text-sm text-[#99ff99]">{{ successMessage }}</p>
      <p v-if="errorMessage" class="mt-4 text-sm text-[#ff9999]">{{ errorMessage }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const {
  submitContactRequest,
  defaultSuccessMessage,
  defaultErrorMessage,
} = useContactForm();

async function submitForm() {
  successMessage.value = '';
  errorMessage.value = '';
  loading.value = true;

  try {
    const responseMessage = await submitContactRequest({
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
    });

    successMessage.value = responseMessage || defaultSuccessMessage;
    formData.value = { name: '', email: '', message: '' };
  } catch (error) {
    console.error(error);
    const message =
      error instanceof Error ? error.message : defaultErrorMessage;
    errorMessage.value = message || defaultErrorMessage;
  } finally {
    loading.value = false;
  }
}
</script>
