<template>
	<NuxtPage />
</template>

<script setup lang="ts">
const { locales } = useI18n()

const { locale } = useI18n()
const lang = computed(
	() => locales.value.find((l) => l.code === locale.value)?.code
)
const dir = computed(
	() => locales.value.find((l) => l.code === locale.value)?.dir
)

useHead({
	htmlAttrs: {
		lang,
		dir,
	},
})
</script>
