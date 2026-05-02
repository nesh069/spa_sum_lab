import {defineconfig} from 'vite';
import react from "@vitejs/plugin-react";

export default defineconfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
    },
});
