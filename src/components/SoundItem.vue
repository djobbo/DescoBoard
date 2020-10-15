<template>
	<div
		class="flex items-center h-12 px-4 hover:text-accent cursor-pointer"
		@click="play"
	>
		<svg viewBox="0 0 1000 1000" class="w-4 h-4 fill-current mr-4">
			<path
				d="M119 490.5c0-118.80000000000001-7.900000000000006-238.3 2.0999999999999943-356.3 11-130.39999999999998 97.30000000000001-171.6 206.6-97.6 167.7 113.80000000000001 330.50000000000006 235.4 491.59999999999997 358.5 85.70000000000005 65.39999999999998 85.20000000000005 143.29999999999995-2 208.79999999999995-166.0999999999999 124.80000000000007-332.59999999999997 249.39999999999998-504.09999999999997 366.6-92.69999999999999 63.40000000000009-179.39999999999998 21.299999999999955-189.2-94.10000000000002-10.900000000000006-127.79999999999995-2.5-257.19999999999993-2.5-385.9h-2.5z"
			/>
		</svg>
		<div
			class="flex flex-1 items-center justify-between border-b border-solid border-bg-alt h-full"
		>
			<div>
				<p class="font-bold text-white -mb-1">
					{{ sound.title }}
				</p>
				<p class="text-bg-alt text-xs">{{ sound.length }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				audio: null,
			};
		},
		props: ['sound'],
		methods: {
			play() {
				if (!this.audio) this.audio = new Audio(this.sound.path);
				this.audio.currentTime = 0;
				this.audio.play();
			},
			pause() {
				if (!this.audio) return;
				this.audio.pause();
				this.audio = null;
			},
		},
	};
</script>

<style></style>
