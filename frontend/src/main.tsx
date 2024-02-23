import 'reflect-metadata';
import { createRoot } from 'react-dom/client';
import { configure } from '@yoskutik/react-vvm';
import { App } from './app/App';
import Container from 'typedi';

configure({
    vmFactory: VM => Container.get(VM),
});

createRoot(document.getElementById('root')!).render(<App />);
