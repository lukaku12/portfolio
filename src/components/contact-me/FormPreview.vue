<template>
  <div class="w-full lg:text-codeSnippet 2xl:text-bodyText">

    <div class="flex gap-x-1">
      <p class="text-accent-lighter-purple">const</p>
      <p class="text-secondary-purple">button</p>
      <p class="text-accent-lighter-purple">=</p>
      <div class="flex">
        <p class="text-secondary-purple">document</p>
        <p class="text-secondary-blue">.</p>
        <p class="text-secondary-purple">querySelector</p>
        <p class="text-secondary-blue">(</p>
        <p class="text-accent-light-orange">'#sendBtn'</p>
        <p class="text-secondary-blue">);</p>
      </div>
    </div>

    <br>


    <div class="flex gap-x-1">
      <p class="text-accent-lighter-purple">const</p>
      <p class="text-secondary-purple">message</p>
      <p class="text-accent-lighter-purple">=</p>
      <p class="text-secondary-blue">{</p>
    </div>

    <div class="max-w-[400px]">
      <div class="flex gap-x-1 pl-4">
        <div class="flex">
          <p class="text-secondary-purple">name</p>
          <p class="text-secondary-blue">:</p>
        </div>
        <div class="flex">
          <span class="text-accent-light-orange break-all">
            "{{ name }}"
            <span class="text-secondary-blue">,</span>
          </span>

        </div>
      </div>

      <div class="flex gap-x-1 pl-4">
        <div class="flex">
          <p class="text-secondary-purple">email</p>
          <p class="text-secondary-blue">:</p>
        </div>
        <div class="flex">
          <span class="text-accent-light-orange break-all">
            "{{ email }}"
             <span class="text-secondary-blue">,</span>
          </span>

        </div>
      </div>

      <div class="flex gap-x-1 pl-4">
        <div class="flex">
          <p class="text-secondary-purple">message</p>
          <p class="text-secondary-blue">:</p>
        </div>
        <div>
        <span class="text-accent-light-orange break-all">
          <span>
            "{{ message }}"
             <span class="text-secondary-blue">,</span>
          </span>
        </span>
        </div>
      </div>

    </div>

    <div class="flex gap-x-1 pl-4">
      <div class="flex">
        <p class="text-secondary-purple">date</p>
        <p class="text-secondary-blue">:</p>
      </div>
      <div class="flex">
        <p class="text-accent-light-orange">"{{ date }}"</p>
        <p class="text-secondary-blue">,</p>
      </div>
    </div>

    <div class="flex gap-x-1">
      <p class="text-secondary-blue">};</p>
    </div>

    <br>

    <div class="flex gap-x-1">
      <div class="flex gap-x-1">
        <div class="flex">
          <p class="text-secondary-purple">button</p>
          <p class="text-secondary-blue">.</p>
          <p class="text-secondary-purple">addEventListener</p>
          <p class="text-secondary-blue">(</p>
          <p class="text-accent-light-orange">'click'</p>
          <p class="text-secondary-blue">,</p>
        </div>

        <div>
          <p class="text-secondary-blue">()</p>
        </div>


        <p class="text-accent-lighter-purple">=></p>
        <p class="text-secondary-blue">{</p>
      </div>
    </div>

    <div class="flex pl-4">
      <p class="text-secondary-purple">form</p>
      <p class="text-secondary-blue">.</p>
      <p class="text-secondary-purple">send</p>
      <p class="text-secondary-blue">(</p>
      <p class="text-secondary-purple">message</p>
      <p class="text-secondary-blue">);</p>
    </div>

    <div>
      <p class="text-secondary-blue">});</p>
    </div>


  </div>
</template>

<script setup lang="ts">

const {name, email, message, date} = defineProps({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});


</script>
