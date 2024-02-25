import { DonationViewModel } from './DonationViewModel';
import { view } from '@yoskutik/react-vvm';
import { FirstPage, SecondPage } from './components';
import { useParams } from 'react-router';
import { useEffect } from 'react';

export const DonationPage = view(DonationViewModel)(({ viewModel }) => {
    const { id, type } = useParams<{ type: 'create' | 'edit' | 'plan'; id: string }>();
    useEffect(() => {
        viewModel.pageType = type ?? 'create';
        viewModel.id = id ? +id : undefined;
        id && viewModel.loadDonationInfo(+id);
    }, [id, type, viewModel]);

    if (viewModel.step === 'first') return <FirstPage />;
    if (viewModel.step === 'second') return <SecondPage />;
});
