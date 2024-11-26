import { inject, provide } from 'vue';

export function createProvider(key: string | symbol, composable: () => object) {
	const keySymbol = typeof key === 'symbol' ? key : Symbol(key);

	const useContext = () => {
		const context = inject(keySymbol);

		if (!context) {
			throw new Error(`Attempted to access context outside of provider for ${keySymbol.toString()}`);
		}

		return context;
	};

	return [
		(...args) => {
			const context = composable(...args);
			provide(keySymbol, context);
			return context;
		},
		useContext,
	];
}
