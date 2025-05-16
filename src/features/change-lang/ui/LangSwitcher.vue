<template>
	<DropdownMenu>
		<DropdownMenuTrigger
			:as="Button"
			variant="ghost"
			class="flex items-center gap-2 text-[15px] font-bold lg:py-4 !lg:px-6 py-3 !px-4 rtl:flex-row-reverse lg:h-9 h-10"
		>
			<Globe :size="16" />
			<span>
				{{ activeLocale?.name }}
			</span>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuItem
				v-for="_locale in inactiveLocales"
				:key="_locale.code"
				@click="setLocale(_locale.code)"
			>
				{{ _locale.name }}
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<script lang="ts" setup>
import { Globe } from 'lucide-vue-next'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/src/shared/ui/dropdown-menu'
import { Button } from '@/src/shared/ui/button'
const { locales, setLocale, locale } = useI18n()
const activeLocale = computed(() =>
	locales.value.find((l) => l.code === locale.value)
)
const inactiveLocales = computed(() =>
	locales.value.filter((l) => l.code !== locale.value)
)
</script>
