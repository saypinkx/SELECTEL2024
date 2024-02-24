import { view } from '@yoskutik/react-vvm';
import { ProfilePageViewModel } from './ProfilePageViewModel';

export const ProfilePage = view(ProfilePageViewModel)(({ viewModel }) => {
    return (
        <div>
            <h1>Profile page</h1>
            <pre>{JSON.stringify(viewModel.auth.userInfo, null, 2)}</pre>
        </div>
    );
});
