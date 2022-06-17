import { createElem } from "./createElem.js";

export const renderPhoto = (photoWrapper, photo) => {
    const photoPicture = new Image();
    photoPicture.className = 'photo__picture';
    photoPicture.src = photo.urls.regular;
    photoPicture.alt = photo.alt_description;
    photoPicture.style = 'max-height: 80vh;';

    const author = createElem('a', {
        className: 'photo__author',
        href: photo.user.html
    });

    const avatarAuthor = new Image();
    avatarAuthor.src = photo.user.profile_image.medium;
    avatarAuthor.width = '64';
    avatarAuthor.height = '64';
    avatarAuthor.alt = photo.user.bio;
    avatarAuthor.title = photo.user.name;

    const authorName = createElem('span', {
        textContent: photo.user.name
    });

    author.append(avatarAuthor, authorName);

    const photoControl = createElem('div', {
        className: 'photo__control',
    });

    const likeBtn = createElem('button', {
        id: photo.id,
        className: 'photo__like',
        textContent: photo.likes
    });

    const photoDownload = createElem('a', {
        className: 'photo__download',
        href: photo.links.download,
        download: true,
        target: '_blank'
    });

    photoControl.append(likeBtn, photoDownload);

    photoWrapper.append(photoPicture, author, photoControl);
}
