import { childView } from '@yoskutik/react-vvm';
import { RegistrationViewModel } from '../RegistrationViewModel';
import { TextBox } from '../../../../shared/ui';
import { Button } from '@gravity-ui/uikit';
import * as styles from '../Registration.module.scss';

export const ConfirmBlock = childView<RegistrationViewModel>()(({ viewModel }) => (
    <div className={styles.block}>
        <div className={styles.inputs}>
            <TextBox
                placeholder="Код подтверждения"
                pin="round-round"
                value={viewModel.confirmCode}
                onChange={viewModel.onChangeConfirmCode}
                errorMessage={viewModel.confirmCodeError}
                disabled={viewModel.isLoading}
                size="xl"
            />
        </div>
        <Button
            view="action"
            pin="round-round"
            width="max"
            size="xl"
            disabled={viewModel.hasErrors}
            loading={viewModel.isLoading}
            onClick={viewModel.onSendConfirmCode}
        >
            Войти в личный кабинет
        </Button>
    </div>
));
