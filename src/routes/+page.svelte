<script lang="ts">
	import Badge from './Badge.svelte';

	var name = '';
	var cube = false;
	var note = false;
	var pencil = false;
	var motorcycle = false;
	var beer = false;
	var diode = false;
	var car = false;
	var resistor = false;
	var spades = false;
	var coffee = false;
	var laser = false;
	var micrometer = false;
	var thread = false;
	var brush = false;
	var dice = false;
	var anvil = false;
	var saw = false;
	var code = false;
	var console = false;
	var printer = false;
	var lightning = false;
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
			Mikrofabriken Badgenator
		</h2>
		<p class="mt-6 text-sm text-gray-600">
			Skapa din egen namnbricka! Fyll i ditt namn och välj de symboler du vill ha på din bricka.
		</p>
		<p class="mt-2 text-sm text-gray-600">
			När du är nöjd så kan du klicka på knappen för att ladda ner .svg-filen och få brickan
			tillverkad på Mikrofabriken!
		</p>
	</div>

	<div class="mt-6 sm:mx-auto sm:w-full sm:max-w-xl">
		<div class="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" on:submit|preventDefault>
				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900">
						Namn
					</label>
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
						<!-- kub -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="cube"
								name="cube"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={cube}
							/>
							<label for="cube" class="ml-2 block text-sm text-gray-900">Kub</label>
						</div>

						<!-- not -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="note"
								name="note"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={note}
							/>
							<label for="note" class="ml-2 block text-sm text-gray-900">Not</label>
						</div>

						<!-- penna -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="pencil"
								name="pencil"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={pencil}
							/>
							<label for="pencil" class="ml-2 block text-sm text-gray-900">Penna</label>
						</div>

						<!-- motorcykel -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="motorcycle"
								name="motorcycle"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={motorcycle}
							/>
							<label for="motorcycle" class="ml-2 block text-sm text-gray-900">Motorcykel</label>
						</div>

						<!-- öl -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="beer"
								name="beer"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={beer}
							/>
							<label for="beer" class="ml-2 block text-sm text-gray-900">Öl</label>
						</div>

						<!-- diod -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="diode"
								name="diode"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={diode}
							/>
							<label for="diode" class="ml-2 block text-sm text-gray-900">Diod</label>
						</div>

						<!-- bil -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="car"
								name="car"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={car}
							/>
							<label for="car" class="ml-2 block text-sm text-gray-900">Bil</label>
						</div>

						<!-- motstånd -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="resistor"
								name="resistor"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={resistor}
							/>
							<label for="resistor" class="ml-2 block text-sm text-gray-900">Motstånd</label>
						</div>

						<!-- spader -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="spade"
								name="spade"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={spades}
							/>
							<label for="spade" class="ml-2 block text-sm text-gray-900">Spader</label>
						</div>

						<!-- kaffe -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="coffee"
								name="coffee"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={coffee}
							/>
							<label for="coffee" class="ml-2 block text-sm text-gray-900">Kaffe</label>
						</div>

						<!-- laser -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="laser"
								name="laser"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={laser}
							/>
							<label for="laser" class="ml-2 block text-sm text-gray-900">Laser</label>
						</div>

						<!-- mikrometer -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="micrometer"
								name="micrometer"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={micrometer}
							/>
							<label for="micrometer" class="ml-2 block text-sm text-gray-900">Mikrometer</label>
						</div>

						<!-- tråd -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="thread"
								name="thread"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={thread}
							/>
							<label for="thread" class="ml-2 block text-sm text-gray-900">Tråd</label>
						</div>

						<!-- pensel -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="brush"
								name="brush"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={brush}
							/>
							<label for="brush" class="ml-2 block text-sm text-gray-900">Pensel</label>
						</div>

						<!-- tärning -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="dice"
								name="dice"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={dice}
							/>
							<label for="dice" class="ml-2 block text-sm text-gray-900">Tärning</label>
						</div>

						<!-- skruvstäd -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="anvil"
								name="anvil"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={anvil}
							/>
							<label for="anvil" class="ml-2 block text-sm text-gray-900">Skruvstäd</label>
						</div>

						<!-- såg -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="saw"
								name="saw"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={saw}
							/>
							<label for="saw" class="ml-2 block text-sm text-gray-900">Såg</label>
						</div>

						<!-- kod -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="code"
								name="code"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={code}
							/>
							<label for="code" class="ml-2 block text-sm text-gray-900">Kod</label>
						</div>

						<!-- konsol -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="console"
								name="console"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={console}
							/>
							<label for="console" class="ml-2 block text-sm text-gray-900">Konsol</label>
						</div>

						<!-- skrivare -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="printer"
								name="printer"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={printer}
							/>
							<label for="printer" class="ml-2 block text-sm text-gray-900">Skrivare</label>
						</div>

						<!-- blixt -->
						<div class="basis-1/3 flex items-center py-1">
							<input
								id="lightning"
								name="lightning"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
								bind:checked={lightning}
							/>
							<label for="lightning" class="ml-2 block text-sm text-gray-900">Blixt</label>
						</div>
					</div>

					<!-- preview -->
					<div class="py-4">
						<Badge
							{name}
							{cube}
							{note}
							{pencil}
							{motorcycle}
							{beer}
							{diode}
							{car}
							{resistor}
							{spades}
							{coffee}
							{laser}
							{micrometer}
							{thread}
							{brush}
							{dice}
							{anvil}
							{saw}
							{code}
							{console}
							{printer}
							{lightning}
						/>
					</div>

					<!-- download -->
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
