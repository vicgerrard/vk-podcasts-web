import React from 'react';
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
    Radio, Title
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
import {Icon56AddCircleOutline, Icon56CheckCircleOutline} from "@vkontakte/icons";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import File from "@vkontakte/vkui/dist/components/File/File";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const osName = platform();

const PodcastPrivacy = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="create-podcast">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
        </PanelHeader>
        <Div>
            <Title level="2" weight="medium">Кому доступен данный подкаст</Title>
        </Div>
        <Radio name="radio" defaultChecked>Всем пользователям</Radio>
        <Radio name="radio">Друзьям и друзьям друзей</Radio>
        <Radio name="radio">Всем друзьям</Radio>
        <Radio name="radio">Только мне</Radio>
    </Panel>
);

PodcastPrivacy.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default PodcastPrivacy;
