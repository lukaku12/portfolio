<template>
  <BaseLayout name="_contact-me" header-text="contacts" category="contact ">
    <template #sidePanel>
      <ContactMeSidePanel/>
    </template>

    <template #default>
      <div
          class="flex justify-center items-center h-full w-full xl:w-1/2 xl:border-r border-[rgba(var(--v-border-color),var(--v-border-opacity))]">

        <v-form
            v-if="!emailIsSent"
            ref="formElement"
            @submit.prevent="sendEmail"
            class="w-full py-8 md:py-0 md:max-w-[372px] px-4"
        >
          <v-text-field
              class="w-full pb-1"
              label="_name"
              name="from_name"
              v-model.trim="form.name"
              density="comfortable"
              bg-color="#011221"
              color="#607B96"
              rounded="lg"
              :readonly="loading"
              variant="solo-filled"
              validate-on="lazy"
              :rules="rules('name')"
          />
          <v-text-field
              class="w-full pb-1"
              label="_email"
              name="from_email"
              v-model.trim="form.email"
              color="#607B96"
              density="comfortable"
              bg-color="#011221"
              rounded="lg"
              :readonly="loading"
              validate-on="lazy"
              variant="solo-filled"
              :rules="rules('email')"
          />
          <v-textarea
              class="w-full pb-1"
              label="_message"
              no-resize
              name="message"
              v-model.trim="form.message"
              bg-color="#011221"
              color="#607B96"
              validate-on="lazy"
              rounded="lg"
              :readonly="loading"
              variant="solo-filled"
              :rules="rules('message')"
          />
          <p v-if="apiErrors" class="text-red-600 text-codeSnippet">
            {{ apiErrors }}
          </p>
          <v-btn
              rounded="lg"
              :loading="loading"
              type="submit"
              class="!lowercase !bg-lines-gray"
              height="38px"
          >
            submit-message
          </v-btn>

        </v-form>

        <section
            v-else
            class="w-full py-8 md:py-0 md:max-w-[372px] px-4 text-center "
        >
          <h1 class="text-secondary-white text-subTitle mb-2">
            Thank you! 🤘
          </h1>
          <p class="text-secondary-blue mb-7">
            Your message has been accepted. You will recieve answer really soon!
          </p>
          <v-btn
              rounded="lg"
              @click="resetEmailForm"
              class="!lowercase !bg-lines-gray"
              height="38px"
          >
            send-new-message
          </v-btn>
        </section>

      </div>

      <div class="xl:w-1/2 hidden xl:flex justify-center items-center">
        <CodeSnippet
            :formPreviewKey="formPreviewKey"
            class="mx-auto w-auto"
        >
          <FormPreview
              class="inline mx-auto"
              :date="form.date"
              :email="form.email"
              :message="form.message"
              :name="form.name"
          />
        </CodeSnippet>
      </div>
    </template>

  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/components/layout/BaseLayout.vue";
import ContactMeSidePanel from "@/components/contact-me/ContactMeSidePanel.vue";
import FormPreview from "@/components/contact-me/FormPreview.vue";
import {onMounted, ref, watch} from "vue";
import CodeSnippet from "@/components/CodeSnippet.vue";
import rules from "@/validation/contact-me";
import email from "@emailjs/browser"


const form = ref<{ name: string, email: string, message: string, date: string }>(
    {
      name: "",
      email: "",
      message: "",
      date: new Date().toDateString()
    });
const loading = ref(false);
const formElement = ref<{ isValid: boolean, $el: HTMLFormElement } | null>(null);
const apiErrors = ref(null);
const emailIsSent = ref(false);

const sendEmail = () => {
  if (!formElement?.value?.isValid) return;
  apiErrors.value = null;
  loading.value = true;


  email.sendForm('contact_me_service', 'contact_me', formElement.value.$el)
      .then(() => {
        emailIsSent.value = true;
      })
      .catch((error) => {
        apiErrors.value = error;
      })
      .finally(() => {
        loading.value = false;
      })

}


const formPreviewKey = ref(0);
watch(form, () => formPreviewKey.value++, {deep: true});

onMounted(() => {
  email.init({
    publicKey: "lK3DgQjcpfPo9BiOE",
  })
});

const resetEmailForm = () => {
  form.value.name = "";
  form.value.email = "";
  form.value.message = "";
  emailIsSent.value = false;
}

</script>
