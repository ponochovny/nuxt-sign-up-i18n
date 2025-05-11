<template>
	<div>
		<h2>{{ $t('main-page') }}</h2>
		<NuxtLink :to="localePath('/sign-up')">
			<Button>{{ $t('back-to-sign-up') }}</Button>
		</NuxtLink>
		<Dialog default-open>
			<DialogContent class="px-8 pb-9 gap-5" :is-close="false">
				<DialogHeader class="mb-9 !text-center">
					<NuxtImg
						src="/assets/tour.png"
						class="w-full max-w-[218px] mx-auto mb-6"
					/>
					<DialogTitle
						class="text-3xl font-extrabold leading-8 mb-6 rtl:font-['Open_Sans']"
					>
						{{ $t('tour.title') }}
					</DialogTitle>
					<DialogDescription
						class="text-base rtl:font-normal font-extrabold text-black/85 leading-7"
					>
						{{ $t('tour.text') }}
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<Button class="w-full">{{ $t('tour.button') }}</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
</template>

<script lang="ts" setup>
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/src/shared/ui/dialog'
import { Button } from '@/src/shared/ui/button'
const localePath = useLocalePath()
</script>
