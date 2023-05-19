<script lang="ts">
	import TextOnlyBadge from './TextOnlyBadge.svelte';
	import { download } from '../helpers';

	var name = '';
	const badgeIconsText = '';

	function handleSubmit() {
		download(name, badgeIconsText);
	}
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
			Mikrofabriken Badgenator
		</h2>
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
					<div class="flex justify-center py-4">
						<TextOnlyBadge {name} />
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
