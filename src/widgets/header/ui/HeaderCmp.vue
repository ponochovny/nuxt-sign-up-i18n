<template>
	<div
		class="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-[16px] py-3 lg:p-4 rtl:flex-row-reverse"
	>
		<div>
			<NuxtImg
				src="/assets/logo_text.svg"
				alt="logo"
				class="lg:block hidden"
				width="143"
				height="28"
			/>
			<NuxtImg
				src="/assets/logo.svg"
				alt="logo"
				class="lg:hidden block"
				width="32"
				height="28"
			/>
		</div>
		<div class="flex lg:gap-2 items-center rtl:flex-row-reverse">
			<LangSwitcher />
			<Button variant="ghost" class="text-[15px] font-bold lg:py-3 py-5">
				{{ $t('header.login') }}
			</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { LangSwitcher } from '~/src/features/change-lang'
import { Button } from '@/src/shared/ui/button'
</script>
