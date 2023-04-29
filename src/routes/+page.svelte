<script lang="ts">
	import Badge from './Badge.svelte';
	import symbols from './symbols.json';
	import { download } from './helpers';

	var name = '';
	var badgeIconsText = '';

	function handleSubmit() {
		download(name, badgeIconsText);
	}
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
			Mikrofabriken Badgenator
		</h2>
		<p class="mt-6 px-4 text-sm text-gray-600">
			Skapa din egen namnbricka! Fyll i ditt namn och välj de symboler du vill ha på din bricka.
		</p>
		<p class="mt-2 px-4 text-sm text-gray-600">
			När du är nöjd så kan du klicka på knappen för att ladda ner .svg-filen och få brickan
			tillverkad på Mikrofabriken!
		</p>
	</div>

	<div class="mt-6 sm:mx-auto sm:w-full sm:max-w-xl">
		<div class="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" on:submit|preventDefault={handleSubmit}>
				<div>
					<label for="name" class="block text-sm font-medium leading-6 text-gray-900"> Namn </label>
					<div class="mt-2">
						<input
							id="name"
							name="name"
							type="text"
							autocomplete="off"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							bind:value={name}
						/>
					</div>
				</div>

				<div class="space-y-2">
					<div class="block text-sm font-medium leading-6 text-gray-900">Symboler</div>

					<div class="flex flex-wrap">
						{#each symbols as symbol}
							<div class="basis-1/3 flex items-center py-1">
								<input
									id={symbol.label}
									name={symbol.label}
									type="checkbox"
									class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
									bind:checked={symbol.selected}
								/>
								<label for={symbol.label} class="ml-2 block text-sm text-gray-900">
									{symbol.label}
								</label>
							</div>
						{/each}
					</div>

					<div class="py-4">
						<Badge {name} {symbols} bind:badgeIconsText />
					</div>

					<div>
						<button
							type="submit"
							class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Ladda ner .svg av din namnbricka!
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
