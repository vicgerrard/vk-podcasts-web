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
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Icon28AddCircleOutline from "@vkontakte/icons/dist/28/add_circle_outline";

const osName = platform();

const EditPodcast = props => {

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={props.go} data-to="create-podcast">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Редактирование
            </PanelHeader>

            <Div>
                <Card style={{height: 182, display: 'flex', flexDirection: 'column'}}>

                </Card>
            </Div>

            <Group
                header={<Header mode="secondary">ТАЙМКОДЫ</Header>}
                description="Отметки времени с названием темы. Позволяют слушателям легче путешествовать по подкасту."
            >
                <Cell before={<Icon28AddCircleOutline width={22} height={22} />}>
                    Добавить таймкод
                </Cell>
            </Group>
        </Panel>)
}

EditPodcast.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default EditPodcast;
