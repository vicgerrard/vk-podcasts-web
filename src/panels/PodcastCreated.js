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
import {Icon56AddCircleOutline, Icon56CheckCircleOutline} from "@vkontakte/icons";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import File from "@vkontakte/vkui/dist/components/File/File";

const PodcastCreated = props => (
    <Panel id={props.id}>
        <PanelHeader>
            Подкасты
        </PanelHeader>
        <Placeholder
            icon={<Icon56CheckCircleOutline fill="#3F8AE0"/>}
            header="Подкаст добавлен"
            action={<Button size="l" onClick={props.go} data-to="home">Перейти к списку подкастов</Button>}
            className="start-screen-placeholder"
        >
            Раскажите своим подписчикам о новом подкасте, чтобы получить больше слушателей.
        </Placeholder>
    </Panel>
);

PodcastCreated.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default PodcastCreated;
