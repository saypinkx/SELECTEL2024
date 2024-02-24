import { view } from '@yoskutik/react-vvm';
import { ProfilePageViewModel } from './ProfilePageViewModel';
import { LabelableContainer, Page, TextBox } from '../../shared/ui';
import { Button, Icon, Select } from '@gravity-ui/uikit';
import { ChevronRight } from '@gravity-ui/icons';
import { useNavigate } from 'react-router-dom';
import { DateField } from '@gravity-ui/date-components';
import styles from './ProfilePage.module.scss';
import { GenderEnum } from '../../shared/api';

export const ProfilePage = view(ProfilePageViewModel)(({ viewModel }) => {
    const navigate = useNavigate();

    return (
        <Page title="Мой профиль" cls={styles.content}>
            <LabelableContainer label="Персональные данные">
                <TextBox
                    placeholder="Фамилия"
                    value={viewModel.surname}
                    onChange={viewModel.setSurname}
                />
                <TextBox placeholder="Имя" value={viewModel.name} onChange={viewModel.setName} />
                <TextBox
                    placeholder="Отчество"
                    value={viewModel.patronymic}
                    onChange={viewModel.setPatronymic}
                />
                <DateField
                    placeholder="Дата рождения"
                    size="xl"
                    value={viewModel.birthday}
                    onUpdate={viewModel.setBirthday}
                />
            </LabelableContainer>

            <LabelableContainer label="Пол">
                <div className={styles.flexContainer}>
                    <Button
                        view={viewModel.gender === GenderEnum.Male ? 'outlined-action' : 'outlined'}
                        onClick={() => viewModel.setGender(GenderEnum.Male)}
                        size="xl"
                    >
                        Мужской
                    </Button>
                    <Button
                        view={
                            viewModel.gender === GenderEnum.Female ? 'outlined-action' : 'outlined'
                        }
                        onClick={() => viewModel.setGender(GenderEnum.Female)}
                        size="xl"
                    >
                        Женский
                    </Button>
                </div>
            </LabelableContainer>

            <LabelableContainer label="Город">
                <Select
                    placeholder="Выберите ваш город"
                    size="xl"
                    onUpdate={ids => viewModel.setCity(+ids[0])}
                    options={viewModel.cities.map(city => ({
                        value: city.id.toString(),
                        content: city.title,
                    }))}
                />
            </LabelableContainer>

            <LabelableContainer label="О себе">
                <TextBox
                    placeholder="Расскажите интересное о себе"
                    value={viewModel.about}
                    onChange={viewModel.setAbout}
                />
            </LabelableContainer>

            <LabelableContainer label="Пароль">
                <Button
                    view="outlined"
                    pin="round-round"
                    width="max"
                    size="xl"
                    className={styles.changePasswordButton}
                    onClick={() => navigate('/profile/change-password')}
                >
                    <span>Изменить пароль</span>
                    <Icon data={ChevronRight} size={20} />
                </Button>
            </LabelableContainer>
        </Page>
    );
});
