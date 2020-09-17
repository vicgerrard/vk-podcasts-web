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
import RichCell from "@vkontakte/vkui/dist/components/RichCell/RichCell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Title from "@vkontakte/vkui/dist/components/Typography/Title/Title";
import Link from "@vkontakte/vkui/dist/components/Link/Link";

import './PodcastPreview.css';
import Header from "@vkontakte/vkui/dist/components/Header/Header";

const osName = platform();

const PodcastPreview = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="create-podcast ">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Предпросмотр
        </PanelHeader>

        <Group separator="show">
            <Cell
                before={<Avatar mode="app" size={72} src="https://i.imgur.com/9RqeA6R.png"/>}
                size="l"
                bottomContent={
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Link href='#'>ПараDogs</Link>
                        <span style={{color: '#818C99'}}>Длительность: 59:16</span>
                    </div>
                }
            >
                Подкаст прекрасных людей
            </Cell>
        </Group>
        <Group header={<Header mode="primary">Описание</Header>} separator="show">
            <Div style={{paddingTop: 0, paddingBottom: 0}}>
                Подкаст, который рассказывает про то, как много в мире прекрасных вещей, которые можно совершить, а также сколько людей, которые могут помочь вам в реализации ваших заветных мечт.
            </Div>
        </Group>
        <Group header={<Header mode="primary">Содержание</Header>} separator="show">
            <Div style={{paddingTop: 0, paddingBottom: 0, display: 'flex', flexDirection: 'column'}}>
                <div>
                    <Link href="#">05:41</Link> - Начало обсуждения
                </div>
                <div>
                    <Link href="#">05:41</Link> - Начало обсуждения
                </div>
                <div>
                    <Link href="#">05:41</Link> - Начало обсуждения
                </div>
                <div>
                    <Link href="#">05:41</Link> - Начало обсуждения
                </div>
                <div>
                    <Link href="#">05:41</Link> - Начало обсуждения
                </div>
            </Div>
        </Group>
        <Div>
            <Button size="xl" onClick={props.go} data-to="podcast-created">Опубликовать подкаст</Button>
        </Div>
    </Panel>
);

PodcastPreview.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default PodcastPreview;
