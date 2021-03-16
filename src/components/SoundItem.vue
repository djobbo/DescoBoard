<template>
	<div
		class="flex items-center h-12 px-4 py-2 hover:text-accent cursor-pointer"
	>
		<div class="w-4 h-4 mr-4 flex-none" @click="play">
			<svg viewBox="0 0 1000 1000" class="w-4 h-4 fill-current">
				<path
					d="M119 490.5c0-118.80000000000001-7.900000000000006-238.3 2.0999999999999943-356.3 11-130.39999999999998 97.30000000000001-171.6 206.6-97.6 167.7 113.80000000000001 330.50000000000006 235.4 491.59999999999997 358.5 85.70000000000005 65.39999999999998 85.20000000000005 143.29999999999995-2 208.79999999999995-166.0999999999999 124.80000000000007-332.59999999999997 249.39999999999998-504.09999999999997 366.6-92.69999999999999 63.40000000000009-179.39999999999998 21.299999999999955-189.2-94.10000000000002-10.900000000000006-127.79999999999995-2.5-257.19999999999993-2.5-385.9h-2.5z"
				/>
			</svg>
		</div>
		<div
			class="border-b border-solid border-bg-alt flex-auto overflow-x-auto"
			@click="play"
		>
			<p class="text-white -mb-1 truncate">
				{{ sound.title }}
			</p>
			<p class="text-bg-alt text-xs">{{ sound.length }}</p>
		</div>
		<a
			class="w-4 h-4 mr-4 flex-none transform rotate-180"
			:href="sound.path"
			download
		>
			<svg
				width="32"
				height="32"
				viewBox="0 0 80 80"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16 30L16 16C16 13.7909 17.7909 12 20 12L60 12C62.2091 12 64 13.7909 64 16V30"
					stroke="#C2CCDE"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M48 43.9997L56.4013 43.9997C59.5401 43.9997 61.0824 40.1785 58.8229 37.9997L43.8005 23.5138C41.7668 21.5527 38.5458 21.5527 36.5121 23.5138L21.4896 37.9997C19.2302 40.1784 20.7725 43.9997 23.9112 43.9997H32L32 61.9997C32 63.1043 32.8955 63.9997 34 63.9997L46 63.9997C47.1046 63.9997 48 63.1043 48 61.9997L48 43.9997Z"
					stroke="#C2CCDE"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
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
			},
		},
	};
</script>
