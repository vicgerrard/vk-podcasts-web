import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import CreatePodcast from "./panels/CreatePodcast";
import PodcastPreview from "./panels/PodcastPreview";
import PodcastCreated from "./panels/PodcastCreated";
import PodcastPrivacy from "./panels/PodcastPrivacy";
import EditPodcast from "./panels/EditPodcast";

const App = () => {
	const [activePanel, setActivePanel] = useState('home');

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<Home id='home' go={go} />
			<CreatePodcast id='create-podcast' go={go} />
			<PodcastPrivacy id='podcast-privacy' go={go} />
			<EditPodcast id='edit-podcast' go={go} />
			<PodcastPreview id='podcast-preview' go={go} />
			<PodcastCreated id='podcast-created' go={go} />
		</View>
	);
}

export default App;

