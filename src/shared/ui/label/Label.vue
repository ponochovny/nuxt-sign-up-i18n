<script setup lang="ts">
import { cn } from '@/src/shared/lib/utils'
import { Label, type LabelProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props

	return delegated
})
</script>

<template>
	<Label
		data-slot="label"
		v-bind="delegatedProps"
		:class="
			cn(
				'flex items-center gap-2 text-[11px] leading-none tracking-widest font-bold select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 uppercase',
				props.class
			)
		"
	>
		<slot />
	</Label>
</template>
