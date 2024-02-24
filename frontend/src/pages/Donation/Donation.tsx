import { DonationViewModel } from './DonationViewModel';
import { view } from '@yoskutik/react-vvm';
import { FirstPage, SecondPage } from './components';

export const DonationPage = view(DonationViewModel)(({ viewModel }) => {
    if (viewModel.step === 'first') return <FirstPage />
    if (viewModel.step === 'second') return <SecondPage />
});
