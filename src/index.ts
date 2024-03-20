import './styles.css';
import { Channel, Message } from './data-model.js';

const urlParams = new URLSearchParams(window.location.search);
const channelId = urlParams.get('channel');

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

    (index === 0) && newItem.classList.add('active');

    channelsAside?.appendChild(newItem);
  })
};

renderChannel(data.result);

const responseMessage = await fetch(`http://localhost:4000/api/messages?filter=channelId:eq:${channelId}`);
const dataMessage = await responseMessage.json();

const renderMessage = (messages: Message[]): void => {
  const messagesMain: HTMLElement | null = document.querySelector('.messages');

  messages.forEach((message, index) => {

    const newDivElm: HTMLDivElement = document.createElement('div');
    newDivElm.classList.add('message');

    const newItem: HTMLImageElement = document.createElement('img');
    newItem.src = `assets/users/${message.user.avatarFilename}`;
    newItem.alt = `${message.user.name}`;
    newItem.classList.add('message-avatar');

    const messageContent: HTMLDivElement = document.createElement('div');
    messageContent.classList.add('message-content');

    const messageHead: HTMLDivElement = document.createElement('div');
    messageHead.classList.add('message-head');

    const messageUser: HTMLDivElement = document.createElement('div');
    messageUser.textContent = `${message.user.name} - ${message.user.role}`;
    messageUser.classList.add('message-user');

    const messageTime: HTMLDivElement = document.createElement('div');
    messageTime.textContent = `${message.time}`;
    messageTime.classList.add('message-time');

    const messageText: HTMLDivElement = document.createElement('div');
    messageText.textContent = `${message.content}`;
    messageText.classList.add('message-text');

    const newLink: HTMLAnchorElement = document.createElement('a');
    newLink.href = `?channel=${channelId}&thread=${message.id}`;
    newLink.textContent = `${message.threadMessages} messages in thread`;
    newLink.classList.add('message-thread-link');

    newDivElm.appendChild(newItem);
    newDivElm.appendChild(messageContent);
    messageContent.appendChild(messageHead);
    messageHead.appendChild(messageUser);
    messageHead.appendChild(messageTime);
    messageContent.appendChild(messageText);
    (message.threadMessages > 0) && messageContent.appendChild(newLink);

    (index === 0) && newDivElm.classList.add('active');

    messagesMain?.appendChild(newDivElm);
  })
};

renderMessage(dataMessage.result);