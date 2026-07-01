import { useRoutes } from 'react-router-dom';

import { AppProvider } from './providers';
import { appRoutes } from './router';

function App() {
  const routes = useRoutes(appRoutes);

  return <AppProvider>{routes}</AppProvider>;
}

export default App;
