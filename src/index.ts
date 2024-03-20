import './styles.css';
import { Channel } from './data-model.js';

const response = await fetch('http://localhost:4000/api/channels');
const data = await response.json();

const renderChannel = (channels: Channel[]): void => {
  const channelsAside: HTMLElement | null = document.querySelector('.channels');

  channels.forEach((channel, index) => {

    const newItem: HTMLAnchorElement = document.createElement('a');
    newItem.href = `?channel=${channel.id}`;
    newItem.classList.add('channel');

    const channelName: HTMLHeadingElement = document.createElement('h3');
    channelName.textContent = `#${channel.name}`;
    channelName.classList.add('channel-name');

    const channelMeta: HTMLParagraphElement = document.createElement('p');
    channelMeta.textContent = `${channel.members} members`;
    channelMeta.classList.add('channel-meta');

    newItem.appendChild(channelName);
    newItem.appendChild(channelMeta);

    if (index === 0) {
      newItem.classList.add('active');
    }

    channelsAside?.appendChild(newItem);
  })
};

renderChannel(data.result);