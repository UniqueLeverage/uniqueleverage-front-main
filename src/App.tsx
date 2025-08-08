import { useFacebookPixel } from "./hooks/useFacebookPixel";
import AppRouter from './Router';

const App = () => {
    useFacebookPixel();
    return <AppRouter/>;
};

export default App