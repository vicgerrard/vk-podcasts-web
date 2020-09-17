import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    platform,
    IOS,
    FormLayout,
    Textarea,
    Placeholder,
    Separator,
    Checkbox,
    Cell,
    Group,
    Text
} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import {Icon20PodcastOutline, Icon28PodcastOutline, Icon56AddCircleOutline} from "@vkontakte/icons";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import File from "@vkontakte/vkui/dist/components/File/File";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";

import './CreatePodcast.scss';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

const osName = platform();

const CreatePodcast = props => {

    const [podcastThumbnailUrl, setPodcastThumbnailUrl] = useState(null);
    const [podcastFile, setPodcastFile] = useState(null);
    const [podcastTitle, setPodcastTitle] = useState('');
    const [podcastDescription, setPodcastDescription] = useState('');

    const nextEnabled = podcastFile && podcastTitle?.length > 0 && podcastDescription?.length > 0;

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Новый подкаст
            </PanelHeader>
            <FormLayout>
                <Div style={{display: 'flex'}}>
                    {podcastThumbnailUrl ? <Avatar mode="app" size={72} src={podcastThumbnailUrl}/> :
                        <Card style={{width: 72, height: 72}}>
                            <label htmlFor="file-input">
                                <Icon56GalleryOutline width={32} height={32} fill="#3F8AE0" style={{margin: 20}}/>
                            </label>
                            <File id="file-input" accept="image/*" style={{display: 'none'}} onChange={(event) => {
                                setPodcastThumbnailUrl(URL.createObjectURL(event.target.files[0]))
                            }}/>
                        </Card>
                    }
                    <FormLayout id="podcast_title" style={{width: 'calc(100% - 2*12px)'}}>
                        <Input top="Название" placeholder="Введите название подкаста" onChange={(e) => setPodcastTitle(e.target.value)}/>
                    </FormLayout>
                </Div>

                <Textarea top="Описание подкаста"  onChange={(e) => setPodcastDescription(e.target.value)}/>
                {podcastFile ?
                    <div style={{paddingTop: 10}}>
                        <Group
                            description="Вы можете добавить таймкоды и скорректировать подкаст в режиме редактирования">
                            <Cell before={
                                <Icon20PodcastOutline width={24} height={24}/>
                            } asideContent={<Text>59:16</Text>}>{podcastFile.name}</Cell>
                        </Group>
                        <Button size="xl" mode="outline" style={{marginBottom: 22}} onClick={props.go} data-to="edit-podcast">Редактировать аудиозапись</Button>
                    </div>
                    : <Placeholder
                        header="Загрузите Ваш подкаст"
                        action={<File size="m" mode="outline" accept=".mp3" onChange={(event) => {
                            setPodcastFile(event.target.files[0]);
                        }}>Загрузить файл</File>}
                    >
                        Выберите готовый аудиофайл из вашего телефона и добавьте его
                    </Placeholder>
                }
                <Separator/>
                <Checkbox>Ненормативный контент</Checkbox>
                <Checkbox>Исключить эпизод из экспорта</Checkbox>
                <Checkbox>Трейлер подкаста</Checkbox>
                <Group description="При публикации записи с эпизодом, он становится доступным для всех пользователей">
                    <Cell description="Всем пользователям" expandable onClick={props.go} data-to="podcast-privacy">
                        Кому доступен данный подкаст
                    </Cell>
                </Group>
                <Button disabled={!nextEnabled} size="xl" style={{marginBottom: 12}} onClick={props.go} data-to="podcast-preview">Далее</Button>
            </FormLayout>
        </Panel>)
}

CreatePodcast.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default CreatePodcast;
