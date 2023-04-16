<script lang="ts">
	import Badge from './Badge.svelte';

	var name = '';
	var additiveManufacturing = false;
	var coffee = false;
	var pencil = false;
	var motorcycle = false;
</script>

<div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
	<h1 class="text-4xl font-bold mb-3">Mikrofabriken Badgenator</h1>
	<form on:submit|preventDefault class="flex flex-col gap-2 border-none">
		<label for="name">Namn</label>
		<input
			type="text"
			name="name"
			class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			bind:value={name}
		/>

		<div class="flex gap-2">
			<input
				type="checkbox"
				name="additive_manufacturing"
				class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				bind:checked={additiveManufacturing}
			/>
			<label for="additive_manufacturing">3D-skrivare</label>
		</div>

		<div class="flex gap-2">
			<input
				type="checkbox"
				name="coffee"
				class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				bind:checked={coffee}
			/>
			<label for="coffe">Kaffe</label>
		</div>

		<div class="flex gap-2">
			<input
				type="checkbox"
				name="pencil"
				class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				bind:checked={pencil}
			/>
			<label for="pencil">Rita</label>
		</div>

		<div class="flex gap-2">
			<input
				type="checkbox"
				name="motorcycle"
				class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				bind:checked={motorcycle}
			/>
			<label for="motorcycle">Motorcykel</label>
		</div>

		<div class="mt-2">
			<button class="p-4 bg-green-500 rounded-md">Ladda ner .svg av din namnbricka!</button>
		</div>
	</form>

	<div class="max-w-md mx-auto border-none mt-5">
		<Badge {name} {additiveManufacturing} {coffee} {motorcycle} />
	</div>
</div>
