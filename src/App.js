import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Counter from './Counter';
import ErrorModal from './ErrorModal';

function App() {
  return (
    <ErrorBoundary fallback={<ErrorModal />}>
      <Counter />
    </ErrorBoundary>
  );
}

export default App;
