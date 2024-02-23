import { view } from '@yoskutik/react-vvm';
import { AppViewModel } from './AppViewModel';


export const App = view(AppViewModel)(({viewModel}) => {
  return (
      <div>
          <div>Counter {viewModel.counter}</div>
          <button onClick={viewModel.click}>click me</button>
          <pre>{viewModel.result}</pre>
      </div>
  );
}
);
