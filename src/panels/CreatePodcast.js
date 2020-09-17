import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, FormLayout, Textarea, Placeholder, Separator, Checkbox, Cell, Group} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import {Icon56AddCircleOutline} from "@vkontakte/icons";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import File from "@vkontakte/vkui/dist/components/File/File";

const osName = platform();

const CreatePodcast = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Новый подкаст
        </PanelHeader>
        <FormLayout>
            <CardGrid style={{marginTop: 5}}>
                <Card style={{width: 'auto'}}>
                    <div>
                        <Icon56GalleryOutline width={32} height={32} fill="#3F8AE0" style={{margin: 20}}/>
                    </div>
                </Card>
            </CardGrid>
            <Input top="Название" placeholder="Введите название подкаста"/>
            <Textarea top="Описание подкаста" />
            <Placeholder
                header="Загрузите Ваш подкаст"
                action={<File size="m" mode="outline">Загрузить файл</File>}
            >
                Выберите готовый аудиофайл из вашего телефона и добавьте его
            </Placeholder>
            <Separator />
            <Checkbox>Ненормативный контент</Checkbox>
            <Checkbox>Исключить эпизод из экспорта</Checkbox>
            <Checkbox>Трейлер подкаста</Checkbox>
            <Group description="При публикации записи с эпизодом, он становится доступным для всех пользователей">
                <Cell description="Всем пользователям" expandable>
                    Кому доступен данный подкаст
                </Cell>
            </Group>
            <Button size="xl" onClick={props.go} data-to="podcast-preview">Далее</Button>
        </FormLayout>

    </Panel>
);

CreatePodcast.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default CreatePodcast;
