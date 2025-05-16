<template>
	<div>
		<Header />
		<div class="flex lg:min-h-screen flex-col-reverse lg:flex-row">
			<div class="p-4 lg:p-0 w-full lg:w-1/2 flex justify-center">
				<div
					class="w-full max-w-[400px] mt-11 lg:mt-45 flex flex-col gap-11 lg:gap-10"
				>
					<div class="flex flex-col gap-3 lg:gap-2 items-center text-center">
						<NuxtImg src="/assets/big-logo.png" class="w-[73px] lg:w-[90px]" />
						<h3
							class="text-[32px] lg:text-[40px] font-black font-['Montserrat'] rtl:font-['Open_Sans'] rtl:font-extrabold"
						>
							{{ $t('sign-up.code-step.title') }}
						</h3>
						<p
							class="px-3 lg:px-7 text-base lg:text-[18px] tracking-[0.35px] rtl:tracking-[0.95px]"
						>
							{{ $t('sign-up.code-step.text') }}
						</p>
					</div>
					<div class="flex flex-col gap-4">
						<div class="grid w-full items-center gap-[6px]">
							<Label for="code">
								{{ $t('sign-up.code-step.input-label') }}</Label
							>
							<div class="relative">
								<Check
									v-if="inputValue.length === 11"
									class="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2"
									color="#00A71B"
									:size="16"
								/>
								<Input
									id="code"
									v-model="inputValue"
									type="text"
									placeholder="7-3-2-5-2-1"
									@input="formatInput"
								/>
							</div>
						</div>
						<Button
							class="font-['Nunito_Sans'] rtl:tracking-[2.15px]"
							:disabled="inputValue.length !== 11"
							@click="$router.push(localePath('main'))"
						>
							{{ $t('sign-up.code-step.button') }}
						</Button>
					</div>
				</div>
			</div>
			<div
				class="relative w-full lg:w-1/2 bg-no-repeat lg:bg-cover h-[228px] lg:h-auto bg-size-[150%]"
				:style="{
					backgroundImage: 'url(/assets/bg-img.png)',
				}"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Check } from 'lucide-vue-next'
import { Header } from '~/src/widgets/header'
import { Input } from '~/src/shared/ui/input'
import { Label } from '~/src/shared/ui/label'
import { Button } from '~/src/shared/ui/button'

const localePath = useLocalePath()

const inputValue = ref('')

function formatInput(event: Event) {
	const raw = (event.target as HTMLInputElement).value

	const numbersOnly = raw.replace(/\D/g, '')
	const limited = numbersOnly.slice(0, 6)
	const formatted = limited.split('').join('-')

	inputValue.value = formatted
}
</script>
