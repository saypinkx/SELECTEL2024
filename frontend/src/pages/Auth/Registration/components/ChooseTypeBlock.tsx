import { childView } from '@yoskutik/react-vvm';
import { RegistrationViewModel } from '../RegistrationViewModel';
import { ChevronRight } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import * as styles from '../Registration.module.scss';

export const ChooseTypeBlock = childView<RegistrationViewModel>()(({ viewModel }) => (
    <div className={styles.block}>
        <div className={styles.inputs}>
            <Button
                view="outlined"
                pin="round-round"
                width="max"
                size="xl"
                onClick={() => viewModel.setRegistrationType('email')}
            >
                <span>Регистрация по Email</span>
                <Icon data={ChevronRight} size={20} />
            </Button>
            <Button
                view="outlined"
                pin="round-round"
                width="max"
                size="xl"
                onClick={() => viewModel.setRegistrationType('phone')}
            >
                <span>Регистрация по номеру телефона</span>
                <Icon data={ChevronRight} size={20} />
            </Button>
        </div>
    </div>
));
