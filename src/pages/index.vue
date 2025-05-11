<template>
	<div class="p-4 text-center flex flex-col items-center gap-2">
		<NuxtLink :to="localePath('/sign-up')">
			<Button>{{ $t('index.button') }}</Button>
		</NuxtLink>
		<LangSwitcher />
	</div>
</template>

<script lang="ts" setup>
import { LangSwitcher } from '~/src/features/change-lang'
import { Button } from '~/src/shared/ui/button'
const localePath = useLocalePath()
</script>
