import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import {Icon56AddCircleOutline} from "@vkontakte/icons";
import "./Home.css";

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Подкасты</PanelHeader>
		<Placeholder
			icon={<Icon56AddCircleOutline />}
			header="Добавьте первый подкаст"
			action={<Button size="l" onClick={go} data-to="create-podcast">Добавить подкаст</Button>}
			stretched
		>
			Добавляйте, редактируйте и делитесь подкастами вашего сообщества.
		</Placeholder>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Home;
