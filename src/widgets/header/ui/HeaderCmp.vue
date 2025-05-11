<template>
	<div
		class="fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-6 px-8 rtl:flex-row-reverse"
	>
		<div>
			<img src="/assets/structure.png" alt="" class="lg:block hidden" />
			<img src="/assets/mobile-logo.png" alt="" class="lg:hidden block" />
		</div>
		<div class="flex lg:gap-1 items-center rtl:flex-row-reverse">
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
